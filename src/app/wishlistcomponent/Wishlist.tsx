"use client";

import { FaTrash, FaHeart } from "react-icons/fa";
import { useWishlist } from "./wishlistcontext";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToCart from "@/app/AddtoBag";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const quantity = 1;

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-3xl font-semibold mb-8 flex items-center gap-2">
          <FaHeart className="text-[#007580]" /> Your Wishlist
        </h1>

        {/* Empty State */}
        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-96">
            <Image
              src="/wishlist-empty.svg"
              alt="Empty Wishlist"
              width={150}
              height={150}
              quality={100}
              loading="lazy"
              className="mb-6"
            />
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
              Your Wishlist is empty
            </h1>
            <p className="text-gray-600 mb-6 text-center">
              Looks like you haven’t added anything to your wishlist yet. Start exploring and add your favorite items!
            </p>
            <Button
              className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              Continue Shopping
            </Button>
          </div>
        ) : (
          // Wishlist Items
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((data) => (
              <div
                key={data._id}
                className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Product Image */}
                <div className="w-full h-48 relative mb-4">
                  <Image
                    src={data.productImage}
                    alt={data.name}
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="w-full text-center">
                  <p className="text-lg font-medium mb-1">{data.name}</p>
                  <p className="text-sm text-gray-600 mb-4">${data.price}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between gap-4 w-full">
                  <Button
                    className="text-red-600 hover:text-red-800 flex items-center justify-center gap-2 w-1/2 py-2 border border-red-600 rounded-lg transition-colors"
                    onClick={() => removeFromWishlist(data._id)}
                  >
                    <FaTrash className="w-5 h-5" /> Remove
                  </Button>
                  <AddToCart
                    currency="USD"
                    price={data.price}
                    description={data.description || "No description available"}
                    productImage={data.productImage}
                    name={data.name || "Unknown"}
                    key={`wishlist-${data._id}`}
                    price_id={data.price_id}
                    _id={data._id}
                    quantity={quantity}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;