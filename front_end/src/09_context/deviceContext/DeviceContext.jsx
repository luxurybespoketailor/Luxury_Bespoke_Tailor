import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create the Theme Context
const DeviceContext = createContext();
// DeviceContext
const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const contextValue = {
    isMobile,
    isTablet,
    isDesktop,
  };

  return (
    <DeviceContext.Provider value={contextValue}>
      {children}
    </DeviceContext.Provider>
  );
};

DeviceProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

DeviceProvider.displayName = "DeviceProvider";

export { DeviceContext, DeviceProvider };
