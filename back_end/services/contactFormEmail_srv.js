import { sendEmail_service } from "./nodemailer.js";
import { contactFormEmailHttp_srv } from "./httpEmail_srv.js";
import { contactFormTemplate } from "./emailTemplates/_emailTemplates.index.js";
import { ADMIN_EMAIL } from "../00_config/nodemailerConfig.js";
import dotenv from "dotenv";
dotenv.config();

const displayName = " | contactFormEmail_srv.js | ";
const isDebug = true;

export const contactFormEmail_srv = async (contactData) => {
  isDebug && console.log(`💡📢❔${displayName}|<SERVICE>| [TRIGGERED]`);

  try {
    // Validate admin email
    if (!ADMIN_EMAIL) {
      throw new Error(
        "Admin email not configured - cannot send contact form email"
      );
    }

    // Determine which email service to use
    // In production (Render.com), use HTTP-based service (Web3Forms) because SMTP is blocked
    // In development, use SMTP (Nodemailer) for faster local testing
    const isProduction = process.env.NODE_ENV === "production";
    const useHttpEmail = isProduction || process.env.USE_HTTP_EMAIL === "true";

    if (useHttpEmail) {
      // Use HTTP-based email service (works on Render.com free tier)
      isDebug &&
        console.log(
          `📧 ${displayName}|<SERVICE>| Using HTTP-based email service (Web3Forms)`
        );
      return await contactFormEmailHttp_srv(contactData);
    } else {
      // Use SMTP email service (Nodemailer) for local development
      isDebug &&
        console.log(
          `📧 ${displayName}|<SERVICE>| Using SMTP email service (Nodemailer)`
        );

      // Generate email subject
      const subject = `New Contact Form Submission from ${contactData.name}`;

      // Generate email template
      const { html, text } = contactFormTemplate(contactData);

      // Send email to admin via SMTP
      const emailResult = await sendEmail_service({
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
    }
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SERVICE>| catch(ERROR) |`, error);

    // Throw specific error with descriptive message
    const serviceError = new Error(
      error.message || "Failed to send contact form email"
    );
    serviceError.statusCode = error.statusCode || 500;
    throw serviceError;
  }
};
