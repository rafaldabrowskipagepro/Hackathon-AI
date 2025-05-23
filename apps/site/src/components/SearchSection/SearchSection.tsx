"use client";

import { useState, useEffect, useRef } from "react";

// Custom ChevronDown icon component
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// TypeScript interface matching the Sanity schema
interface SearchSectionProps {
  title: string;
  searchPlaceholder?: string;
  banks: string[];
}

export function SearchSection({
  title,
  searchPlaceholder = "Search by institution or jurisdiction...",
  banks,
}: SearchSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Sample jurisdictions for demo - could be made configurable via Sanity schema
  const jurisdictions = [
    "United States",
    "United Kingdom",
    "European Union",
    "Switzerland",
    "Singapore",
    "Hong Kong",
    "Japan",
    "Canada",
    "Australia",
    "Luxembourg",
  ];

  // Combine banks from props with jurisdictions
  const allOptions = [
    ...banks.map((bank) => ({ type: "Institution", name: bank })),
    ...jurisdictions.map((jur) => ({ type: "Jurisdiction", name: jur })),
  ];

  const filteredOptions = allOptions.filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionSelect = (option: { type: string; name: string }) => {
    setSelectedOption(option.name);
    setSearchTerm(option.name);
    setIsOpen(false);
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Dynamic Heading from Sanity */}
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-normal text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
          {title}
        </h2>

        {/* Search Dropdown */}
        <div className="relative max-w-2xl mx-auto" ref={dropdownRef}>
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder={searchPlaceholder}
              className="w-full px-6 py-4 text-base bg-ui-input border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-gray-700 placeholder-gray-500"
              aria-label="Search institutions and jurisdictions"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label={isOpen ? "Close dropdown" : "Open dropdown"}
            >
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {/* Dropdown Options */}
          {isOpen && (
            <div
              className="absolute z-10 w-full mt-2 bg-white border border-ui-border rounded-lg shadow-lg max-h-60 overflow-y-auto"
              role="listbox"
              aria-label="Search results"
            >
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <button
                    key={`${option.type}-${option.name}-${index}`}
                    onClick={() => handleOptionSelect(option)}
                    className="w-full px-6 py-3 text-left hover:bg-ui-card transition-colors border-b border-ui-border last:border-b-0 focus:outline-none focus:bg-ui-card"
                    role="option"
                    aria-selected={selectedOption === option.name}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800">{option.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {option.type}
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="px-6 py-3 text-gray-500 text-center">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
