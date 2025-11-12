import nodemailer from "nodemailer";
import {
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASS,
} from "../00_config/nodemailerConfig.js";

const displayName = " | nodemailer.js | ";
const isDebug = true;

// Delay helper for retry logic
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const createTransporter = () => {
  try {
    if (!EMAIL_HOST || !EMAIL_USER || !EMAIL_PASS) {
      throw new Error("Missing required email configuration");
    }

    // Enhanced configuration for Render.com free tier network constraints
    // Optimized for Gmail SMTP with increased timeouts and better connection handling
    const isSecure = EMAIL_PORT === 465; // Port 465 uses SSL, port 587 uses STARTTLS

    const transporterConfig = {
      host: EMAIL_HOST,
      port: EMAIL_PORT,
      secure: isSecure, // true for 465 (SSL), false for 587 (TLS/STARTTLS)
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
      // Significantly increased timeouts for Render.com free tier network
      // These timeouts are much longer than default to handle network restrictions
      connectionTimeout: 120000, // 120 seconds (2 minutes) - increased for Render.com
      greetingTimeout: 60000, // 60 seconds - increased for Render.com
      socketTimeout: 120000, // 120 seconds (2 minutes) - increased for Render.com
      // TLS/SSL configuration for better compatibility with Render.com
      tls: {
        rejectUnauthorized: false, // Allow self-signed certificates (needed for Render.com)
        minVersion: "TLSv1.2", // Minimum TLS version
      },
      // For port 587 (STARTTLS), require TLS
      ...(EMAIL_PORT === 587 && { requireTLS: true }),
      // Disable connection pooling for free tier (better reliability)
      pool: false,
      maxConnections: 1,
      maxMessages: 1,
      // Rate limiting (prevent too many concurrent requests)
      rateDelta: 1000, // 1 second
      rateLimit: 3, // 3 messages per second (reduced for free tier)
      // Debug logging (disabled for production)
      debug: false,
      logger: false,
    };

    return nodemailer.createTransport(transporterConfig);
  } catch (error) {
    console.error(
      `⚠️☠️🚨${displayName}|<TRANSPORTER>| Error creating transporter:`,
      error
    );
    throw new Error("Failed to create email transporter");
  }
};

export const sendEmail_service = async ({ to, subject, html, text }) => {
  isDebug &&
    console.log(`💡📢❔${displayName}|<SEND_EMAIL>| [TRIGGERED] | To: ${to}`);

  try {
    // Validate required parameters
    if (!to || !subject || !html) {
      throw new Error(
        "Missing required email parameters: to, subject, or html"
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Skip verification in production (Render.com free tier may timeout)
    // Verification is not necessary for sending emails - it's just a check
    const isProduction = process.env.NODE_ENV === "production";
    const skipVerification = isProduction;

    if (!skipVerification) {
      // Only verify in development
      try {
        // Verify with timeout (10 seconds max)
        await Promise.race([
          transporter.verify(),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Verification timeout")), 10000)
          ),
        ]);
        isDebug &&
          console.log(`✅ ${displayName}|<VERIFY>| Email transporter verified`);
      } catch (verifyError) {
        // Log warning but continue - verification might timeout on Render.com
        console.warn(
          `⚠️ ${displayName}|<VERIFY>| Email verification warning (continuing anyway):`,
          verifyError.message
        );
      }
    } else {
      isDebug &&
        console.log(
          `⏭️ ${displayName}|<VERIFY>| Skipping verification in production`
        );
    }

    // Email options
    const mailOptions = {
      from: `"Luxury Bespoke Tailor" <${EMAIL_USER}>`,
      to: to,
      subject: subject,
      html: html,
      text: text || html.replace(/<[^>]*>/g, ""), // Fallback to plain text if text not provided
    };

    // Send email with retry logic for Render.com free tier network issues
    // Retry up to 2 times with exponential backoff
    const maxRetries = 2;
    const retryDelays = [5000, 10000]; // 5s, 10s delays

    let lastError = null;
    for (let attempt = 1; attempt <= maxRetries + 1; attempt++) {
      try {
        // Send email with increased timeout (90 seconds) to match connection timeout
        // Render.com free tier may have network restrictions, so we need longer timeout
        const sendPromise = transporter.sendMail(mailOptions);
        const timeoutPromise = new Promise(
          (_, reject) =>
            setTimeout(() => reject(new Error("Send email timeout")), 90000) // 90 seconds
        );

        const info = await Promise.race([sendPromise, timeoutPromise]);

        // Success - return immediately
        isDebug &&
          console.log(
            `✅ ${displayName}|<SEND_EMAIL>| [SUCCESS] | Message ID: ${info.messageId} | Attempt: ${attempt}`
          );

        return {
          success: true,
          messageId: info.messageId,
          message: "Email sent successfully",
        };
      } catch (sendError) {
        lastError = sendError;

        // If this is the last attempt, break and throw error
        if (attempt > maxRetries) {
          break;
        }

        // Log retry attempt
        isDebug &&
          console.warn(
            `⚠️ ${displayName}|<SEND_EMAIL>| [RETRY] | Attempt ${attempt} failed, retrying in ${
              retryDelays[attempt - 1] / 1000
            }s:`,
            sendError.message
          );

        // Wait before retrying
        await delay(retryDelays[attempt - 1]);
      }
    }

    // All retries failed - throw the last error
    if (!lastError) {
      throw new Error("Email sending failed after all retry attempts");
    }
    throw lastError;
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SEND_EMAIL>| catch(ERROR) |`, error);

    // Handle specific error types
    if (error.code === "EAUTH") {
      throw new Error("Email authentication failed - check your credentials");
    } else if (error.code === "ECONNECTION") {
      throw new Error(
        "Email connection failed - check your network and SMTP settings"
      );
    } else if (
      error.code === "ETIMEDOUT" ||
      error.message.includes("timeout")
    ) {
      throw new Error(
        "Email sending timed out - Render.com free tier may have network restrictions. Please try again."
      );
    } else if (error.message.includes("Missing required")) {
      throw error;
    } else {
      throw new Error(`Failed to send email: ${error.message}`);
    }
  }
};
