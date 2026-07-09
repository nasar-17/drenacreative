import { motion } from 'framer-motion';
import { PageHero } from '../../components/PageHero/PageHero';
import { Pricing } from '../../components/Pricing/Pricing';
import { Workflow } from '../../components/Workflow/Workflow';
import { FAQ } from '../../components/FAQ/FAQ';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { SEO } from '../../components/SEO/SEO';

import portfolioWebImg from '../../assets/portfolio-web.png';
import heroWebImg from '../../assets/hero-web.png';

/* ══════════════════════════════════════════════════════════════════════════
   JENIS WEBSITE DATA
   ══════════════════════════════════════════════════════════════════════════ */
const jenisWebsite = [
  {
    id: 'landing-page',
    title: 'Landing Page',
    tagline: 'Konversi pengunjung menjadi pelanggan',
    description: 'Halaman tunggal yang didesain khusus untuk mengonversi pengunjung menjadi pelanggan. Cocok untuk promosi produk, event, atau bisnis yang baru berdiri.',
    price: 'Mulai Rp799.000',
    features: ['Desain modern & menarik', 'CTA yang jelas dan efektif', 'Integrasi WhatsApp langsung', 'Mobile responsive 100%', 'Load time dioptimasi', 'Form kontak / lead'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'company-profile',
    title: 'Company Profile',
    tagline: 'Representasi digital perusahaan Anda',
    description: 'Website multi-halaman yang profesional untuk membangun kredibilitas perusahaan. Tampilkan profil, layanan, tim, dan pencapaian bisnis Anda secara elegan.',
    price: 'Mulai Rp1.499.000',
    features: ['Hingga 8 halaman', 'Desain premium custom', 'Profil tim & struktur organisasi', 'Portfolio & testimoni', 'Kontak & peta lokasi', 'SEO dasar'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'website-umkm',
    title: 'Website UMKM',
    tagline: 'Go digital untuk usaha Anda',
    description: 'Website terjangkau khusus untuk usaha mikro, kecil, dan menengah yang ingin memperluas jangkauan pelanggan secara digital dengan biaya yang efisien.',
    price: 'Mulai Rp799.000',
    features: ['Profil usaha lengkap', 'Informasi produk & layanan', 'Integrasi WhatsApp order', 'Galeri foto produk', 'SEO lokal (Google Maps)', 'Domain & hosting setup'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: 'website-portfolio',
    title: 'Website Portfolio',
    tagline: 'Tampilkan karya terbaik Anda',
    description: 'Website personal yang elegan untuk menampilkan karya, skill, dan pengalaman Anda kepada calon klien atau employer. Kesan pertama yang tak terlupakan.',
    price: 'Mulai Rp799.000',
    features: ['Galeri proyek yang rapi', 'About me & bio profesional', 'Kontak & form langsung', 'Link sosial media', 'Desain personal & unik', 'Mobile responsive'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    id: 'website-custom',
    title: 'Website Custom',
    tagline: 'Sepenuhnya sesuai kebutuhan Anda',
    description: 'Website yang dibangun dari nol sesuai dengan spesifikasi dan kebutuhan unik Anda. Tidak ada batasan fitur — dari website kenangan pribadi hingga platform bisnis kompleks.',
    price: 'Harga sesuai scope',
    features: ['Fitur sepenuhnya custom', 'Desain unik tanpa template', 'Integrasi API jika diperlukan', 'Konsultasi mendalam', 'Skalabel & maintainable', 'Support prioritas'],
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
const webWorkflow = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    title: 'Konsultasi & Brief',
    description: 'Diskusikan kebutuhan, tujuan, referensi visual, dan target audience website Anda. Kami bantu tentukan solusi terbaik.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /></svg>,
    title: 'Desain & Approval',
    description: 'Kami buat mockup tampilan website. Anda review dan setujui desain sebelum proses development dimulai.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
    title: 'Development',
    description: 'Pengembangan website berdasarkan desain yang sudah disetujui. Responsif, cepat, dan sesuai standar modern.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
    title: 'Testing & Launch',
    description: 'Uji coba di berbagai device dan browser, revisi final, lalu publish ke domain Anda. Siap go live!',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   PORTFOLIO WEBSITE DATA (dummy)
   ══════════════════════════════════════════════════════════════════════════ */
const portfolioWeb = [
  { title: 'Kopi Senja', type: 'Landing Page', desc: 'Coffee shop lokal Jakarta.' },
  { title: 'CV Karya Nusantara', type: 'Company Profile', desc: 'Perusahaan konstruksi Surabaya.' },
  { title: 'Toko Batik Kencana', type: 'Website UMKM', desc: 'UMKM batik premium Solo.' },
  { title: 'Porto Archibald', type: 'Website Portfolio', desc: 'Arsitek freelance Bandung.' },
  { title: 'Klinik Sehat Bersama', type: 'Company Profile', desc: 'Klinik kesehatan Semarang.' },
  { title: 'Wisuda Keluarga Hasan', type: 'Website Custom', desc: 'Kenangan wisuda personal.' },
];

/* ══════════════════════════════════════════════════════════════════════════
   FAQ DATA
   ══════════════════════════════════════════════════════════════════════════ */
const webFAQ = [
  {
    question: 'Apakah domain dan hosting sudah termasuk dalam paket?',
    answer: 'Untuk paket Starter, Business, dan Professional, setup domain dan hosting sudah termasuk. Untuk paket Custom Web (mulai Rp75.000), domain dan hosting tidak termasuk karena sifatnya website personal/kenangan yang bisa di-host secara gratis.',
  },
  {
    question: 'Apakah saya bisa mengelola konten website sendiri setelah selesai?',
    answer: 'Untuk paket Professional, CMS (Content Management System) disertakan sehingga Anda bisa mengubah konten sendiri tanpa perlu coding. Paket lain menggunakan website statis — untuk update konten cukup hubungi kami.',
  },
  {
    question: 'Berapa lama garansi website berlaku?',
    answer: 'Setiap website mendapatkan garansi bug selama 30 hari setelah serah terima. Jika ada error atau fungsi yang tidak berjalan sesuai kesepakatan awal, kami perbaiki tanpa biaya tambahan.',
  },
  {
    question: 'Bagaimana proses pembayaran?',
    answer: 'Pembayaran dilakukan dengan DP 50% di awal sebelum pengerjaan dimulai, dan pelunasan 50% setelah proyek selesai dan disetujui. Kami menerima transfer bank (BCA, Mandiri, BNI) dan dompet digital (GoPay, OVO, Dana).',
  },
  {
    question: 'Bisakah saya request fitur khusus di luar paket?',
    answer: 'Tentu bisa. Fitur tambahan di luar paket dapat dibahas terpisah dengan biaya menyesuaikan scope dan kompleksitas. Konsultasikan kebutuhan Anda terlebih dahulu, kami berikan estimasi yang transparan.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.12 } }),
};

export function LayananWebsite() {
  return (
    <>
      <SEO
        title="Layanan Website Profesional — Drena Creative"
        description="Jasa pembuatan website profesional: landing page, company profile, website UMKM, portfolio, dan website custom. Mulai dari Rp75.000. Revisi sepuasnya & garansi bug 30 hari."
      />

      {/* ── 1. Hero ── */}
      <PageHero
        eyebrow="Layanan Kami"
        title="Layanan Website Profesional"
        subtitle="Dari landing page sederhana hingga company profile premium — kami wujudkan website impian Anda dengan desain modern, performa tinggi, dan harga terjangkau."
        ctaLabel="Konsultasi Gratis"
        bgImage={heroWebImg}
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
              Website yang Bekerja untuk Bisnis Anda, 24 Jam Sehari
            </h2>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4 transition-colors duration-300">
              Di era digital ini, website bukan sekadar kehadiran online — melainkan aset bisnis terpenting Anda. Drena Creative hadir untuk memastikan website Anda tidak hanya terlihat indah, tetapi juga bekerja efektif dalam mengkonversi pengunjung menjadi pelanggan.
            </p>
            <p className="font-body text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed transition-colors duration-300">
              Setiap website yang kami bangun dirancang dengan mempertimbangkan pengalaman pengguna (UX), kecepatan loading, dan optimasi untuk mesin pencari (SEO) — semua dalam satu paket yang terjangkau.
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
              { num: '5+', label: 'Jenis Website' },
              { num: '4', label: 'Paket Tersedia' },
              { num: '30', label: 'Hari Garansi Bug' },
              { num: '∞', label: 'Revisi Pengerjaan' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900 dark:to-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 text-center transition-colors duration-300">
                <p className="font-heading text-3xl font-bold text-primary dark:text-tertiary-300 mb-1 tracking-[-0.02em]">{stat.num}</p>
                <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-300">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>



      {/* ── 4. Paket Website (existing Pricing component) ── */}
      <Pricing />

      {/* ── 5. Portfolio Website ── */}
      <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 md:mb-16">
            <SectionHeader
              eyebrow="Portfolio"
              title="Website yang Sudah Kami Bangun"
              subtitle="Beberapa contoh website yang telah kami selesaikan untuk berbagai klien dan industri."
            />
          </div>
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioWeb.map((item, i) => (
              <motion.div
                key={item.title}
                className="border border-neutral-100 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-400 group hover:shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={i}
              >
                <div className="w-full aspect-video overflow-hidden">
                  <img
                    src={portfolioWebImg}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 bg-white dark:bg-primary-950 transition-colors duration-300">
                  <span className="font-heading text-[9px] font-bold tracking-[0.1em] uppercase text-primary dark:text-primary-400 mb-2 block transition-colors duration-300">{item.type}</span>
                  <h3 className="font-heading text-sm font-bold text-primary-800 dark:text-white mb-1 transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-xs text-neutral-500 dark:text-neutral-400 transition-colors duration-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Workflow ── */}
      <Workflow
        title="Proses Pengerjaan Website"
        subtitle="Proses yang terstruktur memastikan setiap website selesai tepat waktu dengan kualitas terjaga di setiap tahap."
        steps={webWorkflow}
      />

      {/* ── 7. FAQ ── */}
      <FAQ
        title="FAQ Layanan Website"
        subtitle="Pertanyaan yang sering diajukan seputar layanan pembuatan website kami."
        items={webFAQ}
      />

      {/* ── 8. Contact ── */}
      <Contact
        ctaTitle={<>Siap Membangun<br />Website Impian Anda?</>}
        ctaSubtitle="Konsultasikan kebutuhan website Anda sekarang. Kami bantu tentukan jenis dan paket yang paling sesuai dengan tujuan bisnis dan anggaran Anda."
        ctaButton="MULAI KONSULTASI"
        waMessage="Halo Drena Creative, saya ingin konsultasi mengenai pembuatan website. Bisa bantu saya?"
      />

      {/* ── 9. Footer ── */}
      <Footer />
    </>
  );
}
