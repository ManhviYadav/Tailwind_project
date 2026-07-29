import React, { useState } from "react";
import SearchInput from "./SearchInput";
import {
  FaSearch,
  FaBell,
  FaStar,
  FaBars,
  FaTimes,
  FaUserCircle,
  FaTh,
} from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-white shadow-md">
      <div className="h-full px-4 sm:px-6">
        <div className="flex items-center justify-between h-full">

          <div className="flex items-center gap-3">
          
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-r from-blue-700 to-cyan-300 flex items-center justify-center cursor-pointer">
              <span className="text-white text-lg sm:text-xl">▶</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer">
              Flowbite
            </h1>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            
            <SearchInput/>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button className="hover:text-blue-600 transition">
              <FaStar size={20} />
            </button>

            <button className="hover:text-blue-600 transition relative">
              <FaBell size={20} />
              <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <button className="hover:text-blue-600 transition">
              <FaTh size={20} />
            </button>

            <button className="hover:text-blue-600 transition">
              <FaUserCircle size={28} />
            </button>
          </div>


          <button
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenu
            ? "max-h-125 border-t"
            : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-4 space-y-3 ">

          <SearchInput/>

          <button className="flex items-center gap-3 w-full py-2 hover:text-blue-600 cursor-pointer">
            <FaStar />
            Favorites
          </button>

          <button className="flex items-center gap-3 w-full py-2 hover:text-blue-600 cursor-pointer">
            <FaBell />
            Notifications
          </button>

          <button className="flex items-center gap-3 w-full py-2 hover:text-blue-600 cursor-pointer ">
            <FaTh />
            Apps
          </button>

          <button className="flex items-center gap-3 w-full py-2 hover:text-blue-600 cursor-pointer">
            <FaUserCircle />
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;