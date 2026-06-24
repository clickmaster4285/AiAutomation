// content/type.ts

export interface SectionItem {
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
  image?: string;
  value?: number | string;
  suffix?: string;
  prefix?: string;
  isViewAll?: boolean;
}

export interface Section {
  type:
    | 'hero'
    | 'text'
    | 'features'
    | 'grid'
    | 'steps'
    | 'stats'
    | 'painpoint'
    | 'image-text'
    | 'faq'
    | 'cta';
  heading?: string;
  subheading?: string;
  content?: string | string[];
  items?: SectionItem[];
  // Hero specific
  stats?: { label: string; value: string }[];
  ctas?: { text: string; link: string; primary?: boolean }[];
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    fadeEdges?: boolean; // 👈 Added
  };
  // CTA specific
  cta?: { text: string; link: string; primary?: boolean };
}

export interface ServiceContent {
  slug: string;
  title: string;
  metaDescription?: string;
  keywords?: string;
  template?: 'default' | 'workflow' | 'dark' | 'light';
  path?: string;
  sections: Section[];
}