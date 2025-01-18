'use client';
import React from 'react';
import Image from 'next/image';

export default function ViewOrderPage() {
  const orders = [
    {
      name: 'Apepro Table',
      price: 250000.0,
      status: 'Pending Order',
      image: '/product1.jpg',
    },
    // Add more orders as needed
  ];

  return (
    <div className="container mx-auto p-4 lg:p-8">
      <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">My Orders</h2>
      <div className="grid grid-cols-1 gap-6">
        {/* Responsive Orders List */}
        {orders.map((order, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row bg-gray-50 p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Product Image */}
            <div className="relative w-full lg:w-32 h-32">
              <Image
                src={order.image}
                alt={order.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Order Details */}
            <div className="flex flex-col justify-center lg:ml-6">
              <h3 className="text-lg font-bold text-gray-800">{order.name}</h3>
              <p className="text-gray-600 mb-2">Price: Rs. {order.price.toFixed(2)}</p>
              <p className="text-yellow-600 font-medium">{order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
