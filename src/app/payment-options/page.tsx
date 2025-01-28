import React from 'react';

const PaymentOptions = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <div className="container mx-auto py-10 px-5 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900">
          Payment Options
        </h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          At <strong>Furniro</strong>, we aim to provide a seamless and secure shopping experience. To make your purchase easy and convenient, we offer a variety of payment options. Explore the payment methods available below.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Credit and Debit Cards</h2>
          <p className="mb-4 text-gray-600">
            We accept all major credit and debit cards, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Visa</li>
            <li>MasterCard</li>
            <li>American Express</li>
            <li>Discover</li>
          </ul>
          <p className="mt-4 text-gray-600">
            All card transactions are processed securely through our trusted payment gateway providers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Digital Wallets</h2>
          <p className="mb-4 text-gray-600">
            For a faster checkout experience, we support popular digital wallets:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>PayPal</li>
            <li>Apple Pay</li>
            <li>Google Pay</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Bank Transfers</h2>
          <p className="mb-4 text-gray-600">
            You can also pay directly via bank transfer. Once you place your order, you will receive the necessary banking details to complete the transfer.
          </p>
          <p className="text-gray-600">
            Note: Orders will only be processed after the payment is confirmed.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Buy Now, Pay Later (BNPL)</h2>
          <p className="mb-4 text-gray-600">
            We’ve partnered with leading BNPL services to offer flexible payment plans. Choose to split your payment into smaller, interest-free installments with:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Afterpay</li>
            <li>Klarna</li>
            <li>Zip Pay</li>
          </ul>
          <p className="mt-4 text-gray-600">
            Select the Buy Now, Pay Later option at checkout to learn more and get started.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Cash on Delivery (COD)</h2>
          <p className="mb-4 text-gray-600">
            We offer a <strong>Cash on Delivery</strong> option for customers who prefer to pay in cash when their order is delivered. COD availability may vary based on your location and the order amount.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Gift Cards</h2>
          <p className="mb-4 text-gray-600">
            Furniro Gift Cards can be used as a payment method during checkout. Simply enter your gift card code at checkout to redeem it.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Secure Transactions</h2>
          <p className="mb-4 text-gray-600">
            All payments made on our website are processed securely using industry-standard encryption. Your payment details are never stored on our servers and are handled by trusted payment providers.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Need Assistance?</h2>
          <p className="mb-4 text-gray-600">
            If you have any questions or encounter issues during payment, our customer support team is here to help. Feel free to reach out to us:
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> <a href="mailto:payments@furniro.com" className="text-blue-600 underline">payments@furniro.com</a><br />
            <strong>Phone:</strong> +1 (123) 456-7890<br />
            <strong>Live Chat:</strong> Available on our website.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;