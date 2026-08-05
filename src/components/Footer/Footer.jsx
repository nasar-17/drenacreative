import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-neutral-50 dark:bg-primary-950 py-6 px-5 md:px-6 lg:px-8 border-t border-neutral-100 dark:border-white/5 transition-colors duration-300">
      <motion.div
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 md:gap-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-heading text-[10px] md:text-[11px] font-bold text-primary-800 dark:text-neutral-300 tracking-[0.1em] uppercase m-0 transition-colors duration-300">
          © 2026 DRENA CREATIVE. ALL RIGHTS RESERVED.
        </p>
        <ul className="flex flex-col min-[480px]:flex-row flex-wrap items-center justify-center gap-3 min-[480px]:gap-4 md:gap-6 list-none m-0 p-0">
          <li>
            <a
              href="https://www.instagram.com/drena_creative/"
              target="_blank"
              rel="noreferrer"
              className="font-heading text-[10px] md:text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 no-underline tracking-[0.1em] uppercase transition-colors duration-300 hover:text-primary dark:hover:text-primary-400"
            >
              INSTAGRAM
            </a>
          </li>
          <li>
            <Link
              to="/privacy"
              className="font-heading text-[10px] md:text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 no-underline tracking-[0.1em] uppercase transition-colors duration-300 hover:text-primary dark:hover:text-primary-400"
            >
              PRIVACY POLICY
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className="font-heading text-[10px] md:text-[11px] font-semibold text-neutral-600 dark:text-neutral-300 no-underline tracking-[0.1em] uppercase transition-colors duration-300 hover:text-primary dark:hover:text-primary-400"
            >
              TERMS OF USE
            </Link>
          </li>
        </ul>
      </motion.div>
    </footer>
  );
}
