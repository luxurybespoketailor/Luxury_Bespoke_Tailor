import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

// Lazy load components
const Home = lazy(() => import("../../06_pages/00_home/Home.jsx"));

const Contact = lazy(() => import("../../06_pages/01_contact/Contact.jsx"));
const Test = lazy(() => import("../../06_pages/test/Test.jsx"));

//
const FAQ = lazy(() => import("../../06_pages/_legal/FAQ.jsx"));
const Privacy = lazy(() => import("../../06_pages/_legal/Privacy.jsx"));
const Terms = lazy(() => import("../../06_pages/_legal/Terms.jsx"));
const Casual = lazy(() => import("../../06_pages/02_Casual/Casual.jsx"));
const Tuxedos = lazy(() => import("../../06_pages/03_Tuxedos/Tuxedos.jsx"));
const Woomen = lazy(() => import("../../06_pages/04_Woomen/Woomen.jsx"));
const Wedding = lazy(() => import("../../06_pages/05_Wedding/Wedding.jsx"));
const Gallery = lazy(() => import("../../06_pages/06_Gallery/Gallery.jsx"));
const Brands = lazy(() => import("../../06_pages/07_Brands/Brands.jsx"));
const Services = lazy(() => import("../../06_pages/08_Services/Services.jsx"));

/*




















    href: "/",
    href: "/about",
    href: "/services",
    href: "/products",
    href: "/products",
    href: "/products",
    href: "/contact",


*/
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="test" element={<Test />} />

      <Route path="" element={<Home />} />

      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />

      <Route path="Casual" element={<Casual />} />
      <Route path="Tuxedos" element={<Tuxedos />} />
      <Route path="Woomen" element={<Woomen />} />
      <Route path="Wedding" element={<Wedding />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="Brands" element={<Brands />} />
      <Route path="Services" element={<Services />} />
    </Routes>
  );
};

export default PublicRoutes;
