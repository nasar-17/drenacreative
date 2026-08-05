import { motion } from 'framer-motion';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Process } from '../../components/Process/Process';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { SEO } from '../../components/SEO/SEO';
import { FAQ } from '../../components/FAQ/FAQ';

import { portfolioItems, categoryColor, categoryImage, testimonials } from '../../data/siteData';

/* ══════════════════════════════════════════════════════════════════════════
   DATA SECTIONS
   ══════════════════════════════════════════════════════════════════════════ */

// 1. Mengapa Drena
const keunggulan = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: 'Harga Terjangkau',
    description: 'Biaya kompetitif tanpa mengorbankan kualitas. Solusi digital terbaik untuk semua kalangan.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Pengerjaan Cepat',
    description: 'Setiap proyek diselesaikan sesuai deadline yang disepakati. Tidak ada keterlambatan tanpa alasan.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: 'Revisi Sepuasnya',
    description: 'Revisi tidak dibatasi selama proses pengerjaan. Kami bekerja hingga Anda benar-benar puas.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Konsultasi Gratis',
    description: 'Diskusikan kebutuhan sebelum memulai proyek tanpa biaya apapun. Transparan dari awal.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Garansi Bug 30 Hari',
    description: 'Jaminan perbaikan error atau fungsi yang tidak berjalan sesuai kesepakatan selama 30 hari.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Support Responsif',
    description: 'Tim kami siap membantu dengan respons cepat melalui WhatsApp kapanpun Anda membutuhkan.',
  },
];

// 2. Layanan Website
const jenisWebsite = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    tagline: 'Konversi pengunjung menjadi pelanggan',
    description: 'Halaman tunggal yang didesain khusus untuk promosi produk, event, atau bisnis yang baru berdiri.',
    price: 'Mulai Rp799.000',
    features: ['Desain modern & menarik', 'CTA yang jelas dan efektif', 'Integrasi WhatsApp langsung', 'Mobile responsive 100%'],
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    tagline: 'Representasi digital perusahaan Anda',
    description: 'Website profesional untuk membangun kredibilitas perusahaan. Tampilkan profil, layanan, tim, dan pencapaian.',
    price: 'Mulai Rp1.499.000',
    features: ['Desain premium custom', 'Profil tim & portfolio', 'Kontak & peta lokasi', 'SEO dasar'],
  },
  {
    id: 'website-umkm',
    title: 'Website UMKM',
    tagline: 'Go digital untuk usaha Anda',
    description: 'Website terjangkau khusus untuk usaha mikro dan kecil untuk memperluas jangkauan pasar secara online.',
    price: 'Mulai Rp799.000',
    features: ['Profil usaha lengkap', 'Informasi produk & layanan', 'Integrasi WhatsApp order', 'Galeri foto produk'],
  },
  {
    id: 'website-portfolio',
    title: 'Website Portfolio',
    tagline: 'Tampilkan karya terbaik Anda',
    description: 'Website personal yang elegan untuk menampilkan karya, skill, dan pengalaman kepada calon klien.',
    price: 'Mulai Rp799.000',
    features: ['Galeri proyek yang rapi', 'Bio profesional & kontak', 'Link sosial media', 'Desain personal & unik'],
  },
];

// 3. Layanan AI Content Branding
const layananAIContent = [
  {
    id: 'ai-copywriting',
    title: 'AI Copywriting & Strategy',
    description: 'Pembuatan copy iklan, sales letter, dan artikel blog SEO berkualitas tinggi dengan kecerdasan buatan.',
    price: 'Mulai Rp99.000',
    features: ['Optimasi SEO On-page', 'Headline variasi A/B', 'Brand voice tuning'],
  },
  {
    id: 'social-media-generation',
    title: 'Social Media AI Content',
    description: 'Perencanaan konten, caption kreatif, hashtag generator, serta template visual social media otomatis.',
    price: 'Mulai Rp149.000',
    features: ['Kalender konten 30 hari', 'Caption interaktif', 'Template visual Canva/Figma'],
  },
  {
    id: 'ai-visual-generation',
    title: 'AI Visual & Imagery',
    description: 'Generasi gambar visual kreatif, ilustrasi produk, background art, hingga aset grafis Ultra HD.',
    price: 'Mulai Rp199.000',
    features: ['Resolusi ultra tinggi', 'Kustomisasi style visual', 'Bebas lisensi komersial'],
  },
];

// 4. Layanan Aplikasi
const layananAplikasi = [
  {
    id: 'web-app',
    title: 'Web Application',
    description: 'Aplikasi berbasis web modern untuk otomasi proses bisnis, portal internal, dashboard manajemen, dll.',
    price: 'Mulai Rp2.999.000',
    features: ['React / Next.js / Vue', 'API integrations', 'Database & Backend', 'Garansi bug 30 hari'],
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application',
    description: 'Pembuatan aplikasi mobile cross-platform Android & iOS dengan desain elegan dan performa tinggi.',
    price: 'Mulai Rp4.999.000',
    features: ['Flutter / React Native', 'Play Store & App Store upload', 'Push notifications', 'Integrasi GPS & Camera'],
  },
  {
    id: 'saas-mvp',
    title: 'SaaS MVP Development',
    description: 'Validasi ide startup Anda dengan cepat menggunakan Minimum Viable Product (MVP) tangguh siap uji.',
    price: 'Mulai Rp6.999.000',
    features: ['Sistem otentikasi & user role', 'Integrasi payment gateway', 'Subscription management', 'Skalabilitas cloud ready'],
  },
];

// 5. Produk Kami (SaaS)
const PRODUCTS = [
  {
    id: 'promtara',
    title: 'Promtara',
    tagline: 'Database Migration & Schema Optimizer',
    category: 'saas',
    status: 'Production',
    description: 'Platform automasi migrasi database, optimasi schema, dan query analyzer yang dirancang untuk membantu tim developer mempercepat deployment dan meminimalkan downtime.',
    features: [
      'Automated schema diffing & migration',
      'AI-powered query performance optimizer',
      'Multi-dialect SQL support (PG, MySQL)',
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    demoUrl: 'https://promtara.com',
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75" />
      </svg>
    ),
  },
  {
    id: 'drena-crm',
    title: 'Drena CRM',
    tagline: 'Smart Customer Relationship Management',
    category: 'saas',
    status: 'Beta',
    description: 'Solusi manajemen hubungan pelanggan pintar untuk melacak leads, mengelola pipeline penjualan, dan mengotomasi follow-up pelanggan via WhatsApp & Email.',
    features: [
      'Visual sales pipeline drag-and-drop',
      'Official WhatsApp API integration',
      'Automated marketing campaigns',
    ],
    techStack: ['Next.js', 'NestJS', 'MongoDB', 'Redis'],
    demoUrl: 'https://crm.drenacreative.com',
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21" />
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
    ],
    techStack: ['Vite', 'Svelte', 'Go', 'SQLite'],
    demoUrl: 'https://billing.drenacreative.com',
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6" />
      </svg>
    ),
  },
];

// 6 & 7. Portfolio & Testimoni — diimpor dari src/data/siteData.js
// (data klien asli, bukan placeholder — lihat catatan di file tersebut)

// 8. FAQ
const homeFAQ = [
  {
    question: 'Apa saja layanan utama yang ditawarkan Drena Creative?',
    answer: 'Kami menyediakan tiga layanan utama: Jasa Pembuatan Website (Landing Page, Company Profile, UMKM, Portfolio), Layanan AI Content Branding (Copywriting AI, Media Sosial AI, Generasi Visual AI), dan Pembuatan Aplikasi (Web App, Mobile App Android & iOS, SaaS MVP).',
  },
  {
    question: 'Bagaimana proses pengerjaan proyek digital?',
    answer: 'Kami memulai dengan Konsultasi awal & Brief, dilanjutkan pembuatan UI/UX Mockup di Figma. Setelah disetujui, kami masuk ke tahap Development & Coding, disusul Testing intensif sebelum akhirnya go-live / serah terima.',
  },
  {
    question: 'Apakah ada garansi setelah proyek selesai?',
    answer: 'Tentu. Setiap proyek mendapatkan garansi perbaikan bug dan error selama 30 hari secara gratis setelah serah terima proyek dilakukan.',
  },
  {
    question: 'Apakah source code sepenuhnya menjadi hak milik saya?',
    answer: 'Ya, seluruh source code aplikasi atau aset konten yang kami kembangkan akan diserahkan sepenuhnya ke pihak Anda setelah seluruh pembayaran diselesaikan.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export function Home() {
  return (
    <>
      <SEO
        title="Drena Creative — Solusi Website, AI Branding & Aplikasi"
        description="Drena Creative menghadirkan solusi teknologi mutakhir: pembuatan website profesional, AI content branding, serta pengembangan aplikasi web & mobile kustom."
        jsonLd={[
          {
            id: 'faq-jsonld',
            data: {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: homeFAQ.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          },
          ...PRODUCTS.map((product) => ({
            id: `product-${product.id}`,
            data: {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: product.title,
              description: product.description,
              url: product.demoUrl,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
            },
          })),
        ]}
      />

      {/* ── 1. Section: Hero ── */}
      <div id="hero">
        <Hero />
      </div>

      {/* ── 2. Section: About ── */}
      <div id="about">
        <About />
      </div>

      {/* ── 2b. Section: Proses (target anchor #proses) ── */}
      <Process />

      {/* ── 3. Section: Mengapa Drena ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300 border-t border-neutral-100 dark:border-white/5" id="mengapa-drena">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Keunggulan Kami"
              title="Kualitas Terpercaya, Hasil Presisi"
              subtitle="Komitmen kami adalah menghadirkan solusi digital berkualitas premium dengan transparansi, kecepatan pengerjaan, dan support andalan."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {keunggulan.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 flex gap-4 items-start transition-all duration-400 group hover:shadow-[0_8px_32px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-xl bg-primary-50 dark:bg-primary/10 text-primary dark:text-primary-300 border border-primary-100 dark:border-primary/30 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:border-primary dark:group-hover:bg-primary dark:group-hover:text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading text-base font-bold text-primary-800 dark:text-white mb-2 tracking-[-0.01em] transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-xs font-normal text-neutral-600 dark:text-neutral-300 leading-[1.75] transition-colors duration-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Section: Layanan Website ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-20 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300" id="layanan-website">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Jasa Website"
            title="Layanan Pembuatan Website Profesional"
            subtitle="Kami membangun website responsif, cepat, elegan, dan dioptimasi penuh untuk konversi serta SEO."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
            {jenisWebsite.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white dark:bg-primary-900 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-[0_8px_30px_rgba(53,88,114,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="font-body text-[11px] font-bold text-primary dark:text-primary-400 tracking-wide uppercase mb-3">{service.tagline}</p>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="h-[1px] bg-neutral-100 dark:bg-white/10 my-4" />
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-body text-[11px] text-neutral-600 dark:text-neutral-300">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <div className="font-heading text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1">Estimasi</div>
                  <div className="font-heading text-base font-bold text-primary dark:text-primary-400">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Section: Layanan AI Content Branding ── */}
      <section className="bg-white dark:bg-primary-950 py-20 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300" id="layanan-ai-content-branding">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="AI Content"
            title="Layanan AI Content Branding"
            subtitle="Kombinasi optimal generative AI dengan kurasi kreatif manual untuk melipatgandakan produktivitas kampanye pemasaran Anda."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
            {layananAIContent.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-neutral-50 dark:bg-primary-900 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-[0_8px_30px_rgba(53,88,114,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-800 dark:text-white mb-3">{service.title}</h3>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="h-[1px] bg-neutral-200/50 dark:bg-white/10 my-4" />
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-body text-[11px] text-neutral-600 dark:text-neutral-300">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1">Estimasi</div>
                  <div className="font-heading text-base font-bold text-primary dark:text-primary-400">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Section: Layanan Aplikasi ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-20 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300" id="layanan-aplikasi">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Custom Software"
            title="Layanan Pembuatan Aplikasi"
            subtitle="Kami membangun aplikasi web, mobile apps Android & iOS, SaaS MVP, dan backend API yang solid untuk solusi bisnis kustom Anda."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16">
            {layananAplikasi.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white dark:bg-primary-900 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-[0_8px_30px_rgba(53,88,114,0.04)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-heading text-lg font-bold text-primary-800 dark:text-white mb-3">{service.title}</h3>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">{service.description}</p>
                  
                  <div className="h-[1px] bg-neutral-100 dark:bg-white/10 my-4" />
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-body text-[11px] text-neutral-600 dark:text-neutral-300">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1">Estimasi</div>
                  <div className="font-heading text-base font-bold text-primary dark:text-primary-400">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Section: Produk Kami ── */}
      <section className="bg-white dark:bg-primary-950 py-20 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300" id="produk-kami">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Karya SaaS"
            title="Produk Inovatif Kami"
            subtitle="Software andalan kami yang dibangun mandiri untuk menyelesaikan kendala database, CRM, dan sistem billing UMKM."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
            {PRODUCTS.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-50 dark:bg-primary-900 rounded-3xl border border-neutral-100 dark:border-white/5 shadow-md flex flex-col justify-between overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-primary-800 flex items-center justify-center shadow-sm">
                      {product.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-heading font-bold tracking-wider uppercase bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400">
                      {product.status}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-neutral-800 dark:text-white mb-1">{product.title}</h3>
                  <p className="font-body text-[10px] font-medium text-primary dark:text-primary-400 uppercase tracking-wider mb-3">{product.tagline}</p>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">{product.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {product.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 font-body text-xs text-neutral-600 dark:text-neutral-300">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {product.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 bg-white dark:bg-primary-800 text-neutral-600 dark:text-neutral-300 font-body text-[10px] rounded border border-neutral-100 dark:border-white/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-8 py-4 bg-neutral-100/50 dark:bg-primary-950/40 border-t border-neutral-200/20 dark:border-white/5 flex items-center justify-between">
                  <span className="font-body text-[11px] text-neutral-600">Tersedia demo</span>
                  <a href={product.demoUrl} target="_blank" rel="noopener noreferrer" className="font-heading text-[11px] font-bold text-primary dark:text-primary-400 flex items-center gap-1">
                    Kunjungi Demo →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Section: Karya Kami ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300 border-t border-neutral-100 dark:border-white/5" id="karya-kami">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Portfolio"
              title="Karya Terbaik Kami"
              subtitle="Kumpulan beberapa proyek terpilih yang telah kami bangun dan rilis secara komersial untuk klien kami."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={item.id}
                className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 flex flex-col gap-4 transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50 overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <span className={`self-start font-heading text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-md ${categoryColor[item.category]}`}>
                  {item.category}
                </span>
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-neutral-100 dark:border-white/10">
                  <img
                    src={categoryImage[item.category]}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="675"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="grow">
                  <h3 className="font-heading text-base font-bold text-primary-800 dark:text-white mb-1.5 tracking-[-0.01em]">{item.title}</h3>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-[1.7]">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-heading text-[9px] font-semibold tracking-[0.08em] px-2 py-0.5 bg-neutral-50 dark:bg-primary-900 text-neutral-600 dark:text-neutral-300 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-heading text-[11px] font-bold text-primary dark:text-primary-400 no-underline hover:text-primary-600 dark:hover:text-white transition-colors duration-200"
                  >
                    Lihat Proyek
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Section: Kata Mereka ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300 border-t border-neutral-100 dark:border-white/5" id="kata-mereka">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Testimoni"
              title="Kata Mereka tentang Drena"
              subtitle="Inilah pengalaman langsung yang dirasakan oleh klien setelah bekerja sama membangun solusi digital bersama kami."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 lg:p-8 flex flex-col gap-5 transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none" className="shrink-0">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="font-body text-sm font-normal text-neutral-600 dark:text-neutral-300 leading-[1.75] grow italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-white/10">
                  <div className="w-10 h-10 rounded-full bg-primary-800 dark:bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading text-xs font-bold text-white tracking-[0.05em]">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary-800 dark:text-white">{t.name}</p>
                    <p className="font-body text-xs text-neutral-600 dark:text-neutral-300">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Section: FAQ ── */}
      <div id="faq">
        <FAQ
          title="Pertanyaan Umum"
          subtitle="Jawaban atas pertanyaan yang paling sering kami terima dari klien."
          items={homeFAQ}
        />
      </div>

      {/* ── 11. Section: Kontak ── */}
      <div id="kontak">
        <Contact
          ctaTitle={<>Mulai Proyek <br /> Anda Sekarang</>}
          ctaSubtitle="Konsultasikan kebutuhan Anda sekarang. Kami siap membantu pembuatan website, AI content branding, maupun aplikasi dengan proses cepat dan biaya terjangkau."
          ctaButton="KONSULTASI GRATIS"
          waMessage="Halo Drena Creative, saya ingin berkonsultasi mengenai solusi digital untuk bisnis saya."
        />
      </div>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}
