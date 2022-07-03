import { faLandmarkFlag } from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import ukFlag from "../assets/images/icons8-great-britain-48.png";
import frFlag from "../assets/images/icons8-france-48.png";
import esFlag from "../assets/images/icons8-spain-48.png";
import { SettingsContext } from "../context/settings.context";
import "./LangButton.css";

const LangButton = () => {
  const { lang, changeLang } = useContext(SettingsContext);

  const handleChange = (e) => {
    changeLang(e.target.value);
  };
  const flag = (lang) => {
    switch (lang) {
      case "en":
        return ukFlag;
      case "fr":
        return frFlag;
      case "es":
        return esFlag;
      default:
        return ukFlag;
    }
  };
  return (
    <div>
      <form>
        {/* <label>
          <img src={flag(lang)} alt="uk flag" />
        </label> */}
        <select id="lang" name="lang" onChange={handleChange} value={lang}>
          <option value="en">🇬🇧 ENG</option>
          <option value="fr">🇫🇷 FR</option>
          <option value="es">🇪🇸 ES</option>
        </select>
      </form>
    </div>
  );
};

export default LangButton;
