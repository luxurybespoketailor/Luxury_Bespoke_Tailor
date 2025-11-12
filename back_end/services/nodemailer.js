import nodemailer from "nodemailer";
import {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} from "../00_config/nodemailerConfig.js";

const displayName = " | nodemailer.js | ";
const isDebug = true;

export const createTransporter = () => {
  try {
    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
      throw new Error("Missing required email configuration");
    }

    return nodemailer.createTransport({
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: EMAIL_PORT === 465, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<TRANSPORTER>| Error creating transporter:`, error);
    throw new Error("Failed to create email transporter");
  }
};

export const sendEmail_service = async ({ to, subject, html, text }) => {
  isDebug && console.log(`💡📢❔${displayName}|<SEND_EMAIL>| [TRIGGERED] | To: ${to}`);

  try {
    // Validate required parameters
    if (!to || !subject || !html) {
      throw new Error("Missing required email parameters: to, subject, or html");
    }

    // Create transporter
    const transporter = createTransporter();

    // Verify transporter configuration
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: `"Luxury Bespoke Tailor" <${EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ""), // Fallback to plain text if text not provided
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    isDebug &&
      console.log(
        `✅ ${displayName}|<SEND_EMAIL>| [SUCCESS] | Message ID: ${info.messageId}`
      );

    return {
      success: true,
      messageId: info.messageId,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SEND_EMAIL>| catch(ERROR) |`, error);

    // Handle specific error types
    if (error.code === "EAUTH") {
      throw new Error("Email authentication failed - check your credentials");
    } else if (error.code === "ECONNECTION") {
      throw new Error("Email connection failed - check your network and SMTP settings");
    } else if (error.code === "ETIMEDOUT") {
      throw new Error("Email sending timed out - check your network connection");
    } else if (error.message.includes("Missing required")) {
      throw error;
    } else {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
};
