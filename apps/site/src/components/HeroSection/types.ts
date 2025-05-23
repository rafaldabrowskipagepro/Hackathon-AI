export interface Link {
  type: "internal" | "external";
  resource?: {
    title: string;
    slug: {
      current: string;
    };
  };
  url?: string;
  openInNewTab?: boolean;
}

export interface CallToAction {
  text: string;
  link: Link;
}

export interface HeroImage {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  caption?: string;
}

export interface HeroSectionProps {
  title: string;
  description: string;
  cta: CallToAction;
  image?: HeroImage;
}
