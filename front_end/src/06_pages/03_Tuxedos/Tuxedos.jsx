import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero, SectionHeading, GalleryGrid } from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_7,
  Placeholder_image_15,
  Placeholder_image_16,
  Placeholder_image_17,
} from "../../00_assets/assets.index.js";
import "./_styles/tuxedos.css";

const Tuxedos = () => {
  const navigate = useNavigate();
  const { tuxedos } = categoryDescriptions;

  // Gallery images for Tuxedos category
  const galleryImages = [
    { id: 1, src: Placeholder_image_7, alt: "Tuxedo tailoring 1" },
    { id: 2, src: Placeholder_image_15, alt: "Tuxedo tailoring 2" },
    { id: 3, src: Placeholder_image_16, alt: "Tuxedo tailoring 3" },
    { id: 4, src: Placeholder_image_17, alt: "Tuxedo tailoring 4" },
  ];

  return (
    <div className="tuxedos">
      {/* Hero Section */}
      <Hero
        image={Placeholder_image_7}
        title={tuxedos.title}
        subtitle={tuxedos.intro}
        height="medium"
      />

      {/* Description Section */}
      <section className="tuxedos__description section">
        <div className="container container--lg">
          <SectionHeading title="Timeless Elegance" alignment="left" />
          <p className="tuxedos__text">{tuxedos.mainText}</p>
          
          <div className="tuxedos__features">
            <h3 className="tuxedos__featuresTitle">Key Features</h3>
            <ul className="tuxedos__featuresList">
              {tuxedos.features.map((feature, index) => (
                <li key={index} className="tuxedos__featureItem">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="tuxedos__gallery section section--bg-cream">
        <div className="container">
          <SectionHeading 
            title="Tuxedo Gallery" 
            subtitle="Explore our black tie collection"
          />
          <GalleryGrid images={galleryImages} />
          <div className="tuxedos__galleryLink">
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
      <section className="tuxedos__cta section">
        <div className="container">
          <div className="tuxedos__ctaContent">
            <h2 className="tuxedos__ctaTitle">Interested in Tuxedos?</h2>
            <p className="tuxedos__ctaText">
              Let our master tailors create the perfect tuxedo for your special occasion
            </p>
            <button 
              className="tuxedos__ctaBtn btn btn--primary btn--large"
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

export default Tuxedos;
