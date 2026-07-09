import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeader } from '../SectionHeader/SectionHeader';

/**
 * FAQ
 * Accordion FAQ section using Framer Motion AnimatePresence.
 * Card style matches the existing card design system.
 *
 * Props:
 *   title    — section heading
 *   subtitle — section subheading (optional)
 *   items    — array of { question: string, answer: string }
 */
function FAQItem({ item, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="border border-neutral-100 dark:border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary-100 dark:hover:border-primary/40 bg-white dark:bg-primary-950"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left group"
        onClick={() => setIsOpen((o) => !o)}
        aria-expanded={isOpen}
      >
        <span className="font-heading text-sm md:text-base font-semibold text-primary-800 dark:text-white leading-snug transition-colors duration-300 group-hover:text-primary dark:group-hover:text-primary-300">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-neutral-400 dark:text-neutral-500 group-hover:text-primary dark:group-hover:text-primary-400 transition-colors duration-300"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6">
              <div className="h-[1px] bg-[rgba(53,88,114,0.08)] dark:bg-white/10 w-full mb-4 transition-colors duration-300" />
              <p className="font-body text-sm font-normal text-neutral-500 dark:text-neutral-400 leading-[1.75] transition-colors duration-300">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ({ title = 'Pertanyaan Umum', subtitle, items = [] }) {
  return (
    <section className="bg-white dark:bg-primary-950 py-16 md:py-20 lg:py-24 px-5 md:px-6 lg:px-8 overflow-hidden transition-colors duration-300">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <SectionHeader title={title} subtitle={subtitle} />
        </div>

        {/* Accordion items */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
