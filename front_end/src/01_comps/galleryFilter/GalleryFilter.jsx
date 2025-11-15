import React from "react";
import "./_styles/galleryFilter.css";

const GalleryFilter = ({ categories, activeCategory, onFilterChange }) => {
  return (
    <div className="galleryFilter">
      <div className="galleryFilter__container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`galleryFilter__btn ${
              activeCategory === category.value
                ? "galleryFilter__btn--active"
                : ""
            }`}
            onClick={() => onFilterChange(category.value)}
            aria-label={`Filter by ${category.label}`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryFilter;

