import React, { useContext } from "react";
import "./NsfwSwitch.css";
import { SettingsContext } from "../context/settings.context";

const NsfwSwitch = () => {
  const { toggleNsfw, isNsfw } = useContext(SettingsContext);
  const handleChangeNsfw = (e) => {
    toggleNsfw(e.target.checked);
  };

  return (
    <div>
      <label className="nsfwSwitch">
        <input
          id="toggler"
          type="checkbox"
          onChange={handleChangeNsfw}
          checked={isNsfw}
        />
        <span className="nsfwSlider round"></span>
      </label>
    </div>
  );
};

export default NsfwSwitch;
