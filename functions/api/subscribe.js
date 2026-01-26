import { Resend } from 'resend'

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
}

export async function onRequestPost(context) {
  const resend = new Resend(context.env.RESEND_API_KEY)

  try {
    const body = await context.request.json()
    const { email, source } = body

    // Validate email
    if (!email || !isValidEmail(email)) {
      return new Response(
        JSON.stringify({ error: 'Please provide a valid email address' }),
        { status: 400, headers }
      )
    }

    // 1. Add subscriber to Beehiiv
    const beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${context.env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${context.env.BEEHIIV_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          reactivate_existing: true,
          send_welcome_email: false,
          utm_source: source || 'website',
          utm_medium: 'lead_magnet',
        }),
      }
    )

    if (!beehiivResponse.ok) {
      const error = await beehiivResponse.text()
      console.error('Beehiiv error:', error)
      // Continue anyway - we still want to send the email
    }

    // 2. Send welcome email with PDF download link via Resend
    const downloadUrl = 'https://www.billcured.com/downloads/billing-blind-spot.pdf'

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2B6B7C;">Your Free Guide is Ready!</h1>
        <p>Thanks for signing up. Here's your copy of <strong>"The Billing Blind Spot"</strong> - the free guide that reveals what hospitals don't know about your bill.</p>

        <p style="text-align: center; margin: 32px 0;">
          <a href="${downloadUrl}" style="background-color: #FA8072; color: white; padding: 16px 32px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
            Download Your Free Guide
          </a>
        </p>

        <p>Inside you'll discover:</p>
        <ul style="color: #4A5568; line-height: 1.8;">
          <li>Why 80% of medical bills contain errors</li>
          <li>The "blind spot" that billing departments have about your situation</li>
          <li>The one question that changes the entire conversation</li>
        </ul>

        <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 32px 0;" />

        <p style="color: #718096; font-size: 14px;">
          Want the complete system? The <a href="https://www.billcured.com/product" style="color: #2B6B7C;">Bill Cured Blueprint</a> includes word-for-word scripts, letter templates, and step-by-step action plans to negotiate your bills down by 30-70%.
        </p>

        <p style="color: #718096; font-size: 14px;">
          To your financial health,<br />
          — The BillCured Team
        </p>
      </div>
    `

    try {
      await resend.emails.send({
        from: 'BillCured <hello@billcured.com>',
        to: email,
        subject: 'Your Free Guide: The Billing Blind Spot',
        html: htmlContent,
      })
    } catch (emailError) {
      console.error('Email send failed:', emailError)
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again.' }),
        { status: 500, headers }
      )
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Check your email for your free guide!' }),
      { status: 200, headers }
    )
  } catch (err) {
    console.error('Subscribe error:', err)
    return new Response(
      JSON.stringify({ error: 'Something went wrong. Please try again.' }),
      { status: 500, headers }
    )
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
