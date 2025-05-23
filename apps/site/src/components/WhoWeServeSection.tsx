'use client';
import React from "react";

const stakeholderGroups = [
  {
    title: "Fintech Providers",
    items: [
      "AI wealth-tech applications",
      "Portfolio management systems",
      "CRM for financial advisors",
      "Asset reporting systems",
      "Accounting / general ledgers",
      "Core-banking systems",
      "Trading platforms",
      "Asset aggregator",
    ],
  },
  {
    title: "Asset Advisors",
    items: [
      "Wealth Managers",
      "Asset Managers",
      "Multi-Family Offices",
      "Trustees",
      "Private Banks",
      "Independent Fund Administrators",
      "VC, Private Equity, or multi-strategy funds",
      "Foundations",
    ],
  },
  {
    title: "Asset Owners",
    items: [
      "Single Family Offices",
      "UHNWIs",
      "Private active investors",
      "Tech entrepreneurs",
    ],
  },
];

export default function WhoWeServeSection() {
  return (
    <section className="bg-[#f7f8fa] py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Who we serve
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is designed to benefit a wide range of stakeholders and service providers across the wealth management industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stakeholderGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white p-8 rounded-xl shadow-lg h-full"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-left">
                {group.title}
              </h3>
              <ul className="space-y-3 text-left">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="flex-shrink-0 inline-block w-2 h-2 bg-blue-700 rounded-full mt-[9px] mr-3"></span>
                    <span className="text-gray-700 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 