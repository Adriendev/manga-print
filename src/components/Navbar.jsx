import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../context/auth.context";

import "./Navbar.css";

library.add(faMagnifyingGlass);

const Navbar = () => {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to="/">Home</Link> |
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />|
      {isLoggedIn ? (
        <>
          <span>{user}</span> |<button onClick={logOutUser}>Logout</button>|
          <Link to="/calendar">Calendar</Link> |
          <Link to="/user/:id">Profile</Link>
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
