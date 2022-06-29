import React from "react";

const SeriesCard = ({ name }) => {
  return (
    <article>
      <picture>
        <img
          src="https://static.wikia.nocookie.net/onepiece/images/b/b1/Volumen_99.png"
          alt="cover"
        />
      </picture>
      <h4>{name}</h4>
    </article>
  );
};

export default SeriesCard;
