import React, { useState, useContext, useEffect } from "react";
import SeriesCard from "./SeriesCard";
import "./UserFavoritesContainer.css";

const UserFavoritesContainer = ({ favorites }) => {
  return (
    <div>
      <h2>Your favorites</h2>
      <ul className="user-Favorites-section">
        {favorites.map((favorite) => {
          console.log(favorite);
          return <SeriesCard />;
        })}
      </ul>
    </div>
  );
};

export default UserFavoritesContainer;
