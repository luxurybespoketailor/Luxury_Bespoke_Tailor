import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_ITEMS } from "../02_header_const/_header_const.index.js";
import "../_styles/navBarLeft.css";

const NavBar_left = ({ version }) => {
  const location = useLocation();

  const isActive = (href) => {
    return location.pathname === href ? "active" : "";
  };

  // First 2 items for left side
  const leftItems = NAVBAR_ITEMS.slice(0, 4);

  const className = `navBar--left ${version}`;
  const listClassName = `navBar--left_list ${version}`;
  const itemClassName = `navBar--left_item ${version}`;
  const linkClassName = (href) =>
    `navBar--left_link ${version} ${isActive(href)}`;

  return (
    <nav className={className}>
      <ul className={listClassName}>
        {leftItems.map((item) => (
          <li className={itemClassName} key={item.id}>
            <Link to={item.href} className={linkClassName(item.href)}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar_left.propTypes = {
  version: PropTypes.string,
};

NavBar_left.displayName = "NavBar_left";

export default NavBar_left;
