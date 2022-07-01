import { SearchIcon } from "./Icon";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth.context";

import "./Navbar.css";

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link>
      <SearchIcon />

      {isLoggedIn ? (
        <>
          <span>{user}</span> |<button onClick={logOutUser}>Logout</button>|
          <Link to="/calendar">Calendar</Link> |
          <Link to="/user">Profile</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link> | <Link to="/signup">Sign Up</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
