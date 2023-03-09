import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
const Header = ({ CartItem }) => {
  let location = useLocation();
  return (
    location.pathname !== "/admin" &&
    location.pathname !== "/dashboard" &&
    location.pathname !== "/dashboard/clients" &&
    location.pathname !== "/delivery" && (
      <>
        <Head />
        <Search CartItem={CartItem} />
        <Navbar />
      </>
    )
  );
};
export default Header;
