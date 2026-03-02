import type { ParagraphBlock as ParagraphBlockType } from '@/app/types/blog';

export function ParagraphBlock({ text }: ParagraphBlockType) {
  return (
    <p className="text-foreground/90 leading-relaxed text-[17px]">{text}</p>
  );
}
