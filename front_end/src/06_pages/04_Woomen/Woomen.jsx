import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero, SectionHeading, GalleryGrid } from "../../01_comps/comps.index.js";
import { categoryDescriptions } from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_8,
  Placeholder_image_18,
  Placeholder_image_19,
  Placeholder_image_20,
} from "../../00_assets/assets.index.js";
import "./_styles/woomen.css";

const Woomen = () => {
  const navigate = useNavigate();
  const { womens } = categoryDescriptions;

  // Gallery images for Women's category
  const galleryImages = [
    { id: 1, src: Placeholder_image_8, alt: "Women's tailoring 1" },
    { id: 2, src: Placeholder_image_18, alt: "Women's tailoring 2" },
    { id: 3, src: Placeholder_image_19, alt: "Women's tailoring 3" },
    { id: 4, src: Placeholder_image_20, alt: "Women's tailoring 4" },
  ];

  return (
    <div className="woomen">
      {/* Hero Section */}
      <Hero
        image={Placeholder_image_8}
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
              onClick={() => navigate("/Gallery")}
            >
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="woomen__cta section">
        <div className="container">
          <div className="woomen__ctaContent">
            <h2 className="woomen__ctaTitle">Interested in Women's Tailoring?</h2>
            <p className="woomen__ctaText">
              Let our expert tailors create bespoke garments that celebrate your unique style
            </p>
            <button 
              className="woomen__ctaBtn btn btn--primary btn--large"
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

export default Woomen;
