---
name: optimize-blog-hero
description: Process a source photo into SEO-ready blog hero assets — compressed JPG, WebP variant, and a 1200×630 landscape OG card. Use when the user supplies a new hero image for a blog post and wants it added to public/blog/.
---

# Optimise a blog hero image

## When to use

Invoke this skill when the user:
- Hands you a source image (camera/phone export, stock photo, etc.) for a specific blog post
- Asks to "add a hero image" or "swap the hero" for a post
- Says the current hero is too big / not SEO ready

## What it does

Runs `scripts/optimize-blog-hero.sh <source-image> <slug>` which emits, into `public/blog/`:

| File | Purpose | Typical size |
|---|---|---|
| `<slug>.jpg` | On-page hero, 1400px long edge, quality 78 | 100–180 KB |
| `<slug>.webp` | WebP of the same, for future `<picture>` adoption | 50–80 KB |
| `og-<slug>.jpg` | 1200×630 landscape, top-anchored crop for social cards | 60–120 KB |

Top-anchored crop: keeps pet faces in frame when forcing a landscape aspect ratio on a portrait source.

## Steps

1. **Find the source image.** Ask the user for the path, or check `~/Downloads/` for the most-recently-added image matching the request. Be specific about which file you plan to use before running anything.
2. **Confirm the slug.** Must match the post's `slug` field in `src/app/data/posts/<slug>.ts`. If the post doesn't exist yet, use the slug that will be used.
3. **Run the script:**
   ```bash
   scripts/optimize-blog-hero.sh <source-path> <slug>
   ```
4. **Update the post data file** (`src/app/data/posts/<slug>.ts`) with:
   - `heroImage: '/blog/<slug>.jpg'`
   - `ogImage: '/blog/og-<slug>.jpg'`
   - `heroImageAlt:` a *descriptive* alt (what's in the image — subject, action, mood), not the post title.
5. **Mirror the `ogImage` value** into the matching entry in `scripts/build-seo.mjs` (the `posts` array). That script generates per-route HTML and sitemap at build time and doesn't import the TS post modules, so it needs the same metadata updated by hand.
6. **Rebuild** (`npm run build`) and verify:
   - `dist/blog/<slug>/index.html` has `og:image` pointing at the `og-<slug>.jpg`
   - File sizes are sensible (main jpg <200 KB)

## Dependencies

Required system tools (already installed via `brew install webp imagemagick`):
- `magick` (ImageMagick 7+)
- `cwebp`

If missing, install with `brew install webp imagemagick` before running.

## Good alt text

Describe the image for someone who can't see it. Include subject, action, setting, mood.

Bad: `alt={post.title}` → duplicates the headline, no image info.
Good: *"Small tan terrier lying calmly on a bed with a single acupuncture needle placed on the top of its head, being gently stroked by its owner."*

## Consent check

If the image shows a client's pet (identifiable breed + markings + location), confirm the owner has given consent for web/social use before the post goes live. Flag this to the user — don't assume.
