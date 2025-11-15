import React from "react";
import "./_styles/storeCard.css";

const StoreCard = ({ name, address, phone, mapLink }) => {
  // Handle map link click
  const handleMapClick = () => {
    if (mapLink) {
      window.open(mapLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="storeCard">
      {/* Store name */}
      <h3 className="storeCard__name">{name}</h3>
      
      {/* Store details */}
      <div className="storeCard__details">
        {/* Address */}
        <div className="storeCard__info">
          <span className="storeCard__icon">📍</span>
          <p className="storeCard__text">{address}</p>
        </div>
        
        {/* Phone */}
        {phone && (
          <div className="storeCard__info">
            <span className="storeCard__icon">📞</span>
            <a href={`tel:${phone.replace(/\s/g, '')}`} className="storeCard__link">
              {phone}
            </a>
          </div>
        )}
      </div>
      
      {/* Map button */}
      {mapLink && (
        <button 
          className="storeCard__mapBtn" 
          onClick={handleMapClick}
          aria-label={`View ${name} on map`}
        >
          View on Map
        </button>
      )}
    </div>
  );
};

export default StoreCard;

