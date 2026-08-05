import { motion } from 'framer-motion';
import { PageHero } from '../../components/PageHero/PageHero';
import { Workflow } from '../../components/Workflow/Workflow';
import { FAQ } from '../../components/FAQ/FAQ';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { SEO } from '../../components/SEO/SEO';

import portfolioDesignImg from '../../assets/gen/portfolio-design.webp';
import heroDesignImg from '../../assets/gen/hero-design.webp';

/* ══════════════════════════════════════════════════════════════════════════
   LAYANAN AI CONTENT BRANDING DATA
   ══════════════════════════════════════════════════════════════════════════ */
const layananAIContent = [
  {
    id: 'ai-copywriting',
    title: 'AI Copywriting & Strategy',
    tagline: 'Artikel & copy yang menjual didukung AI',
    description: 'Pembuatan copy iklan, sales letter, dan artikel blog SEO berkualitas tinggi dengan kecerdasan buatan teroptimasi sesuai brand voice bisnis Anda.',
    price: 'Mulai Rp99.000',
    features: ['Optimasi SEO On-page', 'Headline variasi A/B testing', 'Copywriting formula (AIDA/PAS)', 'Brand voice tuning', 'Revisi sepuasnya', 'Pengerjaan 1–2 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    id: 'social-media-generation',
    title: 'Social Media AI Content',
    tagline: 'Feed dan caption kreatif otomatis',
    description: 'Perencanaan konten, pembuatan caption kreatif, hashtag generator, serta template visual social media yang relevan untuk meningkatkan engagement audiens.',
    price: 'Mulai Rp149.000',
    features: ['Kalender konten 30 hari', 'Caption interaktif & kreatif', 'Riset hashtag tertarget', 'Template visual Canva/Figma', 'Revisi sepuasnya', 'Cepat 2–3 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'ai-visual-generation',
    title: 'AI Visual & Imagery',
    tagline: 'Aset gambar kustom bebas lisensi',
    description: 'Generasi gambar visual kreatif, ilustrasi produk, background art, hingga aset grafis berkualitas ultra HD yang dibuat kustom menggunakan generator AI modern.',
    price: 'Mulai Rp199.000',
    features: ['Resolusi ultra tinggi', 'Kustomisasi style (3D, Vector, dll)', 'Bebas lisensi (Commercial use)', 'Upscaling tanpa pecah', 'Revisi sepuasnya', 'Pengerjaan 1–2 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    id: 'brand-voice-setup',
    title: 'Brand Voice Model Setup',
    tagline: 'Model AI khusus untuk identitas brand Anda',
    description: 'Layanan melatih model AI kustom untuk menulis dan mendesain dengan konsistensi gaya bahasa dan estetika perusahaan Anda secara otomatis.',
    price: 'Mulai Rp499.000',
    features: ['Setup prompt system khusus', 'Fine-tuning gaya komunikasi', 'Dokumentasi guideline AI', 'Integrasi API OpenAI/Claude', 'Garansi sistem 30 hari', 'Support prioritas'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   WORKFLOW STEPS
   ══════════════════════════════════════════════════════════════════════════ */
const aiWorkflow = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    title: 'Brief & Analisis Brand',
    description: 'Konsultasi awal untuk memetakan tujuan bisnis, audiens target, dan persona komunikasi brand unik Anda.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
    title: 'Prompt & Visual Engineering',
    description: 'Kami merancang prompt khusus dan parameter desain visual AI untuk menghasilkan output yang presisi dan relevan.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /></svg>,
    title: 'Generasi & Kurasi Manual',
    description: 'Konten dihasilkan oleh AI dan dikurasi secara manual oleh tim kreatif kami untuk memastikan kualitas terbaik.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    title: 'Finalisasi & Delivery',
    description: 'Penyempurnaan akhir sesuai feedback Anda, lalu materi dikirimkan siap dipasang untuk menaikkan penjualan.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO AI DATA
   ══════════════════════════════════════════════════════════════════════════ */
const portfolioAI = [
  { title: 'Generasi Copy Promtara', type: 'AI Copywriting', desc: 'Campaign ads optimalisasi database.' },
  { title: 'Kampanye Visual Kopi Senja', type: 'AI Visual Generation', desc: 'Branding visual AI bertema senja.' },
  { title: 'Feed AI @skincare.id', type: 'Social Media AI Content', desc: 'Konten edukasi otomatis harian.' },
  { title: 'Brand Model Drena Creative', type: 'Brand Voice Setup', desc: 'Automasi konten tim marketing internal.' },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ══════════════════════════════════════════════════════════════════════════ */
const aiFAQ = [
  {
    question: 'Apakah hasil tulisan AI akan terasa kaku?',
    answer: 'Tidak. Tim kami melakukan kurasi manual dan pengeditan gaya bahasa (human touch) untuk memastikan kalimat mengalir natural, persuasif, dan tidak terdengar seperti robot.',
  },
  {
    question: 'Bagaimana dengan hak cipta gambar dari AI?',
    answer: 'Gambar yang dihasilkan dibuat dengan tool AI komersial berlisensi penuh, sehingga hak guna gambar sepenuhnya milik Anda untuk kebutuhan promosi tanpa khawatir hak cipta.',
  },
  {
    question: 'Berapa lama proses pembuatan paket konten?',
    answer: 'Untuk satu materi copywriting atau gambar AI tunggal bisa selesai dalam 1 hari. Paket lengkap media sosial bulanan membutuhkan waktu pengerjaan 3-5 hari kerja.',
  },
  {
    question: 'Bisakah saya request revisi jika tidak sesuai?',
    answer: 'Tentu saja. Kami memberikan garansi revisi sepuasnya selama proses pengerjaan untuk menyelaraskan gaya bahasa dan visual yang dihasilkan dengan ekspektasi Anda.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export function LayananAIContentBranding() {
  return (
    <>
      <SEO
        title="Layanan AI Content Branding Profesional — Drena Creative"
        description="Layanan automasi konten branding bertenaga AI: copywriting kreatif, visual generation bebas hak cipta, dan social media setup. Cepat, efektif, dan profesional."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Layanan AI Kami"
        title="Layanan AI Content Branding"
        subtitle="Maksimalkan produktivitas kampanye pemasaran Anda dengan konten promosi visual dan tekstual berkualitas tinggi yang didukung kecerdasan buatan terkini."
        ctaLabel="Konsultasi Konten AI"
        bgImage={heroDesignImg}
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
              Transformasikan Pemasaran Brand Anda Melalui AI
            </h2>
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 transition-colors duration-300">
              Kecepatan dan konsistensi adalah kunci utama memenangkan persaingan di media sosial. Layanan AI Content Branding Drena Creative menggabungkan efisiensi generative AI tercanggih dengan kurasi rasa estetika dari tim profesional kami.
            </p>
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
              Dari copywriting artikel blog, deskripsi produk, caption media sosial, hingga pembuatan ilustrasi kustom siap pakai, kami memastikan brand Anda tetap bersuara dengan konsisten, cepat, dan dengan budget yang sangat bersahabat.
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
              { num: '4+', label: 'Solusi AI' },
              { num: '1-3', label: 'Hari Delivery' },
              { num: '100%', label: 'Bebas Royalti' },
              { num: '24/7', label: 'AI Support' },
            ].map((stat, i) => (
              <div key={i} className="bg-neutral-50 dark:bg-primary-900 border border-neutral-100 dark:border-white/5 rounded-2xl p-6 text-center shadow-[0_4px_20px_rgba(53,88,114,0.03)] transition-colors duration-300">
                <span className="font-heading text-[2rem] md:text-[2.5rem] font-bold text-primary dark:text-primary-400 block leading-none mb-2 transition-colors duration-300">{stat.num}</span>
                <span className="font-body text-xs text-neutral-600 dark:text-neutral-300 font-semibold tracking-wide uppercase transition-colors duration-300">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Services Grid ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-20 lg:py-24 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Fitur & Paket"
            title="Solusi Content Branding yang Fleksibel"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
            {layananAIContent.map((service, i) => (
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
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6 transition-colors duration-300">{service.description}</p>
                  
                  <div className="h-[1px] bg-neutral-100 dark:bg-white/10 my-4" />
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-body text-[11px] text-neutral-600 dark:text-neutral-300 transition-colors duration-300">
                        <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="font-heading text-xs font-bold text-neutral-600 dark:text-neutral-300 uppercase tracking-wider mb-1">Harga</div>
                  <div className="font-heading text-base font-bold text-primary dark:text-primary-400 transition-colors duration-300">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Workflow ── */}
      <Workflow steps={aiWorkflow} />

      {/* ── 5. Portfolio ── */}
      <section className="bg-white dark:bg-primary-950 py-20 lg:py-24 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-10 items-center mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Karya Kami"
              title="Hasil Konten Kreatif AI"
              align="left"
            />
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed -mt-4 min-[900px]:mt-0 transition-colors duration-300">
              Berikut beberapa contoh visual generator dan model bahasa khusus yang telah kami implementasikan untuk memperkuat komunikasi brand klien kami.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioAI.map((item, i) => (
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
                    src={portfolioDesignImg}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="900"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <span className="font-body text-[10px] font-bold text-primary dark:text-primary-400 tracking-wider uppercase block mb-1.5 transition-colors duration-300">{item.type}</span>
                  <h4 className="font-heading text-sm font-bold text-neutral-800 dark:text-white mb-2 transition-colors duration-300">{item.title}</h4>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <FAQ faqs={aiFAQ} />

      {/* ── 7. Contact & Footer ── */}
      <Contact />
      <Footer />
    </>
  );
}
