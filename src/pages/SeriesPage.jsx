import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import SeriesCard from "../components/SeriesCard";
import SeriesList from "../components/SeriesList";


const SeriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allSeriesList, setAllSeriesList] = useState([]);
  const [allSeriesListCovers, setAllSeriesListCovers] = useState([]);
  const [random, setRandom] = useState(1);


  useEffect(() => {
    setRandom(Math.floor(Math.random() * 50) + 1);

    const getAllSeries = async () => {
      setIsLoading(true);
      let config = {
        method: "get",
        url: `${API_URL}/mangaSeries/?limit=20&random=1`,
      };
      const allSeriesList = await axios(config);
      setIsLoading(false);
      console.log(allSeriesList.data);
      const allPromises = await Promise.all([allSeriesList]);

      console.log(`promises`, allPromises);
      console.log("allseriescover", allPromises[0].data.allPromises);

      setAllSeriesList(allPromises[0].data.mangaSeriesFilter);
      setAllSeriesListCovers(allPromises[0].data.allPromises);
    };
    getAllSeries();
  }, []);

  if (isLoading) {
    return (
      <main id="home">
        <LoadingDisplay />
      </main>
    );
  }
  const test = allSeriesList.map((elem) => {
    return elem._id, elem.name;
  });
  console.log(`this is a test:`, test);

  const coverTest = allSeriesListCovers.map((elem) => {
    return elem;
  });

  console.log("tis is a cover test", coverTest);

  return (
    <div>
      <h1>Series Page</h1>

      <ul className="grid">
        <SeriesList
          seriesInfo={allSeriesList}
          seriesCover={allSeriesListCovers}
        />
      </ul>
    </div>
  );
};

export default SeriesPage;
