'use client';
import React from "react";
import Image from "next/image";

const ArrowIcon = () => (
  <svg
    className="ml-1 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform duration-200 ease-in-out"
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

const partners = [
  {
    logoSrc: "/MicrosoftImage.svg",
    logoAlt: "Microsoft Logo",
    logoWidth: 200,
    logoHeight: 50,
    title: "Microsoft Azure",
    description:
      "As a Solutions Partner for Data & AI (Azure), we demonstrate our broad capability to help customers manage their data across multiple systems to build data solutions.",
    link: "#", // Replace with actual link
  },
  {
    logoSrc: "/WealthArcImage.svg",
    logoAlt: "WealthArc Logo",
    logoWidth: 180,
    logoHeight: 45,
    title: "WealthArc",
    description:
      "Wealth Data Box has been powering the WealthArc Portfolio Management System. WealthArc is a personalized wealth management platform built for the next generation of Family...",
    link: "#", // Replace with actual link
  },
];

export default function EcosystemSection() {
  return (
    <section className="bg-white py-16 lg:py-24 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Ecosystem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {partners.map((partner) => (
            <div
              key={partner.title}
              className="bg-white p-8 rounded-xl shadow-xl flex flex-col text-center items-center h-full border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-20 flex items-center mb-6">
                <Image
                  src={partner.logoSrc}
                  alt={partner.logoAlt}
                  width={partner.logoWidth}
                  height={partner.logoHeight}
                  className="object-contain max-h-16"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {partner.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">
                {partner.description}
              </p>
              <a
                href={partner.link}
                className="text-blue-600 hover:text-blue-800 font-semibold text-base group transition duration-150 ease-in-out inline-flex items-center"
              >
                Learn more
                <ArrowIcon />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 