import type { EmphasizedParagraphBlock as EmphasizedParagraphBlockType } from '@/app/types/blog';

export function EmphasizedParagraphBlock({ text }: EmphasizedParagraphBlockType) {
  return (
    <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-serif">
      {text}
    </p>
  );
}
