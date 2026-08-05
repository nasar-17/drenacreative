import { motion } from 'framer-motion';
import heroBg from '../../assets/hero-bg.png';

/**
 * PageHero
 * Shorter inner-page hero for service pages (non-fullscreen).
 * Preserves same overlay gradient, bg image, and animation language as Home Hero.
 *
 * Props:
 *   eyebrow    — small-caps label (e.g. "Layanan Kami")
 *   title      — h1 heading
 *   subtitle   — subheading paragraph
 *   ctaLabel   — primary CTA button text
 *   ctaHref    — primary CTA href (default: "#kontak")
 *   ctaScroll  — if true, CTA scrolls to #kontak instead of navigating
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel = 'Konsultasi Gratis',
  ctaHref = '#kontak',
  ctaScroll = true,
  bgImage,
}) {
  const handleCtaClick = (e) => {
    if (ctaScroll) {
      e.preventDefault();
      document.getElementById('kontak')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage || heroBg}
          alt=""
          className="w-full h-full object-cover object-center block"
          width="1920"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#283f54]/75 via-[#355872]/80 to-[#1c2e3e]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-8 max-w-[760px] py-16 md:py-20">
        {/* Eyebrow */}
        {eyebrow && (
          <motion.span
            className="font-heading text-xs font-bold text-white/80 tracking-[0.2em] uppercase block mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {eyebrow}
          </motion.span>
        )}

        {/* Decorative line */}
        <motion.div
          className="h-[2px] bg-white/50 mb-8 mx-auto"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 40, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, delay: 0.2 }}
        />

        {/* Title */}
        <motion.h1
          className="font-heading text-[1.9rem] sm:text-4xl md:text-[3.2rem] font-bold text-white tracking-[-0.01em] md:tracking-[0.02em] mb-5"
          style={{ lineHeight: '1' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            className="font-body text-sm md:text-base font-normal text-white/70 leading-relaxed max-w-[520px] mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA */}
        <motion.a
          href={ctaHref}
          onClick={handleCtaClick}
          className="inline-flex items-center gap-3 font-heading text-[11px] md:text-xs font-semibold text-white tracking-[0.15em] no-underline py-[14px] px-[28px] md:py-4 md:px-9 border-[1.5px] border-white/50 bg-transparent transition-all duration-400 relative overflow-hidden group hover:border-white/80 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="absolute inset-0 bg-white/10 scale-x-0 origin-left transition-transform duration-400 ease-out group-hover:scale-x-100" />
          <span className="relative z-10">{ctaLabel}</span>
          <svg
            className="w-[16px] h-[16px] relative z-10 transition-transform duration-300 group-hover:translate-x-1 inline"
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
