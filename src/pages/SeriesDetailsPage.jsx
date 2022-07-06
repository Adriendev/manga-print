import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./SeriesDetailsPage.css";
import { API_URL } from "../utils/constants";

import LoadingDisplay from "../components/LoadingDisplay";
import SeriesDetails from "../components/SeriesDetails";
import SeriesReviewsContainer from "../components/SeriesReviewsContainer";

const SeriesDetailsPage = () => {
  const seriesId = useParams().id;
  const [isLoading, setIsLoading] = useState(true);
  const [oneSeries, setOneSeries] = useState({});
  const [seriesVolumes, setSeriesVolumes] = useState([]);
  const [seriesRating, setSeriesRating] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getSeriesDetails = async () => {
      const { data } = await axios(`${API_URL}/mangaSeries/${seriesId}`);
      setOneSeries(data);
    };

    const getSeriesVolumes = async () => {
      const { data } = await axios(`${API_URL}/mangaVolume/series/${seriesId}`);

      setSeriesVolumes(data);
      setIsLoading(false);
    };

    getSeriesDetails();
    getSeriesVolumes();
  }, [seriesId]);

  return (
    <main id="series-details">
      {isLoading ? (
        <LoadingDisplay />
      ) : (
        <SeriesDetails
          series={oneSeries}
          volumes={seriesVolumes}
          seriesRating={seriesRating}
        />
      )}
      <section className="reviews-section">
        <h3>REVIEWS</h3>
        <hr></hr>

        <SeriesReviewsContainer
          seriesId={seriesId}
          setSeriesRating={setSeriesRating}
        />
      </section>
    </main>
  );
};

export default SeriesDetailsPage;
