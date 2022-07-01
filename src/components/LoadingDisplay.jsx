import React, { useContext } from "react";
import "./LoadingDisplay.css";
import { SettingsContext } from "../context/settings.context";

const LoadingDisplay = () => {
  const { isDarkMode } = useContext(SettingsContext);
  return (
    <>
      <p>Retrieving data...</p>
      <div className="lds-roller" mode={isDarkMode ? "dark" : "light"}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default LoadingDisplay;
