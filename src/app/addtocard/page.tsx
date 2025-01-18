'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import FeatureSection from '../FeatureSection';
import { useRouter } from 'next/navigation'; // Use the correct useRouter import

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { name: 'Product 1', price: 19.99, quantity: 2, image: '/product1.jpg' },
  ]);

  const router = useRouter(); // Initialize useRouter from next/navigation
  
  const handleCheckout = () => {
    try {
      router.push('/cheatout'); // Navigate to the billing page
    } catch (error) {
      console.error('Failed to redirect to billing:', error);
    }
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    // Add tax or additional charges if needed
    return calculateSubtotal();
  };

  const handleQuantityChange = (index: number, value: string) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = parseInt(value) || 1; // Ensure a minimum quantity of 1
    setCartItems(updatedCartItems);
  };

  return (
    <>
      <div className="relative w-full h-[300px]">
        <Image
          src="/cart1.jpg"
          alt="Blog Header"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
      </div>
      <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Table */}
        <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-2 text-gray-600">Product</th>
                <th className="py-2 text-gray-600">Price</th>
                <th className="py-2 text-gray-600">Quantity</th>
                <th className="py-2 text-gray-600">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-4 flex items-center gap-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <span className="text-gray-800 font-medium">
                      {item.name}
                    </span>
                  </td>
                  <td className="py-4 text-gray-800">
                    Rs. {item.price.toFixed(2)}
                  </td>
                  <td className="py-4">
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        handleQuantityChange(index, e.target.value)
                      }
                      className="w-16 text-center border rounded-lg p-2"
                    />
                  </td>
                  <td className="py-4 text-gray-800">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cart Totals */}
        <div className="bg-gray-50 p-10 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Totals</h2>
          <div className="flex justify-between py-2 text-gray-600">
            <span>Subtotal</span>
            <span>Rs. {calculateSubtotal()}</span>
          </div>
          <div className="flex justify-between py-2 text-gray-600">
            <span>Total</span>
            <span>Rs. {calculateTotal()}</span>
          </div>
          <button
            className="mt-4 w-full bg-yellow-600 text-white py-3 rounded-lg text-lg font-bold hover:bg-yellow-800 transition"
            onClick={handleCheckout}
            aria-label="Show billing form"
          >
            Check Out
          </button>
        </div>
      </div>
      <FeatureSection />
    </>
  );
}
