import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../../01_comps/comps.index.js";
import "./_styles/publicLayout.css";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default PublicLayout;
