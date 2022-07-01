import React, { useContext } from "react";
import "./ThemeSwitch.css";
import { SettingsContext } from "../context/settings.context";

const ThemeSwitch = () => {
  const { toggleDarkMode, isDarkMode } = useContext(SettingsContext);
  const handleChangeDarkMode = (e) => {
    toggleDarkMode(e.target.checked);
  };

  return (
    <div>
      <label className="switch">
        <input
          id="toggler"
          type="checkbox"
          onChange={handleChangeDarkMode}
          checked={isDarkMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
