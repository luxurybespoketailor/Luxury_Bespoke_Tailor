import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Hero,
  SectionHeading,
  GalleryGrid,
} from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Casual_1,
  Casual_2,
  Casual_3,
  Casual_4,
  Casual_5,
  Casual_6,
  Casual_7,
  Casual_8,
  Casual_9,
  Casual_10,
  Casual_11,
  Casual_12,
  Casual_13,
  Casual_14,
  Casual_15,
  Casual_16,
  Casual_hero,
} from "../../00_assets/assets.index.js";
import "./_styles/casual.css";

const Casual = () => {
  const navigate = useNavigate();
  const { casual } = categoryDescriptions;

  // Gallery images for Casual category
  const galleryImages = [
    { id: 1, src: Casual_1, alt: "Casual tailoring 1" },
    { id: 2, src: Casual_2, alt: "Casual tailoring 2" },
    { id: 3, src: Casual_3, alt: "Casual tailoring 3" },
    { id: 4, src: Casual_4, alt: "Casual tailoring 4" },
    { id: 5, src: Casual_5, alt: "Casual tailoring 5" },
    { id: 6, src: Casual_6, alt: "Casual tailoring 6" },
    { id: 7, src: Casual_7, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_8, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_9, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_10, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_11, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_12, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_13, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_14, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_15, alt: "Casual tailoring 6" },
    { id: 6, src: Casual_16, alt: "Casual tailoring 6" },
  ];

  return (
    <div className="casual">
      {/* Hero Section */}
      <Hero
        image={Casual_hero}
        title={casual.title}
        subtitle={casual.intro}
        height="medium"
      />

      {/* Description Section */}
      <section className="casual__description section">
        <div className="container container--lg">
          <SectionHeading title="Casual Excellence" alignment="left" />
          <p className="casual__text">{casual.mainText}</p>

          <div className="casual__features">
            <h3 className="casual__featuresTitle">Key Features</h3>
            <ul className="casual__featuresList">
              {casual.features.map((feature, index) => (
                <li key={index} className="casual__featureItem">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="casual__gallery section section--bg-cream">
        <div className="container">
          <SectionHeading
            title="Casual Gallery"
            subtitle="Explore our casual tailoring collection"
          />
          <GalleryGrid images={galleryImages} />
          <div className="casual__galleryLink">
            <button
              className="btn btn--outline"
              onClick={() => navigate("/Gallery")}>
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="casual__cta section">
        <div className="container">
          <div className="casual__ctaContent">
            <h2 className="casual__ctaTitle">
              Interested in Casual Tailoring?
            </h2>
            <p className="casual__ctaText">
              Let our expert tailors create the perfect casual wardrobe for you
            </p>
            <button
              className="casual__ctaBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}>
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Casual;
