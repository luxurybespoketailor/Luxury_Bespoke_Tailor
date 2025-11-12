# HTTP Email Service Setup (Render.com Free Tier)

## Why HTTP Instead of SMTP?

**Render.com free tier blocks outbound SMTP connections** (ports 25, 587, 465) at the network level. This is a firewall restriction that **cannot be bypassed with code changes**.

**Solution**: Use HTTP-based email service (Web3Forms) that works via HTTPS (port 443), which is **not blocked** on Render.com free tier.

## How It Works

1. **Development (Local)**: Uses SMTP (Nodemailer) for faster local testing
2. **Production (Render.com)**: Automatically switches to HTTP-based service (Web3Forms)

The system automatically detects the environment and uses the appropriate service.

## Setup Instructions

### Step 1: Get Web3Forms Access Key

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account (no credit card required)
3. Get your access key from the dashboard
4. Copy your access key

### Step 2: Configure Environment Variables

**In Render.com**, add these environment variables:

```bash
# Required for HTTP email service (production)
WEB3FORMS_ACCESS_KEY=your-web3forms-access-key-here

# Required (recipient email)
ADMIN_EMAIL=your-email@gmail.com

# Optional: Force HTTP email service (even in development)
USE_HTTP_EMAIL=true

# Production environment
NODE_ENV=production
```

### Step 3: Test the Setup

1. Deploy to Render.com
2. Submit a contact form
3. Check your email inbox
4. Check Render.com logs for confirmation

## Environment Variables Reference

| Variable | Required | Description |
|----------|----------|-------------|
| `WEB3FORMS_ACCESS_KEY` | Yes (production) | Web3Forms access key from dashboard |
| `ADMIN_EMAIL` | Yes | Recipient email address |
| `NODE_ENV` | Yes (production) | Set to `production` for Render.com |
| `USE_HTTP_EMAIL` | No | Force HTTP email service (set to `true`) |

## How to Get Web3Forms Access Key

1. Visit [https://web3forms.com/](https://web3forms.com/)
2. Click "Get Started" or "Sign Up"
3. Create a free account
4. Go to Dashboard
5. Copy your access key
6. Add it to Render.com environment variables

## Troubleshooting

### Issue: "WEB3FORMS_ACCESS_KEY not configured"

**Solution**: Make sure you've added `WEB3FORMS_ACCESS_KEY` to Render.com environment variables.

### Issue: Emails not being received

**Solution**: 
1. Check Web3Forms dashboard for delivery status
2. Check spam folder
3. Verify `ADMIN_EMAIL` is correct
4. Check Render.com logs for errors

### Issue: Still using SMTP in production

**Solution**: Make sure `NODE_ENV=production` is set in Render.com environment variables.

## Why This Works on Render.com Free Tier

- **SMTP (ports 25, 587, 465)**: Blocked by Render.com firewall ❌
- **HTTPS (port 443)**: Allowed by Render.com firewall ✅

Web3Forms uses HTTPS (port 443) to send emails, which is **not blocked** on Render.com free tier.

## Alternative: Use Different Hosting Provider

If you prefer to use SMTP (Gmail) directly, consider:
- **Railway.app** (free tier allows SMTP)
- **Fly.io** (free tier allows SMTP)
- **Render.com paid plan** (allows SMTP)

## Support

For Web3Forms support, visit: [https://web3forms.com/docs](https://web3forms.com/docs)

