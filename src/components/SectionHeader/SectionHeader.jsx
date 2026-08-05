import { motion } from 'framer-motion';

/**
 * SectionHeader
 * Reusable centered section heading block.
 * Mirrors the exact pattern used in Services.jsx header and Process.jsx header.
 *
 * Props:
 *   eyebrow  — small-caps label above the title (optional)
 *   title    — h2 heading text
 *   subtitle — body paragraph below title (optional)
 *   maxW     — max-width class for subtitle (default: "max-w-[560px]")
 *   light    — if true, forces white text (for dark/hero backgrounds)
 */
export function SectionHeader({ eyebrow, title, subtitle, maxW = 'max-w-[560px]', light = false }) {
  return (
    <motion.div
      className="text-center max-w-[700px] mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {eyebrow && (
        <span
          className={`font-heading text-xs font-bold tracking-[0.15em] uppercase block mb-4 transition-colors duration-300 ${
            light ? 'text-tertiary-300' : 'text-primary dark:text-primary-400'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-heading text-[1.75rem] md:text-[2.25rem] lg:text-[3.5rem] font-bold tracking-[-0.02em] mb-6 leading-[1.15] transition-colors duration-300 ${
          light ? 'text-white' : 'text-primary-800 dark:text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-body text-base font-normal leading-[1.7] ${maxW} mx-auto transition-colors duration-300 ${
            light ? 'text-white/75' : 'text-neutral-600 dark:text-neutral-300'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
