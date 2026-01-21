import Stripe from 'stripe';
import { Resend } from 'resend';

export async function onRequestPost(context) {
  const stripe = new Stripe(context.env.STRIPE_SECRET_KEY);
  const resend = new Resend(context.env.RESEND_API_KEY);

  // 1. Get the signature from the header (Security check)
  const signature = context.request.headers.get('stripe-signature');
  const body = await context.request.text();
  let event;

  try {
    // 2. Verify the event came from Stripe
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      context.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  // 3. Handle the successful purchase
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const email = session.customer_details.email;
    const name = session.customer_details.name || 'Valued Customer';

    // Get all line items from the checkout
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
    const priceIds = lineItems.data.map(item => item.price.id);

    // 4. Build email content based on purchased products
    let downloadLinks = [];

    if (priceIds.includes(context.env.VITE_STRIPE_BLUEPRINT_PRICE_ID)) {
      downloadLinks.push({
        name: 'Bill Cured Blueprint',
        url: 'https://www.billcured.com/downloads/blueprint.pdf'
      });
    }

    if (priceIds.includes(context.env.VITE_STRIPE_ESCALATION_PRICE_ID)) {
      downloadLinks.push({
        name: 'Escalation Playbook',
        url: 'https://www.billcured.com/downloads/escalation.pdf'
      });
    }

    // Build the email HTML
    const linksHtml = downloadLinks.map(link =>
      `<p><strong><a href="${link.url}">Download: ${link.name}</a></strong></p>`
    ).join('');

    const subject = downloadLinks.length > 1
      ? 'Your BillCured Order - Multiple Downloads'
      : `Your BillCured Order - ${downloadLinks[0]?.name || 'Download'}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #2B6B7C;">Hi ${name},</h1>
        <p>Thank you for your purchase! Your download${downloadLinks.length > 1 ? 's are' : ' is'} ready:</p>
        ${linksHtml}
        <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 24px 0;" />
        <p style="color: #718096; font-size: 14px;">
          These links are for your personal use only. If you have any questions, reply to this email.
        </p>
        <p style="color: #718096; font-size: 14px;">
          Good luck with your negotiation!<br />
          — The BillCured Team
        </p>
      </div>
    `;

    // 5. Send the email via Resend
    try {
      await resend.emails.send({
        from: 'BillCured <support@billcured.com>',
        to: email,
        subject: subject,
        html: htmlContent
      });
    } catch (error) {
      console.error('Email failed:', error);
      return new Response('Email failed', { status: 500 });
    }
  }

  return new Response('Success', { status: 200 });
}
