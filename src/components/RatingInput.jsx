import React from "react";
import { FullStar } from "./Icon";
import "./RatingInput.css";

const RatingInput = ({ handleRating }) => {
  return (
    <div>
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
        <label
          aria-label="1 star"
          className="rating__label"
          htmlFor="rating3-1"
        >
          <FullStar />
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-1"
          value="1"
          type="radio"
          onClick={handleRating}
        />
        <label
          aria-label="2 stars"
          className="rating__label"
          htmlFor="rating3-2"
        >
          <FullStar />
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-2"
          value="2"
          type="radio"
          onClick={handleRating}
        />
        <label
          aria-label="3 stars"
          className="rating__label"
          htmlFor="rating3-3"
        >
          <FullStar />
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-3"
          value="3"
          type="radio"
          onClick={handleRating}
        />
        <label
          aria-label="4 stars"
          className="rating__label"
          htmlFor="rating3-4"
        >
          <FullStar />
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-4"
          value="4"
          type="radio"
          onClick={handleRating}
        />
        <label
          aria-label="5 stars"
          className="rating__label"
          htmlFor="rating3-5"
        >
          <FullStar></FullStar>
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
    </div>
  );
};

export default RatingInput;
