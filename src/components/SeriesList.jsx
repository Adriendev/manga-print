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

const SeriesList = ({
  seriesInfo,
  genres,
  setGenres,
  setPageCount,
  perPage,
}) => {
  const [search, setSearch] = useState("");
  const [seriesToDisplay, setSeriesToDisplay] = useState([]);

  useEffect(() => {
    const allSeries = [...seriesInfo].map(sanitiseSeries);

    const filteredSeries = allSeries.filter((serie) => {
      const checkedGenres = genres.filter((x) => x.checked);
      const noGenresSelected = checkedGenres.length === 0;
      const seriesMatchesAtLeastOneGenre = genres.some((genre) =>
        serie.genres.includes(genre.name)
      );
      const nameMatchesSearch = serie.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return (
        nameMatchesSearch && (noGenresSelected || seriesMatchesAtLeastOneGenre)
      );
    });

    setSeriesToDisplay(filteredSeries);

    // console.log("setSeriesToDisplay :", filteredSeries);
  }, [seriesInfo, search, genres]);

  const handleOnChange = (position) => {
    const updatedCheckedState = genres.map((item, index) => {
      return index === position ? { ...item, checked: !item.checked } : item;
    });
    setGenres(updatedCheckedState);
  };

  const testId = seriesToDisplay.map((elem) => {
    return elem.id;
  });

  console.log(testId);

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
      <section className="genre">
        <ul>
          <GenreCheckboxes
            genres={genres}
            handleOnChange={handleOnChange}
            setGenres={setGenres}
            setSeriesToDisplay={setSeriesToDisplay}
            setPageCount={setPageCount}
            perPage={perPage}
            seriesInfo={seriesInfo}
            search={search}
          />
        </ul>
      </section>
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
    </>
  );
};

export default SeriesList;
