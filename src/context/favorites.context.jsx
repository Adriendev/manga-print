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

const FavoritesContext = createContext();

const FavoritesContextWrapper = ({ children }) => {
  const { isLoggedIn, user, isLoading, setIsLoading, getToken } =
    useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);
  const getFavorites = async () => {
    const token = getToken();

    if (!isLoggedIn) {
      setFavorites([]);
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

    console.log(response);

    setFavorites(response.data.favorites);
    setIsLoading(false);
  };

  useEffect(() => {
    getFavorites();
  }, [isLoggedIn, user]);

  const toggleFavorite = (state, seriesId, favoriteId) => {
    const token = getToken();
    if (state) {
      axios({
        url: `favorite`,
        baseURL: baseURL,
        method: "post",
        data: {
          series: seriesId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          console.log(errorDescription);
        });
    } else {
      axios({
        url: `favorite/${favoriteId}`,
        baseURL: baseURL,
        method: "delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          console.log(errorDescription);
        });
    }
    getFavorites();
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesContextWrapper };
