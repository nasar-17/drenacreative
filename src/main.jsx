import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

const rootEl = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Jika HTML sudah berisi konten hasil prerender (SSG) → hydrate.
// Jika tidak (mis. fallback kosong) → render biasa.
if (rootEl && rootEl.childElementCount > 0) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}

// Service worker — hanya aktif di production (hindari cache saat dev)
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {})
  })
}
