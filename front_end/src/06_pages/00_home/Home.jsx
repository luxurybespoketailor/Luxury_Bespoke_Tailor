import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Hero,
  CategoryCard,
  ProcessStep,
  StoreCard,
  SectionHeading,
  BrandCarousel,
} from "../../01_comps/comps.index.js";
import {
  store,
  freeHomeService,
  processSteps,
  servicesOverview,
  lookbookPreview,
  brandLogosData,
} from "../../04_constances/_constances.index.js";
import {
  Placeholder_image_1,
  Placeholder_image_2,
  Placeholder_image_5,
  Bastine_logo,
  Dormeul_logo,
  Drago_Lanificio_logo,
  Emilio_Rocco_logo,
  Giorgio_Alberto,
  Lanificio_Cerruti_logo,
  Lanificio_fi_Marzoni_logo,
  loro_Piana_logo,
  Luiciano_Tango_logo,
  Palazzo_logo,
  Reda_logo,
  Scabal_logo,
  Vitale_Barberis_logo,
  Zegna_logo,
  //
  Casual_1,
  Casual_5,
  Tuxedo_16,
  Wedding_30,
  Wedding_31,
  XXX,
} from "../../00_assets/assets.index.js";
import "./_styles/home.css";

const Home = () => {
  const navigate = useNavigate();

  // Brand logos array with imported images
  const brandLogos = [
    { src: Bastine_logo, alt: brandLogosData[0].alt },
    { src: Dormeul_logo, alt: brandLogosData[1].alt },
    { src: Drago_Lanificio_logo, alt: brandLogosData[2].alt },
    { src: Emilio_Rocco_logo, alt: brandLogosData[3].alt },
    { src: Giorgio_Alberto, alt: brandLogosData[4].alt },
    { src: Lanificio_Cerruti_logo, alt: brandLogosData[5].alt },
    { src: Lanificio_fi_Marzoni_logo, alt: brandLogosData[6].alt },
    { src: loro_Piana_logo, alt: brandLogosData[7].alt },
    { src: Luiciano_Tango_logo, alt: brandLogosData[8].alt },
    { src: Palazzo_logo, alt: brandLogosData[9].alt },
    { src: Reda_logo, alt: brandLogosData[10].alt },
    { src: Scabal_logo, alt: brandLogosData[11].alt },
    { src: Vitale_Barberis_logo, alt: brandLogosData[12].alt },
    { src: Zegna_logo, alt: brandLogosData[13].alt },
  ];

  // Category data for CategoryCard components
  const categories = [
    {
      id: 2,
      title: "Formal",
      image: Tuxedo_16,
      href: "/Formal",
    },
    {
      id: 1,
      title: "Casual",
      image: Placeholder_image_2,
      href: "/Casual",
    },
    {
      id: 3,
      title: "Women's",
      image: Casual_1,
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
    Casual_1,
    Casual_5,
    Tuxedo_16,
    Wedding_30,
    Wedding_31,
    XXX,
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

      {/* Section 4: Free Home Service */}
      <section className="home__homeService section">
        <div className="container container--lg">
          <SectionHeading
            title={freeHomeService.title}
            subtitle={freeHomeService.subtitle}
          />
          <div className="home__homeServiceContent">
            <p className="home__homeServiceText">
              {freeHomeService.description}
            </p>
            <div className="home__homeServiceFeatures">
              <ul className="home__homeServiceList">
                {freeHomeService.features.map((feature, index) => (
                  <li key={index} className="home__homeServiceItem">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="home__homeServiceBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}>
              Schedule Free Home Visit
            </button>
          </div>
        </div>
      </section>

      {/* Section 5: Services Overview */}
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
              onClick={() => navigate("/contact")}>
              See Our Full Services
            </button>
          </div>
        </div>
      </section>

      {/* Section 6: Lookbook Preview */}
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
              onClick={() => navigate("/Gallery")}>
              Explore Our Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Section 7: Store Location */}
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

      {/* Section 8: Brand Carousel */}
      <section className="home__brands">
        <div className="container">
          <SectionHeading
            title="Premium Fabric Partners"
            subtitle="We work exclusively with the world's finest fabric mills"
          />
        </div>
        <BrandCarousel logos={brandLogos} />
      </section>

      {/* Section 9: Final CTA */}
      <section className="home__finalCta section section--bg-navy">
        <div className="container">
          <div className="home__finalCtaContent">
            <h2 className="home__finalCtaTitle">Ready to Experience Luxury?</h2>
            <p className="home__finalCtaText">
              Let us create the perfect bespoke garments tailored just for you
            </p>
            <button
              className="home__finalCtaBtn btn btn--primary btn--large"
              onClick={() => navigate("/contact")}>
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
