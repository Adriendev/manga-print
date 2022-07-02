import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Carrousel from "../components/Carrousel";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestSeries, setLatestSeries] = useState([]);
  const [discoverySeries, setDiscoverySeries] = useState([]);
  const [discoverySeriesCovers, setDiscoverySeriesCovers] = useState([]);
  const [random, setRandom] = useState(1);

  // console.log(API_URL);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  // console.log(year, month);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 50) + 1);
    console.log(random);
    const getCarrousel = async () => {
      setIsLoading(true);
      const latestSeries = await axios(
        `${API_URL}/mangaVolume/${year}/${month + 1}`
      );
      const discoverySeries = await axios(
        `http://localhost:3001/api/mangaSeries/?page=${random}&limit=20&random=1`
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
      <Carrousel title={"This month"} series={latestSeries} type="latest" />
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
