import { Router } from "express";
import {
  healthCheck,
  globalErrorHandler,
  notFoundHandler,
  emailSend,
} from "./01-controllers/controllers.index.js";
import { limiter } from "./services/services.index.js";

const error_routes = Router();
const health_routes = Router();
const email_routes = Router();

error_routes.use(globalErrorHandler);
error_routes.use(notFoundHandler);
health_routes.get("/health", healthCheck);
email_routes.post("/email/send", limiter, emailSend);

export { error_routes, health_routes, email_routes };
