import { motion } from 'framer-motion';
import { PageHero } from '../../components/PageHero/PageHero';
import { Workflow } from '../../components/Workflow/Workflow';
import { FAQ } from '../../components/FAQ/FAQ';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { SEO } from '../../components/SEO/SEO';

import portfolioDesignImg from '../../assets/portfolio-design.png';
import heroDesignImg from '../../assets/hero-design.png';

/* ══════════════════════════════════════════════════════════════════════════
   LAYANAN DESIGN DATA
   ══════════════════════════════════════════════════════════════════════════ */
const layananDesign = [
  {
    id: 'poster-design',
    title: 'Poster Design',
    tagline: 'Visual yang memikat untuk promosimu',
    description: 'Desain poster digital yang menarik dan efektif untuk promosi, event, konten sosial media, atau kebutuhan personal Anda. Print-ready dan siap pakai.',
    price: 'Mulai Rp50.000',
    features: ['Format digital & print-ready', 'Resolusi tinggi (300 DPI)', 'Multiple ukuran tersedia', 'Revisi sepuasnya', 'File PNG/JPG/PDF', 'Pengerjaan 1–2 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    id: 'banner-design',
    title: 'Banner Design',
    tagline: 'Banner digital yang eye-catching',
    description: 'Desain banner untuk berbagai keperluan: media sosial, website, iklan digital, spanduk, atau backdrop event. Konsisten dengan identitas brand Anda.',
    price: 'Mulai Rp50.000',
    features: ['Banner sosmed & web', 'Berbagai ukuran', 'Konsisten dengan brand', 'File siap pakai', 'Revisi sepuasnya', 'Cepat 1–2 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: 'feed-instagram',
    title: 'Feed Instagram',
    tagline: 'Feed estetik yang memperkuat brand',
    description: 'Template feed Instagram yang konsisten, estetik, dan sesuai identitas brand Anda. Tingkatkan engagement dan kesan profesional di mata followers.',
    price: 'Mulai Rp150.000',
    features: ['Template konsisten per posting', 'Multi-post & carousel', 'Story & highlight cover', 'Panduan warna & font', 'Revisi sepuasnya', 'File editable (opsional)'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    id: 'logo-design',
    title: 'Logo Design',
    tagline: 'Identitas visual yang tak terlupakan',
    description: 'Logo profesional yang mencerminkan nilai, karakter, dan identitas brand Anda. Desain yang timeless, versatile, dan meninggalkan kesan mendalam.',
    price: 'Mulai Rp200.000',
    features: ['Logo primary & variasi', 'Format lengkap (PNG, SVG, PDF)', 'Panduan warna (color palette)', 'Konsultasi brand mendalam', 'Hak cipta penuh Anda', 'Pengerjaan 2–4 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    id: 'branding-kit',
    title: 'Branding Kit',
    tagline: 'Identitas brand yang lengkap & kohesif',
    description: 'Paket lengkap identitas visual brand Anda: dari logo hingga panduan penggunaan brand yang komprehensif. Fondasi visual yang kuat untuk bisnis Anda.',
    price: 'Mulai Rp500.000',
    features: ['Logo + semua variasi', 'Brand guideline dokumen', 'Color palette & typography', 'Template aplikasi brand', 'Business card design', 'Social media kit'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   WORKFLOW STEPS
   ══════════════════════════════════════════════════════════════════════════ */
const designWorkflow = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    title: 'Brief & Referensi',
    description: 'Ceritakan kebutuhan desain, identitas brand, target audience, dan referensi visual yang Anda suka. Semakin detail, semakin tepat hasilnya.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
    title: 'Konsep & Draft Awal',
    description: 'Kami kembangkan konsep kreatif dan draft desain awal berdasarkan brief Anda. Eksplorasi beberapa arah visual.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /></svg>,
    title: 'Review & Feedback',
    description: 'Anda review draft desain dan berikan feedback spesifik. Kami mendengar dan memahami setiap masukan Anda.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    title: 'Finalisasi & Pengiriman',
    description: 'Penyempurnaan akhir berdasarkan feedback, lalu file dikirimkan dalam format yang Anda butuhkan. Siap digunakan!',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO DESIGN DATA (dummy)
   ══════════════════════════════════════════════════════════════════════════ */
const portfolioDesign = [
  { title: 'Poster Promo Ramadan', type: 'Poster Design', desc: 'Restoran lokal Surabaya.' },
  { title: 'Banner Digital @skincare.id', type: 'Banner Design', desc: 'Brand skincare online.' },
  { title: 'Feed IG @bakery.dreams', type: 'Feed Instagram', desc: 'Bakery artisanal Bandung.' },
  { title: 'Logo Kopi Senja', type: 'Logo Design', desc: 'Coffee shop Jakarta.' },
  { title: 'Branding Batik Nusantara', type: 'Branding Kit', desc: 'UMKM batik premium.' },
  { title: 'Feed IG @fitlife.studio', type: 'Feed Instagram', desc: 'Studio gym Semarang.' },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ══════════════════════════════════════════════════════════════════════════ */
const designFAQ = [
  {
    question: 'Format file apa yang akan saya terima?',
    answer: 'File desain dikirimkan dalam format PNG/JPG resolusi tinggi untuk penggunaan digital, dan PDF/SVG untuk keperluan cetak atau skala bebas. Anda bisa request format spesifik sesuai kebutuhan tanpa biaya tambahan.',
  },
  {
    question: 'Apakah saya mendapatkan file sumber (source file)?',
    answer: 'File sumber (seperti file Figma, AI, atau PSD) dapat diberikan dengan biaya tambahan yang telah disepakati. Secara default, kami mengirimkan file final dalam format siap pakai.',
  },
  {
    question: 'Berapa lama proses desain?',
    answer: 'Poster & banner umumnya selesai dalam 1–2 hari kerja. Feed Instagram 2–3 hari. Logo design 2–4 hari. Branding kit lengkap 4–7 hari. Tersedia layanan ekspres untuk kebutuhan mendesak dengan biaya tambahan.',
  },
  {
    question: 'Apakah desain bisa digunakan untuk keperluan cetak?',
    answer: 'Ya, kami siapkan file dalam kualitas print-ready (minimum 300 DPI) dalam format PDF atau PNG resolusi tinggi. Informasikan kebutuhan cetak Anda di awal agar file disiapkan dengan spesifikasi yang tepat.',
  },
  {
    question: 'Apakah saya bisa meminta revisi setelah desain selesai?',
    answer: 'Revisi tidak dibatasi selama proses pengerjaan. Setelah desain diterima dan file final dikirimkan, perubahan lebih lanjut dianggap sebagai pekerjaan baru. Oleh karena itu, pastikan semua detail dikomunikasikan sebelum finalisasi.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export function LayananDesign() {
  return (
    <>
      <SEO
        title="Layanan Desain Kreatif — Drena Creative"
        description="Jasa desain profesional: poster, banner, feed Instagram, logo, dan branding kit. Desain modern, revisi sepuasnya, dan harga terjangkau untuk brand Anda."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Layanan Kami"
        title="Layanan Desain Kreatif"
        subtitle="Dari poster promosi hingga branding kit lengkap — kami hadirkan desain yang tidak hanya indah, tapi juga efektif dalam mengkomunikasikan pesan brand Anda."
        ctaLabel="Konsultasi Gratis"
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
              Desain yang Berbicara, Brand yang Diingat
            </h2>
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4 transition-colors duration-300">
              Visual yang kuat adalah fondasi dari brand yang kuat. Setiap desain yang kami buat bukan sekadar indah secara estetika — melainkan dirancang strategis untuk menyampaikan pesan yang tepat kepada audiens yang tepat.
            </p>
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed transition-colors duration-300">
              Tim desainer kami memahami psikologi warna, tipografi, dan komposisi visual untuk menghasilkan karya yang meninggalkan kesan mendalam dan memperkuat identitas brand Anda.
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
              { num: '5+', label: 'Jenis Layanan' },
              { num: '1–7', label: 'Hari Pengerjaan' },
              { num: '∞', label: 'Revisi Pengerjaan' },
              { num: '100%', label: 'Hak Cipta Anda' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900 dark:to-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 text-center transition-colors duration-300">
                <p className="font-heading text-3xl font-bold text-primary dark:text-tertiary-300 mb-1 tracking-[-0.02em]">{stat.num}</p>
                <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Layanan Design Cards ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="layanan-design">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Layanan Design"
              title="Semua Kebutuhan Desain Anda"
              subtitle="Kami siap membantu dari desain konten harian hingga identitas brand lengkap yang profesional."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {layananDesign.map((item, i) => (
              <motion.div
                key={item.id}
                id={item.id}
                className="scroll-mt-24 bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                custom={i}
              >
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-xl border-[1.5px] border-primary-100 dark:border-primary/30 text-primary dark:text-primary-300 mb-5 transition-colors duration-300 bg-primary-50 dark:bg-primary/10 group-hover:bg-primary group-hover:text-white group-hover:border-primary dark:group-hover:bg-primary dark:group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-white mb-1 tracking-[-0.01em] transition-colors duration-300">{item.title}</h3>
                <p className="font-heading text-xs font-medium text-primary dark:text-primary-400 mb-3 transition-colors duration-300">{item.tagline}</p>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-[1.7] mb-5 grow transition-colors duration-300">{item.description}</p>
                <ul className="flex flex-col gap-2 mb-5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px] text-primary dark:text-primary-300 transition-colors duration-300">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-[1.7] transition-colors duration-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-white/10 transition-colors duration-300">
                  <span className="font-heading text-sm font-bold text-primary dark:text-primary-300 transition-colors duration-300">{item.price}</span>
                  <a
                    href={`https://wa.me/6288242328927?text=${encodeURIComponent(`Halo, saya tertarik dengan layanan ${item.title}. Bisa info lebih lanjut?`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-heading text-[11px] font-bold tracking-[0.06em] py-2 px-4 bg-primary-800 dark:bg-primary text-white no-underline transition-all duration-300 hover:bg-primary-900 dark:hover:bg-primary-400 hover:-translate-y-[1px] group/cta"
                  >
                    Pesan
                    <svg className="w-3 h-3 transition-transform duration-300 group-hover/cta:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Portfolio Design ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Portfolio"
              title="Karya Desain Kami"
              subtitle="Beberapa contoh karya desain yang telah kami hasilkan untuk berbagai klien dan brand."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioDesign.map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-neutral-100 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={portfolioDesignImg}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="1200"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-white dark:bg-primary-950 transition-colors duration-300">
                  <span className="font-heading text-[9px] font-bold tracking-[0.1em] uppercase text-primary dark:text-primary-400 mb-2 block transition-colors duration-300">{item.type}</span>
                  <h3 className="font-heading text-sm font-bold text-primary-800 dark:text-white mb-1 transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 transition-colors duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Workflow ── */}
      <Workflow
        title="Proses Pengerjaan Desain"
        subtitle="Alur kerja yang terstruktur memastikan setiap desain sesuai ekspektasi dan selesai tepat waktu."
        steps={designWorkflow}
      />

      {/* ── 6. FAQ ── */}
      <FAQ
        title="FAQ Layanan Design"
        subtitle="Pertanyaan yang sering diajukan seputar layanan desain kreatif kami."
        items={designFAQ}
      />

      {/* ── 7. Contact ── */}
      <Contact
        ctaTitle={<>Wujudkan Identitas<br />Visual Brand Anda</>}
        ctaSubtitle="Konsultasikan kebutuhan desain Anda sekarang. Dari poster harian hingga branding kit lengkap — kami siap membantu brand Anda tampil lebih profesional dan berkesan."
        ctaButton="MULAI DESAIN"
        waMessage="Halo Drena Creative, saya ingin konsultasi mengenai layanan desain. Bisa bantu saya?"
      />

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
