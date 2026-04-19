#!/usr/bin/env bash
# Optimise a source photo into blog-ready hero assets.
#
# Usage:
#   scripts/optimize-blog-hero.sh <source-image> <slug>
#
# Produces, inside public/blog/:
#   <slug>.jpg   main in-page hero, ~1400px long edge, <200KB
#   <slug>.webp  WebP variant of the same, typically 40-60% smaller
#   og-<slug>.jpg  1200x630 landscape crop for social cards, top-anchored
#
# Why top-anchored crop: the subject of pet photos is usually the head,
# which sits at the top of a portrait-oriented source. Anchoring to "north"
# keeps the face in frame when we force a landscape aspect ratio.

set -euo pipefail

if [[ $# -ne 2 ]]; then
  echo "usage: $0 <source-image> <slug>" >&2
  exit 1
fi

SRC="$1"
SLUG="$2"

if [[ ! -f "$SRC" ]]; then
  echo "source not found: $SRC" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/public/blog"
mkdir -p "$OUT_DIR"

MAIN_JPG="$OUT_DIR/$SLUG.jpg"
MAIN_WEBP="$OUT_DIR/$SLUG.webp"
OG_JPG="$OUT_DIR/og-$SLUG.jpg"

# Main hero: resize so long edge is 1400px, quality 78, strip metadata.
magick "$SRC" \
  -auto-orient \
  -strip \
  -resize '1400x1400>' \
  -quality 78 \
  -interlace Plane \
  "$MAIN_JPG"

# WebP variant of the main hero at similar quality. Serve via <picture>
# tag when/if the blog adopts WebP sources.
cwebp -q 80 -quiet "$MAIN_JPG" -o "$MAIN_WEBP"

# Landscape OG card: 1200x630, top-anchored crop (keeps heads visible for
# portrait-oriented source photos).
magick "$SRC" \
  -auto-orient \
  -strip \
  -resize '1200x1200^' \
  -gravity north \
  -extent 1200x630 \
  -quality 82 \
  -interlace Plane \
  "$OG_JPG"

printf '\nGenerated:\n'
for f in "$MAIN_JPG" "$MAIN_WEBP" "$OG_JPG"; do
  size=$(stat -f%z "$f")
  human=$(awk -v s="$size" 'BEGIN{printf "%.0fKB", s/1024}')
  printf '  %s  %s\n' "$human" "${f#$ROOT/}"
done

printf '\nNext steps:\n'
printf '  - Set heroImage: "/blog/%s.jpg" on the post\n' "$SLUG"
printf '  - Set ogImage: "/blog/og-%s.jpg" on the post (for social cards)\n' "$SLUG"
printf '  - Write a descriptive heroImageAlt on the post\n'
