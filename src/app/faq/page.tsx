"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <div className=" bg-[#f5f0e8] max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-6">Frequently Asked Questions</h1>
      <input type="text" placeholder="Search..." className="w-full p-3 pl-10 border border-gray-300 rounded-lg mb-6" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {filteredFAQs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-lg p-4">
          <button onClick={() => toggleFAQ(index)} className="flex justify-between w-full text-lg font-semibold">
            {faq.question} {openIndex === index ? <ChevronUp /> : <ChevronDown />}
          </button>
          {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
