"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { AddToBagProps } from "@/types/AddToBagProps";
import { title } from "process";

type productImages = {
  asset?: {
    url?: string;
  };
};

export default function AddToBag(props: AddToBagProps) {
  const {
    id,
    name,
    price,
    currency,
    description,
    price_id,
    images: productImages = [],
  } = props;

  const { addItem, handleCartClick } = useShoppingCart();

  // Generate image URLs
  const imageUrls = productImages.map((productImages: productImages | string) => {
    if (typeof productImages === "string") {
      // Return it as-is, or transform if needed
      return productImages;
    } else if (productImages.asset && productImages.asset.url) {
      // Use .asset.url
      return productImages.asset.url;
    }
    // Fallback if neither condition is true
    return "/fallback.jpg";
  });

  // use-shopping-cart expects a cart item object:
  const product = {
    id,
    name,
    title,
    price,
    productImages: productImages,
    currency,
    description,
    sku: price_id, // "sku" or "price_id" is required by use-shopping-cart
  };

  const handleAddToCart = () => {
    try {
      addItem(product);
      if (typeof handleCartClick === "function") {
        handleCartClick();
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return <Button onClick={handleAddToCart}>Add To Cart</Button>;
}