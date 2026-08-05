import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Navbar } from './components/Navbar/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Home } from './pages/Home/Home';
import './App.css';

// Route-level code splitting — halaman layanan hanya dimuat saat dikunjungi
const LayananWebsite = lazy(() => import('./pages/LayananWebsite/LayananWebsite').then((m) => ({ default: m.LayananWebsite })));
const LayananDesign = lazy(() => import('./pages/LayananDesign/LayananDesign').then((m) => ({ default: m.LayananDesign })));
const LayananAplikasi = lazy(() => import('./pages/LayananAplikasi/LayananAplikasi').then((m) => ({ default: m.LayananAplikasi })));
const LayananAIContentBranding = lazy(() => import('./pages/LayananAIContentBranding/LayananAIContentBranding').then((m) => ({ default: m.LayananAIContentBranding })));
const Produk = lazy(() => import('./pages/Produk/Produk').then((m) => ({ default: m.Produk })));
const Tentang = lazy(() => import('./pages/Tentang/Tentang').then((m) => ({ default: m.Tentang })));
const Privacy = lazy(() => import('./pages/Privacy/Privacy').then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import('./pages/Terms/Terms').then((m) => ({ default: m.Terms })));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-primary-200 border-t-primary-800 dark:border-primary-800 dark:border-t-tertiary-300 rounded-full animate-spin" role="status" aria-label="Memuat halaman" />
    </div>
  );
}

function App() {
  // Initialize scroll animations globally
  useScrollReveal();

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />

      {/* Skip navigation for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-bold"
      >
        Lewati ke konten utama
      </a>

      {/* Persistent UI (rendered on all pages) */}
      <Navbar />
      <FloatingWhatsApp />

      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/layanan-website" element={<LayananWebsite />} />
            <Route path="/layanan-design" element={<LayananDesign />} />
            <Route path="/layanan-aplikasi" element={<LayananAplikasi />} />
            <Route path="/layanan-ai-content-branding" element={<LayananAIContentBranding />} />
            <Route path="/produk" element={<Produk />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </MotionConfig>
  );
}

export default App;
