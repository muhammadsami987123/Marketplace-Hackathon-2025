import React from 'react';
import Link from 'next/link';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f5f0e8] text-gray-800 min-h-screen">
      <div className="container mx-auto py-12 px-5 max-w-4xl">
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-900">
          Privacy Policy
        </h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          **Last Updated:** [28-01-2025]
        </p>
        <p className="mb-8 text-lg text-gray-600">
          Welcome to <strong>Furniro</strong>. We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you visit or make a purchase from our website,{' '}
          <Link href="/" className="text-blue-600 underline hover:text-blue-700">
            https://hackthone-two.vercel.app/
          </Link>
          .
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">1. Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, email address, phone number, shipping address, and billing information.
            </li>
            <li>
              <strong>Usage Information:</strong> IP address, browser type, device type, and pages you visit.
            </li>
            <li>
              <strong>Payment Details:</strong> Payment information for purchases (processed securely through third-party providers).
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">2. How We Use Your Information</h2>
          <p className="mb-4 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Process and fulfill your orders.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>Send promotional offers, updates, and newsletters (with your consent).</li>
            <li>Improve our website and personalize your experience.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">3. Sharing Your Information</h2>
          <p className="mb-4 text-gray-600">
            We do not sell or rent your personal information. However, we may share your information with trusted third parties, such as:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Payment processors for secure transactions.</li>
            <li>Shipping providers to deliver your orders.</li>
            <li>Service providers that assist in website operations and analytics.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">4. Your Rights</h2>
          <p className="mb-4 text-gray-600">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request details about how we handle your data.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">5. Security of Your Information</h2>
          <p className="mb-4 text-gray-600">
            We implement strict security measures to protect your personal data. While no system is 100% secure, we strive to use industry best practices to keep your information safe.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">6. Changes to This Policy</h2>
          <p className="mb-4 text-gray-600">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">7. Contact Us</h2>
          <p className="mb-4 text-gray-600">
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong>{' '}
            <a href="mailto:support@furniro.com" className="text-blue-600 underline hover:text-blue-700">
              support@furniro.com
            </a>
            <br />
            <strong>Phone:</strong> +1 (123) 456-7890
            <br />
            <strong>Address:</strong> 123 Furniro Lane, Furniture City, FC 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;