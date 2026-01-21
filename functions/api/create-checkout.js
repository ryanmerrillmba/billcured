import Stripe from 'stripe';

export async function onRequestPost(context) {
  const stripe = new Stripe(context.env.STRIPE_SECRET_KEY);

  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  try {
    // Parse the request body
    const body = await context.request.json();
    const { priceIds } = body;

    if (!priceIds || !Array.isArray(priceIds) || priceIds.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Invalid price IDs' }),
        { status: 400, headers }
      );
    }

    // Build line items
    const lineItems = priceIds.map((priceId) => ({
      price: priceId,
      quantity: 1,
    }));

    // Get the origin for redirect URLs
    const origin = context.request.headers.get('origin') || 'https://www.billcured.com';

    // Create Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/product`,
      // Collect customer email for delivery
      customer_creation: 'always',
      // Enable billing address collection
      billing_address_collection: 'required',
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200, headers }
    );
  } catch (err) {
    console.error('Checkout session error:', err);
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500, headers }
    );
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
  });
}
