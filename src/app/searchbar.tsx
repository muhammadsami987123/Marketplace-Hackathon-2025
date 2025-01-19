import React, { useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from "next/link";

// Define the type for a product
interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  slug: string;
}

const SearchBar = () => {
  const [query, setQuery] = useState<string>(""); // Input query state
  const [results, setResults] = useState<Product[]>([]); // Search results state
  const [loading, setLoading] = useState<boolean>(false); // Loading state

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

  return (
    <div className="relative">
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />

      {/* Loading Indicator */}
      {loading && <p className="text-gray-600 mt-2">Loading...</p>}

      {/* Search Results */}
      {!loading && results.length > 0 && (
        <ul className="absolute mt-2 bg-white shadow-lg rounded-lg w-full max-h-60 overflow-y-auto">
          {results.map((item) => (
            <li key={item._id}>
              <Link href={`/product/${item.slug}`}>
                <div className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
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
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{item.description}</p>
                    <p className="text-sm font-bold text-blue-600 mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
