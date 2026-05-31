import { motion } from 'framer-motion';

/* ══════════════════════════════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════════════════════════════ */
const packages = [
  {
    id: 'custom',
    name: 'Drena Custom Web',
    price: 'Mulai Rp75.000',
    description:
      'Cocok untuk website personal, hadiah, kenangan, dan kebutuhan sederhana.',
    badge: null,
    featured: false,
    waMessage: 'Halo, saya tertarik dengan paket Drena Custom Web. Bisa info lebih lanjut?',
    features: [
      '1 halaman website custom',
      'Desain sesuai tema yang diinginkan',
      'Galeri foto dan video',
      'Musik latar (opsional)',
      'Animasi sederhana',
      'Tombol WhatsApp atau media sosial',
      'Mobile responsive',
      'Pengerjaan 1–3 hari',
      'Revisi sepuasnya selama pengerjaan',
      'Garansi bug 30 hari',
    ],
    forList: [
      'Website anniversary',
      'Website ulang tahun',
      'Surat cinta digital',
      'Website wisuda',
      'Website kenangan bersama',
      'Website hadiah spesial',
      'Portfolio sederhana',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    id: 'starter',
    name: 'Drena Starter Web',
    price: 'Mulai Rp799.000',
    description:
      'Cocok untuk UMKM, toko lokal, dan personal brand.',
    badge: null,
    featured: false,
    waMessage: 'Halo, saya tertarik dengan paket Drena Starter Web. Bisa info lebih lanjut?',
    features: [
      'Landing page profesional',
      'Hingga 5 section',
      'Desain modern dan responsif',
      'Integrasi WhatsApp',
      'Form kontak',
      'Optimasi kecepatan dasar',
      'SSL gratis',
      'Setup domain dan hosting',
      'Revisi sepuasnya selama pengerjaan',
      'Garansi bug 30 hari',
    ],
    forList: [
      'Coffee shop',
      'Restoran',
      'Barbershop',
      'Salon',
      'Gym',
      'Jasa fotografi',
      'Freelancer',
      'Dokter praktik',
      'Agen properti',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'business',
    name: 'Drena Business Web',
    price: 'Mulai Rp1.499.000',
    description:
      'Cocok untuk bisnis yang ingin meningkatkan kredibilitas dan mendapatkan lebih banyak pelanggan.',
    badge: 'Paling Populer',
    featured: true,
    waMessage: 'Halo, saya tertarik dengan paket Drena Business Web. Bisa info lebih lanjut?',
    features: [
      'Hingga 5 halaman',
      'Desain premium custom',
      'Mobile responsive',
      'Integrasi WhatsApp',
      'Form lead generation',
      'SEO dasar',
      'Google Maps',
      'Setup domain dan hosting',
      'Revisi sepuasnya selama pengerjaan',
      'Garansi bug 30 hari',
    ],
    forList: [
      'Company profile',
      'Kontraktor',
      'Developer properti',
      'Digital marketing agency',
      'Lembaga kursus',
      'Kantor hukum',
      'Konsultan bisnis',
      'Klinik kesehatan',
      'Jasa profesional',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'professional',
    name: 'Drena Professional Web',
    price: 'Mulai Rp2.999.000',
    description:
      'Cocok untuk perusahaan, agency, startup, dan bisnis yang membutuhkan website lebih lengkap.',
    badge: null,
    featured: false,
    waMessage: 'Halo, saya tertarik dengan paket Drena Professional Web. Bisa info lebih lanjut?',
    features: [
      'Hingga 10 halaman',
      'UI/UX premium',
      'CMS untuk edit konten sendiri',
      'Blog atau artikel',
      'Optimasi SEO On-Page',
      'Google Analytics',
      'Form custom',
      'Prioritas support',
      'Optimasi performa website',
      'Revisi sepuasnya selama pengerjaan',
      'Garansi bug 30 hari',
    ],
    forList: [
      'Startup',
      'Perusahaan menengah dan besar',
      'Katalog produk online',
      'Sekolah dan institusi pendidikan',
      'Hotel dan penginapan',
      'Manufaktur',
      'Portal informasi',
      'Website berita',
      'Bisnis multi cabang',
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   CHECK ICON (reused inline)
   ══════════════════════════════════════════════════════════════════════════ */
function CheckIcon({ featured }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 mt-[2px] ${featured ? 'text-white/80' : 'text-primary dark:text-primary-300'}`}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   DOT ICON (for "Cocok Untuk" list)
   ══════════════════════════════════════════════════════════════════════════ */
function DotIcon({ featured }) {
  return (
    <span
      className={`shrink-0 w-[5px] h-[5px] rounded-full mt-[6px] ${featured ? 'bg-white/50' : 'bg-primary-300 dark:bg-primary-500'}`}
    />
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   CARD VARIANTS — mirrors Services.jsx animation pattern
   ══════════════════════════════════════════════════════════════════════════ */
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom * 0.15,
    },
  }),
};

/* ══════════════════════════════════════════════════════════════════════════
   PRICING CARD
   ══════════════════════════════════════════════════════════════════════════ */
function PricingCard({ pkg, index }) {
  const { featured, badge, name, price, description, features, forList, icon, waMessage } = pkg;
  const waLink = `https://wa.me/6288242328927?text=${encodeURIComponent(waMessage)}`;

  /* Featured card — inverted dark (primary-800 bg), non-featured — standard white card */
  if (featured) {
    return (
      <motion.div
        className="relative flex flex-col bg-primary-800 dark:bg-primary-700 rounded-xl p-6 lg:p-8 border border-primary-700 dark:border-primary-600 shadow-[0_20px_60px_rgba(53,88,114,0.25)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-400 group hover:shadow-[0_28px_70px_rgba(53,88,114,0.35)] dark:hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] hover:-translate-y-2 overflow-hidden"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        custom={index}
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(156,213,255,0.12),transparent_60%)] pointer-events-none" />

        {/* Badge */}
        {badge && (
          <span className="self-start mb-5 inline-flex items-center gap-1.5 font-heading text-[10px] font-bold tracking-[0.12em] text-primary-800 bg-tertiary-200 dark:bg-tertiary-300 px-3 py-1 uppercase relative z-10">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            {badge}
          </span>
        )}

        {/* Icon */}
        <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl bg-white/10 text-white mb-6 relative z-10 transition-colors duration-300 group-hover:bg-white/20">
          {icon}
        </div>

        {/* Name */}
        <h3 className="font-heading text-xl font-bold text-white mb-2 tracking-[-0.01em] relative z-10">
          {name}
        </h3>

        {/* Price */}
        <p className="font-heading text-2xl lg:text-3xl font-bold text-tertiary-200 dark:text-tertiary-300 mb-3 tracking-[-0.02em] relative z-10">
          {price}
        </p>

        {/* Description */}
        <p className="font-body text-sm font-normal text-white/70 leading-[1.7] mb-6 relative z-10">
          {description}
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-white/15 w-full mb-5 relative z-10" />

        {/* Features */}
        <ul className="flex flex-col gap-2.5 mb-5 relative z-10 grow">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckIcon featured />
              <span className="font-body text-xs text-white/80 leading-[1.7]">{f}</span>
            </li>
          ))}
        </ul>

        {/* Cocok Untuk */}
        <div className="mb-6 relative z-10">
          <p className="font-heading text-[10px] font-bold text-white/40 tracking-[0.12em] uppercase mb-2">
            Cocok Untuk
          </p>
          <ul className="flex flex-col gap-1.5">
            {forList.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <DotIcon featured />
                <span className="font-body text-xs text-white/60 leading-[1.6]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 mt-auto inline-flex items-center justify-center gap-2 font-heading text-xs font-bold tracking-[0.08em] py-[14px] px-6 bg-white text-primary-800 no-underline transition-all duration-300 hover:bg-primary-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-[1px] group/cta"
        >
          <span>Pesan Sekarang</span>
          <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    );
  }

  /* Standard card */
  return (
    <motion.div
      className="relative flex flex-col bg-white dark:bg-primary-950 rounded-xl p-6 lg:p-8 border border-neutral-100 dark:border-white/10 transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50 overflow-hidden"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      custom={index}
    >
      {/* Subtle top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-200 dark:via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Icon */}
      <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl border-[1.5px] border-primary-100 dark:border-primary/30 text-primary dark:text-primary-300 mb-6 transition-colors duration-300 bg-primary-50 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary dark:group-hover:bg-primary dark:group-hover:text-white dark:group-hover:border-primary">
        {icon}
      </div>

      {/* Name */}
      <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-white mb-2 tracking-[-0.01em] transition-colors duration-300">
        {name}
      </h3>

      {/* Price */}
      <p className="font-heading text-2xl lg:text-3xl font-bold text-primary dark:text-primary-300 mb-3 tracking-[-0.02em] transition-colors duration-300">
        {price}
      </p>

      {/* Description */}
      <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] mb-6 transition-colors duration-300">
        {description}
      </p>

      {/* Divider */}
      <div className="h-[1px] bg-[rgba(53,88,114,0.08)] dark:bg-white/10 w-full mb-5 transition-colors duration-300" />

      {/* Features */}
      <ul className="flex flex-col gap-2.5 mb-5 grow">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5">
            <CheckIcon featured={false} />
            <span className="font-body text-xs text-neutral-600 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">{f}</span>
          </li>
        ))}
      </ul>

      {/* Cocok Untuk */}
      <div className="mb-6">
        <p className="font-heading text-[10px] font-bold text-neutral-400 dark:text-neutral-500 tracking-[0.12em] uppercase mb-2 transition-colors duration-300">
          Cocok Untuk
        </p>
        <ul className="flex flex-col gap-1.5">
          {forList.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <DotIcon featured={false} />
              <span className="font-body text-xs text-neutral-500 dark:text-neutral-400 leading-[1.6] transition-colors duration-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-2 font-heading text-xs font-bold tracking-[0.08em] py-[14px] px-6 bg-transparent text-primary-800 dark:text-primary-100 border-[1.5px] border-neutral-200 dark:border-primary-800 no-underline transition-all duration-300 hover:border-primary dark:hover:border-primary-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 hover:-translate-y-[1px] group/cta"
      >
        <span>Pesan Sekarang</span>
        <svg className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </a>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN EXPORT
   ══════════════════════════════════════════════════════════════════════════ */
export function Pricing() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          PRICING HEADER  (mirrors Services header pattern)
          ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative text-center overflow-hidden bg-white dark:bg-primary-950 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12 lg:pb-16 px-5 md:px-6 lg:px-8 transition-colors duration-300"
        id="paket"
      >
        <motion.div
          className="relative z-10 max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[1.75rem] md:text-[2.25rem] lg:text-[3.5rem] font-bold text-primary-800 dark:text-white tracking-[-0.02em] mb-6 leading-[1.15] transition-colors duration-300">
            Paket Website
          </h2>
          <p className="font-body text-base font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] max-w-[580px] mx-auto transition-colors duration-300">
            Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Semua paket mendapatkan revisi
            sepuasnya selama pengerjaan dan garansi bug selama 30 hari.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          PRICING CARDS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-primary-950 py-8 md:py-12 lg:py-16 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        {/* 4-column grid → 2-col tablet → 1-col mobile */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* ── Disclaimer note ── */}
        <motion.p
          className="max-w-[800px] mx-auto mt-10 md:mt-12 font-body text-xs text-neutral-400 dark:text-neutral-500 leading-[1.8] text-center transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Revisi sepuasnya berlaku selama proses pengerjaan. Garansi bug 30 hari mencakup perbaikan
          error atau fungsi yang tidak berjalan sesuai kesepakatan awal. Penambahan fitur baru di
          luar ruang lingkup proyek tidak termasuk garansi.
        </motion.p>
      </section>
    </>
  );
}
