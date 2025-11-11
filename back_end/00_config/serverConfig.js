import dotenv from "dotenv";

dotenv.config();

export const PORT = parseInt(process.env.PORT, 10) || 5000; // ? Fallback

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:4000";

export const setCSPHeader = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
  );
  next();
};

export const corsOptions = {
  origin: FRONTEND_URL, // !important: Frontend
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
