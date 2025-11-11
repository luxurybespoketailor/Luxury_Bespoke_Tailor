import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { X, ExternalLink } from "lucide-react";
import GoogleMapIframe from "./GoogleMapIframe.jsx";
import "./_styles/mapModal.css";

const MapModal = ({ coordinates, locationLink, onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  // Handle backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="mapModal" onClick={handleBackdropClick}>
      <div className="mapModal__container">
        {/* Header with close button */}
        <div className="mapModal__header">
          <h2 className="mapModal__title">Our Location</h2>
          <button
            className="mapModal__closeBtn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Map display area */}
        <div className="mapModal__mapContainer">
          <GoogleMapIframe coordinates={coordinates} />
        </div>

        {/* Redirect button */}
        <div className="mapModal__footer">
          <a
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mapModal__redirectBtn"
          >
            <span>Open in Google Maps</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

MapModal.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
  locationLink: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

MapModal.displayName = "MapModal";

export default MapModal;

