import React, { useContext } from "react";
import FavoriteButton from "./FavoriteButton";

import "./SeriesCard.css";
import { AuthContext } from "../context/auth.context";

const SeriesCard = ({ name, image, id }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <article className="series-card">
      {/* <pre>{JSON.stringify({ name, image }, null, 2)}</pre> */}
      <picture>
        <img src={image} alt="cover" />
      </picture>
      <h4>{name}</h4>
      {isLoggedIn && <FavoriteButton name={name} seriesId={id} />}
    </article>
  );
};

export default SeriesCard;
