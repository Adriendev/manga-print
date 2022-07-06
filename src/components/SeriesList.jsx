import React, { useEffect } from "react";
import SeriesCard from "./SeriesCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import "./SeriesList.css";
import GenreCheckboxes from "./GenreCheckboxes";

const sanitiseSeries = (elem) => {
  let image = elem.cover;
  // console.log(elem);
  image.includes("sevenseas")
    ? (image =
        "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
    : (image = elem.cover);

  return {
    image: image,
    name: elem.name,
    id: elem._id,
    genres: elem.genres,
  };
};

const SeriesList = ({ seriesInfo, genres, setGenres }) => {
  const [search, setSearch] = useState("");
  const [seriesToDisplay, setSeriesToDisplay] = useState([]);

  useEffect(() => {
    const allSeries = [...seriesInfo].map(sanitiseSeries);

    const filteredSeries = allSeries.filter((serie) => {
      const checkedGenres = genres.filter((x) => x.checked);
      const noGenresSelected = checkedGenres.length === 0;
      const seriesMatchesAtLeastOneGenre = checkedGenres.some((genre) =>
        serie.genres.includes(genre.name)
      );
      const nameMatchesSearch = serie.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        nameMatchesSearch && (noGenresSelected || seriesMatchesAtLeastOneGenre)
      );
    });
    console.log("filteredSeries: ", filteredSeries);

    setSeriesToDisplay(filteredSeries);
  }, [seriesInfo, search, genres]);

  const handleOnChange = (position) => {
    const updatedCheckedState = genres.map((item, index) => {
      return index === position ? { ...item, checked: !item.checked } : item;
    });
    setGenres(updatedCheckedState);
  };

  return (
    <>
      <div className="search-bar">
        <SearchBar search={search} setSearch={setSearch} seriesInfo={seriesInfo} />
      </div>
      <div className="checkList">
        <ul className="genres">
          <GenreCheckboxes genres={genres} handleOnChange={handleOnChange} />
        </ul>
      </div>
      <ul className="grid">
        {seriesToDisplay.map((elem) => {
          return (
            <li key={elem._id}>
              <SeriesCard
                key={elem._id}
                name={elem.name}
                image={elem.image}
                id={elem._id}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default SeriesList;
