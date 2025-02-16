"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Shield, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content: (
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
      )
    },
    {
      title: "2. How We Use Your Information",
      content: (
        <>
          <p className="mb-4 text-gray-600">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Process and fulfill your orders.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>Send promotional offers, updates, and newsletters (with your consent).</li>
            <li>Improve our website and personalize your experience.</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Sharing Your Information",
      content: (
        <>
          <p className="mb-4 text-gray-600">
            We do not sell or rent your personal information. However, we may share your information with trusted third parties, such as:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Payment processors for secure transactions.</li>
            <li>Shipping providers to deliver your orders.</li>
            <li>Service providers that assist in website operations and analytics.</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Your Rights",
      content: (
        <>
          <p className="mb-4 text-gray-600">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt out of marketing communications.</li>
            <li>Request details about how we handle your data.</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Security of Your Information",
      content: (
        <p className="text-gray-600">
          We implement strict security measures to protect your personal data. While no system is 100% secure, we strive to use industry best practices to keep your information safe.
        </p>
      )
    },
    {
      title: "6. Changes to This Policy",
      content: (
        <p className="text-gray-600">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
        </p>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f5f0e8] to-white min-h-screen">
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-5 max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 animate-fade-in">
            Privacy Policy
          </h1>
          <p className="text-base sm:text-lg mb-3 sm:mb-4 text-gray-600">
            Last Updated: 28-01-2025
          </p>
          <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            <span className="text-sm sm:text-base text-gray-600">Your Privacy is Our Priority</span>
          </div>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg text-gray-600 px-4 sm:px-0">
            Welcome to <strong>Furniro</strong>. We value your privacy and are committed to protecting your personal information. This policy outlines how we collect, use, and safeguard your data when you visit or make a purchase from our website,{' '}
            <Link href="/" className="text-blue-600 underline hover:text-blue-700 transition duration-300">
              https://hackthone-two.vercel.app/
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 sm:px-8 py-4 sm:py-6 flex justify-between items-center hover:bg-gray-50 transition-colors duration-300"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 text-left">{section.title}</h2>
                {expandedSection === index ? (
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 flex-shrink-0 ml-2" />
                )}
              </button>
              <div className={`px-4 sm:px-8 transition-all duration-300 ${
                expandedSection === index ? 'py-4 sm:py-6 opacity-100' : 'h-0 opacity-0 overflow-hidden'
              }`}>
                {section.content}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900">Contact Us</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href="mailto:support@furniro.com" className="text-blue-600 hover:underline text-sm sm:text-base">
                support@furniro.com
              </a>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-sm sm:text-base">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-sm sm:text-base">123 Furniro Lane, Furniture City, FC 12345</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;