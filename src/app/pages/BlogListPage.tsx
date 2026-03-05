import { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';
import { SEO } from '@/app/components/SEO';
import { FeaturedBlogCard } from '@/app/components/blog/FeaturedBlogCard';
import { BlogCard } from '@/app/components/blog/BlogCard';
import { CategoryFilter } from '@/app/components/blog/CategoryFilter';
import { BlogBreadcrumbs } from '@/app/components/blog/BlogBreadcrumbs';
import { BlogCTA } from '@/app/components/blog/BlogCTA';
import { getAllPosts } from '@/app/data/blog-utils';
import type { Category } from '@/app/types/blog';

export function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const allPosts = getAllPosts();
  const featuredPost = allPosts[0];
  const remainingPosts =
    selectedCategory === 'All'
      ? allPosts.slice(1)
      : allPosts.filter((p) => p.category === selectedCategory && p.slug !== featuredPost?.slug);

  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Veterinary Acupuncture Blog',
    description: 'Expert veterinary acupuncture articles by qualified vets. Evidence-based insights on acupuncture for dogs, cats, and horses.',
    url: 'https://acupuncture-vet.co.uk/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Greenway Veterinary Acupuncture',
      url: 'https://acupuncture-vet.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://acupuncture-vet.co.uk/og-default.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: allPosts.map((post, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://acupuncture-vet.co.uk/blog/${post.slug}`,
        name: post.title,
      })),
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
    ],
  };

  return (
    <div className="bg-secondary min-h-screen">
      <SEO
        title="Blog"
        description="Expert veterinary acupuncture articles by qualified vets. Evidence-based insights on acupuncture for dogs, cats, and horses."
        path="/blog"
        jsonLd={[collectionJsonLd, breadcrumbJsonLd]}
      />

      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <BlogBreadcrumbs />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">
                Veterinary Acupuncture Blog
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif text-white mb-4">
              Insights from the Clinic
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              Evidence-based articles on veterinary acupuncture, written by vets with
              decades of hands-on clinical experience.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <FeaturedBlogCard post={featuredPost} />
          </div>
        )}

        {/* Category Filter */}
        {allPosts.length > 1 && (
          <div className="mb-8">
            <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
          </div>
        )}

        {/* Post Grid */}
        {remainingPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : allPosts.length > 1 ? (
          <div className="text-center py-12 mb-16">
            <p className="text-muted-foreground">No articles in this category yet. Check back soon.</p>
          </div>
        ) : null}

        {/* CTA */}
        <BlogCTA />
      </div>
    </div>
  );
}
