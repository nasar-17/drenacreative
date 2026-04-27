import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section className="bg-neutral-50 dark:bg-primary-950 py-20 md:py-24 lg:py-[160px] px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="kontak">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 min-[900px]:grid-cols-2 gap-12 min-[900px]:gap-16 items-center">
        {/* Left Column */}
        <motion.div 
          className="max-w-full min-[900px]:max-w-[500px] text-center min-[900px]:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-[1.75rem] md:text-4xl lg:text-[4rem] font-bold text-primary-800 dark:text-white leading-[1.1] tracking-[-0.02em] mb-6 transition-colors duration-300">
            Mulai Proyek <br/><br/> Anda Sekarang
          </h2>
          <p className="font-body text-base font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] mb-10 transition-colors duration-300">
            Konsultasikan kebutuhan Anda sekarang. Kami siap membantu pembuatan website, desain, maupun tugas kuliah dengan proses cepat, hasil rapi, dan biaya terjangkau.
          </p>
          <a href="#" className="inline-flex items-center gap-3 font-heading text-xs font-bold tracking-[0.1em] py-4 px-8 bg-primary-800 dark:bg-primary text-white no-underline transition-all duration-300 border-[1.5px] border-primary-800 dark:border-primary hover:bg-primary-900 dark:hover:bg-primary-400 hover:border-primary-900 dark:hover:border-primary-400 hover:shadow-[0_8px_24px_rgba(53,88,114,0.25)] dark:hover:shadow-[0_8px_24px_rgba(156,213,255,0.2)] hover:-translate-y-[2px] group">
            <span>KONSULTASI GRATIS</span>
            <svg className="transition-transform duration-300 group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-white to-[#f0f7fb] dark:from-primary-900 dark:to-primary-950 rounded-xl p-6 md:p-8 lg:p-12 shadow-[0_12px_40px_rgba(53,88,114,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)] border border-white/50 dark:border-white/10 relative overflow-hidden group transition-colors duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(156,213,255,0.1),transparent_50%)] pointer-events-none" />
            
            <h3 className="font-heading text-2xl font-bold text-primary-800 dark:text-white mb-8 relative z-10 transition-colors duration-300">Detail Kontak</h3>
            
            <div className="flex flex-col relative z-10">
              {/* Email Item */}
              <div className="flex flex-col min-[480px]:flex-row items-start min-[480px]:items-center gap-4 min-[480px]:gap-6 py-3 transition-transform duration-300 hover:translate-x-1">
                <div className="w-10 h-10 min-[480px]:w-12 min-[480px]:h-12 bg-white dark:bg-primary-950 rounded flex items-center justify-center text-primary-600 dark:text-primary-300 shadow-[0_4px_12px_rgba(53,88,114,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] shrink-0 transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="font-heading text-[10px] font-bold text-neutral-400 tracking-[0.1em] uppercase">EMAIL KAMI</span>
                  <a href="mailto:drenacreative@gmail.com" target="_blank" rel="noreferrer" className="font-body text-sm font-medium text-primary-800 dark:text-primary-300 no-underline transition-colors duration-300 hover:text-primary dark:hover:text-primary-100 break-all min-[480px]:break-normal">drenacreative@gmail.com</a>
                </div>
              </div>

              <div className="h-[1px] bg-[rgba(53,88,114,0.08)] dark:bg-white/10 w-full my-4 transition-colors duration-300" />

              {/* Phone Item */}
              <div className="flex flex-col min-[480px]:flex-row items-start min-[480px]:items-center gap-4 min-[480px]:gap-6 py-3 transition-transform duration-300 hover:translate-x-1">
                <div className="w-10 h-10 min-[480px]:w-12 min-[480px]:h-12 bg-white dark:bg-primary-950 rounded flex items-center justify-center text-primary-600 dark:text-primary-300 shadow-[0_4px_12px_rgba(53,88,114,0.05)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)] shrink-0 transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-[2px]">
                  <span className="font-heading text-[10px] font-bold text-neutral-400 tracking-[0.1em] uppercase">WHATSAPP KAMI</span>
                  <a href="https://wa.me/6288242328927" target="_blank" rel="noreferrer" className="font-body text-sm font-medium text-primary-800 dark:text-primary-300 no-underline transition-colors duration-300 hover:text-primary dark:hover:text-primary-100 break-all min-[480px]:break-normal">+62 882 4232 8927</a> 
                </div>
              </div>

              <div className="h-[1px] bg-[rgba(53,88,114,0.08)] dark:bg-white/10 w-full my-4 transition-colors duration-300" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
