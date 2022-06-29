import axios from "axios";
import React, { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";

const baseUrl = API_URL;

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getSeries = async () => {
      setIsLoading(true);
      const { data } = await axios(`${baseUrl}/mangaSeries`);
      console.log(data);
      setSeries(data);
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
      <Carrousel title={"All Series"} series={series} baseUrl={baseUrl} />
      <Carrousel title={"Discovery"} series={series} baseUrl={baseUrl} />
    </main>
  );
};

export default HomePage;
