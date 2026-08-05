import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const ASSETS = join(root, 'src', 'assets');
const GEN = join(ASSETS, 'gen');
const PUBLIC = join(root, 'public');

mkdirSync(GEN, { recursive: true });

/**
 * 1) WebP variants untuk aset yang dipakai komponen (non-LCP).
 *    maxWidth menjaga proporsi agar file ringan tapi tetap tajam.
 */
const targets = [
  { src: 'about-building.png', width: 1200, quality: 80 },
  { src: 'hero-design.png', width: 1600, quality: 80 },
  { src: 'hero-web.png', width: 1600, quality: 80 },
  { src: 'portfolio-design.png', width: 1200, quality: 80 },
  { src: 'portfolio-tugas.png', width: 1200, quality: 80 },
  { src: 'portfolio-web.png', width: 1200, quality: 80 },
];

for (const { src, width, quality } of targets) {
  const out = join(GEN, src.replace(/\.png$/, '.webp'));
  await sharp(join(ASSETS, src))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(out);
  const kb = Math.round((await sharp(out).stats()).size / 1024);
  const origKb = Math.round((await sharp(join(ASSETS, src)).stats()).size / 1024);
  console.log(`${src} → gen/${src.replace(/\.png$/, '.webp')} (${origKb}KB → ${kb}KB)`);
}

/**
 * 2) Hero LCP → public/ agar bisa di-<link rel="preload"> dari index.html.
 */
await sharp(join(ASSETS, 'hero-bg.png'))
  .resize({ width: 1600, withoutEnlargement: true })
  .webp({ quality: 78 })
  .toFile(join(PUBLIC, 'hero-bg.webp'));
await sharp(join(ASSETS, 'hero-bg.png'))
  .resize({ width: 768, withoutEnlargement: true })
  .webp({ quality: 72 })
  .toFile(join(PUBLIC, 'hero-bg-mobile.webp'));
console.log('hero-bg.png → public/hero-bg.webp + public/hero-bg-mobile.webp');

/**
 * 3) Apple touch icon 180x180 dari logo.
 */
await sharp(join(PUBLIC, 'Logo.png'))
  .resize(180, 180)
  .png()
  .toFile(join(PUBLIC, 'apple-touch-icon.png'));
console.log('Logo.png → public/apple-touch-icon.png (180x180)');

/**
 * 4) og:image 1200x630 — SVG brand design yang di-raster ke PNG.
 */
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b131a"/>
      <stop offset="0.55" stop-color="#162530"/>
      <stop offset="1" stop-color="#203646"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.85" cy="0.15" r="0.7">
      <stop offset="0" stop-color="#9CD5FF" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#9CD5FF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="60" y="60" width="1080" height="510" fill="none" stroke="#355872" stroke-width="2" opacity="0.5"/>
  <text x="88" y="250" font-family="Arial, sans-serif" font-size="76" font-weight="bold" fill="#ffffff" letter-spacing="2">DRENA</text>
  <text x="88" y="330" font-family="Arial, sans-serif" font-size="76" font-weight="bold" fill="#9CD5FF" letter-spacing="2">CREATIVE</text>
  <text x="88" y="410" font-family="Arial, sans-serif" font-size="32" fill="#b3d4e9">Solusi Website, Desain &amp; Aplikasi Profesional</text>
  <rect x="88" y="462" width="160" height="6" fill="#4cb1ff"/>
</svg>`;
await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile(join(PUBLIC, 'og-image.png'));
console.log('og-image.png (1200x630) dibuat');

console.log('\nSelesai.');
