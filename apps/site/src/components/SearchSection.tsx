'use client';

import React, { useState } from "react";

const options = [
  {
    label: "ANDORRA",
    flag: "🇦🇩",
    institutions: [
      {
        name: "Andbank",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Andbank_logo.png",
      },
    ],
  },
  {
    label: "BAHAMAS",
    flag: "🇧🇸",
    institutions: [
      {
        name: "Capital Union Bank",
        logo: "https://www.capitalunionbank.com/wp-content/uploads/2020/09/logo.svg",
      },
      {
        name: "CBH",
        logo: "https://www.cbhbank.com/wp-content/uploads/2021/01/cbh-logo.svg",
      },
      {
        name: "Corner Banca",
        logo: "https://www.corner.ch/sites/default/files/2021-01/corner-logo.svg",
      },
    ],
  },
];

type Institution = { name: string; logo: string };

export default function SearchSection() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Institution | null>(null);

  // Filter options based on search input
  const filteredOptions = options
    .map((group) => ({
      ...group,
      institutions: group.institutions.filter((inst) =>
        inst.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.institutions.length > 0);

  return (
    <section className="bg-[#f7f8fa] py-16 w-full flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-normal text-gray-800 text-center mb-8 max-w-3xl">
        Let Wealth Data Box connect you to your favorite custodian and data source and handle your data quality:
      </h2>
      <div className="relative w-full max-w-2xl">
        <div
          className={
            `flex items-center rounded-lg border border-blue-300 bg-blue-100 shadow focus-within:ring-2 focus-within:ring-blue-400 transition ` +
            (open ? "ring-2 ring-blue-400" : "")
          }
        >
          <input
            type="text"
            className="w-full px-6 py-4 text-2xl bg-transparent outline-none placeholder-gray-500 rounded-lg"
            placeholder="Search by institution or jurisdiction..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpen(true);
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 150)}
          />
          <button
            className="px-4 text-gray-400 text-2xl focus:outline-none"
            tabIndex={-1}
            onClick={() => setOpen((v) => !v)}
            aria-label="Show options"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        {open && (
          <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-20 max-h-80 overflow-auto border border-blue-300">
            {filteredOptions.length === 0 && (
              <div className="p-4 text-gray-500 text-lg">No results found.</div>
            )}
            {filteredOptions.map((group) => (
              <div key={group.label}>
                <div className="bg-[#0a2677] text-white font-bold px-4 py-2 flex items-center gap-2 text-lg rounded-t-lg">
                  <span className="text-2xl">{group.flag}</span>
                  <span>{group.label}</span>
                </div>
                {group.institutions.map((inst) => (
                  <div
                    key={inst.name}
                    className="flex items-center gap-4 px-4 py-3 cursor-pointer hover:bg-blue-100 text-lg"
                    onMouseDown={() => {
                      setSelected(inst);
                      setSearch(inst.name);
                      setOpen(false);
                    }}
                  >
                    <img src={inst.logo} alt={inst.name} className="h-8 w-auto object-contain" />
                    <span>{inst.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
} 