import type { ListBlock as ListBlockType } from '@/app/types/blog';

export function ListBlock({ style, items }: ListBlockType) {
  const Tag = style === 'ordered' ? 'ol' : 'ul';
  const listClass =
    style === 'ordered'
      ? 'list-decimal pl-6 space-y-3'
      : 'pl-6 space-y-3';

  return (
    <Tag className={`${listClass} text-foreground/90 leading-relaxed text-[17px] my-4`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={style === 'unordered' ? 'relative pl-2 before:content-[""] before:absolute before:-left-4 before:top-[10px] before:w-2 before:h-2 before:rounded-full before:bg-accent/60' : ''}
        >
          <span dangerouslySetInnerHTML={{ __html: item }} />
        </li>
      ))}
    </Tag>
  );
}
