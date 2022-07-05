import React, { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../context/auth.context";
import { API_URL } from "../utils/constants";
import axios from "axios";

const baseURL = API_URL;

const AddReviewForm = ({ seriesId }) => {
  const [rating, setRating] = useState(0);
  const [textContent, setTextContent] = useState("");

  const { getToken } = useContext(AuthContext);

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
      console.log(response.data);
    });
  };

  return (
    <div>
      AddReviewForm
      <form onSubmit={handlePostComment}>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={rating}
          onChange={handleRating}
          min={0}
          max={5}
        />

        <label>Comment:</label>
        <textarea
          name="comment"
          onChange={handleTextContent}
          value={textContent}
        />

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default AddReviewForm;
