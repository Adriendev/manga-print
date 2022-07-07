import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";
import { ReviewsContext } from "../context/reviews.context";
import { API_URL } from "../utils/constants";
import axios from "axios";
import "./AddReviewForm.css";

import { SettingsContext } from "../context/settings.context";
import i18n from "../utils/dictionnary";
import RatingInput from "./RatingInput";

const baseURL = API_URL;

const AddReviewForm = ({ seriesId }) => {
  const [rating, setRating] = useState(0);
  const [textContent, setTextContent] = useState("");

  const { getToken } = useContext(AuthContext);
  const { getReviews } = useContext(ReviewsContext);
  const { lang } = useContext(SettingsContext);

  const handleRating = (e) => setRating(e.target.value);
  const handleTextContent = (e) => setTextContent(e.target.value);

  const handlePostComment = (e) => {
    e.preventDefault();
    const token = getToken();
    axios({
      baseURL: baseURL,
      url: "review",
      method: "post",
      data: {
        series: seriesId,
        rating: rating,
        textContent: textContent,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      getReviews();
      setRating(0);
      setTextContent("");
    });
  };

  return (
    <div className="add-review">
      <h3>{i18n[lang].postReview}</h3>
      <form onSubmit={handlePostComment} className="review-form">
        <RatingInput handleRating={handleRating} />
        <label>{i18n[lang].rating}</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={handleRating}
          min={0}
          max={5}
          style={{ width: "5vw" }}
        />

        <textarea
          name="comment"
          onChange={handleTextContent}
          value={textContent}
          placeholder={i18n[lang].comment}
          style={{ width: "25vw" }}
        />

        <button type="submit" className="post-button">
          {i18n[lang].post}
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
