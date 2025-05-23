'use client';
import React from "react";
import Image from "next/image"; // Import Next.js Image component

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#233976] to-[#003366] w-full">
      <div className="max-w-7xl mx-auto px-4 py-20 lg:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold max-w-xl lg:max-w-none leading-tight mb-6">
            Unlocking the power
            <br />
            of data for wealth creation
          </h1>
          <p className="text-white text-lg md:text-xl max-w-md lg:max-w-xl mx-auto lg:mx-0 mb-8">
            Single source of trusted data to make wiser, better, and faster
            investment decisions.
          </p>
          <a
            href="#"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md px-10 py-4 text-lg transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#003366]"
          >
            TRY FOR FREE
          </a>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/hero.png" // Assuming hero.png is in the public folder
            alt="Wealth Data Box Application Preview"
            width={500} // Adjust to your image's aspect ratio
            height={450} // Adjust to your image's aspect ratio
            priority // Load image eagerly as it's LCP
          />
        </div>
      </div>
    </section>
  );
} 