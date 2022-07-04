import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>MANGAPRINT</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
