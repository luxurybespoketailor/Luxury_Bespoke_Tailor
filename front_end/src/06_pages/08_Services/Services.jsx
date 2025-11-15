import React from "react";
import { useNavigate } from "react-router-dom";
import { Hero, SectionHeading, ProcessStep } from "../../01_comps/comps.index.js";
import { services, processSteps } from "../../04_constances/_constances.index.js";
import { Placeholder_image_1 } from "../../00_assets/assets.index.js";
import "./_styles/services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="services">
      {/* Hero Section */}
      <Hero
        image={Placeholder_image_1}
        title="Our Tailoring Services"
        subtitle="Experience the ultimate in luxury bespoke tailoring"
        height="medium"
      />

      {/* Services List Section */}
      <section className="services__list section">
        <div className="container">
          <SectionHeading
            title="What We Offer"
            subtitle="Comprehensive tailoring services to meet all your needs"
          />
          
          <div className="services__items">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`services__item ${
                  index % 2 === 0 ? "services__item--left" : "services__item--right"
                }`}
              >
                <div className="services__itemContent">
                  <h3 className="services__itemTitle">{service.title}</h3>
                  <p className="services__itemDescription">{service.description}</p>
                  
                  <ul className="services__itemFeatures">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="services__itemFeature">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="services__process section section--bg-cream">
        <div className="container">
          <SectionHeading
            title="Our Process"
            subtitle="The steps to create your perfect bespoke garment"
          />
          <div className="services__processSteps">
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

      {/* CTA Section */}
      <section className="services__cta section">
        <div className="container">
          <div className="services__ctaContent">
            <h2 className="services__ctaTitle">Ready to Get Started?</h2>
            <p className="services__ctaText">
              Book your consultation today and experience the luxury of bespoke tailoring
            </p>
            <button 
              className="services__ctaBtn btn btn--primary btn--large"
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

export default Services;

