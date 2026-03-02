import type { ImageBlock as ImageBlockType } from '@/app/types/blog';

export function ImageBlock({ src, alt, caption, variant }: ImageBlockType) {
  const wrapperClass =
    variant === 'full'
      ? 'my-8'
      : variant === 'inset'
        ? 'my-8 mx-auto max-w-lg'
        : 'my-8 float-right ml-6 mb-4 max-w-xs';

  return (
    <figure className={wrapperClass}>
      <img
        src={src}
        alt={alt}
        className="w-full rounded-lg shadow-md"
        loading="lazy"
      />
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
