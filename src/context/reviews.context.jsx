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

    setIsLoading(true);

    const response = await axios({
      method: "get",
      baseURL: baseURL,
      url: `/user/me`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("yes, doing getReviews", response);

    setReviews(response.data.reviews);
    setIsLoading(false);
  };

  useEffect(() => {
    getReviews();
  }, [isLoggedIn, user]);

  const postReview = useCallback(() => {
    const token = getToken();
  });

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        setReviews,
        postReview,
      }}
    >
      {children}
    </ReviewsContext.Provider>
  );
};

export { ReviewsContext, ReviewsContextWrapper };
