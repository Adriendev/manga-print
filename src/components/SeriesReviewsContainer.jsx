import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import CommentFrame from "./CommentFrame";
import AddReviewForm from "./AddReviewForm";
import { API_URL } from "../utils/constants";
import axios from "axios";

const baseURL = API_URL;

const SeriesReviewsContainer = ({ seriesId }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const getSeriesReview = async () => {
    const response = await axios({
      method: "get",
      baseURL: baseURL,
      url: `/review/series`,
      data: { seriesId: seriesId },
    });

    console.log("Getting series reviews...", response);

    setReviews(response.data);
  };

  useEffect(() => {
    getSeriesReview();
  }, []);

  return (
    <div>
      {isLoggedIn && <AddReviewForm seriesId={seriesId} />}
      <ul>
        {reviews.map((review) => {
          return (
            <CommentFrame
              key={review._id}
              id={review._id}
              rating={review.rating}
              textContent={review.textContent}
              seriesId={seriesId}
              userId={review.user._id}
              username={review.user.username}
              userPicture={review.user.picture}
            ></CommentFrame>
          );
        })}
      </ul>
    </div>
  );
};

export default SeriesReviewsContainer;
