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
      <input
        id="toggler"
        type="checkbox"
        onChange={handleChangeFavorite}
        checked={favorites.some((elem) => elem.series === seriesId)}
        className="star"
      />
    </div>
  );
};

export default FavoriteButton;
