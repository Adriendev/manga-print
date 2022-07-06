import React from "react";
import Rating from "./Rating";
import "./SeriesDetails.css";

const SeriesDetails = ({ series, volumes, seriesRating }) => {
  return (
    <article className="series-details-card">
      <picture className="img-frame">
        <img
          src={
            volumes[0].cover.includes("seven")
              ? "https://filetandvine.com/wp-content/uploads/2015/10/pix-vertical-placeholder.jpg"
              : volumes[0].cover
          }
          alt="volume-cover"
        />
      </picture>
      <div className="main-info">
        <h2 className="title">{series.name}</h2>
        <h4 className="authors">By {series.authors}</h4>
        <p className="synopsis">{series.synopsis}</p>
        <span className="genres">Genres: {series.genres}</span>
        {seriesRating ? (
          <span>
            {`Rating: ${Math.round(seriesRating * 10) / 10}/5`}
            <Rating>{seriesRating}</Rating>
          </span>
        ) : (
          <></>
        )}
      </div>
    </article>
  );
};

export default SeriesDetails;
