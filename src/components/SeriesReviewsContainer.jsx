import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth.context";
import { ReviewsContext } from "../context/reviews.context";
import CommentFrame from "./CommentFrame";
import AddReviewForm from "./AddReviewForm";
import { API_URL } from "../utils/constants";
import axios from "axios";
import { Link } from "react-router-dom";
import "./SeriesReviewsContainer.css";

const baseURL = API_URL;

const SeriesReviewsContainer = ({ seriesId, setSeriesRating, openModal }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const { reviews } = useContext(ReviewsContext);
  const [seriesReviews, setSeriesReviews] = useState([]);

  const getSeriesReview = async () => {
    const response = await axios({
      method: "get",
      baseURL: baseURL,
      url: `/mangaSeries/${seriesId}/reviews`,
    });

    const newRating =
      response.data.reduce((acc, value) => {
        return acc + parseInt(value.rating);
      }, 0) / response.data.length;

    setSeriesRating(newRating);
    setSeriesReviews(response.data);
  };

  useEffect(() => {
    getSeriesReview();
  }, [reviews]);

  const handleClick = () => {
    openModal("review");
  };

  return (
    <div className="container-rev">
      {isLoggedIn ? (
        <>
          <button className="add-button" onClick={handleClick}>
            Post your own review!
          </button>
          {/* <AddReviewForm seriesId={seriesId} /> */}
        </>
      ) : (
        <Link className="form-login" to="/login">
          Log in to post a review
        </Link>
      )}
      <ul className="reviews-section">
        {seriesReviews.map((review) => {
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
              isSeriesPage={true}
            ></CommentFrame>
          );
        })}
      </ul>
    </div>
  );
};

export default SeriesReviewsContainer;
