import React from "react";
import { Link } from "react-router-dom";
import "./_styles/categoryCard.css";

const CategoryCard = ({ image, title, href }) => {
  return (
    <Link to={href} className="categoryCard">
      {/* Card overlay for hover effect */}
      <div className="categoryCard__overlay"></div>
      
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="categoryCard__image"
        loading="lazy"
      />
      
      {/* Card content - centered title */}
      <div className="categoryCard__content">
        <h3 className="categoryCard__title">{title}</h3>
        <span className="categoryCard__arrow">→</span>
      </div>
    </Link>
  );
};

export default CategoryCard;

