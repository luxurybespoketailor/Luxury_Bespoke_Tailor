import React from "react";
// import PropTypes from "prop-types";
import Logo from "../logo/Logo.jsx";
import { NavBar } from "./01_header_comps/_header_comps.index";
import "./_styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo version="Header" />
      <NavBar version="Header" />
    </header>
  );
};
Header.displayName = "Header";

export default Header;
