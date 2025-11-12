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
export const sendEmailViaHttp = async ({
  to,
  subject,
  html,
  text,
  contactData,
}) => {
  isDebug &&
    console.log(
      `💡📢❔${displayName}|<SEND_EMAIL_HTTP>| [TRIGGERED] | To: ${to}`
    );

  try {
    // Validate required parameters
    if (!to || !subject || !html) {
      throw new Error(
        "Missing required email parameters: to, subject, or html"
      );
    }

    // Get access key
    const accessKey = getAccessKey();
    if (!accessKey) {
      isDebug &&
        console.error(
          `⚠️ ${displayName}|<SEND_EMAIL_HTTP>| [ERROR] | Access key not found. Please set WEB3FORMS_ACCESS_KEY or EMAIL_API_KEY environment variable.`
        );
      throw new Error(
        "WEB3FORMS_ACCESS_KEY or EMAIL_API_KEY not configured. Please set one of these environment variables in Render.com."
      );
    }

    // Log access key status (without exposing the actual key)
    isDebug &&
      console.log(
        `🔑 ${displayName}|<SEND_EMAIL_HTTP>| Access key found: ${accessKey.substring(
          0,
          8
        )}...${accessKey.substring(accessKey.length - 4)} (length: ${
          accessKey.length
        })`
      );

    // Format contact data for plain text email
    const emailBody = `
Name: ${contactData.name || "N/A"}
${contactData.service ? `Service: ${contactData.service}` : ""}
Message: ${contactData.message || "N/A"}
${contactData.phone ? `Phone: ${contactData.phone}` : ""}
${contactData.whatsapp ? `WhatsApp: ${contactData.whatsapp}` : ""}
    `.trim();

    // Prepare request data for Web3Forms
    // Web3Forms API format: https://docs.web3forms.com/getting-started/api-reference
    // Note: Recipient email is configured in Web3Forms dashboard (linked to access_key)
    // Required fields: access_key, name, message
    // Optional fields: email (sender), subject, replyto, etc.

    // Create URLSearchParams for form data format (more compatible than JSON)
    const formData = new URLSearchParams();
    formData.append("access_key", accessKey);
    formData.append("name", contactData.name || "Contact Form Submission");
    formData.append("message", emailBody);
    formData.append("subject", subject);

    // Optional: Add sender email if available (for reply-to)
    if (contactData.email) {
      formData.append("email", contactData.email);
    }

    // Optional: Add reply-to email
    if (process.env.EMAIL_USER) {
      formData.append("replyto", process.env.EMAIL_USER);
    }

    // Send email via HTTP POST (HTTPS) using form data format
    // Web3Forms accepts both JSON and form data, but form data is more compatible
    const response = await fetch(WEB3FORMS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: formData.toString(),
    });

    // Get response text first to check if it's JSON or HTML
    const responseText = await response.text();

    // Check content type
    const contentType = response.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    // If response is not JSON, log the actual response
    if (!isJson) {
      isDebug &&
        console.error(
          `⚠️ ${displayName}|<SEND_EMAIL_HTTP>| [ERROR] | Response is not JSON. Status: ${
            response.status
          }, Content-Type: ${contentType}, Response: ${responseText.substring(
            0,
            200
          )}`
        );

      // Check for common error scenarios
      if (response.status === 401 || response.status === 403) {
        throw new Error(
          "Web3Forms access key is invalid or missing. Please check your WEB3FORMS_ACCESS_KEY environment variable."
        );
      } else if (response.status === 404) {
        throw new Error(
          "Web3Forms API endpoint not found. Please verify the API URL."
        );
      } else {
        throw new Error(
          `Web3Forms returned HTML error page (Status: ${response.status}). Please check your access key and API configuration.`
        );
      }
    }

    // Parse JSON response
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      isDebug &&
        console.error(
          `⚠️ ${displayName}|<SEND_EMAIL_HTTP>| [ERROR] | Failed to parse JSON response: ${responseText.substring(
            0,
            200
          )}`
        );
      throw new Error(
        `Web3Forms returned invalid JSON. Please check your access key and API configuration.`
      );
    }

    // Check if email was sent successfully
    if (response.ok && result.success) {
      isDebug &&
        console.log(
          `✅ ${displayName}|<SEND_EMAIL_HTTP>| [SUCCESS] | Email sent successfully | Message ID: ${
            result.message_id || "N/A"
          }`
        );

      return {
        success: true,
        messageId: result.message_id || "HTTP-email-sent",
        message: "Email sent successfully via HTTP",
      };
    } else {
      // Web3Forms returned an error
      const errorMessage =
        result.message ||
        result.error ||
        `HTTP email service returned error: ${response.status}`;
      isDebug &&
        console.error(
          `⚠️ ${displayName}|<SEND_EMAIL_HTTP>| [ERROR] | Web3Forms error: ${errorMessage}`
        );
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error(
      `⚠️☠️🚨${displayName}|<SEND_EMAIL_HTTP>| catch(ERROR) |`,
      error
    );

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
  isDebug &&
    console.log(`💡📢❔${displayName}|<CONTACT_FORM_EMAIL_HTTP>| [TRIGGERED]`);

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
    console.error(
      `⚠️☠️🚨${displayName}|<CONTACT_FORM_EMAIL_HTTP>| catch(ERROR) |`,
      error
    );

    // Throw specific error with descriptive message
    const serviceError = new Error(
      error.message || "Failed to send contact form email via HTTP"
    );
    serviceError.statusCode = error.statusCode || 500;
    throw serviceError;
  }
};
