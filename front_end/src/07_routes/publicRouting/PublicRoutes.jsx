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
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="test" element={<Test />} />

      <Route path="" element={<Home />} />

      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FAQ />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
    </Routes>
  );
};

export default PublicRoutes;
