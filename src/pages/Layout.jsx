import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import "./Layout.css";

const Layout = () => {
  return (
    <div>
      {/* NavBar component stuff (to extract into it's own component)*/}
      <div className="header">
        <Header />
      </div>

      <div className="outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
