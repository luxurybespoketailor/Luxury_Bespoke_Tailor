import { Router } from "express";
import {
  healthCheck,
  emailSend,
  keepAlive,
} from "./01-controllers/controllers.index.js";
import contactSubmittion_cntrl from "./01-controllers/contactSubmittion_cntrl.js";
import { vld_sntzr_mddlwre } from "./middlewares.js";
import { contactSubmittion_vld } from "./01-controllers/validators/contactSubmittion_vld.js";

import { limiter } from "./services/services.index.js";

const health_routes = Router();
const email_routes = Router();
const contact_routes = Router();
const keepAlive_routes = Router();

health_routes.get("/health", healthCheck);
keepAlive_routes.get("/keepalive", keepAlive);
email_routes.post("/email/send", limiter, emailSend);
contact_routes.post(
  "/contact/submit",
  limiter,
  vld_sntzr_mddlwre(contactSubmittion_vld),
  contactSubmittion_cntrl
);
export { health_routes, email_routes, contact_routes, keepAlive_routes };
