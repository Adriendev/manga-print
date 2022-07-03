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

const CommentsContext = createContext();

const CommentsContextWrapper = ({ children }) => {
  const { isLoggedIn, user, isLoading, setIsLoading, getToken } =
    useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const getComments = async () => {
    const token = getToken();

    if (!isLoggedIn) {
      setComments([]);
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

    console.log("yes, doing getComments", response);

    setComments(response.data.comments);
    setIsLoading(false);
  };

  useEffect(() => {
    getComments();
  }, [isLoggedIn, user]);

  const postComment = useCallback(() => {
    const token = getToken();
  });

  return (
    <CommentsContext.Provider
      value={{
        comments,
        setComments,
        postComment,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};

export { CommentsContext, CommentsContextWrapper };
