import React from "react";
import "./_styles/legal.css";

const FAQ = () => {
  return (
    <div className="legal">
      <div className="legal__container">
        <h1 className="legal__title">Frequently Asked Questions</h1>
        
        <section className="legal__section">
          <h2>How long does it take to create a bespoke suit?</h2>
          <p>
            The production time for a bespoke suit typically ranges from 6 to 8 weeks, depending on the complexity of the design and current order volume.
          </p>
        </section>

        <section className="legal__section">
          <h2>Do you offer measurement appointments?</h2>
          <p>
            Yes, we offer complimentary measurement appointments at our atelier. You can also use our online measurement guide or visit one of our partner locations.
          </p>
        </section>

        <section className="legal__section">
          <h2>What fabrics do you offer?</h2>
          <p>
            We source premium fabrics from renowned mills worldwide, including Italian wool, English tweed, and Swiss cotton. Our collection includes over 5,000 fabric options.
          </p>
        </section>

        <section className="legal__section">
          <h2>Can I make changes after placing an order?</h2>
          <p>
            Minor changes can be made within 48 hours of order placement. Once production begins, changes may incur additional fees depending on the stage of completion.
          </p>
        </section>

        <section className="legal__section">
          <h2>Do you ship internationally?</h2>
          <p>
            Yes, we ship worldwide. International shipping times vary by location, typically taking 5-10 business days. Customs duties may apply based on your country's regulations.
          </p>
        </section>
      </div>
    </div>
  );
};

FAQ.displayName = "FAQ";

export default FAQ;
