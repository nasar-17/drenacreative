import { createServer } from 'vite';
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const DIST = join(root, 'dist');

const SITE_URL = 'https://drenacreative.vercel.app';

const ROUTES = [
  { path: '/', file: 'index.html' },
  { path: '/layanan-website', file: 'layanan-website.html' },
  { path: '/layanan-design', file: 'layanan-design.html' },
  { path: '/layanan-aplikasi', file: 'layanan-aplikasi.html' },
  { path: '/layanan-ai-content-branding', file: 'layanan-ai-content-branding.html' },
  { path: '/produk', file: 'produk.html' },
  { path: '/tentang', file: 'tentang.html' },
  { path: '/privacy', file: 'privacy.html' },
  { path: '/terms', file: 'terms.html' },
];

const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
});

try {
  const { render } = await server.ssrLoadModule('/src/prerender-entry.jsx');
  const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

  for (const route of ROUTES) {
    const { html, meta } = await render(route.path);

    let out = template
      // Isi konten di dalam #root
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
      // Title route-spesifik
      .replace(/<title>.*?<\/title>/, `<title>${meta.title || ''}</title>`)
      // Meta description
      .replace(
        /<meta name="description" content="[^"]*"\s*\/?>/,
        `<meta name="description" content="${(meta.description || '').replace(/"/g, '&quot;')}" />`
      )
      // Canonical route-spesifik
      .replace(
        /<link rel="canonical" href="[^"]*"\s*\/?>/,
        `<link rel="canonical" href="${meta.canonicalUrl}" />`
      )
      // JSON-LD route-spesifik (disisipkan sebelum </head>)
      .replace(
        '</head>',
        (meta.jsonLd || []).map(({ data }) => `    <script type="application/ld+json">${JSON.stringify(data)}</script>`).join('\n') + '\n  </head>'
      );

    writeFileSync(join(DIST, route.file), out);
    console.log(`✓ prerender ${route.path} → ${route.file} (${Math.round(out.length / 1024)} KB)`);
  }
} finally {
  await server.close();
}
