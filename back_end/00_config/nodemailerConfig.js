import dotenv from "dotenv";

dotenv.config();

export const EMAIL_PORT = parseInt(process.env.EMAIL_PORT, 10) || 587; // ? Fallback

export const EMAIL_HOST = process.env.EMAIL_HOST; // e.g., smtp.gmail.com

export const EMAIL_USER = process.env.EMAIL_USER; // My email
export const EMAIL_PASS = process.env.EMAIL_PASS; // My email password or app-specific password
