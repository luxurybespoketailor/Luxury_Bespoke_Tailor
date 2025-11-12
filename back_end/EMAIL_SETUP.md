# Email Configuration Setup

## Required Environment Variables

Create a `.env` file in the `back_end` directory with the following variables:

```env
# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:4000

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@yourbusiness.com
```

## Gmail Setup Instructions

### 1. Enable 2-Factor Authentication

- Go to your Google Account settings
- Navigate to Security → 2-Step Verification
- Enable 2-factor authentication if not already enabled

### 2. Generate App Password

- Go to Google Account settings
- Security → 2-Step Verification → App passwords
- Generate a new app password for "Mail"
- Copy the generated 16-character app password (no spaces)
- Use this app password in `EMAIL_PASS` (NOT your regular Gmail password)

### 3. Configure Environment Variables

- Set `EMAIL_USER` to your Gmail address (e.g., `your-email@gmail.com`)
- Set `EMAIL_PASS` to the generated app password
- Set `EMAIL_HOST` to `smtp.gmail.com`
- Set `EMAIL_PORT` to `587` (for TLS) or `465` (for SSL)
- Set `ADMIN_EMAIL` to the email address that should receive contact form submissions

## Notes

- **EMAIL_PASS**: Must be a Gmail App Password (16 characters, no spaces), NOT your regular Gmail password
- **ADMIN_EMAIL**: The recipient email address for contact form submissions
- **EMAIL_HOST**: Should be `smtp.gmail.com` for Gmail
- **EMAIL_PORT**: `587` for TLS (recommended) or `465` for SSL
- **Secure**: Never commit your `.env` file to version control

## Testing

After configuring your email settings, test the email service by:

1. Submitting a contact form from your website
2. Check the console logs for email sending status
3. Verify that the email is received at `ADMIN_EMAIL`

## Troubleshooting

### Common Issues:

- **Authentication Error**: Make sure you're using an App Password, not your regular password
- **Connection Error**: Check your network connection and SMTP settings
- **Email Not Received**: Check spam folder, verify `ADMIN_EMAIL` is correct
- **Port Error**: Try port `587` for TLS or `465` for SSL
