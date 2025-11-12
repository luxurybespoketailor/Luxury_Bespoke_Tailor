import dotenv from "dotenv";

dotenv.config();

export const PORT = parseInt(process.env.PORT, 10) || 5000; // Fallback

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:4000";

export const setCSPHeader = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
  );
  next();
};

// CORS Options - Environment-aware configuration
export const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, server-to-server, keep-alive)
    if (!origin) {
      return callback(null, true);
    }

    // Determine if we're in production
    const isProduction = process.env.NODE_ENV === "production";

    // Build allowed origins list based on environment
    const allowedOrigins = [];

    // Always include production frontend URL
    if (process.env.FRONTEND_URL) {
      allowedOrigins.push(process.env.FRONTEND_URL);
    }

    // In production: Only allow production URLs
    if (isProduction) {
      // Allow Vercel production and preview URLs
      if (process.env.VERCEL_URL) {
        allowedOrigins.push(`https://${process.env.VERCEL_URL}`);
      }
      if (process.env.PREVIEW_URL) {
        allowedOrigins.push(process.env.PREVIEW_URL);
      }
    } else {
      // In development: Allow localhost URLs
      allowedOrigins.push("http://localhost:4000");
      allowedOrigins.push("http://localhost:5173");
      if (process.env.FRONTEND_LOCAL) {
        allowedOrigins.push(process.env.FRONTEND_LOCAL);
      }
    }

    // Filter out undefined values
    const validOrigins = allowedOrigins.filter(Boolean);

    // Check if origin is in allowed list
    if (validOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Log rejected origin for debugging (only in development)
    if (!isProduction) {
      console.warn(
        `⚠️ CORS: Origin "${origin}" not allowed. Allowed origins:`,
        validOrigins
      );
    }

    // Reject origin
    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200, // Some legacy browsers (IE11) choke on 204
};
