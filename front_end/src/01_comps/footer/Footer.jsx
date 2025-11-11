import React from "react";
import { Link } from "react-router-dom";
import { NAVBAR_ITEMS } from "../header/02_header_const/_header_const.index.js";
import {
  contactInfo,
  social_urls,
  branding,
  legalLinks,
} from "../../04_constances/_constances.index.js";
import {
  FooterBrand,
  ContactInfo,
  LegalLinks,
  SocialIcons,
} from "./01_footer_comps/_footer_comps.index.js";
import "./_styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Column 1: Logo, Branding & Location Button */}
        <div className="footer__section">
          <FooterBrand branding={branding} contactInfo={contactInfo} />
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer__section footer__navigation">
          <h3 className="footer__heading">Navigation</h3>
          <ul className="footer__list">
            {NAVBAR_ITEMS.map((item) => (
              <li key={item.id} className="footer__list-item">
                <Link to={item.href} className="footer__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Legal Links */}
        <div className="footer__section">
          <LegalLinks legalLinks={legalLinks} />
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer__section">
          <ContactInfo contactInfo={contactInfo} />
        </div>
      </div>

      {/* Social Icons Row */}
      <SocialIcons socialUrls={social_urls} />

      {/* Bottom Row: Copyright */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {currentYear} {branding.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";

export default Footer;
