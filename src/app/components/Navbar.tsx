"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch, IoIosMenu } from "react-icons/io";
import { MdOutlinePeople } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useRouter } from "next/navigation";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { handleCartClick } = useShoppingCart();

  // Fetch search results from Sanity
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 1) {
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
      setResults([]);
    }
  };

  // Handle product click
  const handleProductClick = (slug: string) => {
    setQuery("");
    setResults([]);
    router.push(`/product/${slug}`);
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle login/signup click
  const handleAuthClick = (path: string) => {
    setIsMenuOpen(false); // Close the menu
    router.push(path);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-md  top-0 z-50 hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Furniro Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-black font-bold text-2xl ml-2">Furniro</span>
          </Link>

          {/* Desktop Menu */}
          <ul className="flex items-center space-x-8 text-lg">
            <li>
              <Link href="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-blue-500 transition">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Icons and Search */}
          <div className="flex items-center space-x-4">
            {/* Type Search Bar */}
            <div className="relative">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-64">
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="outline-none bg-transparent flex-grow"
                />
                <button className="text-gray-500 hover:text-blue-500">
                  <IoIosSearch className="text-xl" />
                </button>
              </div>

              {/* Search Results Dropdown */}
              {query.length > 1 && (
                <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-80 max-h-80 overflow-y-auto z-50">
                  {loading && <p className="text-gray-600 p-4">Loading...</p>}
                  {!loading && results.length > 0 && (
                    <ul>
                      {results.map((item) => (
                        <li
                          key={item._id}
                          onClick={() => handleProductClick(item.slug)}
                          className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div className="ml-4">
                            <p className="text-gray-800 font-semibold">
                              {item.title}
                            </p>
                            <p className="text-gray-500 text-sm truncate">
                              {item.description
                                ? item.description
                                    .split(" ")
                                    .slice(0, 20)
                                    .join(" ") + "..."
                                : "No description available"}
                            </p>
                            <p className="text-blue-600 font-bold">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!loading && results.length === 0 && (
                    <p className="text-gray-600 p-4 text-center">
                      No products found.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Icons */}
            <MdOutlinePeople className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
            <CiHeart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
            <HiOutlineShoppingCart
              className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
              onClick={handleCartClick}
            />

            {/* Login/Signup Buttons */}
            <Link
              href="/login"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Login/Signup
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50 md:hidden">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Furniro Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="text-black font-bold text-2xl ml-2">Furniro</span>
          </Link>

          {/* Three-Dot Menu Button */}
          <button onClick={toggleMenu} className="text-2xl">
            <IoIosMenu />
          </button>
        </div>
      </nav>

      {/* Side Slider Menu (Mobile) */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible" 
        }`}
        onClick={toggleMenu}
      > 
        <div
          className={`fixed left-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4">
            {/* Search Bar */}
            <div className="relative mb-4">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2">
                <input
                  type="text"
                  value={query}
                  onChange={handleSearch}
                  placeholder="Search..."
                  className="w-full outline-none bg-transparent"
                />
                <button className="text-gray-500 hover:text-blue-500">
                  <IoIosSearch className="text-xl" />
                </button>
              </div>

              {/* Search Results Dropdown (Mobile) */}
              {query.length > 1 && (
                <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-full max-h-80 overflow-y-auto z-50">
                  {loading && <p className="text-gray-600 p-4">Loading...</p>}
                  {!loading && results.length > 0 && (
                    <ul>
                      {results.map((item) => (
                        <li
                          key={item._id}
                          onClick={() => handleProductClick(item.slug)}
                          className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                        >
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            width={40}
                            height={40}
                            className="rounded-md"
                          />
                          <div className="ml-4">
                            <p className="text-gray-800 font-semibold">
                              {item.title}
                            </p>
                            <p className="text-gray-500 text-sm truncate">
                              {item.description
                                ? item.description
                                    .split(" ")
                                    .slice(0, 20)
                                    .join(" ") + "..."
                                : "No description available"}
                            </p>
                            <p className="text-blue-600 font-bold">
                              ${item.price.toFixed(2)}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                  {!loading && results.length === 0 && (
                    <p className="text-gray-600 p-4 text-center">
                      No products found.
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Menu Buttons */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-left hover:text-blue-500">
                Home
              </Link>
              <Link href="/shop" className="text-left hover:text-blue-500">
                Shop
              </Link>
              <Link href="/blog" className="text-left hover:text-blue-500">
                Blog
              </Link>
              <Link href="/contact" className="text-left hover:text-blue-500">
                Contact
              </Link>
            </div>

            {/* Quick Action Icons */}
            <div className="mt-6 flex space-x-4">
              <HiOutlineShoppingCart
                className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
                onClick={handleCartClick}
              />
              <CiHeart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
              <MdOutlinePeople className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
            </div>

            {/* Login/Signup Buttons */}
            <div className="mt-6">
              <button
                onClick={() => handleAuthClick("/login")}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition mb-2"
              >
                Login
              </button>
              <button
                onClick={() => handleAuthClick("/login")}
                className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;