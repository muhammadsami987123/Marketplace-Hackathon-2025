"use client";

import { createContext, useContext, useState, useEffect } from "react";

type WishlistItem = {
  productImage: string;
  description: string;
  title: string;
  _id: string; // Ensure _id is always a string
  price_id: string;
  id: string;
  name: string;
  image: string;
  currency: string;
  price: number;
};

type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  const saveToLocalStorage = (wishlist: WishlistItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      // Check if the product is already in the wishlist
      if (!prev.some((existingItem) => existingItem._id === item._id)) {
        const updatedWishlist = [...prev, item]; // Add the new product
        saveToLocalStorage(updatedWishlist);
        return updatedWishlist;
      }
      return prev; // No duplicate items
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item._id !== id);
      saveToLocalStorage(updatedWishlist);
      return updatedWishlist;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    }
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider.");
  }
  return context;
};
