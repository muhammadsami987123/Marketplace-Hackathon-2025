import React from 'react';
import Image from 'next/image';

export default function ImageGrid() {
  return (
    <div className="bg-white py-9">
      {/* Header */}
      <h2 className="text-xl font-semibold text-center">Share your setup with</h2>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center">#FuniroFurniture</h2>

      {/* Image Section */}
      <div className="flex justify-center py-6 px-4">
        <div className="relative w-full max-w-[1200px] h-[200px] md:h-[400px] lg:h-[600px]">
          <Image
            src="/grid.jpg"
            alt="Furniture Setup"
            className="object-cover rounded-lg shadow-lg"
            layout="responsive"  // Adjusted to make the image responsive
            width={1200}          // Added width for responsive layout
            height={800}          // Added height for responsive layout
            priority              // Ensures the image loads faster
            aria-label="Furniture setup in a home"  // Added aria-label for accessibility
          />
        </div>
      </div>
    </div>
  );
}
