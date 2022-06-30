import axios from "axios";
import React, { useEffect, useState } from "react";
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
      setIsLoading(true);
      const { data } = await axios(`${API_URL}/mangaSeries`);
      console.log(data);
      setSeries(data.mangaSeriesFilter);
      setSeriesCovers(data.allPromises);
      setIsLoading(false);
    };

    getSeries();
  }, []);

  if (isLoading) {
    return (
      <main>
        <h2>Home</h2>
        <LoadingDisplay />
      </main>
    );
  }

  return (
    <main>
      <h2>Home</h2>
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
