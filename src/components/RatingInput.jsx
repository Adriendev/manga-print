import React from "react";
import { FullStar } from "./Icon";
import "./RatingInput.css";
import { AiFillStar } from "react-icons/ai";

const RatingInput = ({ handleRating }) => {
  return (
    <div className="rating-group">
      <input
        disabled
        checked
        className="rating__input rating__input--none"
        name="rating3"
        id="rating3-none"
        value="0"
        type="radio"
      />
      <label aria-label="1 star" className="rating__label" htmlFor="rating3-1">
        <AiFillStar className="rating__icon rating__icon--star" />
      </label>
      <input
        className="rating__input"
        name="rating3"
        id="rating3-1"
        value="1"
        type="radio"
        onClick={handleRating}
      />
      <label aria-label="2 stars" className="rating__label" htmlFor="rating3-2">
        <AiFillStar className="rating__icon rating__icon--star" />
      </label>
      <input
        className="rating__input"
        name="rating3"
        id="rating3-2"
        value="2"
        type="radio"
        onClick={handleRating}
      />
      <label aria-label="3 stars" className="rating__label" htmlFor="rating3-3">
        <AiFillStar className="rating__icon rating__icon--star" />
      </label>
      <input
        className="rating__input"
        name="rating3"
        id="rating3-3"
        value="3"
        type="radio"
        onClick={handleRating}
      />
      <label aria-label="4 stars" className="rating__label" htmlFor="rating3-4">
        <AiFillStar className="rating__icon rating__icon--star" />
      </label>
      <input
        className="rating__input"
        name="rating3"
        id="rating3-4"
        value="4"
        type="radio"
        onClick={handleRating}
      />
      <label aria-label="5 stars" className="rating__label" htmlFor="rating3-5">
        <AiFillStar className="rating__icon rating__icon--star" />
      </label>
      <input
        className="rating__input"
        name="rating3"
        id="rating3-5"
        value="5"
        type="radio"
        onClick={handleRating}
      />
    </div>
  );
};

export default RatingInput;
