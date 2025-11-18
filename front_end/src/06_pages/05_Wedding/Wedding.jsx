import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Hero,
  SectionHeading,
  GalleryGrid,
} from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_9,
  Placeholder_image_21,
  Placeholder_image_5,
  Placeholder_image_17,
  Wedding_hero,
  Wedding_1,
  Wedding_2,
  Wedding_3,
  Wedding_4,
  Wedding_5,
  Wedding_6,
  Wedding_7,
  Wedding_8,
  Wedding_9,
  Wedding_10,
  Wedding_11,
  Wedding_12,
  Wedding_13,
  Wedding_14,
  Wedding_15,
  Wedding_16,
  Wedding_17,
  Wedding_18,
  Wedding_19,
  Wedding_20,
  Wedding_21,
  Wedding_22,
  Wedding_23,
  Wedding_24,
  Wedding_25,
  Wedding_26,
  Wedding_27,
  Wedding_28,
  Wedding_29,
  Wedding_30,
  Wedding_31,
} from "../../00_assets/assets.index.js";
import "./_styles/wedding.css";

const Wedding = () => {
  const navigate = useNavigate();
  const { wedding } = categoryDescriptions;

  // Gallery images for Wedding category
  const galleryImages = [
    { id: 1, src: Wedding_1, alt: "Wedding tailoring 1" },
    { id: 2, src: Wedding_2, alt: "Wedding tailoring 2" },
    { id: 3, src: Wedding_3, alt: "Wedding tailoring 3" },
    { id: 4, src: Wedding_4, alt: "Wedding tailoring 4" },
    { id: 5, src: Wedding_5, alt: "Wedding tailoring 5" },
    { id: 6, src: Wedding_6, alt: "Wedding tailoring 6" },
    { id: 7, src: Wedding_7, alt: "Wedding tailoring 7" },
    { id: 8, src: Wedding_8, alt: "Wedding tailoring 8" },
    { id: 9, src: Wedding_9, alt: "Wedding tailoring 9" },
    { id: 10, src: Wedding_10, alt: "Wedding tailoring 10" },
    { id: 11, src: Wedding_11, alt: "Wedding tailoring 11" },
    { id: 12, src: Wedding_12, alt: "Wedding tailoring 12" },
    { id: 13, src: Wedding_13, alt: "Wedding tailoring 13" },
    { id: 14, src: Wedding_14, alt: "Wedding tailoring 14" },
    { id: 15, src: Wedding_15, alt: "Wedding tailoring 15" },
    { id: 16, src: Wedding_16, alt: "Wedding tailoring 16" },
    { id: 17, src: Wedding_17, alt: "Wedding tailoring 17" },
    { id: 18, src: Wedding_18, alt: "Wedding tailoring 18" },
    { id: 19, src: Wedding_19, alt: "Wedding tailoring 19" },
    { id: 20, src: Wedding_20, alt: "Wedding tailoring 20" },
    { id: 21, src: Wedding_21, alt: "Wedding tailoring 21" },
    { id: 22, src: Wedding_22, alt: "Wedding tailoring 22" },
    { id: 23, src: Wedding_23, alt: "Wedding tailoring 23" },
    { id: 24, src: Wedding_24, alt: "Wedding tailoring 24" },
    { id: 25, src: Wedding_25, alt: "Wedding tailoring 25" },
    { id: 26, src: Wedding_26, alt: "Wedding tailoring 26" },
    { id: 27, src: Wedding_27, alt: "Wedding tailoring 27" },
    { id: 28, src: Wedding_28, alt: "Wedding tailoring 28" },
    { id: 29, src: Wedding_29, alt: "Wedding tailoring 29" },
    { id: 30, src: Wedding_30, alt: "Wedding tailoring 30" },
    { id: 31, src: Wedding_31, alt: "Wedding tailoring 31" },
  ];

  return (
    <div className="wedding">
      {/* Hero Section */}
      <Hero
        image={Wedding_hero}
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
              onClick={() => navigate("/Gallery")}>
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
              Let us create the perfect attire for your special day and wedding
              party
            </p>
            <button
              className="wedding__ctaBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}>
              Book Your Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
