// HTML Email Template for Contact Form Submissions
// Optimized for Yahoo Mail, Gmail, and Outlook compatibility

export const contactFormTemplate = (contactData) => {
  const { name, service, message, phone, whatsapp } = contactData;

  // Format optional fields
  const serviceSection = service
    ? `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; width: 140px;">
        <strong style="color: #1a1a1a; font-size: 14px; font-family: Arial, sans-serif;">Service:</strong>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333; font-size: 14px; font-family: Arial, sans-serif;">
        ${service}
      </td>
    </tr>
  `
    : "";

  const phoneSection = phone
    ? `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; width: 140px;">
        <strong style="color: #1a1a1a; font-size: 14px; font-family: Arial, sans-serif;">Phone:</strong>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
        <a href="tel:${phone}" style="color: #333; text-decoration: none; font-size: 14px; font-family: Arial, sans-serif;">+${phone}</a>
      </td>
    </tr>
  `
    : "";

  const whatsappSection = whatsapp
    ? `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; width: 140px;">
        <strong style="color: #1a1a1a; font-size: 14px; font-family: Arial, sans-serif;">WhatsApp:</strong>
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
        <a href="https://wa.me/${whatsapp.replace(
          /\D/g,
          ""
        )}" style="color: #25D366; text-decoration: none; font-size: 14px; font-family: Arial, sans-serif;">+${whatsapp}</a>
      </td>
    </tr>
  `
    : "";

  // HTML Email Template - Yahoo Mail Optimized
  const html = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <title>New Contact Form Submission</title>
  <!--[if mso]>
  <style type="text/css">
    body, table, td {font-family: Arial, sans-serif !important;}
    table {border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;}
  </style>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; background-color: #f5f5f5;">
  <!-- Yahoo Mail Wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; background-color: #f5f5f5; padding: 20px;">
    <tr>
      <td align="center" style="padding: 0;">
        <!-- Main Container - Fixed width for better compatibility -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="width: 600px; max-width: 600px; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e0e0e0;">
          <!-- Header -->
          <tr>
            <td style="background-color: #1a1a1a; padding: 30px 20px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: 1px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.2;">
                Luxury Bespoke Tailor
              </h1>
              <p style="margin: 8px 0 0; color: #e0e0e0; font-size: 14px; font-style: italic; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.4;">
                Your Vision, Our Expertise
              </p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 30px 25px;">
              <h2 style="margin: 0 0 15px; color: #1a1a1a; font-size: 22px; font-weight: 600; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.3;">
                New Contact Form Submission
              </h2>
              
              <p style="margin: 0 0 25px; color: #666; font-size: 15px; line-height: 1.6; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                You have received a new contact form submission from your website.
              </p>

              <!-- Contact Information Table -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse; margin: 25px 0; background-color: #fafafa; border: 1px solid #e0e0e0;">
                <tr>
                  <td style="padding: 15px 20px; background-color: #1a1a1a; color: #ffffff; font-size: 16px; font-weight: 600; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                    Contact Information
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; border-collapse: collapse;">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; width: 140px; vertical-align: top;">
                          <strong style="color: #1a1a1a; font-size: 14px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">Name:</strong>
                        </td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; color: #333; font-size: 14px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                          ${name}
                        </td>
                      </tr>
                      ${serviceSection}
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0; width: 140px; vertical-align: top;">
                          <strong style="color: #1a1a1a; font-size: 14px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">Message:</strong>
                        </td>
                        <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
                          <!-- Message Container - Table-based for Yahoo Mail and Outlook -->
                          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="450" style="width: 450px; max-width: 450px; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e0e0e0;">
                            <tr>
                              <td style="padding: 12px; color: #333; font-size: 14px; line-height: 1.6; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; word-wrap: break-word;">
                                ${message.replace(/\n/g, "<br>")}
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      ${phoneSection}
                      ${whatsappSection}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Action Message -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="width: 100%; margin: 30px 0 0;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;">
                      Please respond to this inquiry at your earliest convenience.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 8px; color: #666; font-size: 12px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.4;">
                This email was sent from your website's contact form.
              </p>
              <p style="margin: 0; color: #999; font-size: 11px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; line-height: 1.4;">
                &copy; ${new Date().getFullYear()} Luxury Bespoke Tailor. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;

  // Plain text version for email clients that don't support HTML
  const text = `
New Contact Form Submission - Luxury Bespoke Tailor

You have received a new contact form submission from your website.

Contact Information:
-------------------
Name: ${name}
${service ? `Service: ${service}` : ""}
Message: ${message}
${phone ? `Phone: ${phone}` : ""}
${whatsapp ? `WhatsApp: ${whatsapp}` : ""}

Please respond to this inquiry at your earliest convenience.

---
This email was sent from your website's contact form.
© ${new Date().getFullYear()} Luxury Bespoke Tailor. All rights reserved.
  `;

  return { html, text };
};
