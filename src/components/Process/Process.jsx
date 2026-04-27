import { motion } from 'framer-motion';

export function Process() {
  return (
    <section className="bg-gradient-to-b from-white via-[#f8f6f0] to-neutral-50 dark:from-primary-950 dark:via-primary-900 dark:to-primary-950 pt-20 md:pt-24 lg:pt-[160px] pb-16 lg:pb-[128px] px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300" id="proses">
      {/* Header */}
      <motion.div 
        className="text-center max-w-[600px] mx-auto mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-heading text-[2rem] md:text-4xl lg:text-[3rem] font-bold text-primary-800 dark:text-white tracking-[-0.02em] mb-5 leading-[1.15] transition-colors duration-300">Cara Kami Bekerja</h2>
        <p className="font-body text-sm md:text-base font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">
          Kami menerapkan proses kerja yang jelas dan terstruktur untuk memastikan setiap proyek selesai tepat waktu dengan hasil yang sesuai kebutuhan Anda.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-[900px] mx-auto">
        {/* Vertical line */}
        {/* Vertical line */}
        <motion.div 
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-white/10 to-transparent left-4 min-[900px]:left-1/2 min-[900px]:-translate-x-1/2"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
        />

        {/* Step 1 — Konsultasi (Left) */}
        <motion.div 
          className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_1fr] min-[900px]:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 min-[900px]:gap-0 mb-8 md:mb-12 min-[900px]:mb-24 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-start-2 min-[900px]:col-start-1 min-[900px]:justify-self-end min-[900px]:mr-8 bg-white dark:bg-primary-950 rounded-xl p-5 md:p-6 lg:p-8 shadow-[0_4px_24px_rgba(53,88,114,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-[rgba(53,88,114,0.06)] dark:border-white/10 max-w-none min-[900px]:max-w-[280px] transition-all duration-400 group hover:shadow-[0_8px_36px_rgba(53,88,114,0.1)] dark:hover:shadow-[0_8px_36px_rgba(0,0,0,0.4)] hover:-translate-y-[3px]">
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-tertiary-100 dark:bg-primary-900 text-primary dark:text-primary-300 mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-white mb-3 tracking-[-0.01em] transition-colors duration-300">Konsultasi</h3>
            <p className="font-body text-xs font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">
              Kami memulai dengan memahami kebutuhan dan tujuan Anda secara detail, agar solusi yang diberikan benar-benar sesuai.
            </p>
          </div>
          <div className="col-start-1 min-[900px]:col-start-2 justify-self-center w-[14px] h-[14px] rounded-full bg-neutral-300 dark:bg-neutral-600 border-[3px] border-neutral-50 dark:border-primary-900 relative z-10 shadow-[0_0_0_4px_rgba(53,88,114,0.06)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-all duration-400" />
        </motion.div>

        {/* Step 2 — Desain (Right) */}
        <motion.div 
          className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_1fr] min-[900px]:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 min-[900px]:gap-0 mb-8 md:mb-12 min-[900px]:mb-24 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-start-1 min-[900px]:col-start-2 justify-self-center w-[14px] h-[14px] rounded-full bg-neutral-300 dark:bg-neutral-600 border-[3px] border-neutral-50 dark:border-primary-900 relative z-10 shadow-[0_0_0_4px_rgba(53,88,114,0.06)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-all duration-400" />
          <div className="col-start-2 min-[900px]:col-start-3 min-[900px]:justify-self-start min-[900px]:ml-8 bg-white dark:bg-primary-950 rounded-xl p-5 md:p-6 lg:p-8 shadow-[0_4px_24px_rgba(53,88,114,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-[rgba(53,88,114,0.06)] dark:border-white/10 max-w-none min-[900px]:max-w-[280px] transition-all duration-400 group hover:shadow-[0_8px_36px_rgba(53,88,114,0.1)] dark:hover:shadow-[0_8px_36px_rgba(0,0,0,0.4)] hover:-translate-y-[3px]">
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-tertiary-100 dark:bg-primary-900 text-primary dark:text-primary-300 mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-white mb-3 tracking-[-0.01em] transition-colors duration-300">Perencanaan & Desain</h3>
            <p className="font-body text-xs font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">
              Kami merancang konsep dan tampilan yang sesuai dengan kebutuhan Anda, dengan fokus pada kemudahan penggunaan dan tampilan yang profesional.
            </p>
          </div>
        </motion.div>

        {/* Step 3 — Eksekusi (Left) */}
        <motion.div 
          className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_1fr] min-[900px]:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 min-[900px]:gap-0 mb-8 md:mb-12 min-[900px]:mb-24 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-start-2 min-[900px]:col-start-1 min-[900px]:justify-self-end min-[900px]:mr-8 bg-white dark:bg-primary-950 rounded-xl p-5 md:p-6 lg:p-8 shadow-[0_4px_24px_rgba(53,88,114,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-[rgba(53,88,114,0.06)] dark:border-white/10 max-w-none min-[900px]:max-w-[280px] transition-all duration-400 group hover:shadow-[0_8px_36px_rgba(53,88,114,0.1)] dark:hover:shadow-[0_8px_36px_rgba(0,0,0,0.4)] hover:-translate-y-[3px]">
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-tertiary-100 dark:bg-primary-900 text-primary dark:text-primary-300 mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-white mb-3 tracking-[-0.01em] transition-colors duration-300">Revisi & Penyelesaian</h3>
            <p className="font-body text-xs font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">
              Kami melakukan pengecekan akhir dan revisi jika diperlukan, hingga hasil benar-benar siap digunakan.
            </p>
          </div>
          <div className="col-start-1 min-[900px]:col-start-2 justify-self-center w-[14px] h-[14px] rounded-full bg-neutral-300 dark:bg-neutral-600 border-[3px] border-neutral-50 dark:border-primary-900 relative z-10 shadow-[0_0_0_4px_rgba(53,88,114,0.06)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-all duration-400" />
        </motion.div>

        {/* Step 4 — Pengiriman (Right) */}
        <motion.div 
          className="grid grid-cols-[32px_1fr] md:grid-cols-[48px_1fr] min-[900px]:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4 min-[900px]:gap-0 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="col-start-1 min-[900px]:col-start-2 justify-self-center w-[14px] h-[14px] rounded-full bg-neutral-300 dark:bg-neutral-600 border-[3px] border-neutral-50 dark:border-primary-900 relative z-10 shadow-[0_0_0_4px_rgba(53,88,114,0.06)] dark:shadow-[0_0_0_4px_rgba(255,255,255,0.05)] transition-all duration-400" />
          <div className="col-start-2 min-[900px]:col-start-3 min-[900px]:justify-self-start min-[900px]:ml-8 bg-white dark:bg-primary-950 rounded-xl p-5 md:p-6 lg:p-8 shadow-[0_4px_24px_rgba(53,88,114,0.06)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] border border-[rgba(53,88,114,0.06)] dark:border-white/10 max-w-none min-[900px]:max-w-[280px] transition-all duration-400 group hover:shadow-[0_8px_36px_rgba(53,88,114,0.1)] dark:hover:shadow-[0_8px_36px_rgba(0,0,0,0.4)] hover:-translate-y-[3px]">
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-tertiary-100 dark:bg-primary-900 text-primary dark:text-primary-300 mb-4 transition-all duration-300 group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-800 dark:text-white mb-3 tracking-[-0.01em] transition-colors duration-300">Pengiriman</h3>
            <p className="font-body text-xs font-normal text-neutral-500 dark:text-neutral-400 leading-[1.7] transition-colors duration-300">
              Tinjauan struktural akhir, penerapan, dan serah terima. Memastikan kualitas jangka panjang dan kinerja tingkat tinggi.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
