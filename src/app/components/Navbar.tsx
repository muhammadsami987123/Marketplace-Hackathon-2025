"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
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
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { handleCartClick } = useShoppingCart();

  // Fetch search results from Sanity
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > -1) {
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
    setIsSearchOpen(false);
    setQuery("");
    setResults([]);
    router.push(`/product/${slug}`);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
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
        <ul className="hidden md:flex items-center space-x-8 text-lg">
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
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={handleSearch}
              placeholder="Search..."
              className={`${
                isSearchOpen ? "block" : "hidden"
              } md:block outline-none border border-gray-300 rounded-full px-4 py-2`}
            />
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-blue-500"
            >
              <IoIosSearch className="text-2xl" />
            </button>
            {isSearchOpen && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-96  max-h-80 overflow-y-auto z-50">
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
                          <p className="text-gray-800 font-semibold">{item.title}</p>
                          <p className="text-gray-500 text-sm truncate">
                          {item.description
            ? item.description.split(" ").slice(0, 20).join(" ") + "..."
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
                {!loading && results.length === 0 && query.length > 2 && (
                  <p className="text-gray-600 p-4 text-center">
                    No products found.
                  </p>
                )}
              </div>
            )}
          </div>
          <MdOutlinePeople className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
          <CiHeart className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer" />
          <HiOutlineShoppingCart
            className="text-2xl text-gray-600 hover:text-red-500 cursor-pointer"
            onClick={handleCartClick}
          />
          <Link
            href="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login/Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
