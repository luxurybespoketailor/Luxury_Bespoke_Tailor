import React, { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../../logo/Logo.jsx";
import { MapPin } from "lucide-react";
import MapModal from "./MapModal.jsx";
import BusinessHours from "./BusinessHours.jsx";
import "./_styles/footerBrand.css";

const FooterBrand = ({ branding, contactInfo, businessHours }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="footerBrand">
      <Logo version="Footer" />

      <div className="footerBrand__content">
        <h3 className="footerBrand__name">{branding.name}</h3>
        <p className="footerBrand__tagline">{branding.tagline}</p>
        <p className="footerBrand__description">{branding.description}</p>
      </div>

      <BusinessHours businessHours={businessHours} />

      <button
        className="footerBrand__locationBtn"
        onClick={handleOpenModal}
        aria-label="View location on map">
        <MapPin className="footerBrand__locationIcon" size={18} />
        <span>View Location</span>
      </button>

      {isModalOpen && (
        <MapModal
          coordinates={contactInfo.coordinates}
          locationLink={contactInfo.location_link}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

FooterBrand.propTypes = {
  branding: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  contactInfo: PropTypes.shape({
    coordinates: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }).isRequired,
    location_link: PropTypes.string.isRequired,
  }).isRequired,
  businessHours: PropTypes.shape({
    everyday: PropTypes.shape({
      label: PropTypes.string.isRequired,
      hours: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

FooterBrand.displayName = "FooterBrand";

export default FooterBrand;
