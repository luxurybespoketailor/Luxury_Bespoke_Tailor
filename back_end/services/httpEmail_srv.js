// HTTP-based Email Service for Render.com Free Tier
// Uses Web3Forms (free, works via HTTPS) instead of SMTP
// This works on Render.com free tier because it uses HTTPS (port 443), not SMTP (ports 25, 587, 465)

import { contactFormTemplate } from "./emailTemplates/_emailTemplates.index.js";

const displayName = " | httpEmail_srv.js | ";
const isDebug = true;

// Web3Forms API endpoint (free, works via HTTPS)
const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

// Get access key from environment variable
const getAccessKey = () => {
  return process.env.WEB3FORMS_ACCESS_KEY || process.env.EMAIL_API_KEY;
};

// Send email via HTTP (Web3Forms)
export const sendEmailViaHttp = async ({ to, subject, html, text, contactData }) => {
  isDebug && console.log(`💡📢❔${displayName}|<SEND_EMAIL_HTTP>| [TRIGGERED] | To: ${to}`);

  try {
    // Validate required parameters
    if (!to || !subject || !html) {
      throw new Error("Missing required email parameters: to, subject, or html");
    }

    // Get access key
    const accessKey = getAccessKey();
    if (!accessKey) {
      throw new Error(
        "WEB3FORMS_ACCESS_KEY or EMAIL_API_KEY not configured. Please set one of these environment variables."
      );
    }

    // Format contact data for plain text email
    const emailBody = `
Name: ${contactData.name || "N/A"}
${contactData.service ? `Service: ${contactData.service}` : ""}
Message: ${contactData.message || "N/A"}
${contactData.phone ? `Phone: ${contactData.phone}` : ""}
${contactData.whatsapp ? `WhatsApp: ${contactData.whatsapp}` : ""}
    `.trim();

    // Prepare request data for Web3Forms
    // Web3Forms supports both plain text and HTML emails
    const requestData = {
      access_key: accessKey,
      subject: subject,
      from_name: "Luxury Bespoke Tailor",
      email: to, // Recipient email
      message: emailBody, // Plain text version
      // HTML version (Web3Forms will use HTML if available)
      html: html,
      // Additional metadata
      replyto: contactData.email || process.env.EMAIL_USER || "",
    };

    // Send email via HTTP POST (HTTPS)
    const response = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(requestData),
    });

    // Parse response
    const result = await response.json();

    // Check if email was sent successfully
    if (response.ok && result.success) {
      isDebug &&
        console.log(
          `✅ ${displayName}|<SEND_EMAIL_HTTP>| [SUCCESS] | Email sent successfully | Message ID: ${result.message_id || "N/A"}`
        );

      return {
        success: true,
        messageId: result.message_id || "HTTP-email-sent",
        message: "Email sent successfully via HTTP",
      };
    } else {
      throw new Error(
        result.message || `HTTP email service returned error: ${response.status}`
      );
    }
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SEND_EMAIL_HTTP>| catch(ERROR) |`, error);

    // Handle specific error types
    if (error.message.includes("not configured")) {
      throw new Error(
        "Email service not configured - please set WEB3FORMS_ACCESS_KEY or EMAIL_API_KEY environment variable"
      );
    } else if (error.message.includes("fetch")) {
      throw new Error(
        "Failed to connect to email service - check your network connection"
      );
    } else {
      throw new Error(`Failed to send email via HTTP: ${error.message}`);
    }
  }
};

// Contact form email service using HTTP
export const contactFormEmailHttp_srv = async (contactData) => {
  isDebug && console.log(`💡📢❔${displayName}|<CONTACT_FORM_EMAIL_HTTP>| [TRIGGERED]`);

  try {
    // Validate admin email
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      throw new Error(
        "Admin email not configured - cannot send contact form email"
      );
    }

    // Generate email subject
    const subject = `New Contact Form Submission from ${contactData.name}`;

    // Generate email template (for HTML version)
    const { html, text } = contactFormTemplate(contactData);

    // Send email via HTTP
    const emailResult = await sendEmailViaHttp({
      to: adminEmail,
      subject: subject,
      html: html,
      text: text,
      contactData: contactData,
    });

    isDebug &&
      console.log(
        `✅ ${displayName}|<CONTACT_FORM_EMAIL_HTTP>| [SUCCESS] | Email sent to ${adminEmail}`
      );

    return {
      success: true,
      message: "Contact form email sent successfully via HTTP",
      messageId: emailResult.messageId,
    };
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<CONTACT_FORM_EMAIL_HTTP>| catch(ERROR) |`, error);

    // Throw specific error with descriptive message
    const serviceError = new Error(
      error.message || "Failed to send contact form email via HTTP"
    );
    serviceError.statusCode = error.statusCode || 500;
    throw serviceError;
  }
};
