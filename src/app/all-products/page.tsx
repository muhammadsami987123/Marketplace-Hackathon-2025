"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { sanityClient } from "@/sanity/lib/sanity";
import FilterInterface from "../filter";
import { ChevronRight } from "lucide-react";

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

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  // Filtering + Sorting
  const [priceRange] = useState<number>(500);
  const [category] = useState<string>("all");
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
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };

    fetchProducts();
  }, []);

  /**
   * Filter & Sort Logic, wrapped in useCallback so it can safely be used in useEffect.
   */
  const applyFiltersAndSorting = useCallback(
    (items: Product[]) => {
      const result = items.filter(
        (product) =>
          product.price <= priceRange &&
          (category === "all" ||
            product.name.toLowerCase().includes(category.toLowerCase()))
      );

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
      }

      return result;
    },
    [priceRange, category, sortOption]
  );

  useEffect(() => {
    const newFiltered = applyFiltersAndSorting(products);
    setFilteredProducts(newFiltered);
    setCurrentPage(1);
  }, [products, applyFiltersAndSorting]);

  // Pagination
  // const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );
  

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6">
      <header
          className="relative h-48 md:h-64 w-full bg-center bg-cover rounded-md overflow-hidden mb-6"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          {/* Optional overlay and heading */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white font-bold text-2xl md:text-4xl">Our Shop</h1>
          </div> */}
           <div className="absolute inset-0 flex flex-col items-center justify-center">
           <Image src="/logo.ico" alt="logo" width={40} height={40} />
          <h1 className="lg:text-3xl font-semibold sm:text-2xl  mb-4">All Products</h1>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>All Products</span>
          </div>
        </div>
        </header>
        {/* <h2 className="text-3xl font-bold mb-6 flex justify-center ">Our Products</h2> */}
        <FilterInterface
          totalResults={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={(value) => setItemsPerPage(value)}
          sortOption={sortOption}
          onSortOptionChange={(value) => setSortOption(value)}
          onFilterClick={() => setShowFilters(!showFilters)}
        />
         {/* Loading State */}
         {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-sm animate-pulse"
              >
                <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
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
        </>
        )}
      
      </div>
    </section>
  );
}
