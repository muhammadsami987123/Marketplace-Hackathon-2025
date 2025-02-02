"use client";
import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_KEY;

  if (!stripeKey) {
    console.error("Error: NEXT_PUBLIC_STRIPE_KEY is missing from environment variables.");
    return null; // Prevents rendering if Stripe key is missing
  }

  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripeKey}
      successUrl="https://hackthone-two.vercel.app/stripe/success"
      cancelUrl="https://hackthone-two.vercel.app/stripe/error"
      currency="USD"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-US"
    >
      {children}
    </USCProvider>
  );
}
