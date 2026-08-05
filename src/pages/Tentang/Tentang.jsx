import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PageHero } from '../../components/PageHero/PageHero';
import { SectionHeader } from '../../components/SectionHeader/SectionHeader';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';
import { SEO } from '../../components/SEO/SEO';
import { teamMembers } from '../../data/teamData';

import aboutImg from '../../assets/gen/about-building.webp';

const values = [
  { title: 'Harga Terjangkau', desc: 'Biaya kompetitif tanpa mengorbankan kualitas. Solusi digital terbaik untuk semua kalangan.' },
  { title: 'Pengerjaan Cepat', desc: 'Setiap proyek diselesaikan sesuai deadline yang disepakati. Tanpa keterlambatan tanpa alasan.' },
  { title: 'Revisi Sepuasnya', desc: 'Revisi tidak dibatasi selama proses pengerjaan. Kami bekerja hingga Anda benar-benar puas.' },
  { title: 'Konsultasi Gratis', desc: 'Diskusikan kebutuhan sebelum memulai proyek tanpa biaya apapun. Transparan dari awal.' },
  { title: 'Garansi Bug 30 Hari', desc: 'Jaminan perbaikan error atau fungsi yang tidak berjalan sesuai kesepakatan selama 30 hari.' },
  { title: 'Support Responsif', desc: 'Tim kami siap membantu dengan respons cepat melalui WhatsApp kapanpun Anda membutuhkan.' },
];

const steps = [
  { num: '01', title: 'Konsultasi & Brief', desc: 'Diskusikan kebutuhan, tujuan, dan target audiens Anda secara gratis.' },
  { num: '02', title: 'Desain & Approval', desc: 'Mockup tampilan dibuat dan disetujui sebelum development dimulai.' },
  { num: '03', title: 'Development', desc: 'Pengembangan sesuai desain yang disetujui, responsif, dan dioptimasi.' },
  { num: '04', title: 'Testing & Launch', desc: 'Uji coba lintas perangkat, revisi final, lalu go-live dengan garansi 30 hari.' },
];

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || '?';
}

export function Tentang() {
  return (
    <>
      <SEO
        title="Tentang Kami — Drena Creative"
        description="Kenali Drena Creative: tim kreatif dan teknologi yang membantu mahasiswa, UMKM, dan bisnis membangun website, desain, dan aplikasi profesional sejak konsultasi hingga serah terima."
        jsonLd={[
          {
            id: 'about-jsonld',
            data: {
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'Tentang Drena Creative',
              url: 'https://drenacreative.vercel.app/tentang',
              inLanguage: 'id',
            },
          },
        ]}
      />

      <PageHero
        eyebrow="Tentang Kami"
        title="Partner Digital untuk Pertumbuhan Anda"
        subtitle="Drena Creative adalah tim kreatif dan teknologi yang membantu mahasiswa, UMKM, dan bisnis mewujudkan solusi digital — dari konsultasi, desain, hingga serah terima."
        ctaLabel="Mulai Konsultasi"
      />

      {/* ── 1. Cerita Kami ── */}
      <section className="bg-white dark:bg-primary-950 py-20 md:py-24 lg:py-28 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-16 items-center">
          <motion.div
            className="order-1 min-[900px]:order-none"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-heading text-xs font-bold text-primary dark:text-primary-400 tracking-[0.15em] uppercase block mb-4 transition-colors duration-300">CERITA KAMI</span>
            <h2 className="font-heading text-[1.75rem] md:text-4xl lg:text-[2.75rem] font-bold text-primary-800 dark:text-white leading-[1.15] tracking-[-0.02em] mb-6 transition-colors duration-300">
              Solusi Digital yang Praktis, Cepat, dan Terjangkau.
            </h2>
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5 transition-colors duration-300">
              Kami memahami bahwa tidak semua orang memiliki waktu dan kemampuan teknis untuk mengembangkan kebutuhan digitalnya. Karena itu, kami menghadirkan proses yang sederhana namun efektif: pembuatan website, desain kreatif, konten berbasis AI, dan pengembangan aplikasi — dengan komunikasi yang jelas dan hasil yang presisi.
            </p>
            <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 transition-colors duration-300">
              Setiap proyek dikerjakan dengan standar yang sama: transparan, tepat waktu, dan berorientasi pada tujuan bisnis Anda. Kami tidak hanya menyelesaikan proyek — kami memastikan hasilnya benar-benar bekerja untuk Anda.
            </p>
            <div className="flex flex-col md:flex-row gap-4 flex-wrap">
              <Link
                to="/produk"
                className="inline-flex items-center justify-center gap-2 font-heading text-xs font-semibold tracking-[0.06em] py-[14px] px-7 no-underline transition-all duration-300 cursor-pointer bg-primary-800 dark:bg-primary text-white border-[1.5px] border-primary-800 dark:border-primary hover:bg-primary-900 dark:hover:bg-primary-400 hover:border-primary-900 dark:hover:border-primary-400 hover:-translate-y-[1px] group"
              >
                <span>Lihat Produk Kami</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[3px] inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>
              </Link>
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 font-heading text-xs font-semibold tracking-[0.06em] py-[14px] px-7 no-underline transition-all duration-300 cursor-pointer bg-transparent text-primary-800 dark:text-primary-100 border-[1.5px] border-neutral-200 dark:border-primary-800 hover:border-primary dark:hover:border-primary-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 w-full md:w-auto"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col order-0 min-[900px]:order-none max-w-[600px] min-[900px]:max-w-none mx-auto min-[900px]:mx-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-t-xl aspect-[16/10] border border-transparent dark:border-white/10 dark:border-b-0">
              <img
                src={aboutImg}
                alt="Ruang kerja kreatif Drena Creative"
                loading="lazy"
                decoding="async"
                width="1200"
                height="750"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="bg-primary-800 dark:bg-primary-900 rounded-b-xl flex flex-col md:flex-row transition-colors duration-300 dark:border dark:border-white/10">
              <div className="flex-1 p-4 lg:p-6 flex flex-col gap-1">
                <span className="font-heading text-xl lg:text-2xl font-semibold text-white tracking-[-0.01em]">4 Layanan</span>
                <span className="font-heading text-[10px] font-semibold text-white/80 tracking-[0.12em] uppercase">Website · Desain · AI · Aplikasi</span>
              </div>
              <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-white/15 self-stretch" />
              <div className="flex-1 p-4 lg:p-6 flex flex-col gap-1">
                <span className="font-heading text-xl lg:text-2xl font-semibold text-white tracking-[-0.01em]">30 Hari</span>
                <span className="font-heading text-[10px] font-semibold text-white/80 tracking-[0.12em] uppercase">Garansi Perbaikan Bug</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Nilai Kami ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-20 md:py-24 lg:py-28 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Nilai Kami"
            title="Komitmen yang Bisa Anda Andalkan"
            subtitle="Prinsip yang kami pegang di setiap proyek, dari yang terkecil hingga paling kompleks."
            align="center"
          />
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-12 md:mt-16">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="bg-white dark:bg-primary-950 border border-neutral-100 dark:border-white/10 rounded-xl p-6 transition-all duration-400 group hover:shadow-[0_8px_32px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary/10 text-primary dark:text-primary-300 flex items-center justify-center mb-4 border border-primary-100 dark:border-primary/30">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-heading text-base font-bold text-primary-800 dark:text-white mb-2 tracking-[-0.01em]">{value.title}</h3>
                <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-[1.75]">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Tim Kami ── */}
      <section className="bg-white dark:bg-primary-950 py-20 md:py-24 lg:py-28 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Tim Kami"
            title="Orang-Orang di Balik Drena"
            subtitle="Kombinasi keahlian desain, pengembangan, dan strategi konten yang saling melengkapi."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="bg-neutral-50 dark:bg-primary-900 rounded-2xl p-6 lg:p-8 border border-neutral-100 dark:border-white/5 text-center flex flex-col items-center transition-all duration-400 group hover:shadow-xl hover:-translate-y-1 hover:border-primary-100 dark:hover:border-primary/50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`Foto ${member.name}`}
                    width="120"
                    height="120"
                    loading="lazy"
                    decoding="async"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white dark:border-primary-800 mb-5"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary-800 dark:bg-primary flex items-center justify-center mb-5" aria-hidden="true">
                    <span className="font-heading text-2xl font-bold text-white">{getInitials(member.name)}</span>
                  </div>
                )}
                <h3 className="font-heading text-lg font-bold text-primary-800 dark:text-white mb-1">{member.name}</h3>
                <p className="font-heading text-[10px] font-bold text-primary dark:text-primary-400 uppercase tracking-[0.12em] mb-3">{member.role}</p>
                <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-[1.7]">{member.bio}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 font-heading text-[11px] font-bold text-primary dark:text-primary-400 no-underline hover:text-primary-600 dark:hover:text-white transition-colors duration-200"
                  >
                    LinkedIn →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Cara Kami Bekerja ── */}
      <section className="bg-neutral-50 dark:bg-primary-900/20 py-20 md:py-24 lg:py-28 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto">
          <SectionHeader
            eyebrow="Proses"
            title="Cara Kami Bekerja"
            subtitle="Proses yang terstruktur memastikan setiap proyek selesai tepat waktu dengan kualitas terjaga."
            align="center"
          />
          <div className="grid grid-cols-1 min-[640px]:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 md:mt-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                className="bg-white dark:bg-primary-950 rounded-xl p-6 border border-neutral-100 dark:border-white/10 transition-all duration-400 group hover:shadow-[0_8px_32px_rgba(53,88,114,0.08)] dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:-translate-y-1"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="font-heading text-3xl font-bold text-tertiary-200 dark:text-primary-300 mb-4 block" aria-hidden="true">{step.num}</span>
                <h3 className="font-heading text-base font-bold text-primary-800 dark:text-white mb-2">{step.title}</h3>
                <p className="font-body text-xs text-neutral-600 dark:text-neutral-300 leading-[1.75]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 font-heading text-xs font-bold tracking-[0.1em] py-4 px-8 bg-primary-800 dark:bg-primary text-white no-underline transition-all duration-300 border-[1.5px] border-primary-800 dark:border-primary hover:bg-primary-900 dark:hover:bg-primary-400 hover:border-primary-900 dark:hover:border-primary-400 hover:-translate-y-[1px]"
            >
              MULAI PROYEK ANDA
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. Kontak ── */}
      <Contact
        ctaTitle={<>Mari Bekerja <br /> Sama dengan Kami</>}
        ctaSubtitle="Konsultasikan kebutuhan digital Anda sekarang. Tim kami siap membantu menentukan solusi terbaik untuk tujuan dan anggaran Anda."
        ctaButton="KONSULTASI GRATIS"
        waMessage="Halo Drena Creative, saya ingin berkonsultasi mengenai solusi digital untuk kebutuhan saya."
      />

      <Footer />
    </>
  );
}
