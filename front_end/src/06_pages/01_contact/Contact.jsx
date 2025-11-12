import React from "react";
import { useContact } from "./01_contact_hooks/useContact.js";
import "./_styles/contact.css";

const Contact = () => {
  const { states, handlers } = useContact();
  return <div className="contact">Contact</div>;
};

export default Contact;
