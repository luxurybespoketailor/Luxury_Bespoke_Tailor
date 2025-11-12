import { email_vld } from "./email_vld.js";

const displayName = " | contactSubmittion_vld.js | ";
const isDebug = true;

export const request_failed = (msg, data, name, isDebug) => {
  const display = name ? name : "UnSpecified Middleware Field";
  const payload = data !== undefined ? data : "No Data to Display";

  isDebug && console.log(`📢👮🚨${display}[FAILED] |<Msg>|${msg}|`, payload);

  return { isValid: false, msg };
};

export const request_success = (displayName, isDebug, payload) => {
  isDebug && console.log(`✅👍♻️${displayName}|<VALIDATOR>| [PASSED] |`);

  return {
    isValid: true,
    message: "Data Validated Successfully ✅",
    sanitizedData: payload,
  };
};

export const contactSubmittion_vld = async (req) => {
  let sanitizedData = {};

  // Accept data from either body_Data or directly from body
  const data = req.body;

  const email_validation = email_vld(data.email, isDebug);
  if (!email_validation.isValid) {
    return request_failed(
      email_validation.message,
      data.email,
      displayName,
      isDebug
    );
  }

  // Sanitize and validated data
  sanitizedData = {
    email: email.trim().toLowerCase(),
  };

  return request_success(displayName, isDebug, sanitizedData);
};
