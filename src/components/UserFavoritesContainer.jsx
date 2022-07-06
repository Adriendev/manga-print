import React, { useState, useContext, useEffect } from "react";
import SeriesCard from "./SeriesCard";
import "./UserFavoritesContainer.css";

const UserFavoritesContainer = ({ favorites }) => {
  return (
    <div>
      <ul className="user-favorites-section">
        {favorites.map((favorite) => {
          return (
            <SeriesCard
              key={favorite.series._id}
              name={favorite.series.name}
              image={favorite.seriesPicture}
              id={favorite.series._id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UserFavoritesContainer;
