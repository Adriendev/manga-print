import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

library.add(faMagnifyingGlass);

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link> |
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />|
      <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link> |
      <Link to="/calendar">Calendar</Link> | <Link to="/user/:id">Profile</Link>
    </nav>
  );
};

export default Navbar;
