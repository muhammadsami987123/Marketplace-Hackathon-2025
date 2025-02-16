"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";

const faqs = [
  // 📦 ORDER & SHIPPING
  { question: "What types of furniture do you sell?", answer: "We offer sofas, beds, tables, chairs, office furniture, outdoor furniture, and more." },
  { question: "Do you ship internationally?", answer: "Currently, we ship within select regions. Please check our shipping policy for more details." },
  { question: "How long does shipping take?", answer: "Orders take 5-7 business days for major cities and up to 14 days for rural areas." },
  { question: "Can I track my order?", answer: "Yes, tracking details are provided via email once your order is shipped." },
  { question: "Do you offer same-day or next-day delivery?", answer: "Same-day delivery is available in select cities for an additional fee." },
  { question: "What are your shipping charges?", answer: "Shipping is free on orders above a certain value. Additional charges may apply for smaller orders." },
  { question: "Do you offer white-glove delivery service?", answer: "Yes, we offer premium white-glove delivery, including unpacking and assembly." },
  { question: "Can I schedule a delivery date?", answer: "Yes, you can schedule delivery at checkout for available dates." },
  { question: "What happens if I am not home during delivery?", answer: "Our team will contact you to reschedule. Additional charges may apply for missed deliveries." },
  { question: "Do you deliver to apartments or multi-story buildings?", answer: "Yes, but please ensure that large furniture fits through doors and elevators." },

  // 🔄 RETURNS & EXCHANGES
  { question: "What is your return policy?", answer: "We accept returns within 30 days of delivery for unused and undamaged furniture." },
  { question: "Are returns free?", answer: "Return shipping charges may apply unless the item is defective or incorrect." },
  { question: "How do I initiate a return?", answer: "Contact our support team with your order details and reason for return." },
  { question: "Can I exchange an item?", answer: "Yes, exchanges are available within 30 days, subject to stock availability." },
  { question: "What happens if my order arrives damaged?", answer: "Contact us within 48 hours with photos, and we will arrange a replacement or refund." },
  { question: "Can I cancel my order?", answer: "Orders can be canceled within 24 hours of purchase. After that, cancellations depend on shipping status." },
  { question: "Do you offer store credit for returns?", answer: "Yes, you can choose between a refund or store credit for future purchases." },

  // 🏡 PRODUCT INFORMATION
  { question: "What materials are used in your furniture?", answer: "We use high-quality wood, metal, glass, and premium upholstery fabrics." },
  { question: "Are your products eco-friendly?", answer: "Yes, we offer sustainable furniture made from recycled materials and FSC-certified wood." },
  { question: "Do you provide fabric or wood samples?", answer: "Yes, we offer free samples to help you choose before purchasing." },
  { question: "How do I clean and maintain my furniture?", answer: "Care instructions vary by material. Wooden furniture should be polished regularly, while fabric upholstery should be vacuumed." },
  { question: "Are your products pet-friendly?", answer: "Yes, we offer pet-friendly and scratch-resistant fabrics for sofas and chairs." },
  { question: "What size sofas do you offer?", answer: "We offer a variety of sizes, from single-seaters to large sectional sofas." },
  { question: "Do you offer waterproof furniture?", answer: "Yes, our outdoor collection includes waterproof and weather-resistant options." },
  { question: "Can I buy replacement parts?", answer: "Yes, we offer replacement parts for select furniture items." },

  // 🎨 CUSTOMIZATION
  { question: "Can I customize the size and color of furniture?", answer: "Yes! Customization options like fabric, color, and dimensions are available on select items." },
  { question: "How long does custom furniture take to make?", answer: "Custom orders take 3-6 weeks depending on the design and materials." },
  { question: "Do you offer engraving or personalization?", answer: "Yes, engraving and monogramming services are available for select furniture." },
  { question: "Can I get a custom-built sofa or bed?", answer: "Yes, we offer made-to-order furniture based on your specifications." },

  // 💳 PAYMENT & FINANCING
  { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, PayPal, Apple Pay, and installment payment options." },
  { question: "Do you offer financing or installment plans?", answer: "Yes, flexible monthly installment plans are available through third-party providers." },
  { question: "Can I use multiple payment methods for one order?", answer: "No, currently we only accept one payment method per order." },
  { question: "Is my payment secure?", answer: "Yes, we use encrypted payment gateways for secure transactions." },

  // 🏆 WARRANTIES & GUARANTEES
  { question: "Do your products come with a warranty?", answer: "Yes, all our furniture comes with warranties ranging from 1 to 5 years." },
  { question: "What does the warranty cover?", answer: "The warranty covers manufacturing defects but not accidental damage or normal wear and tear." },
  { question: "How do I claim a warranty?", answer: "Contact our support team with proof of purchase and images of the defect." },

  // 📞 CUSTOMER SUPPORT
  { question: "How can I contact customer service?", answer: "You can reach us via email, phone, or live chat." },
  { question: "What are your customer support hours?", answer: "Our team is available from 9 AM - 6 PM, Monday to Saturday." },
  { question: "Do you offer in-home furniture consultations?", answer: "Yes, our design experts offer free virtual and in-home consultations." },

  // 🛋️ SHOWROOM & EXPERIENCE
  { question: "Do you have a physical store?", answer: "Yes, we have showrooms in multiple cities where you can test our furniture before purchasing." },
  { question: "Can I visit your warehouse?", answer: "Warehouse visits are available by appointment only." },
  { question: "Do you host furniture sales events?", answer: "Yes, we have seasonal sales and clearance events throughout the year." },

  // ⭐ MISCELLANEOUS
  { question: "Do you offer gift cards?", answer: "Yes, digital gift cards are available for purchase." },
  { question: "Do you work with interior designers?", answer: "Yes, we collaborate with designers and offer trade discounts." },
  { question: "Do you sell second-hand or refurbished furniture?", answer: "Yes, we have a collection of refurbished furniture at discounted prices." },
  { question: "Do you donate furniture to charities?", answer: "Yes, we partner with organizations to donate furniture to those in need." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f5f0e8] py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-6 md:mb-8 text-gray-900">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-center text-gray-600 mb-6 sm:mb-8">
          Find answers to common questions about our furniture and services
        </p>
        
        <div className="relative mb-6 sm:mb-8">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            className="w-full p-3 sm:p-4 pl-10 sm:pl-12 pr-4 text-sm sm:text-base rounded-lg sm:rounded-xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-3 sm:space-y-4">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-6 sm:py-8 text-sm sm:text-base text-gray-500">
              No questions found matching your search
            </div>
          ) : (
            filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center text-left"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                  <span className="ml-2 sm:ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-gray-600 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
