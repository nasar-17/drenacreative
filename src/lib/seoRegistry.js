/* Registry meta untuk prerender (SSG).
   Selama renderToString, setiap halaman mendaftarkan meta-nya via registerMeta().
   scripts/prerender.mjs membaca via takeMeta() untuk membangun <head> statis. */
let pendingMeta = null;

export function registerMeta(meta) {
  pendingMeta = meta;
}

export function takeMeta() {
  const meta = pendingMeta;
  pendingMeta = null;
  return meta;
}
