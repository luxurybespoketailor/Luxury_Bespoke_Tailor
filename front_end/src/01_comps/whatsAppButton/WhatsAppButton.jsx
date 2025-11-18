import React from "react";
import { whatsApp_logo } from "../../00_assets/assets.index.js";
import { contactInfo } from "../../04_constances/_constances.index.js";
import "./whatsAppButton.css";

/**
 * WhatsAppButton - Floating action button for WhatsApp contact
 * Fixed position at bottom-right corner, opens WhatsApp with pre-filled number
 */
const WhatsAppButton = () => {
  // Format WhatsApp URL with phone number (remove + and spaces)
  const formattedNumber = contactInfo.whatsapp.replace(/[\s+]/g, "");
  const whatsappUrl = `https://wa.me/${formattedNumber}`;

  const handleClick = () => {
    // Open WhatsApp in new tab/app
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      className="whatsAppButton"
      onClick={handleClick}
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp">
      <img
        src={whatsApp_logo}
        alt="WhatsApp"
        className="whatsAppButton__icon"
      />
    </button>
  );
};

export default WhatsAppButton;
