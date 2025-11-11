import React from "react";
import "./_styles/legal.css";

const Privacy = () => {
  return (
    <div className="legal">
      <div className="legal__container">
        <h1 className="legal__title">Privacy Policy</h1>
        <p className="legal__date">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="legal__section">
          <h2>Introduction</h2>
          <p>
            At Luxury Bespoke Tailor, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information.
          </p>
        </section>

        <section className="legal__section">
          <h2>Information We Collect</h2>
          <p>
            We collect information that you provide directly to us, including:
          </p>
          <ul>
            <li>Name and contact information</li>
            <li>Measurement details for tailoring services</li>
            <li>Order and payment information</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section className="legal__section">
          <h2>How We Use Your Information</h2>
          <p>
            We use your information to provide and improve our tailoring services, process orders, communicate with you, and ensure the best customer experience.
          </p>
        </section>

        <section className="legal__section">
          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us at info@luxurybespoketailor.com
          </p>
        </section>
      </div>
    </div>
  );
};

Privacy.displayName = "Privacy";

export default Privacy;
