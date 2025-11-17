import React from "react";
import "./_styles/brandCarousel.css";

const BrandCarousel = ({ logos }) => {
  // Duplicate logos array for seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div className="brandCarousel">
      <div className="brandCarousel__track">
        {/* First set of logos */}
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="brandCarousel__item">
            <img
              src={logo.src}
              alt={logo.alt}
              className="brandCarousel__logo"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandCarousel;

