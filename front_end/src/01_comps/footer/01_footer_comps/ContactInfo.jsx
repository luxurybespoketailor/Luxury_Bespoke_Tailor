import React from "react";
import PropTypes from "prop-types";
import { Mail, Phone, MapPin } from "lucide-react";
import "./_styles/contactInfo.css";

const ContactInfo = ({ contactInfo }) => {
  return (
    <div className="contactInfo">
      <h3 className="contactInfo__heading">Contact Us</h3>
      <ul className="contactInfo__list">
        <li className="contactInfo__item">
          <Mail className="contactInfo__icon" size={18} />
          <a
            href={`mailto:${contactInfo.email}`}
            className="contactInfo__link"
            aria-label="Email us"
          >
            {contactInfo.email}
          </a>
        </li>
        <li className="contactInfo__item">
          <Phone className="contactInfo__icon" size={18} />
          <a
            href={`tel:${contactInfo.phone}`}
            className="contactInfo__link"
            aria-label="Call us"
          >
            {contactInfo.phone}
          </a>
        </li>
        <li className="contactInfo__item">
          <MapPin className="contactInfo__icon" size={18} />
          <a
            href={contactInfo.location_link}
            target="_blank"
            rel="noopener noreferrer"
            className="contactInfo__link"
            aria-label="View our location"
          >
            {contactInfo.address}
          </a>
        </li>
      </ul>
    </div>
  );
};

ContactInfo.propTypes = {
  contactInfo: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    location_link: PropTypes.string.isRequired,
  }).isRequired,
};

ContactInfo.displayName = "ContactInfo";

export default ContactInfo;

