import React from "react";

import "./SeriesCard.css";

const SeriesCard = ({ name, image }) => {
  return (
    <article className="series-card">
      {/* <pre>{JSON.stringify({ name, image }, null, 2)}</pre> */}
      <picture>
        <img src={image} alt="cover" />
      </picture>
      <h4>{name}</h4>
    </article>
  );
};

export default SeriesCard;
