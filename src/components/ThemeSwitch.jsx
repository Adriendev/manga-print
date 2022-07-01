import React, { useContext } from "react";
import "./ThemeSwitch.css";
import { SettingsContext } from "../context/settings.context";
import { Sun } from "./Icon";

const ThemeSwitch = () => {
  const { toggleDarkMode, isDarkMode } = useContext(SettingsContext);
  const handleChange = () => {
    toggleDarkMode(isDarkMode);
  };

  return (
    <div>
      <label className="switch">
        <input
          id="toggler"
          type="checkbox"
          onChange={handleChange}
          checked={isDarkMode}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
