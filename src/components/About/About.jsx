import { motion } from 'framer-motion';
import aboutImg from '../../assets/about-building.png';

export function About() {
  return (
    <section className="bg-white dark:bg-primary-950 py-24 md:py-32 px-5 md:px-8 overflow-hidden transition-colors duration-300" id="tentang">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-16 items-start">
        {/* Left column - Text */}
        <motion.div 
          className="pt-0 min-[900px]:pt-4 order-1 min-[900px]:order-none"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-heading text-xs font-bold text-primary dark:text-primary-400 tracking-[0.15em] uppercase block mb-4 transition-colors duration-300">IDENTITAS KAMI</span>
          <h2 className="font-heading text-[1.75rem] md:text-4xl lg:text-[3rem] font-bold text-primary-800 dark:text-white leading-[1.15] tracking-[-0.02em] mb-8 transition-colors duration-300">
            Partner Digital untuk Kebutuhan Akademik & Bisnis Anda.
          </h2>

          <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 transition-colors duration-300">
            DRENA CREATIVE hadir sebagai solusi bagi mahasiswa, UMKM, dan pemula yang membutuhkan layanan pembuatan website, desain, serta bantuan tugas akademik secara praktis dan profesional.
          </p>

          <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 transition-colors duration-300">
            Kami memahami bahwa tidak semua orang memiliki waktu dan kemampuan teknis untuk mengembangkan kebutuhan digitalnya. Oleh karena itu, kami menawarkan proses yang cepat, hasil yang tepat, dan biaya yang tetap terjangkau.Dengan pendekatan yang sederhana namun efektif, kami berkomitmen membantu Anda menyelesaikan kebutuhan digital tanpa kerumitan, sehingga Anda dapat fokus pada tujuan utama Anda.

          </p>

          <div className="flex flex-col md:flex-row gap-4 mt-8 flex-wrap">
            <a href="#proses" className="inline-flex items-center justify-center gap-2 font-heading text-xs font-semibold tracking-[0.06em] py-[14px] px-7 no-underline transition-all duration-300 cursor-pointer bg-primary-800 dark:bg-primary text-white border-[1.5px] border-primary-800 dark:border-primary hover:bg-primary-900 dark:hover:bg-primary-400 hover:border-primary-900 dark:hover:border-primary-400 hover:shadow-[0_4px_16px_rgba(53,88,114,0.3)] dark:hover:shadow-[0_4px_16px_rgba(156,213,255,0.2)] hover:-translate-y-[1px] group w-full md:w-auto">
              <span>Proses Kami</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[3px] inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#layanan" className="inline-flex items-center justify-center gap-2 font-heading text-xs font-semibold tracking-[0.06em] py-[14px] px-7 no-underline transition-all duration-300 cursor-pointer bg-transparent text-primary-800 dark:text-primary-100 border-[1.5px] border-neutral-200 dark:border-primary-800 hover:border-primary dark:hover:border-primary-400 hover:text-primary dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/50 w-full md:w-auto">
              Layanan Kami
            </a>
          </div>
        </motion.div>

        {/* Right column - Image + Stats */}
        <motion.div 
          className="flex flex-col order-0 min-[900px]:order-none max-w-[600px] min-[900px]:max-w-none mx-auto min-[900px]:mx-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative overflow-hidden rounded-t-xl aspect-[16/10] group border border-transparent dark:border-white/10 dark:border-b-0">
            <motion.img 
              src={aboutImg} 
              alt="Modern architecture" 
              className="w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.03]" 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.5 }}
            />
            <div className="absolute inset-0 bg-primary-900/10 dark:bg-transparent transition-colors duration-300 pointer-events-none" />
          </div>

          {/* Stats bar */}
          <motion.div 
            className="flex flex-col md:flex-row items-stretch bg-primary-800 dark:bg-primary-900 rounded-b-xl transition-colors duration-300 dark:border dark:border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex-1 p-4 lg:p-6 flex flex-col gap-1">
              <span className="font-heading text-xl lg:text-2xl font-semibold text-white tracking-[-0.01em]">Mulai</span>
              <span className="font-heading text-[10px] font-semibold text-white/50 tracking-[0.12em] uppercase">PERJALANAN INOVASI</span>
            </div>
            <div className="w-full h-[1px] md:w-[1px] md:h-auto bg-white/15 self-stretch" />
            <div className="flex-1 p-4 lg:p-6 flex flex-col gap-1">
              <span className="font-heading text-xl lg:text-2xl font-semibold text-white tracking-[-0.01em]">Fokus</span>
              <span className="font-heading text-[10px] font-semibold text-white/50 tracking-[0.12em] uppercase">DESAIN & AKADEMIS</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
