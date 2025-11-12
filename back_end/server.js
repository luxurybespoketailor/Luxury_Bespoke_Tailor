import express from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT, corsOptions, setCSPHeader } from "./00_config/config.index.js";
import {
  health_routes,
  email_routes,
  contact_routes,
  keepAlive_routes,
} from "./routes.js";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./01-controllers/controllers.index.js";
import { keepAlive_srv } from "./services/services.index.js";

const app = express();

// Trust proxy - REQUIRED for Render.com (sits behind a proxy/load balancer)
// This fixes the express-rate-limit X-Forwarded-For warning
app.set("trust proxy", 1);

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

// Security Notes:
// - XSS protection is already provided by Helmet's Content Security Policy
// - xss-clean and express-mongo-sanitize are removed as they're incompatible with Express 5
// - Data sanitization is handled in the validator middleware (vld_sntzr_mddlwre)
// - Input validation and sanitization occur in contactSubmittion_vld.js

app.use(setCSPHeader);

// API Routes
app.use("/api", health_routes);
app.use("/api", keepAlive_routes);
app.use("/api", email_routes);
app.use("/api", contact_routes);

// Error handlers must be last - after all routes
// 404 handler for undefined routes
app.use(notFoundHandler);

// Global error handler (must have 4 parameters: err, req, res, next)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);

  // Initialize keep-alive scheduler
  // Ping server every 10 minutes (600,000ms) to prevent Render.com free tier from sleeping
  const KEEP_ALIVE_INTERVAL = 10 * 60 * 1000; // 10 minutes in milliseconds

  // Start keep-alive immediately, then every 10 minutes
  keepAlive_srv();
  setInterval(() => {
    keepAlive_srv();
  }, KEEP_ALIVE_INTERVAL);

  console.log(`🔄 Keep-alive scheduler initialized (every 10 minutes)`);
});
