'use client';
import React from 'react';
import Image from 'next/image';
import FeatureSection from '../FeatureSection';
import { useRouter } from 'next/navigation'; // Correct import for app router

export default function BillingPage() {
  const router = useRouter(); // Initialize the router

  const handledone = () => {
    try {
      router.push('/done'); // Navigate to the done page
    } catch (error) {
      console.error('Failed to redirect to done page:', error);
    }
  };

  return (
    <>
      <div className="relative w-full h-[300px]">
        <Image
          src="/cheatout1.jpg"
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="container mx-auto p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Billing Details Form */}
        <div className="lg:col-span-2 bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Billing Details</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-gray-600 mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-600 mb-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="company" className="block text-gray-600 mb-2">
                Company Name (Optional)
              </label>
              <input
                type="text"
                id="company"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-600 mb-2">
                Country / Region
              </label>
              <select id="country" className="w-full border rounded-lg p-2">
                <option value="">Select a country</option>
                <option value="pk">Pakistan</option>
                <option value="us">United States</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-600 mb-2">
                Province / State
              </label>
              <input
                type="text"
                id="state"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-gray-600 mb-2">
                Street Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full border rounded-lg p-2 mb-2"
                placeholder="House number and street name"
              />
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Apartment, suite, unit, etc. (optional)"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-600 mb-2">
                Town / City
              </label>
              <input
                type="text"
                id="city"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="zip" className="block text-gray-600 mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-600 mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg p-2"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="notes" className="block text-gray-600 mb-2">
                Additional Information
              </label>
              <textarea
                id="notes"
                className="w-full border rounded-lg p-2"
                rows={4}
              ></textarea>
            </div>
          </form>
        </div>

        {/* Cart Totals */}
        <div className="bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Your Order</h2>
          <div className="flex justify-between py-2 text-gray-600">
            <span>Product</span>
            <span>Subtotal</span>
          </div>
          <div className="flex justify-between py-2 text-gray-800 font-medium">
            <span>Apepro Table x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between py-2 text-gray-600">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between py-2 text-gray-600">
            <span>Total</span>
            <span className="text-lg font-bold">Rs. 250,000.00</span>
          </div>
          <div className="mt-4">
            <div className="py-2">
              <input type="radio" id="bank" name="payment" className="mr-2" />
              <label htmlFor="bank" className="text-gray-600">
                Direct Bank Transfer
              </label>
            </div>
            <div className="py-2">
              <input type="radio" id="cod" name="payment" className="mr-2" />
              <label htmlFor="cod" className="text-gray-600">
                Cash on Delivery
              </label>
            </div>
            <button
              className="mt-6 w-full bg-yellow-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-yellow-800 transition"
              onClick={handledone}
              aria-label="Show done"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      <FeatureSection />
    </>
  );
}
