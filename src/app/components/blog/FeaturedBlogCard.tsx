import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/app/types/blog';
import { getAuthor } from '@/app/data/authors';
import { formatDate } from '@/app/data/blog-utils';

interface FeaturedBlogCardProps {
  post: BlogPost;
}

export function FeaturedBlogCard({ post }: FeaturedBlogCardProps) {
  const author = getAuthor(post.authorSlug);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        {post.heroImage && (
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={post.heroImage}
              alt={post.heroImageAlt || post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-xs font-medium uppercase tracking-wider text-primary/60 bg-primary/5 px-2.5 py-1 rounded-full">
            Latest
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-accent transition-colors mb-3 leading-snug">
          {post.title}
        </h2>
        {post.subtitle && (
          <p className="text-muted-foreground mb-3 max-w-2xl">{post.subtitle}</p>
        )}
        <p className="text-foreground/70 mb-6 max-w-2xl line-clamp-3">
          {post.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground/70">{author?.name}</span>
            <div className="flex items-center gap-3 mt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min read
              </span>
            </div>
          </div>
          <span className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
            Read <ArrowRight className="w-4 h-4" />
          </span>
        </div>
        </div>
      </Link>
    </motion.article>
  );
}
