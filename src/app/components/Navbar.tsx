"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For programmatic navigation
import Image from "next/image";
import { MdOutlinePeople } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { client } from "@/sanity/lib/client";
import { useShoppingCart } from "use-shopping-cart";

// Define the type for a product
interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  slug: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Toggle search bar visibility
  const [query, setQuery] = useState<string>(""); // Search query input
  const [results, setResults] = useState<Product[]>([]); // Search results state
  const [loading, setLoading] = useState<boolean>(false); // Loading indicator

  const { handleCartClick } = useShoppingCart();
  const router = useRouter(); // To navigate programmatically

  // Fetch search results from Sanity
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 2) {
      setLoading(true);
      try {
        const fetchedResults: Product[] = await client.fetch(
          `*[_type == "product" && title match $searchQuery]{
            _id,
            title,
            description,
            "imageUrl": productImage.asset->url,
            price,
            "slug": slug.current
          }`,
          { searchQuery: `${searchQuery}*` }
        );
        setResults(fetchedResults);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]); // Clear results if query is too short
    }
  };

  // Handle product click
  const handleProductClick = (slug: string) => {
    setIsSearchOpen(false); // Close the search modal
    setQuery(""); // Clear the search query
    setResults([]); // Clear the search results
    router.push(`/product/${slug}`); // Navigate to the product page
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Furniro Logo"
            width={160}
            height={40}
            className="h-10 w-auto"
          />
          <span className="text-black font-bold text-2xl ml-2">Furniro</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-2xl text-gray-600"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-xl">
          <li>
            <Link href="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </li>
        </ul>

        {/* Icons and Search */}
        <div className="hidden md:flex items-center space-x-4">
          <MdOutlinePeople className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
          <IoIosSearch
            className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          />
          <CiHeart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
          <HiOutlineShoppingCart
            className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={handleCartClick}
          />
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Login/Signup
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 space-y-4">
          <Link
            href="/"
            className="block text-xl text-gray-700 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="block text-xl text-gray-700 hover:text-blue-500"
          >
            Shop
          </Link>
          <Link
            href="/blog"
            className="block text-xl text-gray-700 hover:text-blue-500"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block text-xl text-gray-700 hover:text-blue-500"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="block bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Login/Signup
          </Link>
        </div>
      )}

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative">
            {/* Close Button */}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-5 right-6 text-gray-600 hover:text-gray-800 text-5xl font-bold transition-all"
              aria-label="Close search"
            >
              {" "}
              &times;{" "}
            </button>

            {/* Search Input */}
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search for products..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />

            {/* Loading Indicator */}
            {loading && <p className="text-gray-600 mt-4">Loading...</p>}

            {/* Search Results */}
            {!loading && results.length > 0 && (
              <ul className="mt-4 space-y-4 max-h-80 overflow-y-auto">
                {results.map((item) => (
                  <li key={item._id}>
                    <div
                      onClick={() => handleProductClick(item.slug)} // Redirect and close modal
                      className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      {/* Product Image */}
                      <div className="w-16 h-16 flex-shrink-0">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      {/* Product Details */}
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {item.description}
                        </p>
                        <p className="text-sm font-bold text-blue-600 mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}

            {/* No Results */}
            {!loading && results.length === 0 && query.length > 2 && (
              <p className="text-gray-600 mt-4 text-center">
                No products found.
              </p>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
