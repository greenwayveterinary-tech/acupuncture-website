export type Category =
  | 'Evidence & Science'
  | 'Conditions & Treatment'
  | 'Pet Owner Guides'
  | 'Vet Professional'
  | 'Case Studies';

export interface Author {
  slug: string;
  name: string;
  qualifications: string;
  role: string;
  bio: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  category: Category;
  authorSlug: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  heroImage?: string;
  heroImageAlt?: string;
  /** Dedicated 1.91:1 landscape image for social share cards. Defaults to heroImage. */
  ogImage?: string;
  content: ContentBlock[];
  relatedSlugs: string[];
  tags: string[];
}

// Content block discriminated union
export type ContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | CalloutBlock
  | QuoteBlock
  | ListBlock
  | ImageBlock
  | KeyTakeawayBlock
  | DividerBlock
  | EmphasizedParagraphBlock
  | TwoColumnBlock;

export interface ParagraphBlock {
  type: 'paragraph';
  text: string;
}

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3;
  text: string;
  id: string;
}

export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'tip' | 'warning' | 'science';
  title?: string;
  text: string;
}

export interface QuoteBlock {
  type: 'quote';
  variant: 'pullquote' | 'blockquote';
  text: string;
  attribution?: string;
}

export interface ListBlock {
  type: 'list';
  style: 'ordered' | 'unordered';
  items: string[];
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
  variant: 'full' | 'inset' | 'side';
}

export interface KeyTakeawayBlock {
  type: 'keyTakeaway';
  title?: string;
  points: string[];
}

export interface DividerBlock {
  type: 'divider';
}

export interface EmphasizedParagraphBlock {
  type: 'emphasizedParagraph';
  text: string;
}

export interface TwoColumnBlock {
  type: 'twoColumn';
  left: ContentBlock[];
  right: ContentBlock[];
}
