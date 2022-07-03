import React, { useContext } from "react";
import FavoriteButton from "./FavoriteButton";

import "./SeriesCard.css";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";

const SeriesCard = ({ name, image, id }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <>
      <Link to={`/series/${id}`} className="series-link">
        <article className="series-card">
          {/* <pre>{JSON.stringify({ name, image }, null, 2)}</pre> */}
          <picture>
            <img src={image} alt="cover" />
          </picture>
          <h4 className="series-name">{name}</h4>
        </article>
      </Link>
      {isLoggedIn && <FavoriteButton name={name} seriesId={id} />}
    </>
  );
};

export default SeriesCard;
