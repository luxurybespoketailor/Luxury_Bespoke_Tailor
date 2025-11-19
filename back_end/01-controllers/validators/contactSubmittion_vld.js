import { phone_vld } from "./phone_vld.js";

const displayName = " | contactSubmittion_vld.js | ";
const isDebug = true;

export const request_failed = (msg, data, name, isDebug) => {
  const display = name ? name : "UnSpecified Middleware Field";
  const payload = data !== undefined ? data : "No Data to Display";

  isDebug && console.log(`📢👮🚨${display}[FAILED] |<Msg>|${msg}|`, payload);

  return { isValid: false, message: msg };
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

  const data = req.body;

  if (!data.name || typeof data.name !== "string") {
    return request_failed("Name is required", data.name, displayName, isDebug);
  }

  const trimmedName = data.name.trim();

  if (trimmedName.length < 3) {
    return request_failed(
      "Name must be at least 3 characters",
      data.name,
      displayName,
      isDebug
    );
  }

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(trimmedName)) {
    return request_failed(
      "Name must contain only alphabetic characters and spaces",
      data.name,
      displayName,
      isDebug
    );
  }

  if (!data.message || typeof data.message !== "string") {
    return request_failed(
      "Message is required",
      data.message,
      displayName,
      isDebug
    );
  }

  const trimmedMessage = data.message.trim();

  if (trimmedMessage.length === 0) {
    return request_failed(
      "Message cannot be empty",
      data.message,
      displayName,
      isDebug
    );
  }

  if (trimmedMessage.length > 1000) {
    return request_failed(
      "Message must not exceed 1000 characters",
      data.message,
      displayName,
      isDebug
    );
  }

  let sanitizedService = null;
  if (data.service && typeof data.service === "string") {
    sanitizedService = data.service.trim();
    if (sanitizedService.length === 0) {
      sanitizedService = null;
    }
  }

  let sanitizedPhone = null;
  if (
    data.phone &&
    typeof data.phone === "string" &&
    data.phone.trim().length > 0
  ) {
    const phoneValidation = phone_vld(data.phone);
    if (!phoneValidation.isValid) {
      return request_failed(
        phoneValidation.message,
        data.phone,
        displayName,
        isDebug
      );
    }
    sanitizedPhone = data.phone.trim();
  }

  let sanitizedWhatsapp = null;
  if (
    data.whatsapp &&
    typeof data.whatsapp === "string" &&
    data.whatsapp.trim().length > 0
  ) {
    const whatsappValidation = phone_vld(data.whatsapp);
    if (!whatsappValidation.isValid) {
      return request_failed(
        whatsappValidation.message,
        data.whatsapp,
        displayName,
        isDebug
      );
    }
    sanitizedWhatsapp = data.whatsapp.trim();
  }

  sanitizedData = {
    name: trimmedName,
    message: trimmedMessage,
    service: sanitizedService,
    phone: sanitizedPhone,
    whatsapp: sanitizedWhatsapp,
  };

  return request_success(displayName, isDebug, sanitizedData);
};
