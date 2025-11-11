import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create the Device Context
const DeviceContext = createContext();

// Breakpoints for device detection
const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};

// DeviceContext Provider
const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Function to detect device type based on window width
    const detectDevice = () => {
      const width = window.innerWidth;

      if (width < BREAKPOINTS.MOBILE) {
        setIsMobile(true);
        setIsTablet(false);
        setIsDesktop(false);
      } else if (width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET) {
        setIsMobile(false);
        setIsTablet(true);
        setIsDesktop(false);
      } else {
        setIsMobile(false);
        setIsTablet(false);
        setIsDesktop(true);
      }
    };

    // Detect on mount
    detectDevice();

    // Add resize listener
    window.addEventListener("resize", detectDevice);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", detectDevice);
    };
  }, []);

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
