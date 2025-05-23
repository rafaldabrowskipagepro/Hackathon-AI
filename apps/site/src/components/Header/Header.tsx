import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { createClient } from "@sanity/client";
import { headerQuery } from "./query";
import type { NavigationLink } from "./types";

export async function Header() {
  const renderLink = (link: any) => {
    if (link.type === "internal" && link.resource?.slug?.current) {
      return `/${link.resource.slug.current}`;
    }
    return link.url || "#";
  };

  const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  });

  const header = await sanityClient.fetch(headerQuery);

  console.dir(header, { depth: null });

  return (
    <header className="w-full bg-white border-b border-ui-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className="flex items-center justify-between h-16"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link
              href="/"
              className="flex items-center space-x-3 transition-opacity"
            >
              {header?.logo?.asset ? (
                <Image
                  src={header.logo.asset.url || ""}
                  alt={header.logo.alt || "Company logo"}
                  width={160}
                  height={32}
                  className="h-8 w-auto object-contain"
                  priority
                />
              ) : (
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
              )}
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {header?.navigationLinks?.map(
                (navItem: NavigationLink, index: number) => (
                  <li key={index} role="none">
                    <Link
                      href={renderLink(navItem.link)}
                      className={cn(
                        "text-base font-medium text-gray-700 hover:text-gray-900 transition-colors",
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm px-2 py-1"
                      )}
                      role="menuitem"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            {header?.ctaButton && (
              <Link
                href={renderLink(header.ctaButton.link)}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors",
                  "h-10 px-4 py-2 bg-red-600 text-white hover:bg-red-700 font-semibold uppercase tracking-wide",
                  "focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                )}
              >
                {header.ctaButton.label}
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
