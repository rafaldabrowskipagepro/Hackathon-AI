export interface Logo {
  asset: {
    _id: string;
    url: string;
  };
  alt?: string;
  caption?: string;
}

export interface Link {
  type: "internal" | "external";
  resource?: {
    title: string;
    slug: {
      current: string;
    };
  };
  url?: string;
}

export interface NavigationLink {
  label: string;
  link: Link;
}

export interface CtaButton {
  label: string;
  link: Link;
}

export interface HeaderProps {
  logo: Logo;
  navigationLinks: NavigationLink[];
  ctaButton: CtaButton;
}
