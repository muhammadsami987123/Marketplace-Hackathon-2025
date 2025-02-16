"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { fullProduct } from "../../../../interface";
import ImageGallery from "@/app/ImageGallery";
import { Star, Truck } from "lucide-react";
import AddToBag from "@/app/AddtoBag";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AddToWishlist from "@/app/wishlistcomponent/wishlistbutton";
import Loader from "@/app/loader";

async function getData(slug: string): Promise<fullProduct | null> {
  const query = `*[_type == 'product' && slug.current == $slug][0] {
    _id,
    "productImage": productImage.asset->url,
    "productImages": productImages[]{ "url": asset->url },
    price,
    description,
    title,
    "slug": slug.current,
    price_id
  }`;

  try {
    const data = await client.fetch(query, { slug });
    console.log("Fetched Product Data:", data);
    return data || null;
  } catch (error) {
    console.error("Failed to fetch data:", error);
    setError("Unable to load products. Please try again later.");
    return null;
  }
}

async function getRelatedProducts(): Promise<fullProduct[]> {
  const query = `*[_type == 'product'][0...8] {
    _id,
    "productImage": productImage.asset->url,
    price,
    title,
     description,
     price_id,
    "slug": slug.current
  }`;

  try {
    const data = await client.fetch(query);
    return data || [];
  } catch (error) {
    console.error("Failed to fetch related products:", error);
    return [];
  }
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params);
  const slug = resolvedParams.slug;

  const [data, setData] = useState<fullProduct | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<fullProduct[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const productData = await getData(slug);
      setData(productData);
      const related = await getRelatedProducts();
      setRelatedProducts(related);
      setIsLoading(false);
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Product Not Found</h1>
      </div>
    );
  }

  const imageUrls = data.productImages 
    ? data.productImages.map(img => img.url)
    : data.productImage 
      ? [data.productImage] 
      : ["/fallback.jpg"];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-[#f5f0e8] min-h-screen py-8">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Image Gallery Section */}
          <div className="md:sticky md:top-20 md:h-fit">
            <ImageGallery images={imageUrls} />
          </div>

          {/* Product Details Section */}
          <div className="flex flex-col space-y-6">
            {/* Product Title and Rating */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.title}
              </h2>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="rounded-full gap-x-2">
                  <span className="text-sm">4.2</span>
                  <Star className="h-4 w-4" />
                </Button>
                <span className="text-sm text-gray-500">56 Ratings</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="space-y-2 pb-6 border-b border-gray-200">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-800">
                  ${data.price}
                </span>
                <span className="text-lg text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500">
                <Truck className="w-5 h-5" />
                <span className="text-sm">2-4 Day Shipping</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 hover:bg-gray-50 text-gray-600 transition-colors"
                >
                  -
                </button>
                <span className="w-12 text-center py-2 text-gray-800">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 hover:bg-gray-50 text-gray-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-6">
              <AddToBag
                currency="USD"
                price={data.price}
                description={data.description}
                productImage={data.productImage}
                name={data.title}
                key={`add-to-bag-${data._id}`}
                price_id={data.price_id}
                _id={data._id}
                quantity={quantity}
              />
              <AddToWishlist 
                currency="USD"
                price={data.price}
                description={data.description}
                productImage={data.productImage}
                name={data.title}
                key={`wishlist-button-${data._id}`}
                price_id={data.price_id}
                _id={data._id}
                quantity={quantity}
              />
            </div>

            {/* Product Description */}
            <div className="pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-3">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">
                {data.description
                  ? data.description.split(" ").slice(0, 50).join(" ") + "..."
                  : "No description available"}
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-8">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link 
                key={product._id} 
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                  <div className="relative aspect-square">
                    <Image
                      src={product.productImage}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-800 mb-2 line-clamp-1">{product.title}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2 mb-2">
                      {product.description}
                    </p>
                    <p className="text-lg font-bold text-gray-900">${product.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function setError(arg0: string) {
  console.error(`Error: ${arg0}`);
  throw new Error("Function not implemented.");
}