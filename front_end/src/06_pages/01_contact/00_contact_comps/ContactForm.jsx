import React, { useState } from "react";
import PropTypes from "prop-types";
import "./_styles/contactForm.css";

const ContactForm = ({ formData, isLoading, isFormError, handlers }) => {
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage(null);

    const result = await handlers.handleSubmitForm(e);

    if (result.success) {
      setSubmitMessage({ type: "success", text: result.message });
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    } else {
      setSubmitMessage({ type: "error", text: result.error });
    }
  };

  return (
    <div className="contactForm">
      <form className="contactForm__form" onSubmit={handleSubmit}>
        {/* Name Field - Required */}
        <div className="contactForm__field">
          <label htmlFor="name" className="contactForm__label">
            Name <span className="contactForm__required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="contactForm__input"
            value={formData.name}
            onChange={(e) => handlers.handleFormChange("name", e.target.value)}
            required
            minLength={3}
            disabled={isLoading}
            aria-required="true"
            aria-invalid={isFormError && formData.name.trim().length < 3}
          />
          {isFormError && formData.name.trim().length < 3 && (
            <span className="contactForm__error">
              Name must be at least 3 characters
            </span>
          )}
        </div>

        {/* Service Field - Optional */}
        <div className="contactForm__field">
          <label htmlFor="service" className="contactForm__label">
            Service
          </label>
          <input
            type="text"
            id="service"
            name="service"
            className="contactForm__input"
            value={formData.service}
            onChange={(e) =>
              handlers.handleFormChange("service", e.target.value)
            }
            disabled={isLoading}
          />
        </div>

        {/* Message Field - Required */}
        <div className="contactForm__field">
          <label htmlFor="message" className="contactForm__label">
            Message <span className="contactForm__required">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="contactForm__textarea"
            value={formData.message}
            onChange={(e) =>
              handlers.handleFormChange("message", e.target.value)
            }
            required
            maxLength={1000}
            rows={6}
            disabled={isLoading}
            aria-required="true"
            aria-invalid={
              isFormError &&
              (formData.message.trim().length === 0 ||
                formData.message.trim().length > 1000)
            }
          />
          <div className="contactForm__charCount">
            {formData.message.length}/1000 characters
          </div>
          {isFormError &&
            (formData.message.trim().length === 0 ||
              formData.message.trim().length > 1000) && (
              <span className="contactForm__error">
                {formData.message.trim().length === 0
                  ? "Message is required"
                  : "Message must not exceed 1000 characters"}
              </span>
            )}
        </div>

        {/* Phone Field - Optional */}
        <div className="contactForm__field">
          <label htmlFor="phone" className="contactForm__label">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="contactForm__input"
            value={formData.phone}
            onChange={(e) => handlers.handleFormChange("phone", e.target.value)}
            disabled={isLoading}
          />
        </div>

        {/* WhatsApp Field - Optional */}
        <div className="contactForm__field">
          <label htmlFor="whatsapp" className="contactForm__label">
            WhatsApp Number
          </label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            className="contactForm__input"
            value={formData.whatsapp}
            onChange={(e) =>
              handlers.handleFormChange("whatsapp", e.target.value)
            }
            disabled={isLoading}
          />
        </div>

        {/* Submit Message */}
        {submitMessage && (
          <div
            className={`contactForm__message contactForm__message--${submitMessage.type}`}>
            {submitMessage.text}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="contactForm__submit"
          disabled={isLoading}
          aria-busy={isLoading}>
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

ContactForm.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    whatsapp: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isFormError: PropTypes.bool.isRequired,
  handlers: PropTypes.shape({
    handleFormChange: PropTypes.func.isRequired,
    handleSubmitForm: PropTypes.func.isRequired,
  }).isRequired,
};

ContactForm.displayName = "ContactForm";

export default ContactForm;
