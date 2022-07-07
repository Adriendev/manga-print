import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./CommentFrame.css";
import DeleteReviewButton from "./DeleteReviewButton";
import { AuthContext } from "../context/auth.context";

const CommentFrame = ({
  id,
  rating,
  textContent,
  seriesId,
  userId,
  username,
  userPicture,
  seriesName,
  seriesPicture,
  isSeriesPage,
}) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="review-frame">
      <div className="review-info">
        {isSeriesPage ? (
          <Link to={`/user/${userId}`} className="user-link">
            <img
              src={userPicture}
              alt="user profile pic"
              className="user-profile-pic"
            />
            <h3>{username}</h3>
          </Link>
        ) : (
          <Link to={`/series/${seriesId}`} className="user-link">
            <img src={seriesPicture} alt="series pic" className="series-pic" />
            <h3>{seriesName}</h3>
          </Link>
        )}

        <Rating color={"black"}>{rating}</Rating>
      </div>
      <p className="review-text">{textContent}</p>
      {user === username && (
        <div className="buttons-container">
          <DeleteReviewButton id={id} />
        </div>
      )}
    </div>
  );
};

export default CommentFrame;
