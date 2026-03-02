import type { HeadingBlock as HeadingBlockType } from '@/app/types/blog';

export function HeadingBlock({ level, text, id }: HeadingBlockType) {
  const Tag = level === 2 ? 'h2' : 'h3';
  const styles =
    level === 2
      ? 'text-2xl md:text-3xl font-serif text-primary mt-12 mb-4'
      : 'text-xl md:text-2xl font-serif text-primary mt-8 mb-3';

  return (
    <Tag id={id} className={styles}>
      <a href={`#${id}`} className="hover:text-accent transition-colors">
        {text}
      </a>
    </Tag>
  );
}
