'use client';
import React from "react";
import Image from "next/image";

export default function FlowDiagramSection() {
  return (
    <section className="bg-[#f7f8fa] py-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="w-full max-w-5xl mt-8">
          <Image
            src="/wdb_diagram.webp"
            alt="Wealth Data Box Flow Diagram"
            width={1200}
            height={450}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
} 