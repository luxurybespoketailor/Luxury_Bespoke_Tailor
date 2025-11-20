import dotenv from "dotenv";

dotenv.config();

export const PORT = parseInt(process.env.PORT, 10) || 5000;

export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:4000";

export const setCSPHeader = (req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self'; font-src 'self' https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
  );
  next();
};

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    const isProduction = process.env.NODE_ENV === "production";

    const allowedOrigins = [];

    if (process.env.FRONTEND_URL) {
      allowedOrigins.push(process.env.FRONTEND_URL);
    }

    if (process.env.FRONT_END_URL_DOMAIN) {
      allowedOrigins.push(process.env.FRONT_END_URL_DOMAIN);
    }
    if (process.env.FRONT_END_URL_DOMAIN_WWW) {
      allowedOrigins.push(process.env.FRONT_END_URL_DOMAIN_WWW);
    }
    if (isProduction) {
      if (process.env.VERCEL_URL) {
        allowedOrigins.push(`https://${process.env.VERCEL_URL}`);
      }
      if (process.env.PREVIEW_URL) {
        allowedOrigins.push(process.env.PREVIEW_URL);
      }
    } else {
      allowedOrigins.push("http://localhost:4000");
      allowedOrigins.push("http://localhost:5173");
      if (process.env.FRONTEND_LOCAL) {
        allowedOrigins.push(process.env.FRONTEND_LOCAL);
      }
    }

    const validOrigins = allowedOrigins.filter(Boolean);

    if (validOrigins.includes(origin)) {
      return callback(null, true);
    }

    if (!isProduction) {
      console.warn(
        `⚠️ CORS: Origin "${origin}" not allowed. Allowed origins:`,
        validOrigins
      );
    }

    return callback(new Error("Not allowed by CORS"));
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};
