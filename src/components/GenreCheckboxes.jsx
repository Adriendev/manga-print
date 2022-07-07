import axios from "axios";
import * as React from "react";

import { API_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const sanitiseSeries = (elem) => {
  let image = elem.image;
  // console.log(elem);
  image.includes("sevenseas")
    ? (image =
        "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg")
    : (image = elem.image);

  return {
    image: image,
    name: elem.name,
    id: elem._id,
    genres: elem.genres,
  };
};

const GenreCheckboxes = ({
  genres,
  setGenres,
  handleOnChange,
  setSeriesToDisplay,
  setPageCount,
  perPage,
  seriesInfo,
  search,
}) => {
  console.log(genres);

  // useEffect(() => {
  //   const getGenresCheckboxes = async () => {
  //     const { data } = await axios({
  //       url: `/mangaSeries/genres`,
  //       baseURL: API_URL,
  //       method: "get",
  //     });
  //     console.log(data);
  //     const checkboxes = data.genres.map((elem) => {
  //       return { checked: false, name: elem };
  //     });
  //     setGenres(checkboxes);
  //   };

  //   getGenresCheckboxes();
  // }, []);

  const handleCheckbox = async (e) => {
    e.preventDefault();
    const checkedGenres = genres.filter((x) => x.checked);
    console.log(checkedGenres);
    const genreName = checkedGenres.map((genre) => {
      return genre.name;
    });
    console.log(genreName);

    let config = {
      method: "get",
      url: `${API_URL}/mangaSeries/?genres=${genreName}`,
    };
    console.log(config);

    const { data } = await axios(config);
    console.log(data);

    const series = await data.mangaSeriesFilter.map((serie, i) => {
      serie.image = data.allPromises[i];
      return serie;
    });

    console.log("series: ", series);

    const allSeries = await series.map(sanitiseSeries);
    console.log("allSeries : ", allSeries);

    setSeriesToDisplay(allSeries);
    setPageCount(Math.ceil(data.totalDocuments / perPage));
    console.log("setSeriesToDisplay :", allSeries);

    if (genreName.length === 0) {
      setSeriesToDisplay(seriesInfo);
      setPageCount(seriesInfo.length / perPage);
    }
  };
  // useEffect(() => {
  //   handleCheckbox();
  // }, [handleOnChange]);


  console.log("genres: ", genres);
  return (
    <>
      <h2>Filter By Genre:</h2>
      {/* <h3>Genre</h3>{" "} */}
      <section className="genre-container">
        <form className="checkboxe-genres" onSubmit={handleCheckbox}>
          {genres.map((elem, index) => {
            return (
              <div className="genre-check">
                <li key={index}>
                  <input
                    className="check-genre"
                    type="checkbox"
                    id={index}
                    name={elem.name}
                    value={elem.name}
                    checked={elem.checked}
                    onChange={() => handleOnChange(index, elem)}
                  />
                  <span>{elem.name}</span>{" "}
                </li>
              </div>
            );
          })}
          <button className="checkbox-button" type="submit">
            Apply filters
          </button>
        </form>
      </section>
    </>
  );
};

export default GenreCheckboxes;
