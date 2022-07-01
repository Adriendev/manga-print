import React, { useContext, useEffect, useState } from "react";
import "./FavoriteButton.css";
import { FavoritesContext } from "../context/favorites.context";

const FavoriteButton = ({ name, seriesId }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [favoriteId, setFavoriteId] = useState(null);
  const handleChangeFavorite = (e) => {
    toggleFavorite(e.target.checked, seriesId, favoriteId);
  };

  useEffect(() => {
    if (favorites.find((elem) => elem.series === seriesId)) {
      setFavoriteId(favorites.find((elem) => elem.series === seriesId)._id);
    }
  }, [favorites]);

  return (
    <div>
      <label className="container">
        <input
          id="toggler"
          type="checkbox"
          onChange={handleChangeFavorite}
          checked={favorites.some((elem) => elem.series === seriesId)}
          className="checkbox"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default FavoriteButton;
