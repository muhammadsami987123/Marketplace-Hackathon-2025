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
      <div className="order-last flex gap-4 overflow-x-auto lg:order-none lg:flex-col lg:overflow-hidden">
        {images.map((image, idx) => {
          const imageUrl = urlFor(image).width(400).height(400).url();
          return (
            <div
              key={idx}
              className={`relative aspect-square overflow-hidden rounded-lg bg-gray-100 w-24 sm:w-32 lg:w-full flex-shrink-0 cursor-pointer 
                ${bigImage === image ? 'ring-2 ring-offset-1 ring-blue-500' : 'hover:ring-2 hover:ring-offset-1 hover:ring-gray-300'}`}
              onClick={() => handleSmallImageClick(image)}
            >
              <Image
                src={imageUrl}
                fill
                alt={`Product image ${idx + 1}`}
                className="object-cover object-center transition-opacity duration-200"
                sizes="(max-width: 768px) 96px, (max-width: 1024px) 128px, 20vw"
              />
            </div>
          );
        })}
      </div>

      {/* Large Image Display */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        {bigImage ? (
          <Image
            src={urlFor(bigImage).width(1200).height(1200).url()}
            alt="Main product image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            className="object-cover object-center"
            priority
          />
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
