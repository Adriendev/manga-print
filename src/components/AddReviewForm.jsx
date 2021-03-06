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

const AddReviewForm = ({ seriesId, closeModal }) => {
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
      closeModal();
    });
  };

  return (
    <div className="add-review">
      <h3>{i18n[lang].postReview}</h3>
      <form onSubmit={handlePostComment} className="review-form">
        <RatingInput handleRating={handleRating} />

        <textarea
          name="comment"
          onChange={handleTextContent}
          value={textContent}
          placeholder={i18n[lang].comment}
          style={{ width: "95%", height: "30vh" }}
        />

        <button type="submit" className="post-button">
          {i18n[lang].post}
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
