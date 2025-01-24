"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";

export default function AddToBag(props: { id:string; name:string; price:number; currency: string; description: string; price_id:string; productImage:string; }) {
  const {
    id,
    name,
    price,
    currency,
    description,
    price_id,
    productImage,
  } = props;

  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    id,
    name,
    price,
    currency,
    description,
    productImage: productImage || "/fallback.jpg", // Ensure fallback image
    sku: price_id,
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
