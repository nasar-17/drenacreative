import { motion } from 'framer-motion';
import heroBg from '../../assets/hero-bg.png';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover object-center block"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#283f54]/70 via-[#355872]/75 to-[#1c2e3e]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-8 max-w-[800px] animate-heroFadeIn">
        {/* Decorative line */}
        <motion.div 
          className="h-[2px] bg-white/60 mb-10 md:mb-16 mx-auto" 
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 40, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.h1 
          className="font-heading text-[2rem] sm:text-4xl md:text-[3.75rem] font-bold text-white tracking-[0.08em] md:tracking-[0.15em] mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          DRENA CREATIVE
        </motion.h1>

        <motion.h2 
          className="font-heading text-[1.1rem] sm:text-xl md:text-[1.75rem] font-normal text-white/85 tracking-[0.06em] mb-8 leading-snug"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Solusi Website dan Desain Profesional untuk Kebutuhan Akademik & Bisnis Anda
        </motion.h2>

        <motion.p 
          className="font-body text-sm md:text-base font-normal text-white/70 leading-relaxed max-w-[560px] mb-10 px-2 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Membantu mahasiswa, UMKM, dan pemula mendapatkan solusi digital yang praktis, cepat, dan profesional tanpa biaya tinggi.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div 
          className="flex flex-col items-center gap-2 mb-8 animate-scrollBounce"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="font-heading text-xs font-medium text-white/60 tracking-[0.2em]">GULIR</span>
          <svg
            className="w-4 h-4 text-white/60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>
        </motion.div>

        {/* CTA button */}
        <motion.a 
          href="#tentang" 
          className="inline-flex items-center gap-3 font-heading text-[11px] md:text-xs font-semibold text-white tracking-[0.15em] no-underline py-[14px] px-[28px] md:py-4 md:px-9 border-[1.5px] border-white/50 bg-transparent transition-all duration-400 relative overflow-hidden group hover:border-white/80 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="absolute inset-0 bg-white/10 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100" />
          <span className="relative z-10">JELAJAHI VISI KAMI</span>
          <svg
            className="w-[18px] h-[18px] relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
