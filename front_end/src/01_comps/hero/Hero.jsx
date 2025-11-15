import React from "react";
import { useNavigate } from "react-router-dom";
import "./_styles/hero.css";

const Hero = ({ 
  image, 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  ctaOnClick,
  height = "full" // "full" or "medium"
}) => {
  const navigate = useNavigate();

  // Handle CTA button click - either custom onClick or navigate to link
  const handleCtaClick = () => {
    if (ctaOnClick) {
      ctaOnClick();
    } else if (ctaLink) {
      navigate(ctaLink);
    }
  };

  return (
    <div className={`hero hero--${height}`}>
      {/* Background overlay for better text readability */}
      <div className="hero__overlay"></div>
      
      {/* Hero background image */}
      <img
        src={image}
        alt={title}
        className="hero__image"
        loading="eager"
      />
      
      {/* Hero content - title, subtitle, CTA */}
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {ctaText && (
          <button 
            className="hero__cta" 
            onClick={handleCtaClick}
            aria-label={ctaText}
          >
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Hero;

