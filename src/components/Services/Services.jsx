import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
      }
    })
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════════════════════════
          LAYANAN / SERVICES HEADER
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative text-center overflow-hidden bg-white dark:bg-primary-950 pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12 lg:pb-16 px-5 md:px-6 lg:px-8 transition-colors duration-300" id="layanan">
        <div className="absolute inset-0 z-0 opacity-35 dark:opacity-20 transition-opacity duration-300">
        </div>
        <motion.div
          className="relative z-10 max-w-[700px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[1.75rem] md:text-[2.25rem] lg:text-[3.5rem] font-bold text-primary-800 dark:text-white tracking-[-0.02em] mb-6 leading-[1.15] transition-colors duration-300">Layanan Utama Kami</h2>
          <p className="font-body text-base font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] max-w-[560px] mx-auto transition-colors duration-300">
            Kami menyediakan layanan pembuatan website, AI content branding, dan pembuatan aplikasi dengan proses cepat, hasil profesional, dan biaya terjangkau.
          </p>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICE CARDS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="bg-white dark:bg-primary-950 py-8 md:py-12 lg:py-16 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 — Pembuatan Web */}
          <motion.div
            className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 lg:p-8 xl:p-10 flex flex-col transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={0}
          >
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl border-[1.5px] border-primary-100 dark:border-primary/30 text-primary dark:text-primary-300 mb-8 transition-colors duration-300 bg-primary-50 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary dark:group-hover:bg-primary dark:group-hover:text-white dark:group-hover:border-primary">
              {/* Web / Monitor icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary-800 dark:text-white mb-4 tracking-[-0.01em] transition-colors duration-300">Pembuatan Web</h3>
            <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-[1.75] mb-8 grow transition-colors duration-300">
              Membantu Anda memiliki website profesional sesuai kebutuhan, baik untuk bisnis, portofolio, maupun keperluan pribadi.
              Proses cepat, tampilan modern, dan siap digunakan.
            </p>
            <Link to="/layanan-website" className="inline-flex items-center gap-2 font-heading text-sm font-medium text-primary-800 dark:text-primary-300 no-underline transition-colors duration-300 mt-auto hover:text-primary dark:hover:text-primary-100 group/link">
              <span>Lihat Detail</span>
              <svg className="transition-transform duration-300 group-hover/link:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 2 — AI Content Branding */}
          <motion.div
            className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 lg:p-8 xl:p-10 flex flex-col transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={1}
          >
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl border-[1.5px] border-primary-100 dark:border-primary/30 text-primary dark:text-primary-300 mb-8 transition-colors duration-300 bg-primary-50 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary dark:group-hover:bg-primary dark:group-hover:text-white dark:group-hover:border-primary">
              {/* AI / Sparkles / Pen Tool icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary-800 dark:text-white mb-4 tracking-[-0.01em] transition-colors duration-300">AI Content Branding</h3>
            <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-[1.75] mb-8 grow transition-colors duration-300">
              Membantu membuat konten copywriting, visual/gambar kustom, dan setup brand voice model bertenaga AI untuk memperkuat identitas brand Anda.
            </p>
            <Link to="/layanan-ai-content-branding" className="inline-flex items-center gap-2 font-heading text-sm font-medium text-primary-800 dark:text-primary-300 no-underline transition-colors duration-300 mt-auto hover:text-primary dark:hover:text-primary-100 group/link">
              <span>Lihat Detail</span>
              <svg className="transition-transform duration-300 group-hover/link:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Card 3 — Pembuatan Aplikasi */}
          <motion.div
            className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 lg:p-8 xl:p-10 flex flex-col transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            custom={2}
          >
            <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl border-[1.5px] border-primary-100 dark:border-primary/30 text-primary dark:text-primary-300 mb-8 transition-colors duration-300 bg-primary-50 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary dark:group-hover:bg-primary dark:group-hover:text-white dark:group-hover:border-primary">
              {/* App Development / Code Icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="font-heading text-2xl font-bold text-primary-800 dark:text-white mb-4 tracking-[-0.01em] transition-colors duration-300">Pembuatan Aplikasi</h3>
            <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-[1.75] mb-8 grow transition-colors duration-300">
              Mengembangkan aplikasi web kustom, mobile apps Android & iOS, SaaS MVP, dan sistem backend API yang cepat, aman, dan mudah diskalakan.
            </p>
            <Link to="/layanan-aplikasi" className="inline-flex items-center gap-2 font-heading text-sm font-medium text-primary-800 dark:text-primary-300 no-underline transition-colors duration-300 mt-auto hover:text-primary dark:hover:text-primary-100 group/link">
              <span>Lihat Detail</span>
              <svg className="transition-transform duration-300 group-hover/link:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
