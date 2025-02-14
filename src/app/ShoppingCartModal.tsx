"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use "next/navigation" instead of "next/router"
import { useShoppingCart } from "use-shopping-cart";
import { Product } from "use-shopping-cart/core";

export default function ShoppingCartModal() {
  const router = useRouter(); // Move useRouter inside the component

  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    
    addItem,
  } = useShoppingCart();

  const handleCheckout = () => {
    try {
      router.push("/orderDetails"); // Correct usage of router.push
    } catch (error) {
      console.error("Failed to redirect to /checkout:", error);
    }
  };

  // Function to increment quantity
  const incrementQuantity = (entry: Product) => {
    addItem(entry, { count: 1 }); // Add 1 to the current quantity
  };

  // Function to decrement quantity
  const decrementQuantity = (entry: Product) => {
    if (entry.quantity > 1) {
      addItem(entry, { count: -1 }); // Subtract 1 from the current quantity
    } else {
      removeItem(entry.id); // Remove the item if quantity is 1
    }
  };

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-sm w-[90vw] bg-[#f5f0e8]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don’t have any items</h1>
              ) : (
                Object.values(cartDetails ?? {}).map((entry) => {
                  const processedImage =
                    entry.productImage || "/fallback.jpg"; // Ensure valid URL or fallback

                  return (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={processedImage}
                          alt={entry.name || "Product image"}
                          width={100}
                          height={100}
                          className="object-cover"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>{entry.name }</h3>
                            <p className="ml-4">${entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                            {entry.description }
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => decrementQuantity(entry)}
                              className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                            >
                              -
                            </button>
                            <p className="text-gray-500">QTY: {entry.quantity}</p>
                            <button
                              type="button"
                              onClick={() => incrementQuantity(entry)}
                              className="px-2 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button onClick={handleCheckout} className="w-full">
                Checkout
              </Button>
            </div>

            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className="font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
