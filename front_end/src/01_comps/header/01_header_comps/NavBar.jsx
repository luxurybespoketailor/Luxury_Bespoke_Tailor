import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { NAVBAR_ITEMS } from "../02_header_const/_header_const.index.js";
import "../_styles/navBar.css";

// Mobile-only navbar with full-screen menu
const NavBar = ({ version, isOpen = false, onLinkClick }) => {
  const location = useLocation();
  
  const isActive = (href) => {
    return location.pathname === href ? "active" : "";
  };
  
  // Add 'open' class when mobile menu is open
  const className = `navBar ${version} ${isOpen ? "open" : ""}`;
  const listClassName = `navBar_list ${version}`;
  const itemClassName = `navBar_item ${version}`;
  const linkClassName = (href) => `navBar_link ${version} ${isActive(href)}`;

  return (
    <nav className={className}>
      {/* Close button - only visible when menu is open */}
      {isOpen && (
        <button
          className="navBar__closeBtn"
          onClick={onLinkClick}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
      )}
      
      <ul className={listClassName}>
        {NAVBAR_ITEMS.map((item) => (
          <li className={itemClassName} key={item.id}>
            <Link 
              to={item.href} 
              className={linkClassName(item.href)}
              onClick={onLinkClick}
            >
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  version: PropTypes.string,
  isOpen: PropTypes.bool,
  onLinkClick: PropTypes.func,
};

NavBar.displayName = "NavBar";

export default NavBar;
