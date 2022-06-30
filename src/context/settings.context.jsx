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
  const { isLoggedIn, user, isLoading, getToken } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("en");
  const [nsfw, setNsfw] = useState(false);

  useEffect(() => {
    const getSettings = async () => {
      const token = getToken();

      if (!isLoggedIn) {
        setIsDarkMode(false);
        setLang("en");
        setNsfw(false);
        return;
      }

      const settings = await axios({
        method: "get",
        baseURL: baseURL,
        url: `/user/settings/${user}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIsDarkMode(settings.data.mode === "light" ? false : true);
      setLang(settings.data.lang);
      setNsfw(settings.data.nsfw);
    };
    getSettings();
  }, [isLoggedIn, user]);

  const toggleDarkMode = useCallback(
    (currentState) => {
      setIsDarkMode((prev) => !prev);
      if (isLoggedIn) {
        const token = getToken();
        axios({
          url: "user",
          baseURL: baseURL,
          method: "patch",
          data: {
            settings: { mode: currentState ? "light" : "dark" },
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
          url: "user",
          baseURL: baseURL,
          method: "patch",
          data: {
            settings: { lang: language },
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

  console.log(lang);

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        lang,
        changeLang,
        nsfw,
        setNsfw,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextWrapper };
