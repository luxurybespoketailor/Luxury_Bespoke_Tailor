import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const DeviceContext = createContext();

const BREAKPOINTS = {
  MOBILE: 768,
  TABLET: 1024,
};

const DeviceProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
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

    detectDevice();

    window.addEventListener("resize", detectDevice);

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
