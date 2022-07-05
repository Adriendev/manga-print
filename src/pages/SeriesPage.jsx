import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import SeriesCard from "../components/SeriesCard";
import SeriesList from "../components/SeriesList";

import "./SeriesPage.css";

const SeriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allSeriesList, setAllSeriesList] = useState([]);
  const [random, setRandom] = useState(1);
  const [checked, setChecked] = useState([]);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 50) + 1);

    const getAllSeries = async () => {
      setIsLoading(true);
      let config = {
        method: "get",
        url: `${API_URL}/mangaSeries/?limit=25`,
      };
      const { data } = await axios(config);
      setIsLoading(false);

      const series = data.mangaSeriesFilter.map((serie, i) => {
        serie.cover = data.allPromises[i];
        return serie;
      });

      setAllSeriesList(series);

      const checkbox = series.map((elem) => {
        return elem.genres;
      });
      // console.log("checkbox", checkbox);
      let allGenres = [];
      for (let i = 0; i < checkbox.length; i++) {
        for (let j = 0; j < checkbox[i].length; j++) {
          // console.log(checkbox[i][j])
          allGenres.push(checkbox[i][j]);
        }
      }
      // console.log("allGenres: ", allGenres);
      const genresWithoutDuplicate = [...new Set(allGenres)];
      const checkboxes = genresWithoutDuplicate.map((elem) => {
        return { checked: false, name: elem };
      });
      setChecked(checkboxes);
      // console.log('setAllSeriesList: ',setAllSeriesList)
      // setAllSeriesListCovers(allPromises[0].data.allPromises);
    };
    getAllSeries();
  }, []);

  console.log("checkboxes", checked);
  if (isLoading) {
    return (
      <main id="home">
        <LoadingDisplay />
      </main>
    );
  }

  return (
    <div>
      <h1>Series Page</h1>

      <SeriesList
        seriesInfo={allSeriesList}
        handleSeries={setAllSeriesList}
        genres={checked}
        setGenres={setChecked}
      />
    </div>
  );
};

export default SeriesPage;
