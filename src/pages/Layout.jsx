import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* NavBar component stuff (to extract into it's own component)*/}
      <nav>
        <Link to="/">Home</Link> | Search | <Link to="/login">Login</Link> |{" "}
        <Link to="/signup">Sign Up</Link> | <Link to="/calendar">Calendar</Link>{" "}
        | <Link to="/user/:id">Profile</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Layout;
