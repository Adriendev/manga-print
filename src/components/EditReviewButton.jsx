import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ReviewsContext } from "../context/reviews.context";
import { API_URL } from "../utils/constants";
import axios from "axios";
import { PenToSquare, TrashCan } from "./Icon";

const baseURL = API_URL;

const EditReviewButton = ({ id }) => {
  const { getToken } = useContext(AuthContext);
  const { getReviews } = useContext(ReviewsContext);

  const handleClick = () => {
    // const token = getToken();
    // axios({
    //   baseURL: baseURL,
    //   url: `review/${id}`,
    //   method: "delete",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }).then((response) => {
    //   console.log(response.data);
    //   getReviews();
    // });
  };
  return (
    <div>
      <button className="btn" onClick={handleClick}>
        <PenToSquare />
      </button>
    </div>
  );
};

export default EditReviewButton;
