import React from "react";
import { FaArrowRight } from "react-icons/fa";

const LatestActivity = () => {
  return (
    <div className="bg-white border:none border-slate-700 rounded-xl p-6 md:p-8 text-black shadow-2xl">

      <div className="flex items-center justify-between mb-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          Latest Activity
        </h2>

        <button className="text-blue-500 hover:text-blue-400 sm:text-lg font-medium">
          View all
        </button>
      </div>

      <div className="relative">
            {/* for creating thin line: w-px & top-0 bottom-0 to start from top and end at bottom */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-600"></div>

        <div className="relative pl-14 pb-16">

          <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-slate-600"></div>

          <p className="text-slate-400 sm:text-xl mb-2">
            April 2023
          </p>

          <h3 className="sm:text-xl font-bold mb-3">
            Application UI design in Figma
          </h3>

          <p className="text-black-400 sm:text-xl leading-relaxed max-w-5xl mb-8">
            Get access to over 20+ pages including a dashboard layout,
            charts, kanban board, calendar, and pre-order E-commerce &
            Marketing pages.
          </p>

          <button className="flex items-center gap-3 border border-black rounded-2xl sm:px-8 sm:py-4 px-4 py-2 text-blue-500 hover:text-blue-300 ">
            <span className="sm:text-xl font-medium">
              Learn more
            </span>

            <FaArrowRight />
          </button>
        </div>

        <div className="relative pl-14">

          <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-slate-600"></div>

          <p className="text-slate-400 sm:text-xl mb-2">
            March 2023
          </p>

          <h3 className=" sm:text-xl font-bold mb-3">
            Marketing UI code in Flowbite
          </h3>

          <p className="text-black-400 sm:text-xl leading-relaxed max-w-5xl mb-8">
            Get started with dozens of web components and interactive
            elements built on top of Tailwind CSS.
          </p>

          <button className="text-blue-500 hover:text-blue-400 sm:text-xl  font-medium flex items-center gap-3">
            Go to Flowbite Blocks
            <FaArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
};

export default LatestActivity;