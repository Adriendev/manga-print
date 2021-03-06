import axios from "axios";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AuthContext } from "./auth.context";
import { API_URL } from "../utils/constants";

const baseURL = API_URL;

const ReviewsContext = createContext();

const ReviewsContextWrapper = ({ children }) => {
  const { isLoggedIn, user, isLoading, setIsLoading, getToken } =
    useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    const token = getToken();

    if (!isLoggedIn) {
      setReviews([]);
      return;
    }

    const response = await axios({
      method: "get",
      baseURL: baseURL,
      url: `/user/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const reviews = response.data.reviews.map((review, i) => {
      review.seriesPicture = response.data.revCovers[i];
      return review;
    });

    setReviews(reviews);
  };

  useEffect(() => {
    getReviews();
  }, [isLoggedIn, user]);

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        getReviews,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export { ReviewsContext, ReviewsContextWrapper };
