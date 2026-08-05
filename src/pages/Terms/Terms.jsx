import { Link } from 'react-router-dom';
import { SEO } from '../../components/SEO/SEO';
import { Footer } from '../../components/Footer/Footer';

const sections = [
  {
    title: '1. Layanan',
    body: 'Drena Creative menyediakan layanan pembuatan website, desain, konten berbasis AI, pengembangan aplikasi, dan layanan pendukung akademik sesuai kesepakatan dengan klien.',
  },
  {
    title: '2. Pemesanan & Pembayaran',
    body: 'Pemesanan disepakati melalui komunikasi WhatsApp/email. Pembayaran dilakukan dengan DP 50% di awal dan pelunasan 50% setelah proyek selesai, kecuali disepakati lain. Kami menerima transfer bank dan dompet digital.',
  },
  {
    title: '3. Revisi & Garansi',
    body: 'Revisi sepuasnya berlaku selama proses pengerjaan sesuai ruang lingkup awal. Setiap proyek mendapatkan garansi perbaikan bug selama 30 hari setelah serah terima. Penambahan fitur di luar ruang lingkup dikenakan biaya terpisah.',
  },
  {
    title: '4. Hak Kekayaan Intelektual',
    body: 'Source code dan aset yang dikembangkan menjadi milik klien setelah seluruh pembayaran dilunasi. Kami berhak menampilkan hasil pekerjaan sebagai portofolio kecuali disepakati lain.',
  },
  {
    title: '5. Layanan Pendampingan',
    body: 'Materi konsultasi dan pendampingan yang kami berikan bersifat edukatif dan transparan. Penggunaan hasil layanan sepenuhnya menjadi tanggung jawab klien sesuai ketentuan yang berlaku.',
  },
  {
    title: '6. Batasan Tanggung Jawab',
    body: 'Kami berupaya maksimal memenuhi estimasi waktu yang disepakati, namun keterlambatan di luar kendali kami (keterlambatan respons klien, kondisi force majeure) tidak menjadi tanggung jawab kami.',
  },
];

export function Terms() {
  return (
    <>
      <SEO
        title="Syarat & Ketentuan — Drena Creative"
        description="Syarat dan ketentuan penggunaan layanan Drena Creative: pemesanan, pembayaran, revisi, garansi, dan hak kekayaan intelektual."
      />
      <section className="bg-white dark:bg-primary-950 pt-28 md:pt-36 pb-20 px-5 md:px-6 lg:px-8 transition-colors duration-300">
        <div className="max-w-[800px] mx-auto">
          <p className="font-heading text-xs font-bold text-primary dark:text-primary-400 tracking-[0.15em] uppercase mb-4">Legal</p>
          <h1 className="font-heading text-[2rem] md:text-5xl font-bold text-primary-800 dark:text-white tracking-[-0.02em] mb-6">
            Syarat & Ketentuan
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
          <div className="mt-12">
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
