import { SearchIcon } from "./Icon";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";
import { SettingsContext } from "../context/settings.context";

import "./Navbar.css";
import ThemeSwitch from "./ThemeSwitch";
import LangButton from "./LangButton";

import i18n from "../utils/dictionnary";

const Navbar = () => {
  const { lang } = useContext(SettingsContext);

  const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/series">{i18n[lang].allSeries}</Link>

      {/* <Link to="/">{i18n[lang].home}</Link> */}

      {isLoggedIn ? (
        <>
          <button onClick={logOutUser}>{i18n[lang].logout}</button>
          <Link to="/calendar">{i18n[lang].calendar}</Link>
          <Link to="/user/me">{i18n[lang].profile}</Link>
        </>
      ) : (
        <>
          <Link to="/login">{i18n[lang].login}</Link>{" "}
          <Link to="/signup">{i18n[lang].signUp}</Link>
        </>
      )}
      <div className="settings">
        <ThemeSwitch />
        <LangButton />
      </div>
    </nav>
  );
};

export default Navbar;
