import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Calendar } from 'lucide-react';
import { SEO } from '@/app/components/SEO';
import { ContentRenderer } from '@/app/components/blog/ContentRenderer';
import { TableOfContents } from '@/app/components/blog/TableOfContents';
import { AuthorBio } from '@/app/components/blog/AuthorBio';
import { BlogCTA } from '@/app/components/blog/BlogCTA';
import { RelatedPosts } from '@/app/components/blog/RelatedPosts';
import { BlogBreadcrumbs } from '@/app/components/blog/BlogBreadcrumbs';
import { getPostBySlug, getRelatedPosts, generateTableOfContents, formatDate } from '@/app/data/blog-utils';
import { getAuthor } from '@/app/data/authors';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const author = getAuthor(post.authorSlug);
  const relatedPosts = getRelatedPosts(post);
  const tocEntries = generateTableOfContents(post.content);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    author: {
      '@type': 'Person',
      name: author?.name,
      jobTitle: author?.role,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Greenway Veterinary Acupuncture',
      url: 'https://acupuncture-vet.co.uk',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://acupuncture-vet.co.uk/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://acupuncture-vet.co.uk',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://acupuncture-vet.co.uk/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://acupuncture-vet.co.uk/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="bg-secondary min-h-screen">
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        ogType="article"
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        jsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <BlogBreadcrumbs postTitle={post.title} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent/15 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight">
              {post.title}
            </h1>
            {post.subtitle && (
              <p className="text-lg text-white/70 mb-6">{post.subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
              {author && (
                <span className="font-medium text-white/80">
                  {author.name}, {author.qualifications}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readingTime} min read
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="flex gap-10">
          {/* Table of Contents - desktop sidebar */}
          {tocEntries.length > 0 && (
            <aside className="hidden xl:block w-56 shrink-0">
              <div className="sticky top-28">
                <TableOfContents entries={tocEntries} />
              </div>
            </aside>
          )}

          {/* Main content */}
          <article className="flex-1 max-w-3xl mx-auto">
            {/* Mobile ToC */}
            {tocEntries.length > 0 && (
              <div className="xl:hidden mb-8 bg-white rounded-xl p-5 border border-gray-100">
                <TableOfContents entries={tocEntries} />
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
              <ContentRenderer content={post.content} />
            </div>

            {/* Author Bio */}
            {author && (
              <div className="mt-10">
                <AuthorBio author={author} />
              </div>
            )}

            {/* CTA */}
            <div className="mt-10">
              <BlogCTA />
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-14">
                <RelatedPosts posts={relatedPosts} />
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
