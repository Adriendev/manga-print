import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import "./CommentFrame.css";

const CommentFrame = ({
  id,
  rating,
  textContent,
  seriesId,
  userId,
  username,
  userPicture,
}) => {
  return (
    <div>
      <div className="review-info">
        <Link to={`/user/${userId}`} className="user-link">
          <img
            src={userPicture}
            alt="user profile pic"
            className="user-profile-pic"
          />
          <h3>{username}</h3>
        </Link>
        <Rating className="rating">{rating}</Rating>
      </div>
      <p>{textContent}</p>
    </div>
  );
};

export default CommentFrame;
