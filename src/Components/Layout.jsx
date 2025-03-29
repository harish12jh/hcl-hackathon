import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <>
      <NavBar>
        <div className="w-full max-h-[500px]">
          <Outlet />
        </div>
      </NavBar>
    </>
  );
};

export default Layout;
