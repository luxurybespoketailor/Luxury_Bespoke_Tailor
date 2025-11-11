import express from "express";
import cors from "cors";
import helmet from "helmet";
import xssClean from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import { PORT, corsOptions, setCSPHeader } from "./00_config/config.index.js";
import { error_routes, health_routes, email_routes } from "./routes.js";

const app = express();

app.use(helmet());

app.use(cors(corsOptions));

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: true, limit: "100kb" }));

app.use(xssClean());
app.use(mongoSanitize());

// Error handlers
app.use(error_routes);
app.use("/api", health_routes);
app.use("/api", email_routes);

app.use(setCSPHeader);

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Health check: http://localhost:${PORT}/api/health`);
});
