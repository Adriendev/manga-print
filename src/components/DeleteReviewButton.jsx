import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { ReviewsContext } from "../context/reviews.context";
import { API_URL } from "../utils/constants";
import axios from "axios";
import { TrashCan } from "./Icon";
import { hover } from "@testing-library/user-event/dist/hover";

const baseURL = API_URL;

const DeleteReviewButton = ({ id }) => {
  const { getToken } = useContext(AuthContext);
  const { getReviews } = useContext(ReviewsContext);

  const handleClick = () => {
    const token = getToken();
    axios({
      baseURL: baseURL,
      url: `review/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      getReviews();
    });
  };
  return (
    <div>
      <button
        className="btn"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <TrashCan />
      </button>
    </div>
  );
};

export default DeleteReviewButton;
