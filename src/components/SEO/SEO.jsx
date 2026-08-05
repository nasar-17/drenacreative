import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { registerMeta } from '../../lib/seoRegistry';

const SITE_URL = 'https://drenacreative.vercel.app';

function upsertMeta(attr, key, content) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function upsertJsonLd(id, data) {
  let el = document.getElementById(id);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

function removeJsonLd(id) {
  document.getElementById(id)?.remove();
}

/**
 * SEO
 * Mengelola title, description, canonical, Open Graph, Twitter Card,
 * robots, dan JSON-LD per halaman secara client-side.
 *
 * Props:
 *   title, description
 *   ogImage   — absolute image URL (default: brand logo)
 *   jsonLd    — array of { id, data } structured data blocks
 *   noindex   — set true untuk halaman yang tidak boleh diindeks
 */
export function SEO({ title, description, ogImage, jsonLd = [], noindex = false }) {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname}`;
  const resolvedOgImage = ogImage || `${SITE_URL}/og-image.png`;

  // Daftarkan meta sinkron untuk prerender SSG
  registerMeta({ title, description, canonicalUrl, ogImage: resolvedOgImage, noindex, jsonLd });

  useEffect(() => {
    if (title) document.title = title;

    if (description) upsertMeta('name', 'description', description);

    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // Canonical
    upsertLink('canonical', canonicalUrl);

    // Open Graph
    upsertMeta('property', 'og:url', canonicalUrl);
    if (title) upsertMeta('property', 'og:title', title);
    if (description) upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', resolvedOgImage);

    // Twitter Card
    if (title) upsertMeta('name', 'twitter:title', title);
    if (description) upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', resolvedOgImage);

    // JSON-LD blocks (per id — hanya halaman ini yang dirender)
    const rendered = jsonLd.map(({ id, data }) => {
      upsertJsonLd(id, data);
      return id;
    });
    return () => {
      rendered.forEach((id) => removeJsonLd(id));
    };
  }, [title, description, canonicalUrl, resolvedOgImage, noindex, jsonLd]);

  return null;
}
