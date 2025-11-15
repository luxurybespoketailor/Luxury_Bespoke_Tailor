import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Hero,
  CategoryCard,
  ProcessStep,
  StoreCard,
  SectionHeading,
} from "../../01_comps/comps.index.js";
import {
  store,
  processSteps,
  servicesOverview,
  lookbookPreview,
} from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_1,
  Placeholder_image_2,
  Placeholder_image_3,
  Placeholder_image_4,
  Placeholder_image_5,
  Placeholder_image_10,
  Placeholder_image_11,
  Placeholder_image_12,
  Placeholder_image_13,
  Placeholder_image_14,
  Placeholder_image_15,
} from "../../00_assets/assets.index.js";
import "./_styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  // Category data for CategoryCard components
  const categories = [
    {
      id: 1,
      title: "Casual",
      image: Placeholder_image_2,
      href: "/Casual",
    },
    {
      id: 2,
      title: "Tuxedos",
      image: Placeholder_image_3,
      href: "/Tuxedos",
    },
    {
      id: 3,
      title: "Women's",
      image: Placeholder_image_4,
      href: "/Woomen",
    },
    {
      id: 4,
      title: "Wedding",
      image: Placeholder_image_5,
      href: "/Wedding",
    },
  ];

  // Lookbook preview images
  const lookbookImages = [
    Placeholder_image_10,
    Placeholder_image_11,
    Placeholder_image_12,
    Placeholder_image_13,
    Placeholder_image_14,
    Placeholder_image_15,
  ];

  return (
    <div className="home">
      {/* Section 1: Hero */}
      <Hero
        image={Placeholder_image_1}
        title="Experience Luxury Bespoke Tailoring"
        subtitle="Crafted to Perfection, Tailored to You"
        ctaText="Book Your Appointment"
        ctaLink="/contact"
        height="full"
      />

      {/* Section 2: Categories */}
      <section className="home__categories section">
        <div className="container">
          <SectionHeading
            title="Our Collections"
            subtitle="Discover our range of bespoke tailoring services"
          />
          <div className="home__categoriesGrid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                image={category.image}
                title={category.title}
                href={category.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Process Steps */}
      <section className="home__process section section--bg-cream">
        <div className="container">
          <SectionHeading
            title="The Steps To Create Your Best Suit Yet"
            subtitle="Our meticulous process ensures perfection in every detail"
          />
          <div className="home__processSteps">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.id}
                stepNumber={step.stepNumber}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Services Overview */}
      <section className="home__services section">
        <div className="container container--lg">
          <SectionHeading title={servicesOverview.title} />
          <div className="home__servicesContent">
            <p className="home__servicesText">{servicesOverview.description}</p>
            <p className="home__servicesText">
              {servicesOverview.additionalText}
            </p>
            <button
              className="home__servicesBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}
            >
              See Our Full Services
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Lookbook Preview */}
      <section className="home__lookbook section section--bg-cream">
        <div className="container">
          <SectionHeading
            title={lookbookPreview.title}
            subtitle={lookbookPreview.description}
          />
          <div className="home__lookbookGrid">
            {lookbookImages.map((image, index) => (
              <div key={index} className="home__lookbookItem">
                <img
                  src={image}
                  alt={`Lookbook inspiration ${index + 1}`}
                  className="home__lookbookImage"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <div className="home__lookbookCta">
            <button
              className="btn btn--secondary btn--large"
              onClick={() => navigate("/Gallery")}
            >
              Explore Our Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Store Location */}
      <section className="home__store section">
        <div className="container">
          <SectionHeading
            title="Visit Our Showroom"
            subtitle="Experience luxury bespoke tailoring at our Dubai location"
          />
          <div className="home__storeContainer">
            <StoreCard
              name={store.name}
              address={store.address}
              phone={store.phone}
              mapLink={store.mapLink}
            />
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="home__finalCta section section--bg-navy">
        <div className="container">
          <div className="home__finalCtaContent">
            <h2 className="home__finalCtaTitle">Ready to Experience Luxury?</h2>
            <p className="home__finalCtaText">
              Let us create the perfect bespoke garments tailored just for you
            </p>
            <button
              className="home__finalCtaBtn btn btn--primary btn--large"
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

Home.displayName = "Home";

export default Home;
