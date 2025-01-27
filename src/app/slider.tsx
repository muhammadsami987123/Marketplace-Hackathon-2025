'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { client } from '@/sanity/lib/client'; // Adjust the path as necessary
import { Slide } from '@/types/slide'; // Import the Slide type

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [slides, setSlides] = useState<Slide[]>([]);

  const SLIDE_DURATION = 5000; // 5 seconds

  // Fetch slides from Sanity
  useEffect(() => {
    const fetchSlides = async () => {
      const query = '*[_type == "slide"]{image{asset->{url}}, alt}';
      const result: Slide[] = await client.fetch(query);
      setSlides(result);
    };

    fetchSlides();
  }, []);

  // Automatically transition slides
  useEffect(() => {
    if (slides.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, SLIDE_DURATION);

      return () => clearInterval(timer); // Cleanup on unmount
    }
  }, [slides.length]);

 

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (slides.length === 0) {
    return <div>Loading...</div>; // or some loading spinner
  }

  return (
    <div className="bg-[#f5f0e8] mx-auto py-4 px-4 sm:px-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Section - Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-gray-800">
              50+ Beautiful rooms<br /> inspiration
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Our designer already made a lot of beautiful<br /> prototypes of rooms that inspire you.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-white font-medium rounded-lg shadow-md hover:bg-yellow-600 transition">
              Explore More
            </button>
          </div>

          {/* Right Section - Carousel */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-[200px] sm:h-[400px] relative"
                  style={{ flex: `0 0 100%` }}
                >
                  {/* Image Wrapper */}
                  <div className="w-[600px] h-full md:w-[500px]  relative lg:w-[500px] md:relative sm:w-[800px] ">
                    <Image
                      src={slide.image.asset.url}
                      alt={slide.alt}
                    fill
                      className=" " // Prevents zooming and ensures the image fits
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons (Visible on Mobile Only) */}
          
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full cursor-pointer transition ${
                currentIndex === index ? "bg-yellow-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;