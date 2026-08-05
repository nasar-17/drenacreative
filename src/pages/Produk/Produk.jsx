import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PageHero } from '../../components/PageHero/PageHero';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SEO } from '../../components/SEO/SEO';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';

import heroBg from '../../assets/hero-bg.png';

/* ══════════════════════════════════════════════════════════════════════════
   PRODUCTS DATA
   ══════════════════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  {
    id: 'promtara',
    title: 'Promtara',
    tagline: 'Database Migration & Schema Optimizer',
    category: 'saas',
    status: 'Production',
    description: 'Platform automasi migrasi database, optimasi schema, dan query analyzer yang dirancang untuk membantu tim developer mempercepat deployment dan meminimalkan downtime.',
    features: [
      'Automated schema diffing & migration generation',
      'AI-powered query performance optimizer',
      'Multi-dialect SQL support (PostgreSQL, MySQL, SQLite)',
      'CI/CD integrations (GitHub Actions, GitLab CI)',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'OpenAI API'],
    demoUrl: 'https://promtara.com',
    primaryColor: 'from-blue-600 to-indigo-600',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V10.125M3.75 10.312v3.75m16.5-3.75v3.75m-16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75m16.5 0v3.75m-16.5 0v3.75C3.75 19.347 7.444 21 12 21s8.25-1.653 8.25-3.75v-3.75" />
      </svg>
    ),
  },
  {
    id: 'drena-crm',
    title: 'Drena CRM',
    tagline: 'Smart Customer Relationship Management',
    category: 'saas',
    status: 'Beta',
    description: 'Solusi manajemen hubungan pelanggan pintar untuk melacak leads, mengelola pipeline penjualan, dan mengotomasi follow-up pelanggan via WhatsApp & Email secara instan.',
    features: [
      'Visual sales pipeline drag-and-drop',
      'Official WhatsApp API integration',
      'Automated email marketing campaigns',
      'Detailed analytics & revenue forecasting',
    ],
    techStack: ['Next.js', 'NestJS', 'MongoDB', 'Redis', 'Tailwind CSS'],
    demoUrl: 'https://crm.drenacreative.com',
    primaryColor: 'from-emerald-500 to-teal-600',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    id: 'drena-billing',
    title: 'Drena Billing',
    tagline: 'Instant Invoicing & Cashier System',
    category: 'tools',
    status: 'Production',
    description: 'Sistem billing dan kasir digital super cepat untuk UMKM. Kelola inventaris, rekap transaksi, cetak struk thermal, dan kirim invoice digital dalam hitungan detik.',
    features: [
      'Real-time inventory management',
      'Dynamic PDF invoice builder',
      'QRIS and multiple payment gateways',
      'Offline-first support with sync',
    ],
    techStack: ['Vite', 'Svelte', 'Go', 'SQLite', 'Tailwind CSS'],
    demoUrl: 'https://billing.drenacreative.com',
    primaryColor: 'from-amber-500 to-orange-600',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
  },
];

const CATEGORIES = [
  { value: 'all', label: 'Semua Produk' },
  { value: 'saas', label: 'SaaS Platform' },
  { value: 'tools', label: 'Developer & Business Tools' },
];

export function Produk() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = PRODUCTS.filter(
    (product) => activeFilter === 'all' || product.category === activeFilter
  );

  return (
    <>
      <SEO
        title="Produk & Aplikasi SaaS Kami — Drena Creative"
        description="Jelajahi produk digital inovatif dan aplikasi SaaS yang telah dikembangkan oleh Drena Creative. Dari sistem database migrasi hingga manajemen pelanggan pintar."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Produk Kami"
        title="Karya Digital & Aplikasi SaaS Kami"
        subtitle="Kami merancang dan membangun platform software mandiri untuk memecahkan masalah nyata, mengoptimalkan proses bisnis, dan meningkatkan efisiensi operasional."
        ctaLabel="Konsultasi Produk"
        bgImage={heroBg}
      />

      {/* ── 2. Filters & Products Grid ── */}
      <section className="bg-neutral-50 dark:bg-primary-950 py-20 px-5 md:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          {/* Section Header */}
          <SectionHeader
            eyebrow="Katalog SaaS"
            title="Temukan Solusi yang Tepat untuk Bisnis Anda"
            align="center"
          />

          {/* Interactive Filters */}
          <div className="flex justify-center flex-wrap gap-3 mt-10 mb-16">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-6 py-2.5 rounded-full font-heading text-xs font-semibold tracking-wide transition-all duration-300 ${
                  activeFilter === cat.value
                    ? 'bg-primary dark:bg-primary-400 text-white dark:text-primary-950 shadow-md scale-105'
                    : 'bg-white dark:bg-primary-900/60 text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-primary-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white dark:bg-primary-900 rounded-3xl border border-neutral-100 dark:border-white/5 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="p-8 md:p-10">
                    {/* Upper Row: Icon & Status */}
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-primary-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {product.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-[10px] font-heading font-bold tracking-wider uppercase ${
                          product.status === 'Production'
                            ? 'bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400'
                            : 'bg-amber-100 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="font-heading text-2xl font-bold text-neutral-800 dark:text-white mb-1 transition-colors duration-200">
                      {product.title}
                    </h3>
                    <p className="font-body text-xs font-medium text-primary dark:text-primary-400 mb-4 tracking-wide uppercase">
                      {product.tagline}
                    </p>

                    {/* Description */}
                    <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                      {product.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-heading text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-3">
                        Fitur Utama
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2.5 font-body text-sm text-neutral-600 dark:text-neutral-300">
                            <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div>
                      <h4 className="font-heading text-xs font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-neutral-100 dark:bg-primary-800 text-neutral-600 dark:text-neutral-300 font-body text-xs rounded-lg border border-neutral-200/40 dark:border-white/5"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="px-8 py-5 md:px-10 md:py-6 bg-neutral-50 dark:bg-primary-950/40 border-t border-neutral-100 dark:border-white/5 flex items-center justify-between">
                    <span className="font-body text-xs text-neutral-400 dark:text-neutral-500">
                      Ingin coba versi demo?
                    </span>
                    <a
                      href={product.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-heading text-xs font-semibold text-primary dark:text-primary-400 hover:text-primary-600 dark:hover:text-white transition-colors duration-200 group/link"
                    >
                      Kunjungi Demo
                      <svg className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── 3. Technology Capabilities Section ── */}
      <section className="bg-white dark:bg-primary-900/40 py-20 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-heading text-xs font-bold text-primary dark:text-primary-400 tracking-[0.15em] uppercase block mb-4">
              Kapabilitas Pengembangan
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-800 dark:text-white leading-tight mb-6">
              Arsitektur Modern untuk Kebutuhan Skala Besar
            </h2>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              Semua produk SaaS kami dirancang menggunakan best practices arsitektur cloud, kontainerisasi, database teroptimasi, serta frontend responsif untuk memastikan kecepatan loading maksimal, keamanan data terjamin, dan kemudahan skalabilitas seiring bertumbuhnya bisnis Anda.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h5 className="font-heading text-sm font-semibold text-neutral-800 dark:text-white mb-2">Keamanan Utama</h5>
                <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Implementasi token-based auth, HTTPS SSL, enkripsi database, dan proteksi dari serangan siber umum.
                </p>
              </div>
              <div>
                <h5 className="font-heading text-sm font-semibold text-neutral-800 dark:text-white mb-2">Kecepatan Tinggi</h5>
                <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  Caching server, query database terindeks, dan asset delivery CDN terdistribusi.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-neutral-50 dark:bg-primary-950 p-8 rounded-3xl border border-neutral-100 dark:border-white/5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-bold text-neutral-800 dark:text-white mb-6">
              Ingin Membuat Produk SaaS Kustom Sendiri?
            </h4>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              Punya ide produk startup atau aplikasi internal perusahaan? Tim kami siap mendesain, membangun, dan merilis aplikasi web SaaS Anda dari nol dengan teknologi mutakhir.
            </p>
            <a
              href="#kontak"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary dark:bg-primary-400 text-white dark:text-primary-950 font-heading text-xs font-semibold rounded-xl hover:bg-primary-600 dark:hover:bg-primary-300 transition-all duration-300"
            >
              Hubungi Kami Sekarang
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 4. Contact & Footer ── */}
      <Contact />
      <Footer />
    </>
  );
}
