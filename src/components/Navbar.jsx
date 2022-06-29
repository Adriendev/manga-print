import React from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "./Icon";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <SearchIcon />
      <Link to="/login">Login</Link> <Link to="/signup">Sign Up</Link>
      <Link to="/calendar">Calendar</Link> <Link to="/user/:id">Profile</Link>
    </nav>
  );
};

export default Navbar;
