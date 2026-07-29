import React from "react";
import StatisticsCard from "./StatisticsCard";
import TransactionTable from "./TransactionTable";
import SmartChat from "./SmartChat";
import LatestActivity from "./LatestActivity";

const ContentArea = () => {
  return (
    <div className="mt-20 p-4 sm:p-6 lg:ml-72 bg-gray-50 min-h-screen">
      
      <div className="mt-6">
        <StatisticsCard />
      </div>

      <div className="mt-6">
        <SmartChat />
      </div>

      <div className="mt-6">
        <TransactionTable />
      </div>

      <div className="mt-6">
        <LatestActivity />
      </div>

    </div>
  );
};

export default ContentArea;