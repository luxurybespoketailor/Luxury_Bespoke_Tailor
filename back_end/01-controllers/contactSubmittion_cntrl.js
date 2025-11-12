import { contactSubmittion_srv } from "../services/contactSubmittion_srv.js";
const isDebug = true;
const displayName = " | contactSubmittion_cntrl.js |<=>| ";

const contactSubmittion_cntrl = async (req, res) => {
  isDebug && console.log(`🛑 ↘️ 🏃‍➡️ ${displayName} |<=>| [STARTED]`);

  try {
    const { success, message } = await contactSubmittion_srv(req, isDebug);

    return res.status(success ? 200 : 400).json({
      success: success,
      message: message,
    });
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<CONTROLLER>| catch(ERROR) |`, error);

    // Return specific error messages
    const errorMessage =
      error.message || "Failed to process contact submission";
    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
      success: false,
      message: errorMessage,
      data: null,
    });
  } finally {
    isDebug && console.log(`🚩🚩🚩${displayName}[COMPLETED]`);
  }
};

export default contactSubmittion_cntrl;
