const displayName = " | contactSubmittion_srv.js | ";

export const contactSubmittion_srv = async (req, isDebug) => {
  isDebug && console.log(`💡📢❔${displayName}|<SERVICE>| [TRIGGERED]`);
  const { sanitizedData } = req.body;
  try {
    /*  Business Logic */
    return {
      success: true,
      message: "Contact Submitted Successfully",
    };
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SERVICE>| catch(ERROR) |`, error);
    throw error;
  }
};
