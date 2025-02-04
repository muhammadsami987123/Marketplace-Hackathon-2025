"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface iAppProps {
  images: SanityImageSource[];
}

export default function ImageGallery({ images }: iAppProps) {
  const [bigImage, setBigImage] = useState<SanityImageSource | null>(images[0] || null);

  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 text-gray-500">
        No images available
      </div>
    );
  }

  const handleSmallImageClick = (image: SanityImageSource) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      {/* Small Thumbnail Images - Scrollable on Mobile */}
      <div className="order-last flex gap-2 overflow-x-auto lg:order-none lg:flex-col lg:overflow-hidden">
        {images.map((image, idx) => {
          const imageUrl = urlFor(image).width(200).height(200).quality(90).url();
          return (
            <div
              key={idx}
              className="overflow-hidden rounded-lg bg-gray-100 w-24 h-24 sm:w-32 sm:h-32 lg:w-auto lg:h-auto"
            >
              <Image
                src={imageUrl}
                width={200}
                height={200}
                alt={`Product image ${idx + 1}`}
                className="h-full w-full object-cover object-center cursor-pointer hover:scale-110 transition-transform duration-300"
                onClick={() => handleSmallImageClick(image)}
              />
            </div>
          );
        })}
      </div>

      {/* Large Image Display */}
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        {bigImage ? (
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
            <Image
              src={urlFor(bigImage).width(1000).height(1000).quality(90).url()}
              alt="Main product image"
              fill
              className="object-cover object-center"
              priority // Ensures it loads first
            />
          </div>
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-500">
            No Image Available
          </div>
        )}

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
}
