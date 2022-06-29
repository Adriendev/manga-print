import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

const SettingsContext = createContext();

const SettingsContextWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  const toggleDarkMode = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
    } else {
      setIsDarkMode(true);
    }
  };

  const switchLang = (newLang) => {
    setLang(newLang);
  };

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        lang,
        setLang,
        toggleDarkMode,
        switchLang,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextWrapper };
