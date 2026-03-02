import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BlogBreadcrumbsProps {
  postTitle?: string;
}

export function BlogBreadcrumbs({ postTitle }: BlogBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
      <ol className="flex items-center flex-wrap gap-1">
        <li>
          <Link to="/" className="hover:text-accent transition-colors">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight className="w-3.5 h-3.5 mx-1 inline" />
        </li>
        {postTitle ? (
          <>
            <li>
              <Link to="/blog" className="hover:text-accent transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 mx-1 inline" />
            </li>
            <li className="text-foreground/70 truncate max-w-[200px] sm:max-w-none">
              {postTitle}
            </li>
          </>
        ) : (
          <li className="text-foreground/70">Blog</li>
        )}
      </ol>
    </nav>
  );
}
