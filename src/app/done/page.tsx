'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function OrderDone() {
  const router = useRouter();

  const handleViewOrder = () => {
    router.push('/order-details'); // Navigate to the order details page
  };

  const handleContinueShopping = () => {
    router.push('/shop'); // Navigate back to the shop page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-10 text-center max-w-md">
        <div className="flex justify-center items-center mb-6">
          <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you for ordering!</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="px-6 py-2 rounded-md bg-gray-800 text-white font-bold hover:bg-gray-900 transition"
            onClick={handleViewOrder}
          >
            View Order
          </button>
          <button
            className="px-6 py-2 rounded-md bg-orange-500 text-white font-bold hover:bg-orange-600 transition"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}
