import type { QuoteBlock as QuoteBlockType } from '@/app/types/blog';

export function QuoteBlock({ variant, text, attribution }: QuoteBlockType) {
  if (variant === 'pullquote') {
    return (
      <figure className="my-10 px-6 md:px-10">
        <blockquote className="text-xl md:text-2xl font-serif text-accent/90 italic leading-relaxed text-center">
          "{text}"
        </blockquote>
        {attribution && (
          <figcaption className="mt-3 text-center text-sm text-muted-foreground">
            {attribution}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className="my-6 border-l-4 border-accent/30 pl-5">
      <blockquote className="text-foreground/80 italic leading-relaxed text-[17px]">
        "{text}"
      </blockquote>
      {attribution && (
        <figcaption className="mt-2 text-sm text-muted-foreground">
          {attribution}
        </figcaption>
      )}
    </figure>
  );
}
