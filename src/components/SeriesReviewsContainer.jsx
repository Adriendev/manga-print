import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { ReviewsContext } from "../context/reviews.context";
import CommentFrame from "./CommentFrame";
import AddReviewForm from "./AddReviewForm";
import { API_URL } from "../utils/constants";
import axios from "axios";

const baseURL = API_URL;

const SeriesReviewsContainer = ({ seriesId }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { reviews } = useContext(ReviewsContext);
  const [seriesReviews, setSeriesReviews] = useState([]);

  const getSeriesReview = async () => {
    const response = await axios({
      method: "get",
      baseURL: baseURL,
      url: `/review/series`,
      data: { seriesId: seriesId },
    });

    console.log("Getting series reviews...", response);

    setSeriesReviews(response.data);
  };

  useEffect(() => {
    getSeriesReview();
  }, [reviews]);

  return (
    <div>
      {isLoggedIn && <AddReviewForm seriesId={seriesId} />}
      <ul>
        {reviews.map((review) => {
          console.log(review);
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
