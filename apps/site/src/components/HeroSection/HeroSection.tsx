import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { HeroSectionProps } from "./types";

export function HeroSection({
  title,
  description,
  cta,
  image,
}: HeroSectionProps) {
  const renderLink = (link: any) => {
    if (link?.type === "internal" && link.resource?.slug?.current) {
      return `/${link.resource.slug.current}`;
    }
    return link?.url || "#";
  };

  console.dir(
    {
      title,
      description,
      cta,
      image,
    },
    { depth: null }
  );

  return (
    <section className="w-full bg-primary py-20 lg:py-32 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "grid gap-12 items-center",
            image ? "lg:grid-cols-2" : "lg:grid-cols-1"
          )}
        >
          {/* Main Content */}
          <div className="space-y-8 text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              {title}
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl leading-relaxed">
              {description}
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Link
                href={renderLink(cta?.link)}
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-bold transition-colors duration-200",
                  "px-8 py-4 text-white bg-accent hover:bg-accent-dark uppercase tracking-wide",
                  "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                )}
                target={
                  cta.link.type === "external" && cta.link.openInNewTab
                    ? "_blank"
                    : undefined
                }
                rel={
                  cta.link.type === "external" && cta.link.openInNewTab
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {cta.text}
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          {image && (
            <div className="relative">
              <div className="relative aspect-square lg:aspect-auto lg:h-96 rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm">
                <Image
                  src={image.asset.url}
                  alt={image.alt || title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {image.caption && (
                <p className="mt-3 text-sm text-white/70 text-center">
                  {image.caption}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
