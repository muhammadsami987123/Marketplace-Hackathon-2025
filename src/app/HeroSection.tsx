"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Correct import for router in Next.js 13+

function HeroSection() {
  const router = useRouter(); // Initialize useRouter hook

  const handleAllProducts = () => {
    try {
      router.push("/all-products"); // Correct usage of router.push
    } catch (error) {
      console.error("Failed to redirect to /all-products:", error);
    }
  };

  return (
    <section className="relative bg-white">
      <div className="bg-gray-200">
        <div className="container mx-auto p-4 flex flex-col md:flex-row justify-center items-center">
          {/* Image Container */}
          <div className="relative w-full md:w-[60%] h-[300px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/hero.jpg"
              alt="New Collection"
              className="w-full h-full object-cover"
              layout="responsive"
              width={1200}
              height={600}
              priority
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute md:static top-28 left-0 w-full md:w-[40%] bg-[#fdf5e6] flex flex-col justify-start items-start text-black text-left p-6 sm:p-8 space-y-4 rounded-lg shadow-md">
            <h1 className="text-xs sm:text-sm uppercase font-semibold text-gray-500 mb-2">
              New Arrival
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7a6229] mb-6">
              Discover Our
              <br /> New Collection
            </h2>
            <p className="text-sm sm:text-md text-gray-600 mb-6">
              Explore the latest trends and collections that bring style and
              comfort to your home. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
            </p>
            <button
              className="bg-[#7a6229] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded hover:bg-[#5c491f] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a6229]"
              aria-label="Buy Now"
              onClick={handleAllProducts}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
