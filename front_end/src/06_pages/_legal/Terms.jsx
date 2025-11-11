import React from "react";
import "./_styles/legal.css";

const Terms = () => {
  return (
    <div className="legal">
      <div className="legal__container">
        <h1 className="legal__title">Terms & Conditions</h1>
        <p className="legal__date">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="legal__section">
          <h2>Agreement to Terms</h2>
          <p>
            By accessing and using Luxury Bespoke Tailor services, you agree to be bound by these Terms and Conditions. Please read them carefully before placing an order.
          </p>
        </section>

        <section className="legal__section">
          <h2>Services</h2>
          <p>
            We provide bespoke tailoring services including custom suits, shirts, and accessories. All garments are made to order based on individual measurements and specifications.
          </p>
        </section>

        <section className="legal__section">
          <h2>Orders and Payments</h2>
          <p>
            Orders are confirmed upon receipt of payment. We accept various payment methods and provide secure transaction processing. Production time varies based on the complexity of the garment.
          </p>
        </section>

        <section className="legal__section">
          <h2>Returns and Alterations</h2>
          <p>
            Due to the bespoke nature of our products, returns are subject to specific conditions. We offer complimentary alterations within 30 days of delivery.
          </p>
        </section>
      </div>
    </div>
  );
};

Terms.displayName = "Terms";

export default Terms;
