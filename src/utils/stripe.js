// Product price IDs from Stripe Dashboard
// These should be created in Stripe and the IDs added to environment variables
export const PRODUCTS = {
  BLUEPRINT: {
    name: 'Bill Cured Blueprint',
    priceId: import.meta.env.VITE_STRIPE_BLUEPRINT_PRICE_ID || 'price_blueprint',
    price: 50,
  },
  ESCALATION: {
    name: 'Escalation Playbook',
    priceId: import.meta.env.VITE_STRIPE_ESCALATION_PRICE_ID || 'price_escalation',
    price: 39,
  },
}

/**
 * Create a Checkout Session and redirect to Stripe
 * @param {string[]} priceIds - Array of Stripe Price IDs to purchase
 * @returns {Promise<void>}
 */
export async function redirectToCheckout(priceIds) {
  try {
    // Call our server-side function to create the checkout session
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceIds }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to create checkout session');
    }

    // Redirect to Stripe Checkout
    window.location.href = data.url;
  } catch (err) {
    console.error('Checkout error:', err);
    alert('There was an error processing your payment. Please try again.');
  }
}
