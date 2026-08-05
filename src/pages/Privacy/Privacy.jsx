import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO/SEO';
import { Footer } from '../../components/Footer/Footer';

const sections = [
  {
    title: '1. Data yang Kami Kumpulkan',
    body: 'Kami mengumpulkan data yang Anda berikan secara langsung melalui komunikasi WhatsApp dan email (nama, nomor kontak, dan detail proyek). Kami juga menggunakan cookie pihak ketiga (Google Analytics, Meta Pixel) untuk mengukur lalu lintas dan performa situs.',
  },
  {
    title: '2. Penggunaan Data',
    body: 'Data digunakan untuk memproses pesanan, berkomunikasi seputar proyek, memberikan dukungan, dan memperbaiki layanan. Kami tidak menjual data pribadi Anda kepada pihak mana pun.',
  },
  {
    title: '3. Penyimpanan & Keamanan',
    body: 'Data disimpan pada layanan pihak ketiga terpercaya (Google, WhatsApp) dengan enkripsi standar industri. Kami membatasi akses data hanya kepada pihak yang membutuhkan.',
  },
  {
    title: '4. Cookie & Analitik',
    body: 'Situs ini menggunakan cookie untuk keperluan analitik dan iklan. Anda dapat mengelola persetujuan cookie melalui pengaturan browser atau panel consent yang tersedia.',
  },
  {
    title: '5. Hak Anda',
    body: 'Anda berhak meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan dengan menghubungi kami melalui email drenacreative@gmail.com.',
  },
];

export function Privacy() {
  return (
    <>
      <SEO
        title="Kebijakan Privasi — Drena Creative"
        description="Kebijakan privasi Drena Creative: bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi data pribadi Anda."
      />
      <section className="bg-white dark:bg-primary-950 pt-28 md:pt-36 pb-20 px-5 md:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto">
          <p className="font-heading text-xs font-bold text-primary dark:text-primary-400 tracking-[0.15em] uppercase mb-4">Legal</p>
          <h1 className="font-heading text-[2rem] md:text-5xl font-bold text-primary-800 dark:text-white tracking-[-0.02em] mb-6">
            Kebijakan Privasi
          </h1>
          <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-12">
            Terakhir diperbarui: 5 Agustus 2026
          </p>
          <div className="flex flex-col gap-8">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-lg font-bold text-primary-800 dark:text-white mb-3">{s.title}</h2>
                <p className="font-body text-sm text-neutral-600 dark:text-neutral-300 leading-[1.8]">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 font-heading text-xs font-bold tracking-[0.08em] py-3 px-6 bg-primary-800 dark:bg-primary text-white no-underline hover:bg-primary-900 dark:hover:bg-primary-400 transition-colors duration-300"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
