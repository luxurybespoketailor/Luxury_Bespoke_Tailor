import React from "react";
import "./_styles/sectionHeading.css";

const SectionHeading = ({ 
  title, 
  subtitle, 
  alignment = "center" // "center", "left", "right"
}) => {
  return (
    <div className={`sectionHeading sectionHeading--${alignment}`}>
      <h2 className="sectionHeading__title">{title}</h2>
      {subtitle && <p className="sectionHeading__subtitle">{subtitle}</p>}
      <div className="sectionHeading__divider"></div>
    </div>
  );
};

export default SectionHeading;

