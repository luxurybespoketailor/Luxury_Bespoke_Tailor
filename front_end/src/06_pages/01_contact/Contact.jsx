import React from "react";
import { useContact } from "./01_contact_hooks/useContact.js";
import { ContactForm } from "./00_contact_comps/_contact_comps.index.js";
import "./_styles/contact.css";

const Contact = () => {
  const { states, handlers } = useContact();

  return (
    <div className="contact">
      <div className="contact__container">
        <h1 className="contact__title">Contact Us</h1>
        <p className="contact__subtitle">
          Get in touch with us. We'd love to hear from you.
        </p>
        <ContactForm
          formData={states.formData}
          isLoading={states.isLoading}
          isFormError={states.isFormError}
          handlers={handlers}
        />
      </div>
    </div>
  );
};

Contact.displayName = "Contact";

export default Contact;
