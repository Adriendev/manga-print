import React from "react";
import { useParams } from "react-router-dom";
import SeriesReviewsContainer from "../components/SeriesReviewsContainer";

const SeriesDetailsPage = () => {
  const seriesId = useParams();
  return (
    <div>
      <h2>SeriesDetailsPage</h2>
      <SeriesReviewsContainer seriesId={seriesId} />
    </div>
  );
};

export default SeriesDetailsPage;
