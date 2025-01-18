'use client';
import React, { useState } from "react";
import Image from "next/image";

const Slider = () => {
  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of slide images
  const slides = [
    { image: '/slider1.jpg', alt: 'Room Inspiration 1' },
    { image: '/slider2.jpg', alt: 'Room Inspiration 2' },
    // Add more slides as needed
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to go to a specific slide by index (dots)
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-[#fff3e3] mx-auto py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Section - Text */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-gray-800">
              50+ Beautiful rooms<br /> inspiration
            </h2>
            <p className="mt-4 text-gray-600">
              Our designer already made a lot of beautiful<br /> prototypes of rooms that inspire you
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition">
              Explore More
            </button>
          </div>

          {/* Right Section - Carousel */}
          <div className="relative">
            {/* Slide Images */}
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="relative w-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    className="rounded-lg shadow-lg"
                    width={800} // Set width for better layout control
                    height={500} // Set height for better layout control
                  />
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-100 text-gray-800 p-2 rounded-full shadow hover:bg-gray-200 transition"
            >
              ❯
            </button>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                currentIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
