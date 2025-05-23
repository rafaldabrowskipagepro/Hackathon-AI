'use client';
import React from "react";

// SVG Icons - these could be imported from an icon library or defined as separate components
const DataAccessIcon = () => (
  <svg className="h-8 w-8 text-blue-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7m-6 0L8 5m2 2L10 5m0 0H6m4 0h4m2 0h2M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const NormalizationIcon = () => (
  <svg className="h-8 w-8 text-blue-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 7l-8.5 8.5L3 7m18 0l-8.5 8.5L3 7m18 0V4m0 3H3m0 0V4m0 3L12 20l9-13zM3 7h18" />
     {/* A more representative icon for Normalization (e.g., a cube or stacked layers) might be better */}
    <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke="currentColor" strokeWidth="1.5"/> 
  </svg>
);

const ReconciliationIcon = () => (
  <svg className="h-8 w-8 text-blue-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13a1 1 0 100-2 1 1 0 000 2z" />
    {/* A more representative icon for Reconciliation (e.g., a brush or checklist) might be better */}
     <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h10M7 12h4M7 8h4" stroke="currentColor" strokeWidth="1.5" />
</svg>
);

const SecureDeliveryIcon = () => (
  <svg className="h-8 w-8 text-blue-700 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const coreFeatures = [
  {
    icon: <DataAccessIcon />,
    title: "Data Access",
    description: "Data is automatically downloaded and via modern secure data access mechanisms.",
  },
  {
    icon: <NormalizationIcon />,
    title: "Normalization",
    description: "Data is normalized to a unified data model using advanced machine learning techniques.",
  },
  {
    icon: <ReconciliationIcon />,
    title: "Reconciliation",
    description: "Automated data cleaning process supported by AI mapping, ensures 100% (99.87%) data accuracy.",
  },
  {
    icon: <SecureDeliveryIcon />,
    title: "Secure Delivery",
    description: "Downstream systems access data through modern data delivery mechanisms (REST API).",
  },
];

export default function CoreFeaturesSection() {
  return (
    <section className="bg-[#f7f8fa] py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Optional: Add a main title for the section here if needed */}
        {/* <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Core Platform Features
          </h2>
        </div> */} 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-start text-left h-full"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 