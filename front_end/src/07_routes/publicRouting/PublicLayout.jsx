import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer, WhatsAppButton } from "../../01_comps/comps.index.js";
import "./_styles/publicLayout.css";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PublicLayout;
