import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "./Footer";
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
