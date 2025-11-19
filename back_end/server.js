import express from "express";
import cors from "cors";
import helmet from "helmet";
import { PORT, corsOptions, setCSPHeader } from "./00_config/config.index.js";
import { health_routes, contact_routes, keepAlive_routes } from "./routes.js";
import {
  globalErrorHandler,
  notFoundHandler,
} from "./01-controllers/controllers.index.js";
import { keepAlive_srv } from "./services/services.index.js";

const app = express();


app.set("trust proxy", 1);

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));



app.use(setCSPHeader);

// API Routes
app.use("/api", health_routes);
app.use("/api", keepAlive_routes);
app.use("/api", contact_routes);


app.use(notFoundHandler);

// Global error handler (must have 4 parameters: err, req, res, next)
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);

 
  const KEEP_ALIVE_INTERVAL = 10 * 60 * 1000; // 10 minutes in milliseconds

  // Start keep-alive immediately, then every 10 minutes
  keepAlive_srv();
  setInterval(() => {
    keepAlive_srv();
  }, KEEP_ALIVE_INTERVAL);

  console.log(`🔄 Keep-alive scheduler initialized (every 10 minutes)`);
});
