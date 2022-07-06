import React, { useState, useContext, useEffect } from "react";
import { ReviewsContext } from "../context/reviews.context";
import CommentFrame from "./CommentFrame";
import "./UserReviewsContainer.css";

const UserReviewsContainer = () => {
  const { reviews } = useContext(ReviewsContext);

  return (
    <div>
      <h2>Your reviews</h2>
      <ul className="user-reviews-section">
        {reviews.map((review) => {
          console.log(review);
          return (
            <CommentFrame
              key={review._id}
              id={review._id}
              rating={review.rating}
              textContent={review.textContent}
              seriesId={review.series._id}
              userId={review.user._id}
              username={review.user.username}
              userPicture={review.user.picture}
              seriesPicture={review.seriesPicture}
              seriesName={review.series.name}
              isSeriesPage={false}
            ></CommentFrame>
          );
        })}
      </ul>
    </div>
  );
};

export default UserReviewsContainer;
