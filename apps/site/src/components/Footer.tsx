'use client';
import React from "react";

const officeLocations = [
  {
    city: "Washington, D.C. metro area",
    details: [
      "WealthArc Inc.",
      "966 Hungerford Drive, Suite 3B",
      "Rockville, MD 20850",
      "United States",
    ],
  },
  {
    city: "Zurich",
    details: [
      "WealthArc AG",
      "Dufourstrasse 49, CH-8008",
      "Switzerland",
    ],
  },
  {
    city: "Warsaw",
    details: [
      "WealthArc sp. z o.o.",
      "Krakowskie Przedmieście 13,",
      "00-071,",
      "Poland",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#233976] to-[#003366] text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start mb-12">
          {/* Copyright and Privacy */}
          <div className="md:col-span-1">
            <p className="text-lg font-semibold mb-2">
              © WealthArc 2024
            </p>
            <a href="#" className="text-blue-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* Office Locations */}
          {officeLocations.map((office) => (
            <div key={office.city} className="md:col-span-1">
              <h3 className="text-xl font-bold mb-3">{office.city}</h3>
              <ul className="space-y-1 text-blue-200">
                {office.details.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Button Centered */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-10 py-4 text-lg transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#003366]"
          >
            TRY FOR FREE
          </a>
        </div>
      </div>
    </footer>
  );
} 