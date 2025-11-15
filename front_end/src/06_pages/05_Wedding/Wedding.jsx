import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero, SectionHeading, GalleryGrid } from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_9,
  Placeholder_image_21,
  Placeholder_image_5,
  Placeholder_image_17,
} from "../../00_assets/assets.index.js";
import "./_styles/wedding.css";

const Wedding = () => {
  const navigate = useNavigate();
  const { wedding } = categoryDescriptions;

  // Gallery images for Wedding category
  const galleryImages = [
    { id: 1, src: Placeholder_image_9, alt: "Wedding tailoring 1" },
    { id: 2, src: Placeholder_image_21, alt: "Wedding tailoring 2" },
    { id: 3, src: Placeholder_image_5, alt: "Wedding tailoring 3" },
    { id: 4, src: Placeholder_image_17, alt: "Wedding tailoring 4" },
  ];

  return (
    <div className="wedding">
      {/* Hero Section */}
      <Hero
        image={Placeholder_image_9}
        title={wedding.title}
        subtitle={wedding.intro}
        height="medium"
      />

      {/* Description Section */}
      <section className="wedding__description section">
        <div className="container container--lg">
          <SectionHeading title="Your Perfect Day" alignment="left" />
          <p className="wedding__text">{wedding.mainText}</p>
          
          <div className="wedding__features">
            <h3 className="wedding__featuresTitle">Key Features</h3>
            <ul className="wedding__featuresList">
              {wedding.features.map((feature, index) => (
                <li key={index} className="wedding__featureItem">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="wedding__gallery section section--bg-cream">
        <div className="container">
          <SectionHeading 
            title="Wedding Gallery" 
            subtitle="Explore our wedding tailoring collection"
          />
          <GalleryGrid images={galleryImages} />
          <div className="wedding__galleryLink">
            <button 
              className="btn btn--outline"
              onClick={() => navigate("/Gallery")}
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="wedding__cta section">
        <div className="container">
          <div className="wedding__ctaContent">
            <h2 className="wedding__ctaTitle">Planning Your Wedding?</h2>
            <p className="wedding__ctaText">
              Let us create the perfect attire for your special day and wedding party
            </p>
            <button 
              className="wedding__ctaBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}
            >
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
