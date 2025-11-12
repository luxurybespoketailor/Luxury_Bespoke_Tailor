import { contactSubmittion_srv } from "../services/contactSubmittion_srv.js";
const isDebug = true;
const displayName = " | contactSubmittion_cntrl.js |<=>| ";

const contactSubmittion_cntrl = async (req, res) => {
  isDebug && console.log(`🛑 ↘️ 🏃‍➡️ ${displayName} |<=>| [STARTED]`);

  try {
    const { success, message } = await contactSubmittion_srv(req, isDebug);

    return res.status(200).json({
      success: true,
      message: "Contact Submitted Successfully",
    });
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<CONTROLLER>| catch(ERROR) |`, error);
    return res.status(505).json({
      success: false,
      message: "Internal Server Error",
      data: null,
    });
  } finally {
    isDebug && console.log(`🚩🚩🚩${displayName}[COMPLETED]`);
  }
};

export default contactSubmittion_cntrl;
