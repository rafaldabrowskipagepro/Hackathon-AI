import { notFound } from "next/navigation";
import { sanityClient } from "@/lib/sanity";
import { pageQuery } from "@/lib/queries/page";
import { SectionRenderer } from "@/components/SectionRenderer";
import type { PageData } from "@/types/page";

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
      {/* Optional: Add page title as meta data or in a hidden element for SEO */}
      <div className="sr-only">
        <h1>{pageData.title}</h1>
      </div>

      {/* Render all sections */}
      {pageData.sections && pageData.sections.length > 0 ? (
        <SectionRenderer sections={pageData.sections} />
      ) : (
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {pageData.title}
            </h2>
            <p className="text-gray-600">
              This page doesn't have any content sections yet.
            </p>
          </div>
        </div>
      )}
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
