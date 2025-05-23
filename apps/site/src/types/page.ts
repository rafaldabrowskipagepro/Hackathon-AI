export interface PageSlug {
  current: string;
}

export interface PageData {
  _id: string;
  _type: "page";
  title: string;
  slug: PageSlug;
  sections: Section[];
}

export interface Section {
  _type: string;
  _key: string;
}

export interface HeroSection extends Section {
  _type: "heroSection";
  title: string;
  description: string;
  cta: {
    text: string;
    link: {
      type: "internal" | "external";
      resource?: {
        title: string;
        slug: PageSlug;
      };
      url?: string;
      openInNewTab?: boolean;
    };
  };
  image?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
    caption?: string;
  };
}

export type SectionType = HeroSection;
