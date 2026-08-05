import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp/FloatingWhatsApp';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { useScrollReveal } from './hooks/useScrollReveal';
import { Home } from './pages/Home/Home';
import { LayananWebsite } from './pages/LayananWebsite/LayananWebsite';
import { LayananAIContentBranding } from './pages/LayananAIContentBranding/LayananAIContentBranding';
import { LayananAplikasi } from './pages/LayananAplikasi/LayananAplikasi';
import { Produk } from './pages/Produk/Produk';
import './App.css';

function App() {
  // Initialize scroll animations globally
  useScrollReveal();

  return (
    <>
      {/* Scroll reset + hash navigation on every route change */}
      <ScrollToTop />

      {/* Persistent UI (rendered on all pages) */}
      <Navbar />
      <FloatingWhatsApp />

      {/* Page routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/layanan-website" element={<LayananWebsite />} />
        <Route path="/layanan-ai-content-branding" element={<LayananAIContentBranding />} />
        <Route path="/layanan-aplikasi" element={<LayananAplikasi />} />
        <Route path="/produk" element={<Produk />} />
      </Routes>
    </>
  );
}

export default App;
