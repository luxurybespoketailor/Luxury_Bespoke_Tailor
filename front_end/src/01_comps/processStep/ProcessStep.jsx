import React from "react";
import "./_styles/processStep.css";

const ProcessStep = ({ stepNumber, title, description, isLast = false }) => {
  return (
    <div className="processStep">
      {/* Step number circle */}
      <div className="processStep__number">
        <span>{stepNumber}</span>
      </div>
      
      {/* Connector line to next step (hidden on last step) */}
      {!isLast && <div className="processStep__connector"></div>}
      
      {/* Step content */}
      <div className="processStep__content">
        <h3 className="processStep__title">{title}</h3>
        <p className="processStep__description">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;

