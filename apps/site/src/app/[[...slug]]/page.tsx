import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity";
import { pageQuery } from "@/lib/queries/page";
import type { PageData } from "@/types/page";
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

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = (resolvedParams.slug || ["", ""]).join("/");

  // Fetch page data from Sanity
  const pageData: PageData | null = await sanityClient.fetch(pageQuery, {
    slug,
  });

  console.log({ slug });

  // If no page found, return 404
  if (!pageData) {
    notFound();
  }

  return (
    <main className="min-h-screen">


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
    </main>
  );
}

// Generate metadata for the page
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ? resolvedParams.slug.join("/") : "home";

  const pageData: PageData | null = await sanityClient.fetch(pageQuery, {
    slug,
  });

  if (!pageData) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: pageData.title,
    description: `${pageData.title} page`, // You can enhance this with a description field from Sanity
  };
}
