'use client';
import React from "react";

const stats = [
  { value: "130 +", label: "Institutions" },
  { value: "$22 bn", label: "AuM" },
  { value: "5,568 +", label: "Accounts" },
];

export default function CoverageSection() {
  return (
    <section className="bg-gradient-to-r from-[#3b3c8a] to-[#2a3a7d] py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-lg lg:text-xl text-blue-200">
            Our coverage includes over:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="text-5xl lg:text-7xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-lg lg:text-xl text-blue-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 