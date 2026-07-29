import React, { useState } from "react";
import {
  FaChartPie,
  FaThLarge,
  FaDatabase,
  FaCog,
  FaFileAlt,
  FaLock,
  FaChevronDown,
  FaChevronRight,
  FaTimes,
  FaSlidersH,
  FaRocket,
  FaGithub,
  FaBook,
  FaCube,
  FaMagic,
} from "react-icons/fa";

const SideBar = ({ isOpen, setIsOpen }) => {
  const [openLayouts, setOpenLayouts] = useState(false);
  const [opencrud, setOpencrud] = useState(false);
  const [openPage, setPage] = useState(false);
  const [authenticate, setAuthenticate] = useState(false);
  const [openPlayground, setPlayground] = useState(false);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            lg:hidden
            fixed
            left-0
            top-1/2
            -translate-y-1/2
            z-60
            bg-blue-600
            text-white
            p-3
            rounded-r-xl
            shadow-lg
            hover:bg-blue-700
            transition
          "
        >
          <FaChevronRight size={18} />
        </button>
      )}

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`
          fixed
          top-20
          left-0
          h-[calc(100vh-80px)]

          w-70
          sm:w-75
          md:w-[320px]
          lg:w-72

          bg-white
          shadow-xl
          flex
          flex-col
          z-50

          transition-transform
          duration-300
          ease-in-out

          lg:translate-x-0
          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        <div className="flex-1 overflow-y-auto pt-4">


          <div className="flex justify-end px-4 lg:hidden mb-3">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-red-500"
            >
              <FaTimes size={22} />
            </button>
          </div>

          <ul className="px-4 space-y-1">
            <li>
              <a
                href="/"
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <FaChartPie className="text-gray-500 text-xl" />
                <span className="text-sm sm:text-base font-medium">
                  Dashboard
                </span>
              </a>
            </li>

            <li>
              <button
                onClick={() => setOpenLayouts(!openLayouts)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <FaThLarge className="text-gray-500 text-xl" />
                  <span className="text-sm sm:text-base font-medium">
                    Layouts
                  </span>
                </div>

                <FaChevronDown
                  className={`transition-transform ${
                    openLayouts ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openLayouts && (
                <ul className="ml-10 mt-2 space-y-1 text-sm">
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Stacked
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Sidebar
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setOpencrud(!opencrud)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <FaDatabase className="text-gray-500 text-xl" />
                  <span className="text-sm sm:text-base font-medium">
                    CRUD
                  </span>
                </div>

                <FaChevronDown
                  className={`transition-transform ${
                    opencrud ? "rotate-180" : ""
                  }`}
                />
              </button>

              {opencrud && (
                <ul className="ml-10 mt-2 space-y-1 text-sm">
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Products
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Users
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/"
                className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <FaCog className="text-gray-500 text-xl" />
                <span className="text-sm sm:text-base font-medium">
                  Settings
                </span>
              </a>
            </li>

            <li>
              <button
                onClick={() => setPage(!openPage)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <FaFileAlt className="text-gray-500 text-xl" />
                  <span className="text-sm sm:text-base font-medium">
                    Pages
                  </span>
                </div>

                <FaChevronDown
                  className={`transition-transform ${
                    openPage ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openPage && (
                <ul className="ml-10 mt-2 space-y-1 text-sm">
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Pricing
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Maintenance
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    404 Not Found
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    500 Server Error
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setAuthenticate(!authenticate)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <FaLock className="text-gray-500 text-xl" />
                  <span className="text-sm sm:text-base font-medium">
                    Authentication
                  </span>
                </div>

                <FaChevronDown
                  className={`transition-transform ${
                    authenticate ? "rotate-180" : ""
                  }`}
                />
              </button>

              {authenticate && (
                <ul className="ml-10 mt-2 space-y-1 text-sm">
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Sign In
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Sign Up
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Forget Password
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Reset Password
                  </li>
                  <li className="px-3 py-2 rounded-lg hover:bg-gray-100 cursor-pointer">
                    Profile Lock
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setPlayground(!openPlayground)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100"
              >
                <div className="flex items-center gap-4">
                  <FaMagic className="text-gray-500 text-xl" />
                  <span className="text-sm sm:text-base font-medium">
                    Playground
                  </span>
                </div>

                <FaChevronDown
                  className={`transition-transform ${
                    openPlayground ? "rotate-180" : ""
                  }`}
                />
              </button>
            </li>

            <hr className="my-4" />

            <li>
              <a href="/" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100">
                <FaRocket className="text-gray-500 text-xl" />
                <span className="text-sm sm:text-base font-medium">View Pro Version</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100">
                <FaGithub className="text-gray-500 text-xl" />
                <span className="text-sm sm:text-base font-medium">GitHub Repository</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100">
                <FaBook className="text-gray-500 text-xl" />
                <span className="text-sm sm:text-base font-medium">Flowbite Docs</span>
              </a>
            </li>

            <li>
              <a href="/" className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-gray-100">
                <FaCube className="text-gray-500 text-xl" />
                <span className="text-sm sm:text-base font-medium">Components</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="border-t px-4 py-4 flex items-center justify-center gap-6 sm:gap-10">
          <button className="text-gray-500 hover:text-blue-600">
            <FaSlidersH size={20} />
          </button>

          <button className="text-gray-500 hover:text-blue-600">
            <FaCog size={20} />
          </button>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZfX658xxRa6LDjn80aTV2gCiUOF4cN66-RQ&s"
            alt="india"
            className="w-6 h-6 rounded-full cursor-pointer"
          />
        </div>
      </aside>
    </>
  );
};

export default SideBar;