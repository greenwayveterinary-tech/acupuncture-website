import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Calendar } from 'lucide-react';
import type { BlogPost } from '@/app/types/blog';
import { getAuthor } from '@/app/data/authors';
import { formatDate } from '@/app/data/blog-utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const author = getAuthor(post.authorSlug);

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100"
    >
      <Link to={`/blog/${post.slug}`} className="block">
        {post.heroImage && (
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={post.heroImage}
              alt={post.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        )}
        <div className="p-5">
          <span className="inline-block text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h3 className="text-lg font-serif text-primary group-hover:text-accent transition-colors mb-2 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {post.description}
          </p>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium text-foreground/70">
              {author?.name}
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readingTime} min
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
