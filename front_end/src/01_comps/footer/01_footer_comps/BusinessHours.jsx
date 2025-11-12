import React from "react";
import PropTypes from "prop-types";
import { Clock } from "lucide-react";
import "./_styles/businessHours.css";

const BusinessHours = ({ businessHours }) => {
  return (
    <div className="businessHours">
      <div className="businessHours__header">
        <Clock className="businessHours__icon" size={18} />
        <h4 className="businessHours__title">Business Hours</h4>
      </div>
      <ul className="businessHours__list">
        <li className="businessHours__item">
          <span className="businessHours__day">
            {businessHours.weekdays.label}
          </span>
          <span className="businessHours__time">
            {businessHours.weekdays.hours}
          </span>
        </li>
        <li className="businessHours__item">
          <span className="businessHours__day">
            {businessHours.saturday.label}
          </span>
          <span className="businessHours__time">
            {businessHours.saturday.hours}
          </span>
        </li>
        <li className="businessHours__item">
          <span className="businessHours__day">
            {businessHours.sunday.label}
          </span>
          <span className="businessHours__time businessHours__time--closed">
            {businessHours.sunday.hours}
          </span>
        </li>
      </ul>
    </div>
  );
};

BusinessHours.propTypes = {
  businessHours: PropTypes.shape({
    weekdays: PropTypes.shape({
      label: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
    }).isRequired,
    saturday: PropTypes.shape({
      label: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
    }).isRequired,
    sunday: PropTypes.shape({
      label: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

BusinessHours.displayName = "BusinessHours";

export default BusinessHours;
