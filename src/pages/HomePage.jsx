import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Carrousel from "../components/Carrousel";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL, YEAR, MONTH, DAY, DATE } from "../utils/constants";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestSeries, setLatestSeries] = useState([]);
  const [discoverySeries, setDiscoverySeries] = useState([]);
  const [discoverySeriesCovers, setDiscoverySeriesCovers] = useState([]);
  const [random, setRandom] = useState(1);
  const [nextWeek, setNextWeek] = useState();
  const [day, setDay] = useState(DAY);

  // console.log(API_URL);

  useEffect(() => {
    setDay(DAY);
    setNextWeek(new Date(DATE.setDate(DATE.getDate() + 7)).toISOString());
  }, [day]);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 50) + 1);

    const getCarrousel = async () => {
      setIsLoading(true);
      const latestSeries = await axios(
        `${API_URL}/mangaVolume/${YEAR}/${MONTH + 1}`
      );
      const discoverySeries = await axios(
        `${API_URL}/mangaSeries/?page=${random}&limit=20&random=1`
      );
      const allPromises = await Promise.all([latestSeries, discoverySeries]);

      // console.log(`promises`, allPromises);
      // console.log(`latest Series`, allPromises[0].data);
      setLatestSeries(allPromises[0].data);

      setDiscoverySeries(allPromises[1].data.mangaSeriesFilter);
      console.log(`series from data`, allPromises[1].data.mangaSeriesFilter);

      setDiscoverySeriesCovers(allPromises[1].data.allPromises);
      // console.log(allPromises[1].data.allPromises);
      setIsLoading(false);
    };

    getCarrousel();
  }, []);

  if (isLoading) {
    return (
      <main id="home">
        <LoadingDisplay />
      </main>
    );
  }

  return (
    <main id="home">
      <Carrousel
        title={"Upcoming releases"}
        series={latestSeries}
        type="latest"
        week={nextWeek}
      />
      <Carrousel
        title={"Discover new Series"}
        series={discoverySeries}
        covers={discoverySeriesCovers}
        type="discovery"
      />
    </main>
  );
};

export default HomePage;
