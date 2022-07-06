import React, { useContext } from "react";
import FavoriteButton from "./FavoriteButton";

import "./SeriesCard.css";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

const SeriesCard = ({ name, image, id, size }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <article className={"card-container " + size}>
      <Link to={`/series/${id}`} className="series-link">
        <article className="series-card">
          <picture>
            <img src={image} alt="cover" />
          </picture>
          <h4 className="series-name">{name}</h4>
        </article>
      </Link>
      {isLoggedIn && <FavoriteButton name={name} seriesId={id} />}
    </article>
  );
};

export default SeriesCard;
