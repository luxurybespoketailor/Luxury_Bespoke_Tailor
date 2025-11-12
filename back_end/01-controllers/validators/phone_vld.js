// Phone number validation helper
export const phone_vld = (phone) => {
  let isValid = true;
  let message = "Phone number is valid ✅";

  if (!phone || typeof phone !== "string") {
    isValid = false;
    message = "Phone number is required if provided";
    return { isValid, message };
  }

  const trimmedPhone = phone.trim();

  // Basic phone validation: allows digits, spaces, dashes, parentheses, and +
  // Minimum 10 digits, maximum 20 characters
  const phoneRegex =
    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

  if (trimmedPhone.length < 10 || trimmedPhone.length > 20) {
    isValid = false;
    message = "Phone number must be between 10 and 20 characters";
    return { isValid, message };
  }

  // Count digits in phone number
  const digitCount = trimmedPhone.replace(/\D/g, "").length;
  if (digitCount < 10) {
    isValid = false;
    message = "Phone number must contain at least 10 digits";
    return { isValid, message };
  }

  if (!phoneRegex.test(trimmedPhone)) {
    isValid = false;
    message = "Invalid phone number format";
    return { isValid, message };
  }

  return { isValid, message };
};
