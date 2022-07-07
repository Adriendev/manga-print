import React from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import LoadingDisplay from "../components/LoadingDisplay";
import { API_URL } from "../utils/constants";
import SeriesList from "../components/SeriesList";

import "./SeriesPage.css";

const SeriesPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allSeriesList, setAllSeriesList] = useState([]);
  const [checked, setChecked] = useState([]);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(50);
  const [pageCount, setPageCount] = useState(1);

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

  const paginateSeries = async () => {
    setIsLoading(true);
    let config = {
      method: "get",
      url: `${API_URL}/mangaSeries/?limit=50&page=${offset + 1}`,
    };
    const { data } = await axios(config);
    setIsLoading(false);

    const series = data.mangaSeriesFilter.map((serie, i) => {
      serie.cover = data.allPromises[i];
      return serie;
    });
    setAllSeriesList(series);
    setPageCount(Math.ceil(data.totalDocuments / perPage));
  };

  useEffect(() => {
    paginateSeries();
  }, [offset]);

  const handlePageClick = (e) => {
    // console.log("clicked");
    // console.log(e);
    // console.log("selected: ", e.selected);
    const selectedPage = e.selected;
    setOffset(selectedPage);
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
        forcePage={offset}
      />
    </div>
  );
};

export default SeriesPage;
