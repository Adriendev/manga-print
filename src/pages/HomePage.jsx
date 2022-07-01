import axios from "axios";
import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Carrousel from "../components/Carrousel";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState([]);
  // const [seriesCovers, setSeriesCovers] = useState([]);

  console.log(API_URL);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  console.log(year, month);

  useEffect(() => {
    const getSeries = async () => {
      setIsLoading(true);
      const { data } = await axios(
        `${API_URL}/mangaVolume/${year}/${month + 1}`
      );
      console.log(data);
      setSeries(data);
      setIsLoading(false);
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
      <Carrousel title={"All Series"} series={series} />
      <Carrousel title={"Discovery"} series={series} />
    </main>
  );
};

export default HomePage;
