import React from "react";

const SeriesDetails = ({ series, volumes }) => {
  return (
    <article>
      <picture>
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
        <h2>{series.name}</h2>
        <h4>{series.authors}</h4>
        <p>{series.synopsis}</p>
        <span>{series.genres}</span>
      </div>
    </article>
  );
};

export default SeriesDetails;
