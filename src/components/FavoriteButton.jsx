import React, { useContext, useEffect, useState } from "react";
import "./FavoriteButton.css";
import { FavoritesContext } from "../context/favorites.context";
import { EmptyStar, FullStar } from "./Icon";

const FavoriteButton = ({ name, seriesId }) => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const [favoriteId, setFavoriteId] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleChangeFavorite = (e) => {
    toggleFavorite(e.target.checked, seriesId, favoriteId);
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const fav = favorites.find((elem) => elem.series === seriesId);
    if (fav) {
      setFavoriteId(fav._id);
    }
    console.log("hey useeffeeeect");
  }, [favorites]);

  return (
    <div>
      <label className="container">
        {isChecked ? <FullStar></FullStar> : <EmptyStar></EmptyStar>}
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
