import axios from "axios";
import React, { useEffect, useState } from "react";
import Carrousel from "../components/Carrousel";
import { API_URL } from "../utils/constants";

const baseUrl = API_URL;

const HomePage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const getSeries = async () => {
      const { data } = await axios(`${baseUrl}/mangaSeries`);
      console.log(data);
      setSeries(data);
    };

    getSeries();
  }, []);

  return (
    <main>
      <h2>Home</h2>
      <Carrousel title={"All Series"} series={series} baseUrl={baseUrl} />
      <Carrousel title={"Discovery"} series={series} baseUrl={baseUrl} />
    </main>
  );
};

export default HomePage;
