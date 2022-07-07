import React, { useEffect } from "react";
import SeriesCard from "./SeriesCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import "./SeriesList.css";
import GenreCheckboxes from "./GenreCheckboxes";
import { API_URL } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const SeriesList = ({
  seriesInfo,
  genres,
  setGenres,
  setPageCount,
  perPage,
  handlePageClick,
}) => {
  const [search, setSearch] = useState("");
  const [seriesToDisplay, setSeriesToDisplay] = useState([]);

  useEffect(() => {
    const filteredSeries = [...seriesInfo].filter((serie) => {
      const checkedGenres = genres.filter((x) => x.checked);
      const noGenresSelected = checkedGenres.length === 0;
      const noSearchSelected = search === "";
      const seriesMatchesAtLeastOneGenre = genres.some((genre) =>
        serie.genres.includes(genre.name)
      );
      const nameMatchesSearch = serie.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        (nameMatchesSearch || noSearchSelected) &&
        (noGenresSelected || seriesMatchesAtLeastOneGenre)
      );
    });

    setSeriesToDisplay(filteredSeries);
    console.log(filteredSeries);
  }, [seriesInfo, search, genres]);

  const handleOnChange = (position) => {
    const updatedCheckedState = genres.map((item, index) => {
      return index === position ? { ...item, checked: !item.checked } : item;
    });
    setGenres(updatedCheckedState);
  };

  return (
    <>
      <section className="search-container">
        <div className="search-bar">
          <SearchBar
            setSeriesToDisplay={setSeriesToDisplay}
            setPageCount={setPageCount}
            perPage={perPage}
            seriesInfo={seriesInfo}
          />
        </div>
      </section>
      <section className="wrapper">
        <ul className="genres">
          <GenreCheckboxes
            genres={genres}
            handleOnChange={handleOnChange}
            setGenres={setGenres}
            setSeriesToDisplay={setSeriesToDisplay}
            setPageCount={setPageCount}
            perPage={perPage}
            seriesInfo={seriesInfo}
            handePageClick={handlePageClick}
          />
        </ul>
        <ul className="grid">
          {seriesToDisplay.map((elem) => {
            return (
              <li key={elem.id}>
                <SeriesCard
                  key={elem.id}
                  name={elem.name}
                  image={elem.image}
                  id={elem.id}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default SeriesList;
