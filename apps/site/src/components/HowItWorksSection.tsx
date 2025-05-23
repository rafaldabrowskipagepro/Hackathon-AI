'use client';
import React from "react";

// SVG icons for the section (can be replaced with imports from an icon library)
const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 w-8 h-8 mb-4">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CubeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 w-8 h-8 mb-4">
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 w-8 h-8 mb-4">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
  {
    icon: <LinkIcon />,
    title: "Data Sources",
    description:
      "Wealth Data Box connects to your custodians, data providers, asset managers, and trading platforms.",
  },
  {
    icon: <CubeIcon />,
    title: "Data Processing",
    description:
      "Investment data liquid and illiquid is unified, aggregated, cleaned, reconciled, verified, and available via Rest API or SFTP server.",
  },
  {
    icon: <LayersIcon />,
    title: "Data Integration",
    description:
      "The clean and trusted data can be loaded directly into your AI wealth-tech application, asset reporting, portfolio management system, risk management, accounting, fund management, BI platform or any wealth-tech solution.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#f7f8fa] py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            How it works
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-start h-full"
            >
              {feature.icon}
              <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 