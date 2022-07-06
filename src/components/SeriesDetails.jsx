import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { FavoritesContext } from "../context/favorites.context";
import FavoriteButton from "./FavoriteButton";
import "./SeriesDetails.css";

const SeriesDetails = ({ series, volumes }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { favorites } = useContext(FavoritesContext);

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
        <div className="authors">
          {series.authors.map((author) => (
            <h4>{author} </h4>
          ))}
        </div>
        {/* <h4 className="authors">By {series.authors}</h4> */}

        <hr className="bar"></hr>
        <p className="synopsis">{series.synopsis}</p>
        <div className="genres">
          Genres:
          {series.genres.map((genre) => (
            <span>{genre}</span>
          ))}
        </div>
        {isLoggedIn && (
          <FavoriteButton name={series.name} seriesId={series._id} />
        )}
      </div>
    </article>
  );
};

export default SeriesDetails;
