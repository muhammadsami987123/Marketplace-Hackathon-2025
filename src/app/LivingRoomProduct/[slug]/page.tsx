"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { fullProduct } from "../../../../interface";
import ImageGallery from "@/app/ImageGallery";
import { Star, Truck } from "lucide-react";
import AddToBag from "@/app/AddtoBag";
import Link from "next/link";
import Image from "next/image";
import AddToWishlist from "@/app/wishlistcomponent/wishlistbutton";
import Loader from "@/app/loader";
import { Button } from "@/components/ui/button";

async function getData(slug: string): Promise<fullProduct | null> {
  const query = `*[_type == 'LivingRoom' && slug.current == $slug][0] {
    _id,
    "productImage": productImage.asset->url,
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
  const [isLoading, setIsLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

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

  const imageUrls = data.productImage ? [data.productImage] : ["/fallback.jpg"];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-[#f5f0e8]">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ImageGallery images={imageUrls} />
          <div className="md:py-8">
            <div className="mb-2 md:mb-3">
              
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                {data.title}
              </h2>
            </div>

            <div className="mb-6 flex items-center gap-3 md:mb-10">
              <Button className="rounded-full gap-x-2">
                <span className="text-sm">4.2</span>
                <Star className="h-5 w-5" />
              </Button>

              <span className="text-sm text-gray-500 transition duration-100">
                56 Ratings
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 30}
                </span>
              </div>

              <span className="text-sm text-gray-500">
                Incl. Vat plus shipping
              </span>
            </div>

            <div className="mb-6 flex items-center gap-2 text-gray-500">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
              <div className="flex items-center border border-gray-300 rounded-lg w-fit">
                <button
                  onClick={decrementQuantity}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-l-lg transition-colors"
                >
                  -
                </button>
                <span className="px-4 py-2 bg-white text-gray-800">{quantity}</span>
                <button
                  onClick={incrementQuantity}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-r-lg transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex gap-2.5">
              <AddToBag
                currency="USD"
                price={data.price}
                description={data.description}
                productImage={data.productImage}
                name={data.title }
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

            <p className="mt-12 text-base text-gray-500 tracking-wide">
              {data.description
                ? data.description.split(" ").slice(0, 50).join(" ") + "..."
                : "No description available"}
            </p>
          </div>
        </div>

        {/* Related Products Section */}
               {/* Related Products Section */}
               <div className="bg-[#f5f0e8] py-8 px-4 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <Link key={product._id} href={`/product/${product.slug}`}>
                <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all">
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={product.productImage}
                      alt={product.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                    {product.description ? product.description.split(" ").slice(0, 20).join(" ") + "..." : "No description available"}
                  </p>
                  <p className="text-base font-bold">${product.price}</p>
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