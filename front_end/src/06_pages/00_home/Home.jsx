import React from "react";
import heroImage from "../../00_assets/hero_sample.jpeg";
import "./_styles/home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__heroOverlay"></div>
        <img
          src={heroImage}
          alt="Luxury Bespoke Tailoring"
          className="home__heroImage"
        />
        <div className="home__heroContent">
          <h1 className="home__heroTitle">Luxury Bespoke Tailoring</h1>
          <p className="home__heroSubtitle">
            Crafted to Perfection, Tailored to You
          </p>
          <button className="home__heroBtn">Explore Our Collection</button>
        </div>
      </section>

      {/* Additional content can go here */}
      <section className="home__content">
        <h2>Welcome to Our Atelier</h2>
        <p>Experience the art of bespoke tailoring.</p>
      </section>
    </div>
  );
};

Home.displayName = "Home";

export default Home;
