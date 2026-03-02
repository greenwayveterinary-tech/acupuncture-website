import { useState, useEffect } from 'react';
import { List } from 'lucide-react';
import type { TocEntry } from '@/app/data/blog-utils';

interface TableOfContentsProps {
  entries: TocEntry[];
}

export function TableOfContents({ entries }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headingElements = entries
      .map((entry) => document.getElementById(entry.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headingElements.length === 0) return;

    const observer = new IntersectionObserver(
      (observerEntries) => {
        for (const entry of observerEntries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -60% 0px', threshold: 0 }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [entries]);

  if (entries.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="space-y-3">
      <h4 className="text-sm font-semibold text-primary uppercase tracking-wider flex items-center gap-2">
        <List className="w-4 h-4" />
        Contents
      </h4>
      <ul className="space-y-1">
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`#${entry.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(entry.id);
                if (el) {
                  const offset = 100;
                  const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className={`block text-sm py-1 transition-colors ${
                entry.level === 3 ? 'pl-4' : ''
              } ${
                activeId === entry.id
                  ? 'text-accent font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
