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
   JENIS TUGAS DATA
   ══════════════════════════════════════════════════════════════════════════ */
const jenisTugas = [
  {
    id: 'website-tugas',
    title: 'Website Tugas',
    tagline: 'Website kuliah yang lulus QC dosen',
    description: 'Pembuatan website untuk tugas mata kuliah atau project kampus. Dibuat sesuai requirement dosen dengan kode yang bersih, terdokumentasi, dan mudah dipahami.',
    price: 'Mulai Rp99.000',
    features: ['HTML/CSS/JS atau framework', 'Desain responsive', 'Source code lengkap & rapi', 'Dokumentasi dasar', 'Penjelasan kode (opsional)', 'Sesuai requirement dosen'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'presentasi-ppt',
    title: 'Presentasi / PPT',
    tagline: 'Slide yang membuat audiens terkesan',
    description: 'Desain slide presentasi profesional, menarik, dan mudah dipahami untuk keperluan tugas, seminar, sidang skripsi, atau presentasi bisnis.',
    price: 'Mulai Rp50.000',
    features: ['Desain slide modern & konsisten', 'Animasi transisi yang rapi', 'Infografis & visualisasi data', 'File PowerPoint & PDF', 'Revisi sepuasnya', 'Cepat 1–2 hari'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    id: 'makalah-laporan',
    title: 'Makalah & Laporan',
    tagline: 'Karya tulis rapi sesuai standar akademik',
    description: 'Penulisan makalah, laporan penelitian, laporan praktikum, atau karya tulis akademik lainnya. Terstruktur, rapi, dan sesuai format yang diminta.',
    price: 'Mulai Rp75.000',
    features: ['Sesuai format akademik', 'Sitasi & daftar pustaka', 'Editing & proofreading', 'Bebas dari plagiarisme', 'Revisi sepuasnya', 'Tepat waktu'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    id: 'uiux-project',
    title: 'UI/UX Project',
    tagline: 'Desain antarmuka yang intuitif',
    description: 'Pembuatan desain UI/UX untuk aplikasi mobile atau website sebagai tugas kuliah. Dilengkapi wireframe, user flow, prototype, dan high-fidelity design.',
    price: 'Mulai Rp150.000',
    features: ['Wireframe & user flow', 'High-fidelity design', 'Prototype interaktif', 'Figma deliverable', 'Design system dasar', 'Dokumentasi UX'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
  },
  {
    id: 'coding-project',
    title: 'Coding Project',
    tagline: 'Project coding yang clean dan siap presentasi',
    description: 'Bantuan pengerjaan project coding untuk berbagai mata kuliah: dari algoritma dasar hingga aplikasi full-stack. Kode bersih, terdokumentasi, dan mudah dipelajari.',
    price: 'Mulai Rp99.000',
    features: ['Berbagai bahasa & framework', 'Clean code & best practices', 'Dokumentasi teknis', 'Penjelasan kode mendalam', 'Database & backend (opsional)', 'Unit test (opsional)'],
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
const tugasWorkflow = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    title: 'Konsultasi Kebutuhan',
    description: 'Ceritakan detail tugas: instruksi dosen, format yang diminta, deadline, dan referensi. Semakin lengkap, semakin presisi hasilnya.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    title: 'Analisis & Perencanaan',
    description: 'Tim kami menganalisis scope tugas dan merencanakan pendekatan terbaik untuk memenuhi semua requirement yang diminta.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    title: 'Pengerjaan',
    description: 'Tugas dikerjakan sesuai standar akademik dan requirement dosen. Anda bisa bertanya dan memberikan masukan selama proses berlangsung.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    title: 'Review & Pengiriman',
    description: 'Pengecekan kualitas dan kerapian akhir, lalu file dikirimkan dalam format yang sesuai, tepat waktu sebelum deadline Anda.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO TUGAS DATA (dummy)
   ══════════════════════════════════════════════════════════════════════════ */
const portfolioTugas = [
  { title: 'Sistem Informasi Perpustakaan', type: 'Website Tugas', desc: 'Mahasiswa Teknik Informatika, UI.' },
  { title: 'PPT Sidang Skripsi Manajemen', type: 'Presentasi / PPT', desc: 'Mahasiswa FEB, UGM.' },
  { title: 'Makalah Analisis Ekonomi Makro', type: 'Makalah & Laporan', desc: 'Mahasiswa Ekonomi, Undip.' },
  { title: 'UI/UX Aplikasi Belanja Online', type: 'UI/UX Project', desc: 'Mahasiswa DKV, ITB.' },
  { title: 'Rest API Manajemen Inventory', type: 'Coding Project', desc: 'Mahasiswa Sistem Informasi.' },
  { title: 'Laporan Praktikum Jaringan', type: 'Makalah & Laporan', desc: 'Mahasiswa Teknik Komputer.' },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ══════════════════════════════════════════════════════════════════════════ */
const tugasFAQ = [
  {
    question: 'Apakah tugas yang dikerjakan bebas plagiarisme?',
    answer: 'Ya, setiap tugas dikerjakan secara original sesuai brief yang diberikan. Untuk makalah dan laporan, konten ditulis ulang berdasarkan referensi yang valid — bukan copy-paste. Kami menjaga integritas akademik.',
  },
  {
    question: 'Seberapa cepat tugas bisa diselesaikan?',
    answer: 'Kami bisa mengerjakan tugas sesuai deadline yang Anda berikan, termasuk ekspres dalam 24 jam untuk tugas tertentu. Semakin awal Anda menghubungi kami, semakin baik kualitas yang bisa kami berikan. Biaya ekspres berlaku untuk deadline di bawah 24 jam.',
  },
  {
    question: 'Apakah saya bisa berkonsultasi tentang materi tugas?',
    answer: 'Tentu. Kami tidak hanya mengerjakan, tapi juga bisa membantu Anda memahami konsep di balik tugas yang dikerjakan. Kami percaya pemahaman Anda lebih penting dari sekadar nilai.',
  },
  {
    question: 'Bagaimana cara menyerahkan brief atau requirement tugas?',
    answer: 'Cukup kirimkan detail tugas melalui WhatsApp: instruksi dosen, format yang diminta, deadline, rubrik penilaian, dan referensi yang diperlukan. Screenshot soal atau dokumen instruksi sangat membantu.',
  },
  {
    question: 'Apakah ada garansi revisi setelah tugas selesai?',
    answer: 'Ya, revisi tidak dibatasi selama proses pengerjaan. Jika ada bagian yang tidak sesuai requirement setelah selesai, kami perbaiki tanpa biaya tambahan dalam batas waktu yang wajar dan sesuai kesepakatan awal.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export function LayananTugas() {
  return (
    <>
      <SEO
        title="Jasa Tugas Akademik & Coding — Drena Creative"
        description="Bantuan tugas kuliah: website tugas, presentasi PPT, makalah, UI/UX project, dan coding project. Hasil rapi, tepat waktu, dan harga terjangkau untuk mahasiswa."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Layanan Kami"
        title="Jasa Bantuan Tugas Akademik"
        subtitle="Dari website tugas hingga makalah penelitian — kami hadir untuk membantu mahasiswa menyelesaikan tugas dengan kualitas terbaik, tepat waktu, dan harga terjangkau."
        ctaLabel="Konsultasi Gratis"
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
              Fokus Belajar, Biarkan Kami Bantu Tugasnya
            </h2>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 transition-colors duration-300">
              Kami memahami tekanan akademik yang dihadapi mahasiswa setiap harinya. Deadline bertumpuk, tugas yang kompleks, dan keterbatasan waktu adalah tantangan nyata yang sering dialami.
            </p>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
              Drena Creative hadir sebagai mitra akademik yang dapat diandalkan — bukan sekadar mengerjakan, tapi membantu Anda memahami dan menavigasi tantangan akademik dengan cara yang lebih efektif dan efisien.
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
              { num: '24H', label: 'Ekspres Tersedia' },
              { num: '∞', label: 'Revisi Pengerjaan' },
              { num: '30', label: 'Hari Garansi' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900 dark:to-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 text-center transition-colors duration-300">
                <p className="font-heading text-3xl font-bold text-primary dark:text-tertiary-300 mb-1 tracking-[-0.02em]">{stat.num}</p>
                <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── 3. Jenis Tugas Cards ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="jenis-tugas">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Jenis Tugas"
              title="Apa yang Bisa Kami Bantu?"
              subtitle="Kami melayani berbagai jenis tugas akademik dengan pendekatan yang profesional dan bertanggung jawab."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {jenisTugas.map((item, i) => (
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
                <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-[1.7] mb-5 grow transition-colors duration-300">{item.description}</p>
                <ul className="flex flex-col gap-2 mb-5">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-[2px] text-primary dark:text-primary-300 transition-colors duration-300">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="font-body text-xs text-neutral-600 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-neutral-100 dark:border-white/10 transition-colors duration-300">
                  <span className="font-heading text-sm font-bold text-primary dark:text-primary-300 transition-colors duration-300">{item.price}</span>
                  <a
                    href={`https://wa.me/6288242328927?text=${encodeURIComponent(`Halo, saya butuh bantuan untuk ${item.title}. Bisa bantu saya?`)}`}
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

      {/* ── 4. Portfolio Tugas ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Portfolio"
              title="Tugas yang Sudah Kami Kerjakan"
              subtitle="Beberapa contoh tugas akademik yang telah kami bantu selesaikan untuk mahasiswa dari berbagai kampus."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioTugas.map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 flex flex-col gap-3 transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50 overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                {/* Visual Image */}
                <div className="w-full aspect-video rounded-lg overflow-hidden border border-neutral-100 dark:border-white/10 mb-2">
                  <img
                    src={portfolioTugasImg}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-heading text-[9px] font-bold tracking-[0.1em] uppercase text-primary dark:text-primary-400 transition-colors duration-300">{item.type}</span>
                <h3 className="font-heading text-sm font-bold text-primary-800 dark:text-white leading-snug transition-colors duration-300">{item.title}</h3>
                <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-300">{item.desc}</p>
                <div className="mt-2 flex items-center gap-1.5">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="10" height="10" viewBox="0 0 24 24" fill="#f59e0b" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="font-heading text-[9px] font-semibold text-neutral-400 dark:text-neutral-500 ml-1">5.0</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Workflow ── */}
      <Workflow
        title="Proses Pengerjaan Tugas"
        subtitle="Proses yang transparan dan terstruktur untuk memastikan setiap tugas selesai sesuai requirement, tepat waktu."
        steps={tugasWorkflow}
      />

      {/* ── 6. FAQ ── */}
      <FAQ
        title="FAQ Layanan Tugas"
        subtitle="Pertanyaan yang sering diajukan seputar layanan bantuan tugas akademik kami."
        items={tugasFAQ}
      />

      {/* ── 7. Contact ── */}
      <Contact
        ctaTitle={<>Selesaikan Tugasmu<br />Tepat Waktu</>}
        ctaSubtitle="Jangan biarkan deadline membuatmu stres. Konsultasikan tugas Anda sekarang — kami siap membantu dengan cepat, rapi, dan hasil yang memuaskan."
        ctaButton="KONSULTASI TUGAS"
        waMessage="Halo Drena Creative, saya butuh bantuan untuk tugas kuliah. Bisa bantu saya?"
      />

      {/* ── 8. Footer ── */}
      <Footer />
    </>
  );
}
