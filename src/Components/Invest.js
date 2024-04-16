import React from "react";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import PackageCard from "./dashboard/PackageCard";

const packages = [
  {
    name: "Beginners",
    percent: 1.8,
    min_deposit: "$1,000",
    max_deposit: "$1,000",
    min_return: "$7,500",
    max_return: "$15,000",
    gift_bonus: "$800.00",
    duration: "7 days",
  },
  {
    name: "Beginners",
    percent: 1.8,
    min_deposit: "$1,000",
    max_deposit: "$1,000",
    min_return: "$7,500",
    max_return: "$15,000",
    gift_bonus: "$800.00",
    duration: "7 days",
  },
  {
    name: "Beginners",
    percent: 1.8,
    min_deposit: "$1,000",
    max_deposit: "$1,000",
    min_return: "$7,500",
    max_return: "$15,000",
    gift_bonus: "$800.00",
    duration: "7 days",
  },
  {
    name: "Beginners",
    percent: 1.8,
    min_deposit: "$1,000",
    max_deposit: "$1,000",
    min_return: "$7,500",
    max_return: "$15,000",
    gift_bonus: "$800.00",
    duration: "7 days",
  },
  {
    name: "Beginners",
    percent: 1.8,
    min_deposit: "$1,000",
    max_deposit: "$1,000",
    min_return: "$7,500",
    max_return: "$15,000",
    gift_bonus: "$800.00",
    duration: "7 days",
  },
  {
    name: "Beginners",
    percent: 1.8,
    min_deposit: "$1,000",
    max_deposit: "$1,000",
    min_return: "$7,500",
    max_return: "$15,000",
    gift_bonus: "$800.00",
    duration: "7 days",
  },
];

function Invest() {
  return (
    <motion.div
      initial={{ width: "0", opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{ transition: { type: "spring", duration: 0.5, delay: 0 } }}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Investment - Digitalizecrpyto.com</title>
        <link rel="canonical" href="http://digitalizecrpyto.com/investment" />
      </Helmet>
      <div className="max-h-full rm_scroll overflow-auto p-5 pr-0">
        <h1 className="font-bold text-primary-blue">Available Packages</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {packages.map((packageItem, index) => (
            <PackageCard key={index} item={packageItem} />
          ))}
        </div>
      </div>

      <Outlet />
    </motion.div>
  );
}

export default Invest;
