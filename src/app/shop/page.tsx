"use client";

import React, { useState, useEffect, useCallback } from "react";
import FeatureSection from "../FeatureSection";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/sanity";
import FilterInterface from "../filter";

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

function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Filtering + Sorting
  const [priceRange, setPriceRange] = useState<number>(500);
  const [category, setCategory] = useState<string>("all");
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Pagination + Sorting
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const [sortOption, setSortOption] = useState<string>("default");

  // Fetch products from Sanity
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
        const formatted = sanityProducts.map((p) => ({
          id: p._id,
          name: p.title || "Unnamed Product",
          slug: p.slug,
          description: p.description
            ? p.description.split(" ").slice(0, 20).join(" ") + "..."
            : "No description available",
          price: p.price,
          image: p.productImage || "/placeholder.jpg",
        }));
        setProducts(formatted);
        setFilteredProducts(formatted);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  /**
   * Filter & Sort Logic, wrapped in useCallback so it can safely be used in useEffect.
   */
  const applyFiltersAndSorting = useCallback(
    (items: Product[]) => {
      // Use 'const' because we're not reassigning the reference
      const result = items.filter(
        (product) =>
          product.price <= priceRange &&
          (category === "all" ||
            product.name.toLowerCase().includes(category.toLowerCase()))
      );

      // Sorting
      switch (sortOption) {
        case "name-asc":
          result.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          result.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          result.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          result.sort((a, b) => b.price - a.price);
          break;
        // "default" => no sort
      }

      return result;
    },
    [priceRange, category, sortOption]
  );

  // Whenever products, priceRange, category, or sortOption changes, re-apply
  useEffect(() => {
    const newFiltered = applyFiltersAndSorting(products);
    setFilteredProducts(newFiltered);
    setCurrentPage(1); // reset page when filters change
  }, [products, applyFiltersAndSorting]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="min-h-screen bg-[#f5f0e8]">
      {/* Container */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Banner */}
        <header
          className="relative h-48 md:h-64 w-full bg-center bg-cover rounded-md overflow-hidden mb-6"
          style={{ backgroundImage: "url('/shop.jpg')" }}
        >
          {/* Optional overlay and heading */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white font-bold text-2xl md:text-4xl">Our Shop</h1>
          </div> */}
        </header>

        {/* Filter Bar */}
        <FilterInterface
          totalResults={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(value) => setItemsPerPage(value)}
          sortOption={sortOption}
          onSortOptionChange={(value) => setSortOption(value)}
          onFilterClick={() => setShowFilters(!showFilters)}
        />

        {/* Additional Filters (if toggled) */}
        {showFilters && (
          <div className="mt-4 mb-6 p-4 bg-white rounded-md shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="flex flex-col">
                <label htmlFor="priceRange" className="text-sm font-medium">
                  Max Price: {priceRange}
                </label>
                <input
                  id="priceRange"
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="mt-2"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="category" className="text-sm font-medium">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 mt-2"
                >
                  <option value="all">All</option>
                  <option value="shoes">Shoes</option>
                  <option value="bag">Bag</option>
                  <option value="dress">Dress</option>
                  {/* Add more categories as needed */}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id}>
              <div className="bg-white p-4 rounded-md shadow-sm hover:shadow-md transition-all">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-2">
                  {product.description}
                </p>
                <p className="text-base font-bold">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Numbered Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center gap-2 mt-8 justify-center">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isActive = page === currentPage;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-md transition-colors 
                    ${
                      isActive
                        ? "bg-[#97733f] text-white" // Active page
                        : "bg-[#F6EDE5] hover:bg-[#f2e6dc] text-black" // Inactive page
                    }
                  `}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            {currentPage < totalPages && (
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-4 py-2 rounded-md transition-colors bg-[#F6EDE5] hover:bg-[#f2e6dc] text-black"
              >
                Next
              </button>
            )}
          </div>
        )}
      </div>

      {/* Feature Section */}
      <FeatureSection />
    </div>
  );
}

export default ProductSection;
