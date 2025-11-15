import React from "react";
import { useContact } from "./01_contact_hooks/useContact.js";
import { ContactForm } from "./00_contact_comps/_contact_comps.index.js";
import { SectionHeading, StoreCard } from "../../01_comps/comps.index.js";
import { store, businessHours } from "../../04_constances/_constances.index.js";
import "./_styles/contact.css";

const Contact = () => {
  const { states, handlers } = useContact();

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact__header section--small">
        <div className="container">
          <SectionHeading
            title="Book Your Appointment"
            subtitle="Begin your bespoke tailoring journey with us"
          />
        </div>
      </section>

      {/* Form Section */}
      <section className="contact__form section">
        <div className="container container--lg">
          <div className="contact__formContainer">
            <ContactForm
              formData={states.formData}
              isLoading={states.isLoading}
              isFormError={states.isFormError}
              handlers={handlers}
            />
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="contact__store section section--bg-cream">
        <div className="container">
          <SectionHeading
            title="Visit Our Showroom"
            subtitle="Experience luxury bespoke tailoring at our Dubai location"
          />
          <div className="contact__storeContainer">
            <StoreCard
              name={store.name}
              address={store.address}
              phone={store.phone}
              mapLink={store.mapLink}
            />
          </div>
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="contact__hours section">
        <div className="container container--md">
          <SectionHeading title="Business Hours" />
          <div className="contact__hoursContent">
            <div className="contact__hoursItem">
              <span className="contact__hoursDay">Monday - Friday</span>
              <span className="contact__hoursTime">9:00 AM - 8:00 PM</span>
            </div>
            <div className="contact__hoursItem">
              <span className="contact__hoursDay">Saturday</span>
              <span className="contact__hoursTime">10:00 AM - 6:00 PM</span>
            </div>
            <div className="contact__hoursItem">
              <span className="contact__hoursDay">Sunday</span>
              <span className="contact__hoursTime">By Appointment Only</span>
            </div>
          </div>
          <p className="contact__hoursNote">
            We recommend booking an appointment to ensure personalized attention from our expert consultants.
          </p>
        </div>
      </section>
    </div>
  );
};

Contact.displayName = "Contact";

export default Contact;
