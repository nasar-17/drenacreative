import portfolioWebImg from '../assets/gen/portfolio-web.webp';
import portfolioDesignImg from '../assets/gen/portfolio-design.webp';
import portfolioTugasImg from '../assets/gen/portfolio-tugas.webp';

/* ══════════════════════════════════════════════════════════════════════════
   DATA KLIEN — WAJIB DIGANTI DENGAN DATA ASLI
   ────────────────────────────────────────────────────────────────────────────
   Data berikut adalah placeholder. Sebelum website diindeks / diiklankan,
   ganti seluruh konten di bawah dengan data klien NYATA yang bisa diverifikasi
   (nama, role/jabatan, deskripsi hasil, link proyek, dan foto bila ada).
   Google menilai E-E-A-T (Expertise, Experience, Authoritativeness,
   Trustworthiness) — testimoni & portofolio fiktif merugikan ranking.
   ══════════════════════════════════════════════════════════════════════════ */

export const portfolioItems = [
  {
    id: 1,
    category: 'Aplikasi',
    title: 'Promtara',
    desc: 'Platform SaaS AI Prompt Library yang membantu pengguna menemukan, mengelola, dan menggunakan prompt AI berkualitas melalui pencarian cerdas, kategori terstruktur, dan pengalaman pengguna yang modern.',
    tags: ['SaaS', 'AI', 'Next.js', 'SEO'],
    projectUrl: 'https://promtara.my.id',
  },
  {
    id: 2,
    category: 'Website',
    title: 'Website Bank Sampah Unit 04 Karunrung',
    desc: 'Website company profile dan layanan digital untuk Bank Sampah Unit 04 Kelurahan Karunrung, Makassar, dengan informasi layanan, edukasi, dan pengelolaan sampah.',
    tags: ['Website', 'Company Profile', 'Government'],
    projectUrl: '',
  },
  {
    id: 3,
    category: 'Website',
    title: 'Website Kampung Uwaiye',
    desc: 'Website profil kampung untuk Kampung Uwaiye, Distrik Kebo, Kabupaten Paniai, Papua Tengah, lengkap dengan informasi desa, pelayanan publik, berita, dan administrasi.',
    tags: ['Website Desa', 'CMS', 'Government'],
    projectUrl: '',
  },
  {
    id: 4,
    category: 'Website',
    title: 'Website Drena Creative',
    desc: 'Website resmi Drena Creative yang dibangun dengan React, Vite, Tailwind CSS, Framer Motion, serta dioptimalkan untuk performa, SEO, dan pengalaman pengguna modern.',
    tags: ['React', 'Tailwind CSS', 'SEO'],
    projectUrl: '',
  },
  {
    id: 5,
    category: 'Design',
    title: 'Brand Identity Promtara',
    desc: 'Perancangan identitas visual, logo, dan sistem branding modern untuk Promtara sebagai produk SaaS AI di bawah ekosistem Drena.',
    tags: ['Logo', 'Brand Identity', 'UI/UX'],
    projectUrl: '',
  },
  {
    id: 6,
    category: 'Design',
    title: 'Konten Edukasi AI & Coding',
    desc: 'Pembuatan carousel Instagram, materi promosi, dan aset visual bertema AI, Coding, Transformasi Digital, dan Teknologi untuk berbagai kampanye digital.',
    tags: ['Social Media', 'Carousel', 'Branding'],
    projectUrl: '',
  },
];

export const categoryColor = {
  Website: 'text-primary dark:text-primary-300 bg-primary-50 dark:bg-primary/10',
  Design: 'text-secondary-600 dark:text-secondary-300 bg-secondary-50 dark:bg-secondary/10',
  Aplikasi: 'text-tertiary-700 dark:text-tertiary-300 bg-tertiary-50 dark:bg-tertiary/10',
};

export const categoryImage = {
  Website: portfolioWebImg,
  Design: portfolioDesignImg,
  Aplikasi: portfolioTugasImg,
};

// Testimoni masih menunggu data asli dari klien.
// Isi array berikut dengan format:
//   { id, name, role, text, initials }
// Section "Kata Mereka" di beranda otomatis tampil saat array ini tidak kosong.
export const testimonials = [];
