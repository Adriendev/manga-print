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

      setIsDarkMode(settings.mode === "ligth" ? false : true);
      setLang(settings.lang);
      setNsfw(settings.nsfw);
    };
    getSettings();
    console.log(isDarkMode);
  }, [isLoggedIn, user]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        lang,
        setLang,
        nsfw,
        setNsfw,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextWrapper };
