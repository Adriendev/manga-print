import * as React from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";
import axios from "axios";
import { useState } from "react";
import { createSearchParams, Navigate, useNavigate, useSearchParams } from "react-router-dom";
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
  const [research, setResearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate()

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate({
      search: createSearchParams({
        name: `${research}`
      }).toString()
    })

    const seriesName = seriesInfo.map((elem) => {
      return elem.name
    })

    console.log('seriesName :', seriesName)

    const nameMatchesSearch = seriesName.name
    .toLowerCase()
    .includes(research.toLowerCase());

    console.log("SEARCH PARAMS", searchParams);

    const params = Object.fromEntries(searchParams.entries());
    // if names have changed, we should reset to page 1
    setSearchParams({ ...params, name: nameMatchesSearch, page: 1 });
    }
  

  
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

            Search
          </button> */}
          </form>
        </>
      </div>
    );
  };

export default SearchBar;
