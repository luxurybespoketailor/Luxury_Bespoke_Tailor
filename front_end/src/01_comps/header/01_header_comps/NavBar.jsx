import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_ITEMS } from "../02_header_const/_header_const.index.js";
import "../_styles/navBar.css";

const NavBar = ({ version }) => {
  const location = useLocation();
  const isActive = (href) => {
    return location.pathname === href ? "active" : "";
  };
  const className = `navBar ${version}`;
  const listClassName = `navBar_list ${version}`;
  const itemClassName = `navBar_item ${version}`;
  const linkClassName = (href) => `navBar_link ${version} ${isActive(href)}`;

  return (
    <nav className={className}>
      <ul className={listClassName}>
        {NAVBAR_ITEMS.map((item) => (
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
// NavBar.propTypes = {
//   version: PropTypes.string.isRequired.oneOf(["Header", "Footer", "Full"]),
// };
NavBar.displayName = "NavBar";
export default NavBar;
