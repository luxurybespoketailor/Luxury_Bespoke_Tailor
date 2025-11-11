import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone } from "lucide-react";
import "../_styles/contactButton.css";

const ContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <button
      className="contactButton"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      aria-label="Contact us"
    >
      <Phone className="contactButton__icon" size={20} />
      {isHovered && <span className="contactButton__text">Contact Us</span>}
    </button>
  );
};

ContactButton.displayName = "ContactButton";

export default ContactButton;

