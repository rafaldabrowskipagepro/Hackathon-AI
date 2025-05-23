import React from "react";
import { HeroSection } from "@/components/HeroSection";
import type { SectionType, HeroSection as HeroSectionType } from "@/types/page";

interface SectionRendererProps {
  sections: SectionType[];
}

export function SectionRenderer({ sections }: SectionRendererProps) {
  const renderSection = (section: SectionType) => {
    switch (section._type) {
      case "heroSection":
        const heroSection = section as HeroSectionType;
        return (
          <HeroSection
            key={section._key}
            title={heroSection.title}
            description={heroSection.description}
            cta={heroSection.cta}
            image={heroSection.image}
          />
        );
      default:
        console.warn(`Unknown section type: ${section._type}`);
        return null;
    }
  };

  return <>{sections.map((section) => renderSection(section))}</>;
}
