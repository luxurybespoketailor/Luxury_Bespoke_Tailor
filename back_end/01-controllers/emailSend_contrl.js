export { sendEmail_service } from "../services/services.index.js";

const emailSend = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Email sent successfully",
  });
};

export { emailSend };
