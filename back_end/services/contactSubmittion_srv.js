import { contactFormEmail_srv } from "./contactFormEmail_srv.js";

const displayName = " | contactSubmittion_srv.js | ";

export const contactSubmittion_srv = async (req, isDebug) => {
  isDebug && console.log(`💡📢❔${displayName}|<SERVICE>| [TRIGGERED]`);
  const { sanitizedData } = req.body;

  try {
    if (sanitizedData) {
      isDebug &&
        console.log(
          `📋 ${displayName}|<DATA>| Name: ${
            sanitizedData.name
          }, Message length: ${sanitizedData.message?.length || 0}`
        );
    }

    let emailSent = false;
    try {
      const emailResult = await contactFormEmail_srv(sanitizedData);
      emailSent = emailResult.success;

      if (emailSent) {
        isDebug &&
          console.log(
            `📧 ${displayName}|<EMAIL>| [SENT] | Email notification sent successfully`
          );
      }
    } catch (emailError) {
      console.error(
        `⚠️ ${displayName}|<EMAIL>| [ERROR] | Failed to send email:`,
        emailError.message
      );
      isDebug &&
        console.log(
          `⚠️ ${displayName}|<EMAIL>| [CONTINUE] | Continuing despite email error`
        );
      emailSent = false;
    }

    isDebug &&
      console.log(
        `✅ ${displayName}|<SERVICE>| [SUCCESS] | Processing completed${
          emailSent ? " | Email sent" : " | Email failed"
        }`
      );

    return {
      success: true,
      message: "Contact Submitted Successfully",
      emailSent: emailSent,
    };
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SERVICE>| catch(ERROR) |`, error);

    const serviceError = new Error(
      error.message ||
        "Service unavailable - failed to process contact submission"
    );
    serviceError.statusCode = error.statusCode || 500;
    throw serviceError;
  }
};
