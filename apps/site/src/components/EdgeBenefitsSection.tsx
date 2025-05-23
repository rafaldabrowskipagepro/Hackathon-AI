'use client';
import React from "react";

// Placeholder SVG Icons - replace with actual or more appropriate icons
const ChartBarIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9m0 10a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);
const RefreshIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2a8.001 8.001 0 0015.357 2m0 0H15" /></svg>
);
const LinkIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
);
const CloudIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
);
const DocumentTextIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const CheckIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);
const ShieldCheckIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const ClockIcon = () => (
  <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

const benefits = [
  {
    icon: <ChartBarIcon />,
    text: "Quality, speed, and simplicity for your daily investment decisions",
  },
  {
    icon: <CloudIcon />,
    text: "A solid foundation for any AI wealth-tech applications",
  },
  {
    icon: <CheckIcon />,
    text: "Unique data reconciliation engine with near 100% data accuracy...",
  },
  {
    icon: <RefreshIcon />,
    text: "Boosts efficiency and reduces costs",
  },
  {
    icon: <DocumentTextIcon />,
    text: "Automated data aggregation, processing, and delivery",
  },
  {
    icon: <ShieldCheckIcon />,
    text: "Provides an independent source of trusted and secured data",
  },
  {
    icon: <LinkIcon />,
    text: "System-agnostic design lets you choose your wealth-tech solutio...",
  },
  {
    icon: <ClockIcon />,
    text: "Seamless and faster onboarding of new data sources/custodians",
  },
  {
    icon: <ChartBarIcon />, // Duplicate icon, consider changing for variety
    text: "Ready to use data & analytics for prospecting, increasing client...",
  },
];

export default function EdgeBenefitsSection() {
  return (
    <section className="bg-gradient-to-br from-[#233976] to-[#003366] py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our edge and your benefits
          </h2>
          <p className="mt-4 text-lg lg:text-xl text-blue-200 max-w-3xl mx-auto">
            Built to market-leading technology and cybersecurity standards, Wealth Data Box offers concrete benefits and value enhancement to clients:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg flex items-center space-x-4 h-full min-h-[100px] lg:min-h-[120px]"
            >
              <div className="flex-shrink-0">
                {benefit.icon}
              </div>
              <p className="text-white text-base leading-relaxed">
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 