import { contactFormTemplate } from "./emailTemplates/_emailTemplates.index.js";
import { ADMIN_EMAIL } from "../00_config/config.index.js";
import { emailService_Postmark } from "./services.index.js";

const displayName = " | contactFormEmail_srv.js | ";
const isDebug = true;

export const contactFormEmail_srv = async (contactData) => {
  isDebug && console.log(`💡📢❔${displayName}|<SERVICE>| [TRIGGERED]`);

  try {
    if (!ADMIN_EMAIL) {
      throw new Error(
        "Admin email not configured - cannot send contact form email"
      );
    }

    const subject = `New Contact Form Submission from ${contactData.name}`;

    const { html, text } = contactFormTemplate(contactData);

    const emailResult = await emailService_Postmark({
      to: ADMIN_EMAIL,
      subject: subject,
      html: html,
      text: text,
    });

    isDebug &&
      console.log(
        `✅ ${displayName}|<SERVICE>| [SUCCESS] | Email sent to ${ADMIN_EMAIL}`
      );

    return {
      success: true,
      message: "Contact form email sent successfully",
      messageId: emailResult.messageId,
    };
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SERVICE>| catch(ERROR) |`, error);

    const serviceError = new Error(
      error.message || "Failed to send contact form email"
    );
    serviceError.statusCode = error.statusCode || 500;
    throw serviceError;
  }
};
