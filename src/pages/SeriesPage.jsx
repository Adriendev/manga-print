import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";
import SeriesList from "../components/SeriesList";

import "./SeriesPage.css";
import { useSearchParams } from "react-router-dom";

const sanitiseSeries = (elem) => {
  let image = elem.image;
  // console.log(elem);
  if (image?.includes("sevenseas")) {
    image =
      "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg";
  }

  return {
    image: image,
    name: elem.name,
    id: elem._id,
    genres: elem.genres,
  };
};

const SeriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allSeriesList, setAllSeriesList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [perPage] = useState(50);
  const [pageCount, setPageCount] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getGenresCheckboxes = async () => {
      const { data } = await axios({
        url: `/mangaSeries/genres`,
        baseURL: API_URL,
        method: "get",
      });
      console.log(data);
      const checkboxes = data.genres.map((elem) => {
        return { checked: false, name: elem };
      });
      setChecked(checkboxes);
    };

    getGenresCheckboxes();
  }, []);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());

    async function getSeriesFromApi() {
      const config = {
        method: "get",
        baseURL: API_URL,
        url: `/mangaSeries/`,
        params: {
          ...params,
          limit: 50
        },
      };

      const { data } = await axios(config);

      const series = await data.mangaSeriesFilter.map((serie, i) => {
        serie.image = data.allPromises[i];
        return serie;
      });

      // regroup manga volume #1 cover to manga series
      const allSeries = await series.map(sanitiseSeries);

      setAllSeriesList(allSeries);
      setPageCount(Math.ceil(data.totalDocuments / perPage));
      setIsLoading(false);
    }
    getSeriesFromApi();
  }, [perPage, searchParams, setPageCount]);

  const handlePageClick = (e) => {
    console.log(e.selected);
    const page = Number(e.selected) + 1;
    console.log(page);

    const params = Object.fromEntries(searchParams.entries());

    setSearchParams({ ...params, page });
  };

  if (isLoading) {
    return (
      <main id="home">
        <LoadingDisplay />
      </main>
    );
  }
  return (
    <div>
      <SeriesList
        seriesInfo={allSeriesList}
        genres={checked}
        setGenres={setChecked}
        setPageCount={setPageCount}
        perPage={perPage}
        handlePageClick={handlePageClick}
      />
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
        forcePage={Number(searchParams.get("page")) - 1 || 0}
        onClick={(...rest) => {
          console.log(rest);
        }}
      />
    </div>
  );
};

export default SeriesPage;
