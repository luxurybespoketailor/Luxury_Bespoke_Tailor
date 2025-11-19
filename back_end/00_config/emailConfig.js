import dotenv from "dotenv";

dotenv.config();


export const ADMIN_EMAIL = process.env.ADMIN_EMAIL; 


export const POSTMARK_SERVER_TOKEN = process.env.POSTMARK_SERVER_TOKEN;
export const POSTMARK_FROM_EMAIL = process.env.POSTMARK_FROM_EMAIL;


export const EMAIL_HOST = process.env.EMAIL_HOST; 
export const EMAIL_USER = process.env.EMAIL_USER; 
export const EMAIL_PASS = process.env.EMAIL_PASS; 
export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT, 10) || 587;


const validatePostmarkConfig = () => {
  const requiredVars = {
    POSTMARK_SERVER_TOKEN,
    POSTMARK_FROM_EMAIL,
    ADMIN_EMAIL,
  };

  const missingVars = Object.entries(requiredVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    console.warn(
      `⚠️ Warning: Missing Postmark configuration variables: ${missingVars.join(", ")}`
    );
    console.warn(
      "⚠️ Email service may not work properly without these variables."
    );
    console.warn(
      "⚠️ Please add these to your .env file. See POSTMARK_ENV_EXAMPLE.txt for details."
    );
  } else {
    console.log("✅ Postmark email configuration loaded successfully");
  }
};

const validateGmailConfig = () => {
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
      `⚠️ Note: Gmail/SMTP configuration incomplete. Missing: ${missingVars.join(", ")}`
    );
    console.warn("⚠️ This is OK if you're using Postmark as your email service.");
  }
};

validatePostmarkConfig();
validateGmailConfig();

