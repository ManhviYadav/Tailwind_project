import React, { useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
} from "react-icons/md";

import appleWatch from "../assets/appleWatch.jpg";
import apple_imac from "../assets/apple_imac.jpg";
import iphone14 from "../assets/iphone14.jpg";

import customer1 from "../assets/customer1.jpg";
import customer2 from "../assets/customer2.jpg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";

const StatisticsCard = () => {
  const [activeTab, setActiveTab] = useState("products");

  const products = [
    {
      name: "iPhone 14 Pro",
      growth: "+2.5%",
      image: iphone14,
      revenue: "$445,467",
      positive: true,
    },
    {
      name: 'Apple iMac 27"',
      growth: "+12.5%",
      image: apple_imac,
      revenue: "$256,982",
      positive: true,
    },
    {
      name: "Apple Watch SE",
      growth: "-1.35%",
      image: appleWatch,
      revenue: "$201,869",
      positive: false,
    },
  ];

  const customers = [
    {
      name: "Neil Sims",
      email: "email@flowbite.com",
      image: customer1,
      amount: "$3320",
    },
    {
      name: "Bonnie Green",
      email: "email@flowbite.com",
      image: customer2,
      amount: "$2467",
    },
    {
      name: "Michael Gough",
      email: "email@flowbite.com",
      image: customer3,
      amount: "$2235",
    },
    {
      name: "Thomes Lean",
      email: "email@flowbite.com",
      image: customer4,
      amount: "$1842",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 sm:p-6 mb-6">
      
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Statistics this month
        </h2>

        <FaQuestionCircle className="text-gray-400 text-lg cursor-pointer" />
      </div>

      <div className="grid grid-cols-2 border rounded-xl overflow-hidden">
        <button
          onClick={() => setActiveTab("products")}
          className={`py-4 text-sm sm:text-lg font-medium transition cursor-pointer ${
            activeTab === "products"
              ? "bg-gray-50 text-blue-600"
              : "bg-white text-gray-500"
          }`}
        >
          Top Products
        </button>

        <button
          onClick={() => setActiveTab("customers")}
          className={`py-4 text-sm sm:text-lg font-medium transition cursor-pointer ${
            activeTab === "customers"
              ? "bg-gray-50 text-blue-600"
              : "bg-white text-gray-500"
          }`}
        >
          Top Customers
        </button>
      </div>

      {activeTab === "products" && (
        <div className="mt-6 divide-y">
          {products.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5"
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {item.name}
                  </h3>

                  <div className="flex items-center gap-2 mt-1">
                    {item.positive ? (
                      <MdKeyboardArrowUp className="text-green-500 text-xl" />
                    ) : (
                      <MdKeyboardArrowDown className="text-red-500 text-xl" />
                    )}

                    <span
                      className={`font-medium ${
                        item.positive
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {item.growth}
                    </span>

                    <span className="text-gray-500">
                      vs last month
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="sm:text-xl font-bold text-slate-900">
                  {item.revenue}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === "customers" && (
        <div className="mt-6 divide-y">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-5"
            >
              <div className="flex items-center gap-4">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">
                    {customer.name}
                  </h3>

                  <p className="text-gray-500 text-sm sm:text-base">
                    {customer.email}
                  </p>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <span className="sm:text-xl font-bold text-slate-900">
                  {customer.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StatisticsCard;