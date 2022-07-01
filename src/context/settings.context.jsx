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

const SettingsContext = createContext();

const SettingsContextWrapper = ({ children }) => {
  const { isLoggedIn, user, isLoading, setIsLoading, getToken } =
    useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("en");
  const [isNsfw, setIsNsfw] = useState(false);

  useEffect(() => {
    const getSettings = async () => {
      const token = getToken();

      if (!isLoggedIn) {
        setIsDarkMode(false);
        setLang("en");
        setIsNsfw(false);
        return;
      }

      setIsLoading(true);

      const response = await axios({
        method: "get",
        baseURL: baseURL,
        url: `/user/settings`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      setIsDarkMode(response.data.settings.mode === "light" ? false : true);
      setLang(response.data.settings.lang);
      setIsNsfw(response.data.settings.nsfw);
      setIsLoading(false);
    };
    getSettings();
  }, [isLoggedIn, user]);

  const toggleDarkMode = useCallback(
    (currentState) => {
      setIsDarkMode((prev) => !prev);
      if (isLoggedIn) {
        const token = getToken();
        axios({
          url: "user/me",
          baseURL: baseURL,
          method: "patch",
          data: {
            settings: {
              mode: currentState ? "dark" : "light",
            },
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
      }
    },
    [isLoggedIn, user]
  );

  const changeLang = useCallback(
    (language) => {
      setLang(language);
      if (isLoggedIn) {
        const token = getToken();
        axios({
          url: "user/me",
          baseURL: baseURL,
          method: "patch",
          data: {
            settings: {
              lang: language,
            },
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
      }
    },
    [isLoggedIn, user]
  );

  const toggleNsfw = useCallback(
    (currentState) => {
      setIsNsfw((prev) => !prev);
      if (isLoggedIn) {
        const token = getToken();
        axios({
          url: "user/me",
          baseURL: baseURL,
          method: "patch",
          data: {
            settings: {
              nsfw: currentState,
            },
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
      }
    },
    [isLoggedIn, user]
  );

  console.log("lang", lang);
  console.log("isDarkMode", isDarkMode);
  console.log("isNsfw", isNsfw);

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        lang,
        changeLang,
        isNsfw,
        toggleNsfw,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextWrapper };
