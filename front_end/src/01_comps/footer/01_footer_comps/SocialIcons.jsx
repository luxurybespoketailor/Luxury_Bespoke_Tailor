import React from "react";
import PropTypes from "prop-types";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import "./_styles/socialIcons.css";

const SocialIcons = ({ socialUrls }) => {
  // Icon mapping for social platforms
  const getIcon = (platform) => {
    const icons = {
      insta: Instagram,
      facebook: Facebook,
      linkedin: Linkedin,
      youtube: Youtube,
    };
    return icons[platform] || null;
  };

  return (
    <div className="socialIcons">
      {Object.entries(socialUrls).map(([platform, url]) => {
        const Icon = getIcon(platform);
        if (!Icon) return null;

        return (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcons__link"
            aria-label={platform}
          >
            <Icon className="socialIcons__icon" size={20} />
          </a>
        );
      })}
    </div>
  );
};

SocialIcons.propTypes = {
  socialUrls: PropTypes.object.isRequired,
};

SocialIcons.displayName = "SocialIcons";

export default SocialIcons;

