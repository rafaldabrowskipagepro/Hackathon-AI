import Image from "next/image";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import CarouselSection from "@/components/CarouselSection";
import DataTrustSection from "@/components/DataTrustSection";
import CoverageSection from "@/components/CoverageSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FlowDiagramSection from "@/components/FlowDiagramSection";
import CoreFeaturesSection from "@/components/CoreFeaturesSection";
import EdgeBenefitsSection from "@/components/EdgeBenefitsSection";
import WhoWeServeSection from "@/components/WhoWeServeSection";
import EcosystemSection from "@/components/EcosystemSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <CarouselSection />
      <DataTrustSection />
      <CoverageSection />
      <HowItWorksSection />
      <FlowDiagramSection />
      <CoreFeaturesSection />
      <EdgeBenefitsSection />
      <WhoWeServeSection />
      <EcosystemSection />
    </>
  );
}
