import React from "react";
import { useNavigate } from "react-router-dom";
import { SectionHeading } from "../../01_comps/comps.index.js";
import {
  Placeholder_image_10,
  Placeholder_image_11,
  Placeholder_image_12,
  Placeholder_image_13,
  Placeholder_image_14,
  Placeholder_image_15,
  Placeholder_image_16,
  Placeholder_image_17,
  Placeholder_image_18,
  Placeholder_image_19,
  Placeholder_image_20,
  Placeholder_image_21,
} from "../../00_assets/assets.index.js";
import "./_styles/brands.css";

const Brands = () => {
  const navigate = useNavigate();

  // Using placeholder images as mock brand logos
  const brandLogos = [
    { id: 1, src: Placeholder_image_10, alt: "Premium fabric brand 1" },
    { id: 2, src: Placeholder_image_11, alt: "Premium fabric brand 2" },
    { id: 3, src: Placeholder_image_12, alt: "Premium fabric brand 3" },
    { id: 4, src: Placeholder_image_13, alt: "Premium fabric brand 4" },
    { id: 5, src: Placeholder_image_14, alt: "Premium fabric brand 5" },
    { id: 6, src: Placeholder_image_15, alt: "Premium fabric brand 6" },
    { id: 7, src: Placeholder_image_16, alt: "Premium fabric brand 7" },
    { id: 8, src: Placeholder_image_17, alt: "Premium fabric brand 8" },
    { id: 9, src: Placeholder_image_18, alt: "Premium fabric brand 9" },
    { id: 10, src: Placeholder_image_19, alt: "Premium fabric brand 10" },
    { id: 11, src: Placeholder_image_20, alt: "Premium fabric brand 11" },
    { id: 12, src: Placeholder_image_21, alt: "Premium fabric brand 12" },
  ];

  return (
    <div className="brands">
      {/* Page Header */}
      <section className="brands__header section">
        <div className="container">
          <SectionHeading
            title="Our Premium Fabrics & Brands"
            subtitle="We work with the world's finest fabric mills and brands to ensure exceptional quality"
          />
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="brands__grid section section--bg-cream">
        <div className="container">
          <div className="brands__gridContainer">
            {brandLogos.map((brand) => (
              <div key={brand.id} className="brands__item">
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="brands__logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="brands__description section">
        <div className="container container--lg">
          <SectionHeading title="Quality Materials" alignment="center" />
          <div className="brands__content">
            <p className="brands__text">
              At Luxury Bespoke Tailor, we believe that exceptional garments begin with exceptional materials. 
              We source our fabrics from the world's most prestigious mills, ensuring that every suit, 
              shirt, and garment we create meets the highest standards of quality and craftsmanship.
            </p>
            <p className="brands__text">
              Our fabric collection includes premium wools, luxurious silks, fine linens, and innovative 
              performance fabrics. Each material is carefully selected for its quality, durability, and 
              aesthetic appeal, allowing us to create garments that not only look exceptional but stand 
              the test of time.
            </p>
            <p className="brands__text">
              During your consultation, our expert style consultants will guide you through our extensive 
              fabric library, helping you select the perfect materials for your bespoke garments based on 
              your preferences, lifestyle, and intended use.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brands__cta section section--bg-navy">
        <div className="container">
          <div className="brands__ctaContent">
            <h2 className="brands__ctaTitle">Experience Premium Quality</h2>
            <p className="brands__ctaText">
              Visit our showroom to explore our complete fabric collection
            </p>
            <button 
              className="brands__ctaBtn btn btn--primary btn--large"
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

export default Brands;
