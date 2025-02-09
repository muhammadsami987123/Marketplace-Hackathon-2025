"use client";
import { Button } from "@/components/ui/button";
import { useWishlist } from "./wishlistcontext";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

export default function AddToWishlistProps(props: {
    _id: string;
    name: string;
    price: number;
    currency: string;
    description: string;
    price_id: string;
    productImage: string;
    quantity: number; // Ensure quantity is included in props
  }) {
    const {
      _id,
      name,
      price,
      description,
      currency,
      price_id,
      productImage,
    } = props;

    const { addToWishlist } = useWishlist(); // Wishlist context or provider
    const [notification, setNotification] = useState(false);

    const handleAddToWishlist = () => {
      addToWishlist({
          _id,
          name,
          price,
          currency,
          description,
          productImage: productImage || "/fallback.jpg", // Ensure fallback image
          price_id: price_id,
          title: "",
          id: "",
          image: ""
      });

      // Show the notification
      setNotification(true);

      // Hide the notification after 2 seconds
      setTimeout(() => {
        setNotification(false);
      }, 2000);
    };

    return (
      <div className="relative">
        {/* Wishlist Button */}
        <Button
          onClick={handleAddToWishlist}
          className="bg-white text-black py-1 px-2 hover:bg-black hover:text-white border border-black rounded-lg"
        >
          <FaHeart className="mr-1" />
          Add to Wishlist
        </Button>

        {/* Notification Popup */}
        {notification && (
          <div
            role="alert"
            aria-live="polite"
            className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-100 dark:bg-green-900 border-l-4 border-green-500 dark:border-green-700 text-green-900 dark:text-green-100 p-4 rounded-lg flex items-center space-x-2 shadow-lg transition-all duration-300 ease-in-out"
            style={{ maxWidth: '90%', width: 'auto' }}
          >
            <p className="text-sm sm:text-base">Item added to wishlist!</p>
          </div>
        )}
      </div>
    );
  }