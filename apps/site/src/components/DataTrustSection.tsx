'use client';
import React from "react";

const ArrowIcon = () => (
  <svg
    className="ml-2 -mr-1 w-4 h-4 inline-block"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default function DataTrustSection() {
  return (
    <section className="bg-white py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Column 1: Data you can trust */}
          <div className="flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Data you can trust
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
              Wealth Data Box automatically connects you to your most needed
              custodians and data sources, aggregating your investment data,
              cleaning, reconciling, verifying, vetting to the highest quality,
              and delivering as a trusted data seamlessly to your AI and
              wealth-tech applications, so you can make wiser, better, and
              faster decisions.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold text-base lg:text-lg group transition duration-150 ease-in-out"
            >
              Learn more
              <ArrowIcon />
            </a>
          </div>

          {/* Column 2: Why Wealth Data Box? */}
          <div className="flex flex-col">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Wealth Data Box?
            </h2>
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mb-6">
              In wealth management, seamless access to multiple sources of data
              and data quality drive success but also present one of the
              greatest challenges. Accurate and complete data is the foundation
              of effective wealth management and AI-powered insights. Data
              quality is the single most important factor for wealth creation.
            </p>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 font-semibold text-base lg:text-lg group transition duration-150 ease-in-out"
            >
              Learn more
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 