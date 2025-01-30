"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const shippingDetails = [
  {
    title: "1. Order Processing Time",
    content:
      "Orders are processed within 1-2 business days after payment confirmation via Stripe. Orders placed on weekends or holidays will be processed the next business day.",
  },
  {
    title: "2. Shipping Carriers & ShipEngine Integration",
    content:
      "We use ShipEngine to provide reliable shipping options. Our primary carriers include FedEx, UPS, and DHL. Customers receive real-time tracking updates via email once an order is shipped.",
  },
  {
    title: "3. Estimated Delivery Time",
    content:
      "Delivery times vary based on your location:\n- Standard Shipping: 5-7 business days\n- Expedited Shipping: 2-3 business days\n- Overnight Shipping: 1 business day\nShipEngine automatically calculates the estimated arrival date during checkout.",
  },
  {
    title: "4. International Shipping",
    content:
      "We currently ship to select international destinations. Additional customs duties, taxes, and fees may apply based on your country’s import policies.",
  },
  {
    title: "5. Shipping Costs",
    content:
      "Shipping rates are calculated at checkout using ShipEngine’s real-time rates based on package size, weight, and destination. Free shipping is available for orders over $500.",
  },
  {
    title: "6. Order Tracking & Notifications",
    content:
      "Once your order ships, you’ll receive a tracking number via email or SMS. You can track your shipment in real-time using our ShipEngine-powered tracking page.",
  },
  {
    title: "7. Lost or Stolen Packages",
    content:
      "We are not responsible for lost or stolen packages once the carrier marks them as delivered. Please ensure your shipping address is secure.",
  },
  {
    title: "8. Returns & Exchanges",
    content:
      "If you are not satisfied with your purchase, you may return it within 30 days. Return shipping fees apply unless the item is defective or incorrect.",
  },
  {
    title: "9. Address Changes & Order Modifications",
    content:
      "Once an order is placed, address changes can only be made before shipment. Contact customer support as soon as possible for modifications.",
  },
  {
    title: "10. Contact Support",
    content:
      "For any questions related to shipping or delivery, contact our support team at support@funiro.com or visit our Contact Us page.",
  },
];

export default function ShippingDeliveryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f5f0e8] max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Shipping & Delivery</h1>
      <p className="text-gray-600 text-center mb-8">
        Learn about our shipping policies, delivery timeframes, and order tracking process.
      </p>

      {/* Shipping Information Section */}
      <div className="space-y-4">
        {shippingDetails.map((section, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <button
              className="flex justify-between items-center w-full text-lg font-semibold focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              {section.title}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 whitespace-pre-line">{section.content}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
