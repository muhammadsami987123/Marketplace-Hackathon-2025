"use client";

import React, { useState, useEffect } from "react";
import FeatureSection from "../FeatureSection";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/sanity";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

interface SanityProduct {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  productImage: string | null;
}

const ITEMS_PER_PAGE = 8; // Display 6 products per page

function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [priceRange, setPriceRange] = useState<number>(500); // Default price range
  const [category, setCategory] = useState<string>("all"); // Default category
  const [showFilters, setShowFilters] = useState<boolean>(false); // Toggle filters visibility
  const [currentPage, setCurrentPage] = useState<number>(1); // Current page

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] {
        _id,
        title,
        "slug": slug.current,
        description,
        price,
        "productImage": productImage.asset->url,
      }`;

      try {
        const sanityProducts: SanityProduct[] = await sanityClient.fetch(query);
        const formattedProducts = sanityProducts.map((product) => ({
          id: product._id,
          name: product.title || "Unnamed Product",
          slug: product.slug,
          description: product.description
            ? product.description.split(" ").slice(0, 20).join(" ") + "..."
            : "No description available",
          price: product.price,
          image: product.productImage || "/placeholder.jpg",
        }));
        setProducts(formattedProducts);
        setFilteredProducts(formattedProducts); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const applyFilters = () => {
    const filtered = products.filter(
      (product) =>
        product.price <= priceRange &&
        (category === "all" ||
          product.name.toLowerCase().includes(category.toLowerCase()))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to the first page
  };

  // Calculate pagination data
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
        <header
          className="relative bg-cover bg-center h-64"
          style={{ backgroundImage: "url('/shop.jpg')" }}
        >
          <div className="absolute inset-0 bg-opacity-50"></div>
        </header>

        {/* Filter Toggle Button */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 py-8">
          <h2 className="text-3xl font-bold text-center sm:text-left">Our All Products</h2>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="bg-gray-800 text-white px-4 py-2 mt-4 sm:mt-0 rounded-md hover:bg-gray-700 transition"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
          </button>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Price Range Filter */}
              <div className="flex flex-col">
                <label htmlFor="priceRange" className="text-gray-600 font-semibold mb-2">
                  Max Price: <span className="text-gray-800">${priceRange}</span>
                </label>
                <input
                  id="priceRange"
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-gray-800"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-col">
                <label htmlFor="category" className="text-gray-600 font-semibold mb-2">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-100 border rounded px-3 py-2"
                >
                  <option value="all">All</option>
                  <option value="furniture">Furniture</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                </select>
              </div>

              {/* Apply Filter Button */}
              <div className="flex items-center sm:col-span-2 lg:col-span-1">
                <button
                  onClick={applyFilters}
                  className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition w-full"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`}>
              <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover mb-4 rounded-lg transition-all"
                />
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-lg font-bold mb-4">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-800 text-white rounded-md mr-2 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-800 text-white rounded-md ml-2 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      <FeatureSection />
    </div>
  );
}

export default ProductSection;
