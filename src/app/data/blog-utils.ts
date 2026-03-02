import type { BlogPost, Category, ContentBlock } from '@/app/types/blog';
import { posts } from '@/app/data/posts';

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: Category): BlogPost[] {
  return getAllPosts().filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => p !== undefined);
}

export interface TocEntry {
  id: string;
  text: string;
  level: 2 | 3;
}

export function generateTableOfContents(content: ContentBlock[]): TocEntry[] {
  return content
    .filter((block): block is Extract<ContentBlock, { type: 'heading' }> => block.type === 'heading')
    .map((block) => ({
      id: block.id,
      text: block.text,
      level: block.level,
    }));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
