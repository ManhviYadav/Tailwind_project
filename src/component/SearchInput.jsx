import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = ({
  placeholder = "Search...",
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center w-full bg-gray-50 rounded-xl px-4 py-3 shadow-xl">
      <FaSearch className="text-gray-500" />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full ml-3 bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchInput;