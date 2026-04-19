#!/usr/bin/env node
// Post-build SEO step:
//   1. Generates per-route dist/<path>/index.html with route-specific
//      <title>, meta description, canonical, OG/Twitter tags, and JSON-LD.
//      This lets crawlers and social bots that don't execute JS see the
//      correct metadata for every page.
//   2. Emits a fresh dist/sitemap.xml covering all routes and posts.
//
// If you add a new page route or blog post, update `staticRoutes` or `posts`
// below.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');

const SITE_URL = 'https://acupuncture-vet.co.uk';
const SITE_NAME = 'Greenway Veterinary Acupuncture';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.jpg`;

// ---------- Schemas shared with the client ----------

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'VeterinaryCare',
  name: SITE_NAME,
  description:
    'Veterinary acupuncture for dogs and cats in London. Natural pain relief, mobility support, and post-operative recovery.',
  url: SITE_URL,
  telephone: '03333397274',
  email: 'office@acupuncture-vet.co.uk',
  priceRange: '££',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  location: [
    {
      '@type': 'Place',
      name: 'Flowmotion',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 7, Bow Triangle Business Centre, Eleanor Street',
        addressLocality: 'London',
        postalCode: 'E3 4UR',
        addressCountry: 'GB',
      },
    },
    {
      '@type': 'Place',
      name: "Fido's of Fitzrovia",
      address: {
        '@type': 'PostalAddress',
        streetAddress: '87 Great Portland St',
        addressLocality: 'London',
        postalCode: 'W1W 7LU',
        addressCountry: 'GB',
      },
    },
    {
      '@type': 'Place',
      name: "Kite's Nest",
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Wycombe Road, Studley Green',
        addressLocality: 'High Wycombe',
        postalCode: 'HP14 3UY',
        addressCountry: 'GB',
      },
    },
  ],
};

// ---------- Route manifest ----------

const staticRoutes = [
  {
    path: '/',
    title: `${SITE_NAME} | Natural Pain Relief for Pets in London`,
    fullTitle: `${SITE_NAME} | Natural Pain Relief for Pets in London`,
    description:
      'Veterinary acupuncture for dogs and cats in London. Natural pain relief, mobility support, and post-operative recovery. RCVS registered, ABVA members. Book a home visit or clinic appointment.',
    ogType: 'website',
    changefreq: 'weekly',
    priority: '1.0',
    jsonLd: [localBusinessSchema],
  },
  {
    path: '/acupuncture',
    title: 'Veterinary Acupuncture for Dogs, Cats & Rabbits',
    description:
      'Learn how veterinary acupuncture works, what conditions it treats, and what to expect during a session. Arthritis, pain relief, mobility support, and post-operative recovery.',
    ogType: 'website',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/for-vets',
    title: 'For Veterinary Professionals',
    description:
      'Refer patients to Greenway Veterinary Acupuncture. We work collaboratively with vets, providing treatment reports and maintaining your involvement in patient care.',
    ogType: 'website',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description:
      "Get in touch with Greenway Veterinary Acupuncture. Book a home visit or clinic appointment for your pet in London. Call 0333 339 7274 or email us.",
    ogType: 'website',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog',
    title: 'Blog',
    description:
      'Expert veterinary acupuncture articles by qualified vets. Evidence-based insights on acupuncture for dogs, cats, and horses.',
    ogType: 'website',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/tools',
    title: 'Pet Acupuncture Tools | Is My Pet a Candidate? | Pain Assessment',
    description:
      'Use our free tools to find out if your pet is a good candidate for veterinary acupuncture, and assess their current pain level with our interactive pain scoring guide.',
    ogType: 'website',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy',
    description:
      'Privacy policy for Greenway Veterinary Acupuncture. How we collect, use, and protect your personal data.',
    ogType: 'website',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/terms',
    title: 'Terms of Service',
    description:
      'Terms of service for Greenway Veterinary Acupuncture. Booking, cancellation, and treatment policies.',
    ogType: 'website',
    changefreq: 'yearly',
    priority: '0.3',
  },
];

// Blog posts — keep this list in sync with src/app/data/posts/index.ts.
// Only metadata needed for SEO lives here (no post body).
const posts = [
  {
    slug: 'what-to-expect-first-acupuncture-session',
    title: "What to Expect at Your Pet's First Acupuncture Session",
    description:
      "A vet-written guide to your pet's first acupuncture session: what the consultation looks like, how the needles feel, how pets usually react, session length, and what to do afterwards.",
    category: 'Pet Owner Guides',
    authorName: 'Dr Claire Greenway',
    authorRole: 'Veterinary Acupuncturist',
    publishedAt: '2026-04-19',
    updatedAt: undefined,
    heroImage: '/blog/what-to-expect-first-acupuncture-session.jpg',
    ogImage: '/blog/og-what-to-expect-first-acupuncture-session.jpg',
    tags: [
      'first pet acupuncture session',
      'what happens dog acupuncture',
      'pet acupuncture what to expect',
      'acupuncture session dogs',
      'cat acupuncture what to expect',
    ],
  },
  {
    slug: 'does-acupuncture-work-for-dogs',
    title: "Does Acupuncture Really Work for Dogs? A Vet's Honest Answer",
    description:
      'A veterinary acupuncturist with 25 years of clinical experience explains the science, evidence and realistic expectations for dog acupuncture.',
    category: 'Evidence & Science',
    authorName: 'Dr Alastair Greenway',
    authorRole: 'Veterinary Acupuncturist',
    publishedAt: '2026-03-01',
    updatedAt: undefined,
    heroImage: '/blog/does-acupuncture-work-for-dogs.jpg',
    ogImage: '/blog/og-does-acupuncture-work-for-dogs.jpg',
    tags: [
      'acupuncture for dogs',
      'does dog acupuncture work',
      'veterinary acupuncture evidence',
      'dog acupuncture UK',
      'acupuncture for dogs arthritis',
    ],
  },
];

// ---------- HTML helpers ----------

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeJsonLd(obj) {
  // `</script>` inside JSON breaks the inline script tag. Escape just the
  // closing `<`.
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function buildHead({ title, description, url, ogType, ogImage, publishedAt, updatedAt, jsonLd }) {
  const image = ogImage || DEFAULT_OG_IMAGE;
  const parts = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(url)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(url)}" />`,
    `<meta property="og:type" content="${escapeHtml(ogType || 'website')}" />`,
    `<meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
  ];
  if (publishedAt) {
    parts.push(`<meta property="article:published_time" content="${escapeHtml(publishedAt)}" />`);
  }
  if (updatedAt) {
    parts.push(`<meta property="article:modified_time" content="${escapeHtml(updatedAt)}" />`);
  }
  for (const item of jsonLd || []) {
    parts.push(`<script type="application/ld+json">${escapeJsonLd(item)}</script>`);
  }
  return parts.join('\n    ');
}

// Strip the existing default SEO head (the stuff in index.html that's only
// meant as a fallback for the root) and inject per-route tags. We keep the
// charset, viewport, preload, and favicon lines.
function injectSeo(shellHtml, seoHtml) {
  // Remove the default title + description + og/twitter + canonical lines.
  let out = shellHtml;
  const stripPatterns = [
    /<title>[\s\S]*?<\/title>/i,
    /<meta\s+name=["']description["'][^>]*>\s*/gi,
    /<meta\s+property=["']og:[^"']*["'][^>]*>\s*/gi,
    /<meta\s+name=["']twitter:[^"']*["'][^>]*>\s*/gi,
    /<link\s+rel=["']canonical["'][^>]*>\s*/gi,
    /<!--\s*Open Graph defaults.*?-->\s*/gis,
  ];
  for (const re of stripPatterns) {
    out = out.replace(re, '');
  }
  return out.replace(/<\/head>/i, `    ${seoHtml}\n  </head>`);
}

function routeToDistPath(path) {
  if (path === '/') return join(DIST, 'index.html');
  const clean = path.replace(/^\//, '');
  return join(DIST, clean, 'index.html');
}

// ---------- Main ----------

async function main() {
  const shellPath = join(DIST, 'index.html');
  const shell = await readFile(shellPath, 'utf8');

  const allRoutes = [
    ...staticRoutes,
    ...posts.map((p) => ({
      path: `/blog/${p.slug}`,
      title: p.title,
      description: p.description,
      ogType: 'article',
      ogImage: `${SITE_URL}${p.ogImage || p.heroImage}`,
      publishedAt: p.publishedAt,
      updatedAt: p.updatedAt,
      changefreq: 'monthly',
      priority: '0.7',
      jsonLd: [
        {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: p.title,
          description: p.description,
          datePublished: p.publishedAt,
          ...(p.updatedAt ? { dateModified: p.updatedAt } : {}),
          image: `${SITE_URL}${p.heroImage}`,
          author: {
            '@type': 'Person',
            name: p.authorName,
            jobTitle: p.authorRole,
            url: SITE_URL,
          },
          publisher: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: DEFAULT_OG_IMAGE,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${SITE_URL}/blog/${p.slug}`,
          },
          articleSection: p.category,
          keywords: p.tags.join(', '),
        },
        {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            {
              '@type': 'ListItem',
              position: 3,
              name: p.title,
              item: `${SITE_URL}/blog/${p.slug}`,
            },
          ],
        },
      ],
    })),
  ];

  for (const route of allRoutes) {
    const url = `${SITE_URL}${route.path === '/' ? '' : route.path}`;
    const seoHead = buildHead({
      title: route.fullTitle || (route.path === '/' ? route.title : `${route.title} | ${SITE_NAME}`),
      description: route.description,
      url,
      ogType: route.ogType,
      ogImage: route.ogImage,
      publishedAt: route.publishedAt,
      updatedAt: route.updatedAt,
      jsonLd: route.jsonLd,
    });
    const html = injectSeo(shell, seoHead);
    const outPath = routeToDistPath(route.path);
    await mkdir(dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf8');
    console.log(`  ${route.path} → ${outPath.replace(ROOT + '/', '')}`);
  }

  // Sitemap
  const sitemapEntries = allRoutes
    .map(
      (r) => `  <url>
    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>
    <changefreq>${r.changefreq || 'monthly'}</changefreq>
    <priority>${r.priority || '0.5'}</priority>
  </url>`,
    )
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;
  await writeFile(join(DIST, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`  sitemap.xml (${allRoutes.length} urls)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
