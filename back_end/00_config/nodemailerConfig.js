import dotenv from "dotenv";

dotenv.config();

export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT, 10) || 587; // Fallback to 587

export const EMAIL_HOST = process.env.EMAIL_HOST; // e.g., smtp.gmail.com
export const EMAIL_USER = process.env.EMAIL_USER; // Gmail address
export const EMAIL_PASS = process.env.EMAIL_PASS; // Gmail App Password
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL; // Recipient email for contact form submissions

// Validate required email configuration
const validateEmailConfig = () => {
  const requiredVars = {
    EMAIL_HOST,
    EMAIL_USER,
    EMAIL_PASS,
    ADMIN_EMAIL,
  };

  const missingVars = Object.entries(requiredVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.warn(
      `⚠️ Warning: Missing email configuration variables: ${missingVars.join(", ")}`
    );
    console.warn(
      "⚠️ Email service may not work properly without these variables."
    );
  }
};

// Validate on module load
validateEmailConfig();
