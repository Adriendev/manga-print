import * as React from "react";


import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";
import axios from "axios";
import { useState } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { SearchIcon } from "./Icon";

import "./SearchBar.css";

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

const SearchBar = ({
  setSeriesToDisplay,
  setPageCount,
  perPage,
  seriesInfo,
}) => {
  const [research, setResearch] = useState([]);
  // const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async (e) => {
    e.preventDefault();

    let config = {
      method: "get",
      url: `${API_URL}/mangaSeries/?name=${research}`,
    };

    const { data } = await axios(config);

    console.log(data);

    const series = data.mangaSeriesFilter.map((serie, i) => {
      serie.image = data.allPromises[i];
      return serie;
    });
    const allFiltered = series.map(sanitiseSeries);
    console.log(allFiltered);
    setSeriesToDisplay(allFiltered);
    setPageCount(Math.ceil(data.totalDocuments / perPage));

    if (research === "") {
      return setSeriesToDisplay(seriesInfo);
    }
  };

  
    return (
      <div>
        <>
          <form className="searching-bar" onSubmit={handleSearch}>
            <input
              className="searchbar"
              value={research}
              type="text"
              onChange={(e) => setResearch(e.target.value)}
              placeholder="Search a manga title..."
            />
            {/* <button className="search-button" type="submit">

            <SearchIcon />
          </button> */}
          </form>
          {/* <button onClick={() => setSeriesToDisplay(seriesInfo)}>See all manga</button> */}
        </>
      </div>
    );
  };

export default SearchBar;
