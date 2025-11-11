import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import Logo from "../logo/Logo.jsx";
import {
  NavBar,
  NavBar_left,
  NavBar_right,
  Hamburger,
  ContactButton,
} from "./01_header_comps/_header_comps.index";
import { useDeviceContext } from "../../09_context/context.index.js";
import "./_styles/header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMobile } = useDeviceContext();

  // Scroll listener for transparent/solid background toggle
  useEffect(() => {
    const handleScroll = () => {
      // Toggle scrolled state if user scrolls more than 50px
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Check scroll position on mount
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close menu when navigating (passed to NavBar)
  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        {/* Mobile: Hamburger on left, logo center, contact button on right */}

        {/* Desktop: NavBar_left, Logo (centered), NavBar_right */}
        {!isMobile && (
          <>
            <NavBar_left version="Header" />
            <Logo version="Header" />
            <NavBar_right version="Header" />
          </>
        )}
      </div>
      {isMobile && (
        <div className="header__container">
          <Hamburger isOpen={isMobileMenuOpen} onClick={handleMenuToggle} />
          <Logo version="Header" />
          <ContactButton />
        </div>
      )}
      {/* Mobile menu - rendered separately for full screen (outside container) */}
      {isMobile && (
        <NavBar
          version="Header"
          isOpen={isMobileMenuOpen}
          onLinkClick={handleLinkClick}
        />
      )}
    </header>
  );
};

Header.displayName = "Header";

export default Header;
