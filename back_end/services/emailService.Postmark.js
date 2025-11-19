import dotenv from "dotenv";
import postmark from "postmark";

dotenv.config();

const displayName = " | emailService_Postmark.js | ";
const isDebug = true;

const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

export const emailService_Postmark = async (emailData) => {
  isDebug && console.log(`💡📢❔${displayName}|<SERVICE>| [TRIGGERED]`);

  try {
    if (!emailData.to || !emailData.subject || !emailData.html) {
      throw new Error(
        "Missing required email fields: to, subject, and html are required"
      );
    }

    if (!process.env.POSTMARK_SERVER_TOKEN) {
      throw new Error(
        "POSTMARK_SERVER_TOKEN is not configured in environment variables"
      );
    }

    if (!process.env.POSTMARK_FROM_EMAIL) {
      throw new Error(
        "POSTMARK_FROM_EMAIL is not configured in environment variables"
      );
    }

    isDebug &&
      console.log(
        `📤 ${displayName}|<SERVICE>| Sending email to: ${emailData.to}`
      );

    const result = await client.sendEmail({
      From: process.env.POSTMARK_FROM_EMAIL,
      To: emailData.to,
      Subject: emailData.subject,
      HtmlBody: emailData.html,
      TextBody: emailData.text,
      MessageStream: "outbound",
    });

    isDebug &&
      console.log(
        `✅ ${displayName}|<SERVICE>| [SUCCESS] | Email sent with MessageID: ${result.MessageID}`
      );

    return {
      success: true,
      messageId: result.MessageID,
      submittedAt: result.SubmittedAt,
      to: result.To,
    };
  } catch (error) {
    console.error(`⚠️☠️🚨${displayName}|<SERVICE>| catch(ERROR) |`, error);

    if (error.statusCode) {
      const errorMessage = error.message || "Postmark API error";
      const serviceError = new Error(errorMessage);
      serviceError.statusCode = error.statusCode;
      throw serviceError;
    }

    throw new Error(error.message || "Failed to send email via Postmark");
  }
};
