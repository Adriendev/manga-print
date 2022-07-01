import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Carrousel from "../components/Carrousel";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState([]);
  const [seriesCovers, setSeriesCovers] = useState([]);

  console.log(API_URL);

  useEffect(() => {
    const getSeries = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios(`${API_URL}/mangaSeries`);
        console.log(data);
        setSeries(data.mangaSeriesFilter);
        setSeriesCovers(data.allPromises);
        setIsLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    getSeries();
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
        title={"All Series"}
        series={series}
        seriesCovers={seriesCovers}
      />
      <Carrousel
        title={"Discovery"}
        series={series}
        seriesCovers={seriesCovers}
      />
    </main>
  );
};

export default HomePage;
