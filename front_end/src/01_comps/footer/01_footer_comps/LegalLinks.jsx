import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./_styles/legalLinks.css";

const LegalLinks = ({ legalLinks }) => {
  return (
    <div className="legalLinks">
      <ul className="legalLinks__list">
        {legalLinks.map((item) => (
          <li key={item.id} className="legalLinks__item">
            <Link to={item.href} className="legalLinks__link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

LegalLinks.propTypes = {
  legalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

LegalLinks.displayName = "LegalLinks";

export default LegalLinks;
