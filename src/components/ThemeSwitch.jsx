import React, { useContext } from "react";
import "./ThemeSwitch.css";
import { SettingsContext } from "../context/settings.context";

const ThemeSwitch = () => {
  const { toggleDarkMode } = useContext(SettingsContext);
  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <div>
      <label className="switch">
        <input id="toggler" type="checkbox" onClick={handleClick} />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
