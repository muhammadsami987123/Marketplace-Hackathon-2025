"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image"; // Import urlFor for Sanity images
import { MouseEvent } from "react"; // Import MouseEvent for type safety

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      const result = await redirectToCheckout();
      if (result?.error) {
        console.log("Checkout Error:", result.error);
      }
    } catch (error) {
      console.error("Checkout Exception:", error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">You don’t have any items</h1>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => {
                    // Handle image processing
                    const processedImage =
                      entry.productImage &&
                      typeof entry.image === "object" &&
                      "asset" in entry.productImage
                        ? urlFor(entry.productImage).url()
                        : "/fallback.jpg"; // Fallback image
                    console.log("Entry Image Object:", entry.productImage);
                    console.log("Processed Image URL:", processedImage);

                    return (
                      <li key={entry.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                          {processedImage ? (
                            <Image
                              src={processedImage}
                              alt="Product image"
                              width={100}
                              height={100}
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full bg-gray-100">
                              <span className="text-gray-500">No Image</span>
                            </div>
                          )}
                        </div>

                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3>{entry.title}</h3>
                              <p className="ml-4">${entry.price}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                              {entry.description}
                            </p>
                          </div>

                          <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">
                              QTY: {entry.quantity}
                            </p>

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
                  })}
                </>
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
              <Button onClick={handleCheckoutClick} className="w-full">
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
