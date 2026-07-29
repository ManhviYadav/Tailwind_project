import React, { useState } from "react";
import { FaCalendarAlt, FaChevronDown } from "react-icons/fa";

const TransactionTable = () => {
  const [showFilter, setShowFilter] = useState(false);

  const [status, setStatus] = useState({
    completed: false,
    cancelled: false,
    progress: false,
    review: false,
  });

  const handleCheckbox = (key) => {
    setStatus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-4 sm:p-6 lg:p-8">
      
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
            Transactions
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            This is a list of latest
            <br />
            transactions
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">

          <div className="relative">

            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center justify-between w-full sm:w-auto min-w-45 h-12 px-4 border border-gray-300 rounded-xl bg-white shadow-sm cursor-pointer"
            >
              <span className="text-sm text-gray-600">
                Filter by status
              </span>

              <FaChevronDown
                className={`transition-transform duration-300 ${
                  showFilter ? "rotate-180" : ""
                }`}
              />
            </button>

            {showFilter && (
              <div className="absolute top-14 left-0 w-72 bg-white border border-gray-200 rounded-xl shadow-xl p-5 z-50">

                <h3 className="font-semibold text-gray-800 mb-4">
                  Category
                </h3>

                <div className="space-y-4">

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={status.completed}
                      onChange={() =>
                        handleCheckbox("completed")
                      }
                    />
                    <span>Completed (56)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={status.cancelled}
                      onChange={() =>
                        handleCheckbox("cancelled")
                      }
                    />
                    <span>Cancelled (56)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={status.progress}
                      onChange={() =>
                        handleCheckbox("progress")
                      }
                    />
                    <span>In Progress (56)</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={status.review}
                      onChange={() =>
                        handleCheckbox("review")
                      }
                    />
                    <span>In Review (97)</span>
                  </label>

                </div>
              </div>
            )}

          </div>

          <button className="flex items-center gap-3 w-full sm:w-auto min-w-32 h-12 px-4 border border-gray-300 rounded-xl cursor-pointer">
            <FaCalendarAlt className="text-gray-500" />
            <span className="text-sm text-gray-600">
              From
            </span>
          </button>

          <button className="flex items-center gap-3 w-full sm:w-auto min-w-32 h-12 px-4 border border-gray-300 rounded-xl cursor-pointer">
            <FaCalendarAlt className="text-gray-500" />
            <span className="text-sm text-gray-600">
              To
            </span>
          </button>

        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-gray-200">

        <table className="w-full min-w-212">

          <thead>
            <tr className="bg-gray-50 text-left text-xs sm:text-sm uppercase text-gray-500">
              <th className="px-6 py-4">Transaction</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Reference Number</th>
              <th className="px-6 py-4">Payment Method</th>
              <th className="px-6 py-4">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td className="px-6 py-5 font-medium">
                Payment from <b>Bonnie Green</b>
              </td>

              <td className="px-6 py-5 font-bold text-green-600">
                +$230
              </td>

              <td className="px-6 py-5">
                0047568936
              </td>

              <td className="px-6 py-5">
                ••• 475
              </td>

              <td className="px-6 py-5">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-6 py-5 font-medium">
                Payment refund to <b>#00910</b>
              </td>

              <td className="px-6 py-5 font-bold text-red-600">
                -$670
              </td>

              <td className="px-6 py-5">
                0078568936
              </td>

              <td className="px-6 py-5">
                ••• 924
              </td>

              <td className="px-6 py-5">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Completed
                </span>
              </td>
            </tr>

            <tr className="border-t">
              <td className="px-6 py-5 font-medium">
                Payment failed from <b>#087651</b>
              </td>

              <td className="px-6 py-5 font-bold text-green-600">
                +$234
              </td>

              <td className="px-6 py-5">
                0088568934
              </td>

              <td className="px-6 py-5">
                ••• 826
              </td>

              <td className="px-6 py-5">
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-lg text-sm font-medium">
                  Cancelled
                </span>
              </td>
            </tr>

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionTable;