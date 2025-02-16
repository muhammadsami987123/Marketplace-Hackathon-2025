"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Truck, Package, Globe, DollarSign, Bell, RotateCcw, MapPin, Phone } from "lucide-react";

const shippingDetails = [
  {
    title: "1. Order Processing Time",
    content:
      "Orders are processed within 1-2 business days after payment confirmation via Stripe. Orders placed on weekends or holidays will be processed the next business day.",
    icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "2. Shipping Carriers & ShipEngine Integration", 
    content:
      "We use ShipEngine to provide reliable shipping options. Our primary carriers include FedEx, UPS, and DHL. Customers receive real-time tracking updates via email once an order is shipped.",
    icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "3. Estimated Delivery Time",
    content: 
      "Delivery times vary based on your location:\n- Standard Shipping: 5-7 business days\n- Expedited Shipping: 2-3 business days\n- Overnight Shipping: 1 business day\nShipEngine automatically calculates the estimated arrival date during checkout.",
    icon: <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "4. International Shipping",
    content:
      "We currently ship to select international destinations. Additional customs duties, taxes, and fees may apply based on your country's import policies.",
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "5. Shipping Costs",
    content:
      "Shipping rates are calculated at checkout using ShipEngine's real-time rates based on package size, weight, and destination. Free shipping is available for orders over $500.",
    icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "6. Order Tracking & Notifications",
    content:
      "Once your order ships, you'll receive a tracking number via email or SMS. You can track your shipment in real-time using our ShipEngine-powered tracking page.",
    icon: <Bell className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "7. Lost or Stolen Packages",
    content:
      "We are not responsible for lost or stolen packages once the carrier marks them as delivered. Please ensure your shipping address is secure.",
    icon: <Package className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "8. Returns & Exchanges",
    content:
      "If you are not satisfied with your purchase, you may return it within 30 days. Return shipping fees apply unless the item is defective or incorrect.",
    icon: <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "9. Address Changes & Order Modifications",
    content:
      "Once an order is placed, address changes can only be made before shipment. Contact customer support as soon as possible for modifications.",
    icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
  },
  {
    title: "10. Contact Support",
    content:
      "For any questions related to shipping or delivery, contact our support team at support@funiro.com or visit our Contact Us page.",
    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
  },
];

export default function ShippingDeliveryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f0e8] to-white">
      <div className="max-w-4xl mx-auto py-8 sm:py-16 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-gray-800">
          Shipping & Delivery
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-2">
          Learn about our shipping policies, delivery timeframes, and order tracking process.
        </p>

        {/* Shipping Information Section */}
        <div className="space-y-3 sm:space-y-4">
          {shippingDetails.map((section, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl p-3 sm:p-4 transition-all duration-300 hover:shadow-lg ${
                openIndex === index ? 'bg-white shadow-lg' : 'bg-white/80'
              }`}
            >
              <button
                className="flex justify-between items-center w-full text-base sm:text-lg font-semibold focus:outline-none group"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="text-blue-600 transition-transform duration-300 group-hover:scale-110">
                    {section.icon}
                  </div>
                  <span className="text-gray-800 text-left">{section.title}</span>
                </div>
                <div className="text-gray-400 transition-transform duration-300 ml-2">
                  {openIndex === index ? 
                    <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" /> : 
                    <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
                  }
                </div>
              </button>
              {openIndex === index && (
                <div className="mt-3 sm:mt-4 pl-8 sm:pl-12 pr-2 sm:pr-4 text-sm sm:text-base text-gray-600 whitespace-pre-line animate-fadeIn">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
