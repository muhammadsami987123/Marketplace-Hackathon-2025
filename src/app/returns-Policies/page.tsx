"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, RotateCcw, Package, DollarSign, Mail, Phone, MapPin } from 'lucide-react';

const ReturnsPolicy = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const toggleSection = (index: number) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const sections = [
    {
      title: "1. Eligibility for Returns",
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: (
        <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
          <li>Items must be returned within <strong>30 days</strong> of receiving your order.</li>
          <li>Products must be unused, undamaged, and in their original packaging.</li>
          <li>Customized or personalized items are not eligible for returns unless they arrive damaged or defective.</li>
          <li>A proof of purchase (order confirmation or receipt) is required.</li>
        </ul>
      )
    },
    {
      title: "2. Non-Returnable Items",
      icon: <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: (
        <>
          <p className="mb-4 text-gray-600 text-sm sm:text-base">
            Certain items are not eligible for returns, including but not limited to:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
            <li>Gift cards</li>
            <li>Clearance or final sale items</li>
            <li>Products marked as Non-Returnable on the product page</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Return Process",
      icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: (
        <>
          <p className="mb-4 text-gray-600 text-sm sm:text-base">
            Follow these steps to initiate a return:
          </p>
          <ol className="list-decimal pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
            <li>
              Contact our customer support team at{' '}
              <a href="mailto:returns@furniro.com" className="text-blue-600 underline hover:text-blue-700">
                returns@furniro.com
              </a>{' '}
              or call us at <strong>+1 (123) 456-7890</strong> to request a return authorization.
            </li>
            <li>
              Pack the item securely in its original packaging and include any accessories, manuals, or free gifts.
            </li>
            <li>
              Ship the product to the return address provided by our support team. You are responsible for the return shipping cost unless the item is defective or damaged.
            </li>
          </ol>
        </>
      )
    },
    {
      title: "4. Refund Policy",
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      content: (
        <>
          <p className="mb-4 text-gray-600 text-sm sm:text-base">
            Once we receive and inspect the returned item, we will notify you of the approval or rejection of your refund. If approved:
          </p>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-gray-600 text-sm sm:text-base">
            <li>Refunds will be processed to your original payment method within <strong>5-10 business days</strong>.</li>
            <li>If you paid using a gift card, the refund will be issued as store credit.</li>
            <li>Shipping charges are non-refundable unless the return is due to our error (e.g., wrong or defective item).</li>
          </ul>
        </>
      )
    }
  ];

  return (
    <div className="bg-[#f5f0e8] min-h-screen">
      <div className="container mx-auto py-8 sm:py-12 px-4 sm:px-5 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center text-gray-900">
          Returns & Refunds Policy
        </h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center text-gray-600">
          Last Updated: January 28, 2025
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-gray-600">
            At <strong>Furniro</strong>, we want you to be completely satisfied with your purchase. If for any reason you are not happy with your product, we offer a hassle-free return process.
          </p>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md mb-3 sm:mb-4 overflow-hidden transition-all duration-300">
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {section.icon}
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">{section.title}</h2>
              </div>
              {expandedSection === index ? (
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" />
              )}
            </button>
            
            <div className={`px-4 sm:px-6 transition-all duration-300 ease-in-out ${
              expandedSection === index ? "py-4 sm:py-6 block" : "h-0 hidden"
            }`}>
              {section.content}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mt-6 sm:mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-900 flex items-center gap-2">
            <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
            Contact Us
          </h2>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600">
            <p className="flex items-center gap-2">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              <a href="mailto:support@furniro.com" className="text-blue-600 hover:text-blue-700">
                support@furniro.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              +1 (123) 456-7890
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              123 Furniro Lane, Furniture City, FC 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnsPolicy;