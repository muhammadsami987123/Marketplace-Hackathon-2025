"use client";

import { Button } from "@/components/ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { AddToBagProps } from "@/types/AddToBagProps";
import { title } from "process";

type productImage = {
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
    images: productImage = [],
  } = props;

  const { addItem, handleCartClick } = useShoppingCart();

  // Generate image URLs
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
const ImageUrls = productImage.map((productImage: productImage | string) => {
  if (typeof productImage === "string") {
    return productImage;
  } else if (productImage.asset && productImage.asset.url) {
    return productImage.asset.url;
  }
  return "/fallback.jpg";
});


  // use-shopping-cart expects a cart item object:
  const product = {
    id,
    name,
    title,
    price,
    productImages: productImage,
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