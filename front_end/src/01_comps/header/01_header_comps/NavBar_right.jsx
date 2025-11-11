import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_ITEMS } from "../02_header_const/_header_const.index.js";
import "../_styles/navBarRight.css";

const NavBar_right = ({ version }) => {
  const location = useLocation();

  const isActive = (href) => {
    return location.pathname === href ? "active" : "";
  };

  // Last 3 items for right side
  const rightItems = NAVBAR_ITEMS.slice(2);

  const className = `navBar--right ${version}`;
  const listClassName = `navBar--right_list ${version}`;
  const itemClassName = `navBar--right_item ${version}`;
  const linkClassName = (href) => `navBar--right_link ${version} ${isActive(href)}`;

  return (
    <nav className={className}>
      <ul className={listClassName}>
        {rightItems.map((item) => (
          <li
            className={`${itemClassName} ${
              item.label === "Contact" ? "navBar_item--contact" : ""
            }`}
            key={item.id}>
            <Link to={item.href} className={linkClassName(item.href)}>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar_right.propTypes = {
  version: PropTypes.string,
};

NavBar_right.displayName = "NavBar_right";

export default NavBar_right;
