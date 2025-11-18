import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Hero,
  SectionHeading,
  GalleryGrid,
} from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Woomen_1,
  Woomen_2,
  Woomen_3,
  Woomen_4,
  Woomen_5,
  Woomen_6,
  Woomen_7,
  Woomen_8,
  Woomen_9,
  Woomen_10,
  Woomen_11,
  Woomen_12,
  Woomen_13,
  Woomen_14,
  Woomen_15,
  Woomen_16,
  Woomen_17,
  Woomen_18,
  Woomen_19,
  Woomen_20,
  Woomen_21,
  Woomen_22,
  Woomen_23,
  Woomen_24,
  Woomen_25,
  Woomen_26,
  Woomen_hero,
} from "../../00_assets/assets.index.js";
import "./_styles/woomen.css";

const Woomen = () => {
  const navigate = useNavigate();
  const { womens } = categoryDescriptions;

  // Gallery images for Women's category
  const galleryImages = [
    { id: 1, src: Woomen_1, alt: "Women's tailoring 1" },
    { id: 2, src: Woomen_2, alt: "Women's tailoring 2" },
    { id: 3, src: Woomen_3, alt: "Women's tailoring 3" },
    { id: 4, src: Woomen_4, alt: "Women's tailoring 4" },
    { id: 5, src: Woomen_5, alt: "Women's tailoring 5" },
    { id: 6, src: Woomen_6, alt: "Women's tailoring 6" },
    { id: 7, src: Woomen_7, alt: "Women's tailoring 7" },
    { id: 8, src: Woomen_8, alt: "Women's tailoring 8" },
    { id: 9, src: Woomen_9, alt: "Women's tailoring 9" },
    { id: 10, src: Woomen_10, alt: "Women's tailoring 10" },
    { id: 11, src: Woomen_11, alt: "Women's tailoring 11" },
    { id: 12, src: Woomen_12, alt: "Women's tailoring 12" },
    { id: 13, src: Woomen_13, alt: "Women's tailoring 13" },
    { id: 14, src: Woomen_14, alt: "Women's tailoring 14" },
    { id: 15, src: Woomen_15, alt: "Women's tailoring 15" },
    { id: 16, src: Woomen_16, alt: "Women's tailoring 16" },
    { id: 17, src: Woomen_17, alt: "Women's tailoring 17" },
    { id: 18, src: Woomen_18, alt: "Women's tailoring 18" },
    { id: 19, src: Woomen_19, alt: "Women's tailoring 19" },
    { id: 20, src: Woomen_20, alt: "Women's tailoring 20" },
    { id: 21, src: Woomen_21, alt: "Women's tailoring 21" },
    { id: 22, src: Woomen_22, alt: "Women's tailoring 22" },
    { id: 23, src: Woomen_23, alt: "Women's tailoring 23" },
    { id: 24, src: Woomen_24, alt: "Women's tailoring 24" },
    { id: 25, src: Woomen_25, alt: "Women's tailoring 25" },
    { id: 26, src: Woomen_26, alt: "Women's tailoring 26" },

  ];

  return (
    <div className="woomen">
      {/* Hero Section */}
      <Hero
        image={Woomen_hero}
        title={womens.title}
        subtitle={womens.intro}
        height="medium"
      />

      {/* Description Section */}
      <section className="woomen__description section">
        <div className="container container--lg">
          <SectionHeading title="Empowering Elegance" alignment="left" />
          <p className="woomen__text">{womens.mainText}</p>

          <div className="woomen__features">
            <h3 className="woomen__featuresTitle">Key Features</h3>
            <ul className="woomen__featuresList">
              {womens.features.map((feature, index) => (
                <li key={index} className="woomen__featureItem">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="woomen__gallery section section--bg-cream">
        <div className="container">
          <SectionHeading
            title="Women's Gallery"
            subtitle="Explore our women's tailoring collection"
          />
          <GalleryGrid images={galleryImages} />
          <div className="woomen__galleryLink">
            <button
              className="btn btn--outline"
              onClick={() => navigate("/Gallery")}>
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="woomen__cta section">
        <div className="container">
          <div className="woomen__ctaContent">
            <h2 className="woomen__ctaTitle">
              Interested in Women's Tailoring?
            </h2>
            <p className="woomen__ctaText">
              Let our expert tailors create bespoke garments that celebrate your
              unique style
            </p>
            <button
              className="woomen__ctaBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}>
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Woomen;
