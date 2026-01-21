import { loadStripe } from '@stripe/stripe-js'

// Stripe publishable key from environment variable
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || '')

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
 * Redirect to Stripe Checkout
 * @param {string[]} priceIds - Array of Stripe Price IDs to purchase
 * @returns {Promise<void>}
 */
export async function redirectToCheckout(priceIds) {
  const stripe = await stripePromise

  if (!stripe) {
    console.error('Stripe has not been initialized. Check your publishable key.')
    alert('Payment system is not configured. Please try again later.')
    return
  }

  // Build line items from price IDs
  const lineItems = priceIds.map((priceId) => ({
    price: priceId,
    quantity: 1,
  }))

  try {
    const { error } = await stripe.redirectToCheckout({
      lineItems,
      mode: 'payment',
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/product`,
    })

    if (error) {
      console.error('Stripe checkout error:', error)
      alert('There was an error processing your payment. Please try again.')
    }
  } catch (err) {
    console.error('Checkout error:', err)
    alert('There was an error processing your payment. Please try again.')
  }
}

export default stripePromise
