import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Views/Footer";
import MenuNavbar from "./Components/MenuNavbar";

const Layout = () => {
  return (
    <>
      <div className="cust-outer-container font-poppins">
        <Navbar />
        <MenuNavbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
