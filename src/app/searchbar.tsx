import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-start  items-center ">
      <input
        type="text"
        placeholder="Search..."
        className="w-[1400px] h-[75px] px-4 text-sm border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBar;
