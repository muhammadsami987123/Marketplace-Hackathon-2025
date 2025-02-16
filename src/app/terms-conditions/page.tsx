"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const terms = [
  {
    title: "1. Introduction",
    content:
      "Welcome to Funiro. By using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully before using our services.",
  },
  {
    title: "2. Use of the Website", 
    content:
      "You agree to use our website only for lawful purposes. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.",
  },
  {
    title: "3. Product Information & Pricing",
    content:
      "We strive to provide accurate product descriptions and pricing. However, errors may occur. We reserve the right to correct errors and update information without prior notice.",
  },
  {
    title: "4. Ordering & Payment",
    content:
      "All orders are subject to availability and confirmation. Payments must be made in full before orders are processed. We accept Visa, MasterCard, PayPal, and other payment methods.",
  },
  {
    title: "5. Shipping & Delivery",
    content:
      "Shipping times vary based on location. We are not responsible for delays due to unforeseen circumstances. You will receive a tracking number once your order is shipped.",
  },
  {
    title: "6. Returns & Refunds",
    content:
      "We accept returns within 30 days of purchase if the item is in original condition. Refunds will be processed after inspection. Custom orders are non-refundable.",
  },
  {
    title: "7. Warranty Policy",
    content:
      "Our products come with a warranty covering manufacturing defects. Normal wear and tear, misuse, or modifications void the warranty.",
  },
  {
    title: "8. Privacy Policy",
    content:
      "We respect your privacy. Your personal information is collected only to process your orders and improve our services. We do not sell or share your data with third parties.",
  },
  {
    title: "9. Intellectual Property",
    content:
      "All content on this website, including images, text, and logos, is the property of Funiro and may not be copied or used without permission.",
  },
  {
    title: "10. Limitation of Liability",
    content:
      "We are not liable for indirect, incidental, or consequential damages arising from the use of our website or products.",
  },
  {
    title: "11. Governing Law",
    content:
      "These terms are governed by the laws of [Your Country]. Any disputes will be handled in the courts of [Your Country].",
  },
  {
    title: "12. Contact Information",
    content:
      "For any inquiries regarding these Terms & Conditions, please contact us at support@funiro.com or visit our Contact Us page.",
  },
];

export default function TermsConditionsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleTerm = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e8] to-white">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Please read our Terms & Conditions carefully before using our services.
          </p>
        </div>

        {/* Terms Section */}
        <div className="space-y-4">
          {terms.map((term, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-[#e7c8a0] focus:ring-opacity-50 rounded-xl"
                onClick={() => toggleTerm(index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900 sm:text-xl">
                    {term.title}
                  </span>
                  <span className="ml-6 flex-shrink-0 text-gray-500">
                    {openIndex === index ? (
                      <ChevronUp className="h-6 w-6 transition-transform duration-200" />
                    ) : (
                      <ChevronDown className="h-6 w-6 transition-transform duration-200" />
                    )}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    {term.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}
