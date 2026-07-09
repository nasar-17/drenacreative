import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero } from '../../components/Hero/Hero';
import { About } from '../../components/About/About';
import { Services } from '../../components/Services/Services';
import { Process } from '../../components/Process/Process';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { FAQ } from '../../components/FAQ/FAQ';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { SEO } from '../../components/SEO/SEO';

import portfolioWebImg from '../../assets/portfolio-web.png';
import portfolioDesignImg from '../../assets/portfolio-design.png';
import portfolioTugasImg from '../../assets/portfolio-tugas.png';

/* ══════════════════════════════════════════════════════════════════════════
   KEUNGGULAN DATA
   ══════════════════════════════════════════════════════════════════════════ */
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

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO DATA (realistic dummy)
   ══════════════════════════════════════════════════════════════════════════ */
const portfolioItems = [
  { id: 1, category: 'Website', title: 'Kopi Senja', desc: 'Landing page modern untuk coffee shop lokal di Jakarta Selatan.', tags: ['Landing Page', 'UMKM'] },
  { id: 2, category: 'Website', title: 'CV Karya Nusantara', desc: 'Company profile profesional untuk perusahaan konstruksi di Surabaya.', tags: ['Company Profile', 'Multi-page'] },
  { id: 3, category: 'Design', title: 'Feed @beauty.rizky', desc: 'Template feed Instagram estetik untuk brand skincare lokal Bandung.', tags: ['Feed Instagram', 'Branding'] },
  { id: 4, category: 'Design', title: 'Branding Tasbih Kayu', desc: 'Logo & branding kit lengkap untuk UMKM kerajinan artisanal Solo.', tags: ['Logo', 'Branding Kit'] },
  { id: 5, category: 'Tugas', title: 'Sistem Informasi Perpustakaan', desc: 'Website tugas mata kuliah Pemrograman Web dengan PHP & MySQL.', tags: ['Coding Project', 'PHP'] },
  { id: 6, category: 'Website', title: 'Website Wisuda Keluarga Hasan', desc: 'Website custom kenangan wisuda dengan galeri foto dan musik latar.', tags: ['Custom Web', 'Personal'] },
];

const categoryColor = {
  Website: 'text-primary dark:text-primary-300 bg-primary-50 dark:bg-primary/10',
  Design: 'text-secondary-600 dark:text-secondary-300 bg-secondary-50 dark:bg-secondary/10',
  Tugas: 'text-tertiary-700 dark:text-tertiary-300 bg-tertiary-50 dark:bg-tertiary/10',
};

const categoryImage = {
  Website: portfolioWebImg,
  Design: portfolioDesignImg,
  Tugas: portfolioTugasImg,
};

/* ══════════════════════════════════════════════════════════════════════════
   TESTIMONI DATA (realistic dummy)
   ══════════════════════════════════════════════════════════════════════════ */
const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    role: 'Pemilik Kopi Senja, Jakarta',
    text: 'Website coffee shop saya jadi jauh lebih profesional. Proses cepat, komunikasinya mudah, dan hasilnya melampaui ekspektasi. Pelanggan baru banyak yang datang dari website ini!',
    initials: 'BS',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    role: 'Owner @beauty.rizky, Bandung',
    text: 'Feed Instagram saya sekarang terlihat estetik dan konsisten. Banyak yang tanya pakai jasa desain mana. Revisi cepat dan hasilnya selalu memuaskan. Pasti order lagi!',
    initials: 'SR',
  },
  {
    id: 3,
    name: 'Rizky Pratama',
    role: 'Mahasiswa Teknik Informatika, UI',
    text: 'Bantu tugas coding saya dengan kode yang bersih dan terdokumentasi. Bahkan dikasih penjelasan sampai paham. Sangat membantu untuk deadline yang mepet!',
    initials: 'RP',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ══════════════════════════════════════════════════════════════════════════ */
const homeFAQ = [
  {
    question: 'Apa saja layanan yang ditawarkan Drena Creative?',
    answer: 'Drena Creative menawarkan tiga layanan utama: pembuatan website profesional (landing page, company profile, UMKM, portfolio, custom), layanan desain kreatif (poster, banner, feed Instagram, logo, branding kit), dan jasa bantuan tugas akademik (website tugas, presentasi PPT, makalah, UI/UX, coding project).',
  },
  {
    question: 'Berapa lama waktu pengerjaan?',
    answer: 'Waktu pengerjaan bervariasi sesuai kompleksitas. Website sederhana 1–3 hari, website bisnis 3–7 hari, desain grafis 1–2 hari, dan tugas akademik sesuai deadline yang disepakati. Kami selalu transparan soal estimasi waktu di awal.',
  },
  {
    question: 'Apakah ada garansi setelah proyek selesai?',
    answer: 'Ya, setiap proyek mendapatkan garansi bug selama 30 hari sejak serah terima. Garansi mencakup perbaikan error atau fungsi yang tidak berjalan sesuai kesepakatan awal, tanpa biaya tambahan.',
  },
  {
    question: 'Bagaimana cara memulai proyek?',
    answer: 'Cukup hubungi kami melalui WhatsApp untuk konsultasi gratis. Ceritakan kebutuhan Anda, kami akan memberikan rekomendasi dan estimasi harga yang transparan sebelum proses dimulai.',
  },
  {
    question: 'Apakah revisi dibatasi?',
    answer: 'Revisi tidak dibatasi selama proses pengerjaan berlangsung. Anda bebas melakukan perubahan hingga hasil sesuai ekspektasi. Setelah proyek selesai dan diterima, perubahan baru dianggap pekerjaan tambahan.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   CARD VARIANTS (consistent with existing site)
   ══════════════════════════════════════════════════════════════════════════ */
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export function Home() {
  return (
    <>
      <SEO
        title="Drena Creative — Solusi Website, Desain & Tugas Profesional"
        description="Drena Creative hadir sebagai solusi digital untuk mahasiswa, UMKM, dan bisnis. Layanan website, desain kreatif, dan bantuan tugas yang cepat, rapi, dan terjangkau."
      />

      {/* ── 1. Hero ── */}
      <Hero />

      {/* ── 2. About ── */}
      <About />

      {/* ── 3. Keunggulan (Why Choose Drena) ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="keunggulan">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Mengapa Drena Creative"
              title="Kualitas Terpercaya, Harga Terjangkau"
              subtitle="Kami berkomitmen menghadirkan layanan digital berkualitas tinggi dengan proses yang transparan, cepat, dan hasil yang memuaskan."
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
                  <p className="font-body text-xs font-normal text-neutral-500 dark:text-neutral-400 leading-[1.75] transition-colors duration-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Layanan Kami ── */}
      <Services />

      {/* ── 5. Proses Kerja ── */}
      <Process />

      {/* ── 6. Portfolio Highlight ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="portfolio">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Portfolio"
              title="Karya Terbaik Kami"
              subtitle="Beberapa proyek yang telah kami selesaikan untuk klien dari berbagai industri dan kebutuhan."
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
                {/* Category Badge */}
                <span className={`self-start font-heading text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-md ${categoryColor[item.category]} transition-colors duration-300`}>
                  {item.category}
                </span>
                {/* Visual Image */}
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden border border-neutral-100 dark:border-white/10">
                  <img
                    src={categoryImage[item.category]}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="grow">
                  <h3 className="font-heading text-base font-bold text-primary-800 dark:text-white mb-1.5 tracking-[-0.01em] transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">{item.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-heading text-[9px] font-semibold tracking-[0.08em] px-2 py-0.5 bg-neutral-50 dark:bg-primary-900 text-neutral-500 dark:text-neutral-400 rounded transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Testimoni ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="testimoni">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Testimoni"
              title="Kata Mereka tentang Drena"
              subtitle="Kepercayaan klien adalah aset terbesar kami. Ini yang mereka rasakan setelah bekerja sama dengan Drena Creative."
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
                {/* Stars */}
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="none" className="shrink-0">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                {/* Quote */}
                <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-[1.75] grow italic transition-colors duration-300">
                  "{t.text}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-neutral-100 dark:border-white/10 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary-800 dark:bg-primary flex items-center justify-center shrink-0">
                    <span className="font-heading text-xs font-bold text-white tracking-[0.05em]">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-heading text-sm font-bold text-primary-800 dark:text-white transition-colors duration-300">{t.name}</p>
                    <p className="font-body text-xs text-neutral-400 dark:text-neutral-500 transition-colors duration-300">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <FAQ
        title="Pertanyaan Umum"
        subtitle="Jawaban atas pertanyaan yang paling sering kami terima dari klien baru."
        items={homeFAQ}
      />

      {/* ── 9. Contact ── */}
      <Contact
        ctaTitle={<>Mulai Proyek <br /> Anda Sekarang</>}
        ctaSubtitle="Konsultasikan kebutuhan Anda sekarang. Kami siap membantu pembuatan website, desain, maupun tugas kuliah dengan proses cepat, hasil rapi, dan biaya terjangkau."
        ctaButton="KONSULTASI GRATIS"
        waMessage="Halo Drena Creative, saya ingin konsultasi mengenai layanan Anda."
      />

      {/* ── 10. Footer ── */}
      <Footer />
    </>
  );
}
