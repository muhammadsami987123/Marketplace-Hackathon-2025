import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f5f0e8] text-gray-800 min-h-screen">
      <div className="container mx-auto py-10 px-5">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-lg mb-4">
          **Last Updated:** [Insert Date]
        </p>
        <p className="mb-4">
          Welcome to **Furniro**. We value your privacy and are committed to
          we collect, use, and safeguard your data when you visit or make a
          purchase from our website, <Link href="/" className="text-blue-600 underline">https://hackthone-two.vercel.app/</Link>.
          purchase from our website, <Link href="/" className="text-blue-600 underline">https://hackthone-two.vercel.app/</Link>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>**Personal Information:** Name, email address, phone number, shipping address, and billing information.</li>
          <li>**Usage Information:** IP address, browser type, device type, and pages you visit.</li>
          <li>**Payment Details:** Payment information for purchases (processed securely through third-party providers).</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Process and fulfill your orders.</li>
          <li>Provide customer support and respond to inquiries.</li>
          <li>Send promotional offers, updates, and newsletters (with your consent).</li>
          <li>Improve our website and personalize your experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">3. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell or rent your personal information. However, we may share your information with trusted third parties, such as:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Payment processors for secure transactions.</li>
          <li>Shipping providers to deliver your orders.</li>
          <li>Service providers that assist in website operations and analytics.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Access, update, or delete your personal information.</li>
          <li>Opt out of marketing communications.</li>
          <li>Request details about how we handle your data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">5. Security of Your Information</h2>
        <p className="mb-4">
          We implement strict security measures to protect your personal data. While no system is 100% secure, we strive to use industry best practices to keep your information safe.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">6. Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          **Email:** <a href="mailto:support@furniro.com" className="text-blue-600 underline">support@furniro.com</a><br />
          **Phone:** +1 (123) 456-7890<br />
          **Address:** 123 Furniro Lane, Furniture City, FC 12345
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
