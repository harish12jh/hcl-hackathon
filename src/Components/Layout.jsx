import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

const Layout = ({ setData }) => {
  return (
    <>
      <NavBar setData={(values) => setData(values)}>
        <div className="w-full max-h-[500px]">
          <Outlet />
        </div>
      </NavBar>
    </>
  );
};

export default Layout;
