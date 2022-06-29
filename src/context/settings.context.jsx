import { createContext, useCallback, useEffect, useState } from "react";

const SettingsContext = createContext();

const SettingsContextWrapper = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState("en");

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        isDarkMode,
        lang,
        setLang,
        toggleDarkMode,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextWrapper };
