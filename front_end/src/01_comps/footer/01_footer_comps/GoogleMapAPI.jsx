import React from "react";
import PropTypes from "prop-types";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapAPI = ({ coordinates }) => {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  // Map container style
  const containerStyle = {
    width: "100%",
    height: "100%",
  };

  const center = {
    lat: coordinates.lat,
    lng: coordinates.lng,
  };

  // If no API key, show message
  if (!apiKey) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          color: "var(--muted-text-color)",
          textAlign: "center",
          padding: "var(--spacing-lg)",
        }}
      >
        <p>
          Google Maps API key not configured. Please add
          VITE_GOOGLE_MAPS_API_KEY to your .env file.
        </p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

GoogleMapAPI.propTypes = {
  coordinates: PropTypes.shape({
    lat: PropTypes.number.isRequired,
    lng: PropTypes.number.isRequired,
  }).isRequired,
};

GoogleMapAPI.displayName = "GoogleMapAPI";

export default GoogleMapAPI;

