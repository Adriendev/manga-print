import React from "react";
import "./LoadingDisplay.css";

const LoadingDisplay = () => {
  return (
    <>
      <p>Retrieving data...</p>
      <div class="lds-roller">
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
