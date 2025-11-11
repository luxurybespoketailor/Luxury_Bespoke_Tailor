import React from "react";
import PropTypes from "prop-types";

const GoogleMapIframe = ({ coordinates }) => {
  // Create Google Maps embed URL with marker using q parameter
  // This format shows a red pin/marker at the specified location
  const mapSrc = `https://maps.google.com/maps?q=${coordinates.lat},${coordinates.lng}&hl=en&z=15&output=embed`;

  return (
    <iframe
      src={mapSrc}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location"
    />
  );
};

GoogleMapIframe.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

GoogleMapIframe.displayName = "GoogleMapIframe";

export default GoogleMapIframe;

