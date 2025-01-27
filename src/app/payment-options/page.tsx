import React from 'react';

const PaymentOptions = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Payment Options
        </h1>
        <p className="text-lg mb-4">
          At **Furniro**, we aim to provide a seamless and secure shopping experience. To make your purchase easy and convenient, we offer a variety of payment options. Explore the payment methods available below.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Credit and Debit Cards</h2>
        <p className="mb-4">
          We accept all major credit and debit cards, including:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Visa</li>
          <li>MasterCard</li>
          <li>American Express</li>
          <li>Discover</li>
        </ul>
        <p className="mb-4">
          All card transactions are processed securely through our trusted payment gateway providers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. Digital Wallets</h2>
        <p className="mb-4">
          For a faster checkout experience, we support popular digital wallets:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Bank Transfers</h2>
        <p className="mb-4">
          You can also pay directly via bank transfer. Once you place your order, you will receive the necessary banking details to complete the transfer.
        </p>
        <p className="mb-4">
          Note: Orders will only be processed after the payment is confirmed.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Buy Now, Pay Later (BNPL)</h2>
        <p className="mb-4">
          We’ve partnered with leading BNPL services to offer flexible payment plans. Choose to split your payment into smaller, interest-free installments with:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Afterpay</li>
          <li>Klarna</li>
          <li>Zip Pay</li>
        </ul>
        <p className="mb-4">
          Select the Buy Now, Pay Later option at checkout to learn more and get started.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Cash on Delivery (COD)</h2>
        <p className="mb-4">
          We offer a **Cash on Delivery** option for customers who prefer to pay in cash when their order is delivered. COD availability may vary based on your location and the order amount.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Gift Cards</h2>
        <p className="mb-4">
          Furniro Gift Cards can be used as a payment method during checkout. Simply enter your gift card code at checkout to redeem it.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Secure Transactions</h2>
        <p className="mb-4">
          All payments made on our website are processed securely using industry-standard encryption. Your payment details are never stored on our servers and are handled by trusted payment providers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">8. Need Assistance?</h2>
        <p className="mb-4">
          If you have any questions or encounter issues during payment, our customer support team is here to help. Feel free to reach out to us:
        </p>
        <p>
          **Email:** <a href="mailto:payments@furniro.com" className="text-blue-600 underline">payments@furniro.com</a><br />
          **Phone:** +1 (123) 456-7890<br />
          **Live Chat:** Available on our website.
        </p>
      </div>
    </div>
  );
};

export default PaymentOptions;
