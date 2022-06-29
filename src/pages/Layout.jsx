import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div>
      {/* NavBar component stuff (to extract into it's own component)*/}
      <Header />

      <Outlet />
    </div>
  );
};

export default Layout;
