import { Router } from "express";
import {
  healthCheck,
  globalErrorHandler,
  notFoundHandler,
  emailSend,
} from "./01-controllers/controllers.index.js";
import contactSubmittion_cntrl from "./01-controllers/contactSubmittion_cntrl.js";
import { vld_sntzr_mddlwre } from "./middlewares.js";
import { contactSubmittion_vld } from "./01-controllers/validators/contactSubmittion_vld.js";

import { limiter } from "./services/services.index.js";

const error_routes = Router();
const health_routes = Router();
const email_routes = Router();

error_routes.use(globalErrorHandler);
error_routes.use(notFoundHandler);
health_routes.get("/health", healthCheck);
email_routes.post("/email/send", limiter, emailSend);
contact_routes.post(
  "/contact/submit",
  vld_sntzr_mddlwre(contactSubmittion_vld),
  contactSubmittion_cntrl
);
export { error_routes, health_routes, email_routes };
