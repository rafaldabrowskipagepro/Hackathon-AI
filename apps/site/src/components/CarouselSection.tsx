'use client';
import React from "react";

const logos = [
  {
    src: "/logos/julius-baer.svg",
    alt: "Julius Bär",
  },
  {
    src: "/logos/reyl.svg",
    alt: "Reyl Intesa Sanpaolo",
  },
  {
    src: "/logos/swissquote.svg",
    alt: "Swissquote",
  },
  {
    src: "/logos/citi.svg",
    alt: "Citi",
  },
  {
    src: "/logos/zkb.svg",
    alt: "Zürcher Kantonalbank",
  },
  {
    src: "/logos/butterfield.svg",
    alt: "Butterfield",
  },
];

export default function CarouselSection() {
  return (
    <section className="bg-[#f7f8fa] py-6 w-full overflow-hidden">
      <div className="relative w-full">
        <div className="carousel-track flex items-center gap-12 animate-carousel">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={idx} className="flex-shrink-0 h-16 flex items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                draggable={false}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes carousel {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-carousel {
          animation: carousel 40s linear infinite;
          width: 200%;
        }
      `}</style>
    </section>
  );
} 