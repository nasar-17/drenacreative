import { motion } from 'framer-motion';
import { PageHero } from '../../components/PageHero/PageHero';
import { Workflow } from '../../components/Workflow/Workflow';
import { FAQ } from '../../components/FAQ/FAQ';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { SEO } from '../../components/SEO/SEO';

import portfolioTugasImg from '../../assets/portfolio-tugas.png';
import heroTugasImg from '../../assets/hero-tugas.png';

/* ══════════════════════════════════════════════════════════════════════════
   LAYANAN APLIKASI DATA
   ══════════════════════════════════════════════════════════════════════════ */
const layananAplikasi = [
  {
    id: 'web-app',
    title: 'Web Application',
    tagline: 'Aplikasi web interaktif & kaya fitur',
    description: 'Pengembangan aplikasi berbasis web (frontend & backend) modern untuk otomasi proses bisnis, portal portal internal, manajemen inventory, dashboard, dll.',
    price: 'Mulai Rp2.999.000',
    features: ['React / Next.js / Vue', 'API integrations', 'Responsive UI & UX', 'Database (Postgres/MySQL)', 'Garansi bug 30 hari', 'Pengerjaan 1–3 minggu'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'mobile-app',
    title: 'Mobile Application',
    tagline: 'Aplikasi Android & iOS premium',
    description: 'Pembuatan aplikasi mobile cross-platform menggunakan React Native atau Flutter. Desain elegan, performa tinggi, dan siap rilis ke Play Store & App Store.',
    price: 'Mulai Rp4.999.000',
    features: ['Flutter / React Native', 'Play Store & App Store publish', 'Push notifications', 'Integrasi GPS & Kamera', 'Revisi sepuasnya', 'Pengerjaan 2–4 minggu'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    id: 'saas-mvp',
    title: 'SaaS MVP Development',
    tagline: 'Validasi ide startup Anda dengan cepat',
    description: 'Kami bantu bangun Minimum Viable Product (MVP) untuk startup SaaS Anda dengan fitur inti utama agar siap diluncurkan dan diuji ke user dalam waktu singkat.',
    price: 'Mulai Rp6.999.000',
    features: ['Sistem otentikasi & user role', 'Integrasi payment gateway', 'Subscription management', 'Landing page + dashboard', 'Support prioritas', 'Cepat & skalabel'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    id: 'api-backend',
    title: 'API & Backend System',
    tagline: 'Infrastruktur server & database yang solid',
    description: 'Pengembangan backend API kustom yang cepat, aman, dan skalabel untuk mendukung aplikasi web, mobile, atau integrasi sistem pihak ketiga Anda.',
    price: 'Mulai Rp1.999.000',
    features: ['RESTful / GraphQL API', 'Express.js / NestJS / Go', 'Optimasi query database', 'Sistem keamanan (JWT, SSL)', 'Dokumentasi Swagger API', 'Skalabilitas cloud ready'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   WORKFLOW STEPS
   ══════════════════════════════════════════════════════════════════════════ */
const aplikasiWorkflow = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    title: 'Konsultasi & Arsitektur',
    description: 'Diskusikan requirement bisnis, fitur, target user, dan arsitektur database untuk merancang cetak biru aplikasi Anda.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
    title: 'UI/UX & Prototype',
    description: 'Pembuatan desain UI/UX interaktif di Figma. Anda meninjau dan menyetujui alur aplikasi sebelum tim developer mulai coding.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    title: 'Development & Sprint',
    description: 'Proses coding backend, frontend, database integration dengan standar clean-code dan updates berkala untuk Anda pantau.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    title: 'Testing & Launching',
    description: 'Siklus Quality Assurance (QA) ketat, deployment ke server cloud, setup domain SSL, dan aplikasi siap digunakan!',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO APLIKASI DATA
   ══════════════════════════════════════════════════════════════════════════ */
const portfolioAplikasi = [
  { title: 'Sistem Inventory Gudang', type: 'Web Application', desc: 'Aplikasi internal perusahaan ritel.' },
  { title: 'Drena CRM Mobile', type: 'Mobile Application', desc: 'Aplikasi manajemen sales Android/iOS.' },
  { title: 'Promtara Core Engine', type: 'API & Backend System', desc: 'REST API & database migration engine.' },
  { title: 'SaaS Invoice Generator', type: 'SaaS MVP Development', desc: 'Sistem tagihan langganan UMKM.' },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ══════════════════════════════════════════════════════════════════════════ */
const aplikasiFAQ = [
  {
    question: 'Apakah source code sepenuhnya menjadi hak milik saya?',
    answer: 'Ya, seluruh source code aplikasi yang kami kembangkan akan diserahkan sepenuhnya ke repositori Anda (misal GitHub/GitLab) setelah pelunasan proyek selesai dilakukan.',
  },
  {
    question: 'Teknologi / Tech Stack apa yang digunakan?',
    answer: 'Kami merekomendasikan tech stack modern seperti React/Next.js/Node.js untuk performa maksimal, Express/NestJS/Go untuk backend solid, serta PostgreSQL/MongoDB/MySQL untuk database.',
  },
  {
    question: 'Apakah aplikasi akan dibantu di-upload ke Play Store dan App Store?',
    answer: 'Ya, untuk paket Mobile Application sudah termasuk bantuan setup akun developer, persiapan aset toko aplikasi, pengujian build, hingga proses upload/review ke Play Store & App Store.',
  },
  {
    question: 'Bagaimana garansi dan pemeliharaan aplikasi pasca rilis?',
    answer: 'Setiap aplikasi mendapatkan garansi bebas bug selama 30 hari. Kami juga menyediakan paket maintenance bulanan untuk penambahan fitur baru, update library keamanan, dan monitoring server.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export function LayananAplikasi() {
  return (
    <>
      <SEO
        title="Jasa Pembuatan Aplikasi Web & Mobile — Drena Creative"
        description="Jasa pembuatan aplikasi web, mobile Android & iOS, SaaS MVP, dan backend kustom. Hubungi kami untuk konsultasi gratis ide aplikasi Anda."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Layanan Kami"
        title="Layanan Pembuatan Aplikasi"
        subtitle="Dari aplikasi web korporasi hingga mobile apps Android & iOS, kami membangun solusi software berkualitas tinggi, skalabel, dan aman untuk mendukung transformasi digital bisnis Anda."
        ctaLabel="Konsultasi Aplikasi"
        bgImage={heroTugasImg}
      />

      {/* ── 2. About Service ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 min-[900px]:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-heading text-xs font-bold text-primary dark:text-primary-400 tracking-[0.15em] uppercase block mb-4 transition-colors duration-300">Tentang Layanan Ini</span>
            <h2 className="font-heading text-[1.75rem] md:text-4xl font-bold text-primary-800 dark:text-white leading-[1.15] tracking-[-0.02em] mb-6 transition-colors duration-300">
              Aplikasi Tangguh untuk Efisiensi Bisnis Maksimal
            </h2>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 transition-colors duration-300">
              Setiap bisnis memiliki proses unik yang sering kali tidak bisa diakomodasi oleh software instan. Kami hadir untuk mendesain dan mengembangkan aplikasi kustom yang sesuai persis dengan alur kerja organisasi Anda.
            </p>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
              Dengan mengedepankan usability, performa responsif, dan keamanan tingkat tinggi, kami memastikan investasi software Anda memberikan ROI (Return on Investment) maksimal dan siap berkembang bersama bisnis Anda.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { num: '4+', label: 'Solusi Utama' },
              { num: 'Multi', label: 'Platform App' },
              { num: '100%', label: 'Hak Milik Code' },
              { num: '30D', label: 'Bebas Bug Garansi' },
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-50 dark:bg-primary-900 border border-neutral-100 dark:border-white/5 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(53,88,114,0.03)] transition-colors duration-300">
                <span className="font-heading text-[2rem] md:text-[2.5rem] font-bold text-primary dark:text-primary-400 block leading-none mb-2 transition-colors duration-300">{stat.num}</span>
                <span className="font-body text-xs text-neutral-500 dark:text-neutral-400 font-semibold tracking-wide uppercase transition-colors duration-300">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Services Grid ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-20 lg:py-24 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Spesialisasi Kami"
            title="Layanan Pengembangan Aplikasi Kustom"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
            {layananAplikasi.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white dark:bg-primary-900 rounded-2xl p-6 border border-neutral-100 dark:border-white/5 shadow-[0_8px_30px_rgba(53,88,114,0.04)] dark:shadow-none hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-800 flex items-center justify-center text-primary dark:text-primary-300 mb-5 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-primary-800 dark:text-white mb-1 transition-colors duration-300">{service.title}</h3>
                  <p className="font-body text-[11px] font-bold text-primary dark:text-primary-400 tracking-wide uppercase mb-3 transition-colors duration-300">{service.tagline}</p>
                  <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 transition-colors duration-300">{service.description}</p>
                  
                  <div className="h-[1px] bg-neutral-100 dark:bg-white/10 my-4" />
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-body text-[11px] text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-1">Estimasi</div>
                  <div className="font-heading text-base font-bold text-primary dark:text-primary-400 transition-colors duration-300">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Workflow ── */}
      <Workflow steps={aplikasiWorkflow} />

      {/* ── 5. Portfolio ── */}
      <section className="bg-white dark:bg-primary-950 py-20 lg:py-24 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 items-center mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Karya Kami"
              title="Portfolio Aplikasi"
              align="left"
            />
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed -mt-4 min-[900px]:mt-0 transition-colors duration-300">
              Beberapa project aplikasi web & mobile kustom yang telah berhasil kami bangun dan rilis secara komersial untuk klien kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioAplikasi.map((item, i) => (
              <motion.div
                key={i}
                className="bg-neutral-50 dark:bg-primary-900 border border-neutral-100 dark:border-white/5 rounded-2xl overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img
                    src={portfolioTugasImg}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="font-body text-[10px] font-bold text-primary dark:text-primary-400 tracking-wider uppercase block mb-1.5 transition-colors duration-300">{item.type}</span>
                  <h4 className="font-heading text-sm font-bold text-neutral-800 dark:text-white mb-2 transition-colors duration-300">{item.title}</h4>
                  <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <FAQ faqs={aplikasiFAQ} />

      {/* ── 7. Contact & Footer ── */}
      <Contact />
      <Footer />
    </>
  );
}
