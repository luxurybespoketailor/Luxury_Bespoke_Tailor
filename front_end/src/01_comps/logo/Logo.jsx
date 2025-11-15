import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import {
  logo_portrait_dark,
  logo_portrait_light,
  logo_landscape_light,
  logo_landscape_dark,
} from "../../00_assets/assets.index.js";
import "../_styles/logo.css";

const Logo = ({ version }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleClick = () => {
    navigate("/");
  };

  const src = isHover ? logo_landscape_dark : logo_landscape_dark;
  const className = `logo ${version}`;

  return (
    <img
      src={src}
      alt="logo"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={className}
    />
  );
};

// Logo.propTypes = {
//   version: PropTypes.string.isRequired.oneOf(["Header", "Footer", "Full"]),
// };

export default Logo;
