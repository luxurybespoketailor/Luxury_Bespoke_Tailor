import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero, SectionHeading, GalleryGrid } from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_7,
  Placeholder_image_15,
  Placeholder_image_16,
  Placeholder_image_17,
  Tuxedo_1,
  Tuxedo_2,
  Tuxedo_3,
  Tuxedo_4,
  Tuxedo_5,
  Tuxedo_6,
  Tuxedo_7,
  Tuxedo_8,
  Tuxedo_9,
  Tuxedo_10,
  Tuxedo_11,
  Tuxedo_12,
  Tuxedo_13,
  Tuxedo_14,
  Tuxedo_15,
  Tuxedo_16,
  Tuxedo_17,
  Tuxedo_18,
  Tuxedo_19,
  Tuxedo_20,
  Tuxedo_21,
  Tuxedo_22,
  Tuxedo_hero,
} from "../../00_assets/assets.index.js";
import "./_styles/tuxedos.css";

const Tuxedos = () => {
  const navigate = useNavigate();
  const { tuxedos } = categoryDescriptions;

  // Gallery images for Tuxedos category
  const galleryImages = [
    { id: 1, src: Tuxedo_1, alt: "Tuxedo tailoring 1" },
    { id: 2, src: Tuxedo_2, alt: "Tuxedo tailoring 2" },
    { id: 3, src: Tuxedo_3, alt: "Tuxedo tailoring 3" },
    { id: 4, src: Tuxedo_4, alt: "Tuxedo tailoring 4" },
    { id: 5, src: Tuxedo_5, alt: "Tuxedo tailoring 5" },
    { id: 6, src: Tuxedo_6, alt: "Tuxedo tailoring 6" },
    { id: 7, src: Tuxedo_7, alt: "Tuxedo tailoring 7" },
    { id: 8, src: Tuxedo_8, alt: "Tuxedo tailoring 8" },
    { id: 9, src: Tuxedo_9, alt: "Tuxedo tailoring 9" },
    { id: 10, src: Tuxedo_10, alt: "Tuxedo tailoring 10" },
    { id: 11, src: Tuxedo_11, alt: "Tuxedo tailoring 11" },
    { id: 12, src: Tuxedo_12, alt: "Tuxedo tailoring 12" },
    { id: 13, src: Tuxedo_13, alt: "Tuxedo tailoring 13" },
    { id: 14, src: Tuxedo_14, alt: "Tuxedo tailoring 14" },
    { id: 15, src: Tuxedo_15, alt: "Tuxedo tailoring 15" },
    { id: 16, src: Tuxedo_16, alt: "Tuxedo tailoring 16" },
    { id: 17, src: Tuxedo_17, alt: "Tuxedo tailoring 17" },
    { id: 18, src: Tuxedo_18, alt: "Tuxedo tailoring 18" },
    { id: 19, src: Tuxedo_19, alt: "Tuxedo tailoring 19" },
    { id: 20, src: Tuxedo_20, alt: "Tuxedo tailoring 20" },
    { id: 21, src: Tuxedo_21, alt: "Tuxedo tailoring 21" },
    { id: 22, src: Tuxedo_22, alt: "Tuxedo tailoring 22" },
  ];

  return (
    <div className="tuxedos">
      {/* Hero Section */}
      <Hero
        image={Tuxedo_hero}
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
