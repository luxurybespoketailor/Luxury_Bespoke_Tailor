import React from "react";
import PropTypes from "prop-types";
import "../_styles/hamburger.css";

const Hamburger = ({ isOpen, onClick }) => {
  const className = `hamburger ${isOpen ? "open" : ""}`;

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
      <span className="hamburger__line"></span>
    </button>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

Hamburger.displayName = "Hamburger";

export default Hamburger;

