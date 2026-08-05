import { renderToPipeableStream } from 'react-dom/server';
import { Writable } from 'node:stream';
import { MemoryRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';
import { takeMeta } from './lib/seoRegistry';

/**
 * renderToString yang menunggu seluruh konten siap (mendukung lazy/Suspense).
 * renderToString biasa akan merender fallback Suspense untuk route lazy.
 */
function renderToStringAsync(node) {
  return new Promise((resolve, reject) => {
    let html = '';
    const { pipe } = renderToPipeableStream(node, {
      onShellError: reject,
      onAllReady() {
        const writable = new Writable({
          write(chunk, _enc, cb) {
            html += chunk.toString();
            cb();
          },
        });
        writable.on('finish', () => resolve(html));
        writable.on('error', reject);
        pipe(writable);
      },
    });
  });
}

/**
 * Render halaman ke HTML statis + meta-nya (untuk SSG / prerender).
 * Dipanggil oleh scripts/prerender.mjs.
 */
export async function render(path) {
  const html = await renderToStringAsync(
    <StrictMode>
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    </StrictMode>
  );
  const meta = takeMeta();
  return { html, meta };
}
