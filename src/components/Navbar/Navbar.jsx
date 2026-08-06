import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/siteData';

/* ══════════════════════════════════════════════════════════════════════════
   NAV STRUCTURE
   ══════════════════════════════════════════════════════════════════════════ */
const NAV_ITEMS = [
  { label: 'Home', hash: 'hero' },
  { label: 'About', hash: 'about' },
  {
    label: 'Layanan',
    hash: 'layanan-website',
    children: [
      { label: 'Layanan Website', hash: 'layanan-website' },
      { label: 'AI Content Branding', hash: 'layanan-ai-content-branding' },
      { label: 'Layanan Aplikasi', hash: 'layanan-aplikasi' },
    ],
  },
  { label: 'Produk Kami', hash: 'produk-kami' },
  { label: 'Karya Kami', hash: 'karya-kami' },
  ...(testimonials.length > 0 ? [{ label: 'Kata Mereka', hash: 'kata-mereka' }] : []),
  { label: 'FAQ', hash: 'faq' },
];

/* ══════════════════════════════════════════════════════════════════════════
   CHEVRON ICON
   ══════════════════════════════════════════════════════════════════════════ */
function ChevronIcon({ isOpen, size = 14 }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.25 }}
    >
      <path d="M6 9l6 6 6-6" />
    </motion.svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   DESKTOP DROPDOWN
   ══════════════════════════════════════════════════════════════════════════ */
function DesktopDropdown({ item, onItemClick }) {
  return (
    <motion.div
      className="absolute top-full left-0 mt-2 w-56 z-[1001]"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2 }}
    >
      {/* Arrow — positioned at nav item left edge */}
      <div className="flex pl-4">
        <div className="w-3 h-3 rotate-45 bg-white dark:bg-primary-900 border-t border-l border-neutral-100 dark:border-white/10 -mb-1.5 relative z-10" />
      </div>
      <div className="bg-white dark:bg-primary-900 backdrop-blur-md rounded-xl shadow-[0_12px_40px_rgba(53,88,114,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] border border-neutral-100 dark:border-white/10 overflow-hidden">
        {item.children.map((child) => (
          <a
            key={child.hash}
            href={`#${child.hash}`}
            onClick={(e) => onItemClick(e, child.hash)}
            className="flex items-center gap-3 px-4 py-3 font-body text-sm text-neutral-600 dark:text-neutral-300 no-underline transition-colors duration-200 hover:bg-primary-50 dark:hover:bg-primary-800/60 hover:text-primary dark:hover:text-white first:rounded-t-xl last:rounded-b-xl group/ddi"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary-200 dark:bg-primary/50 group-hover/ddi:bg-primary dark:group-hover/ddi:bg-tertiary-300 transition-colors duration-200 shrink-0" />
            {child.label}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════════════════
   MAIN NAVBAR
   ══════════════════════════════════════════════════════════════════════════ */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Kelas 'dark' sudah dipasang pre-paint di index.html sebelum React mount
  const [isDarkMode, setIsDarkMode] = useState(
    () => typeof document !== 'undefined' && document.documentElement.classList.contains('dark')
  );
  const [activeDropdown, setActiveDropdown] = useState(null); // label string | null
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null); // label string | null
  const [activeSection, setActiveSection] = useState('hero');
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* ── Reset menu state saat route berubah (render-time adjustment) ── */
  const locationKey = location.key;
  const [prevLocationKey, setPrevLocationKey] = useState(locationKey);
  if (prevLocationKey !== locationKey) {
    setPrevLocationKey(locationKey);
    setMenuOpen(false);
    setMobileOpenDropdown(null);
    setActiveDropdown(null);
  }

  /* ── Close mobile menu / dropdown on Escape ── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setMobileOpenDropdown(null);
        setActiveDropdown(null);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* ── Scroll listener & Active Section Tracker ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = NAV_ITEMS.reduce((acc, item) => {
        acc.push(item.hash);
        if (item.children) {
          item.children.forEach(c => acc.push(c.hash));
        }
        return acc;
      }, []);
      sections.push('kontak');

      const scrollPosition = window.scrollY + 120; // offset for header

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  /* ── Desktop dropdown hover handlers ── */
  const handleMouseEnter = (label) => {
    clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  /* ── Smooth Scroll to Section ── */
  const scrollToSection = (e, hash) => {
    if (e) e.preventDefault();
    setActiveDropdown(null);
    setMenuOpen(false);
    setMobileOpenDropdown(null);
    
    const navHeight = 72;
    const el = document.getElementById(hash);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      // Section hanya tersedia di beranda — navigasi ke home lalu scroll
      navigate(`/#${hash}`);
    }
  };

  /* ── Mobile parent nav item click ── */
  const handleMobileParentClick = (item) => {
    if (item.children) {
      setMobileOpenDropdown((prev) => (prev === item.label ? null : item.label));
    } else {
      scrollToSection(null, item.hash);
    }
  };

  /* ── Text color helpers ── */
  const navTextBase = (isInMenu) => {
    if (isInMenu) return 'text-white/85 hover:text-white';
    if (scrolled) return 'text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-white';
    return 'text-white/85 hover:text-white';
  };
  const underlineColor = (isInMenu) => {
    if (isInMenu) return 'bg-white';
    if (scrolled) return 'bg-primary dark:bg-white';
    return 'bg-white';
  };

  const sunIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
  const moonIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );

  return (
    <nav
      aria-label="Navigasi utama"
      className={`fixed top-0 left-0 right-0 z-[1000] px-5 md:px-6 lg:px-8 transition-all duration-300 w-full ${
        scrolled && !menuOpen
          ? 'bg-white/95 dark:bg-primary-900/95 shadow-sm dark:shadow-none dark:border-b dark:border-white/10 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 md:h-[72px] gap-4">
        {/* ── Logo ── */}
        <Link
          to="/"
          onClick={(e) => scrollToSection(e, 'hero')}
          className={`relative z-[1001] font-heading font-bold flex shrink-0 items-center gap-2 md:gap-3 transition-all duration-300 px-3 py-1.5 -ml-3 rounded-xl ${
            scrolled && !menuOpen
              ? 'text-primary-800 dark:text-white hover:text-primary dark:hover:text-primary-300'
              : 'text-white hover:text-white/85 bg-black/20 backdrop-blur-md border border-white/10'
          }`}
        >
          <img src="/Logo.png" className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0" alt="Drena Creative Logo" />
          <span className="text-[14px] md:text-lg tracking-normal md:tracking-[0.12em]">DRENA CREATIVE</span>
        </Link>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 z-[1001] relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <span className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'bg-white translate-y-[7px] rotate-45' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'}`} />
          <span className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'opacity-0' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'}`} />
          <span className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'bg-white -translate-y-[7px] -rotate-45' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'}`} />
        </button>

        {/* ── Mobile overlay ── */}
        <div
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* ── NAV LINKS (desktop) + MOBILE DRAWER ── */}
        <ul
          id="mobile-nav"
          className={`flex list-none m-0 flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-8 fixed md:static top-0 right-0 bottom-0 w-[70vw] sm:w-[55vw] md:w-auto bg-[#1c2e3e] dark:bg-primary-950 md:bg-transparent md:dark:bg-transparent z-[1000] pt-24 md:pt-0 pl-6 md:pl-0 pr-6 md:pr-0 transition-transform duration-300 shadow-2xl md:shadow-none overflow-y-auto md:overflow-visible ${
            menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isDropdownActive = item.children && item.children.some(c => activeSection === c.hash);
            const isCurrentActive = activeSection === item.hash || isDropdownActive;

            return (
              <li key={item.label} className="w-full md:w-auto relative">
                {/* ── Desktop: hover group with dropdown ── */}
                {item.children ? (
                  <div
                    className="hidden md:block relative"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <a
                      href={`#${item.hash}`}
                      onClick={(e) => scrollToSection(e, item.hash)}
                      className={`flex items-center gap-1 font-body font-medium transition-colors relative group text-sm tracking-[0.04em] ${
                        isCurrentActive
                          ? 'text-primary dark:text-tertiary-300 font-semibold'
                          : navTextBase(false)
                      }`}
                    >
                      {item.label}
                      <ChevronIcon isOpen={activeDropdown === item.label} size={13} />
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 ${
                          isCurrentActive ? 'w-full bg-primary dark:bg-tertiary-300' : 'w-0 group-hover:w-full ' + underlineColor(false)
                        }`}
                      />
                    </a>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <DesktopDropdown
                          item={item}
                          onItemClick={(e, h) => scrollToSection(e, h)}
                        />
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="hidden md:block">
                    <a
                      href={`#${item.hash}`}
                      onClick={(e) => scrollToSection(e, item.hash)}
                      className={`font-body font-medium transition-colors relative group text-sm tracking-[0.04em] ${
                        isCurrentActive
                          ? 'text-primary dark:text-tertiary-300 font-semibold'
                          : navTextBase(false)
                      }`}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 ${
                          isCurrentActive ? 'w-full bg-primary dark:bg-tertiary-300' : 'w-0 group-hover:w-full ' + underlineColor(false)
                        }`}
                      />
                    </a>
                  </div>
                )}

                {/* ── Mobile: accordion item ── */}
                {item.children ? (
                  <div className="md:hidden w-full">
                    <button
                      className={`w-full flex items-center justify-between gap-2 font-body font-medium text-xl tracking-[0.08em] py-2 ${navTextBase(true)}`}
                      onClick={() => handleMobileParentClick(item)}
                    >
                      <span className="flex-1 text-left">{item.label}</span>
                      <ChevronIcon isOpen={mobileOpenDropdown === item.label} size={16} />
                    </button>

                    <AnimatePresence initial={false}>
                      {mobileOpenDropdown === item.label && (
                        <motion.div
                          key="mobile-sub"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <ul className="flex flex-col pl-4 pt-2 pb-1 gap-3 border-l border-white/15 ml-1 mt-1">
                            {item.children.map((child) => (
                              <li key={child.hash}>
                                <a
                                  href={`#${child.hash}`}
                                  onClick={(e) => scrollToSection(e, child.hash)}
                                  className="font-body text-base text-white/65 hover:text-white transition-colors duration-200 no-underline flex items-center gap-2"
                                >
                                  <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                                  {child.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    href={`#${item.hash}`}
                    onClick={(e) => scrollToSection(e, item.hash)}
                    className={`md:hidden font-body font-medium text-xl tracking-[0.08em] py-2 ${navTextBase(true)} flex`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}

          {/* ── Kontak (context-aware scroll) ── */}
          <li className="w-full md:w-auto">
            {/* Desktop */}
            <a
              href="#kontak"
              onClick={(e) => scrollToSection(e, 'kontak')}
              className={`hidden md:inline-block font-body font-medium transition-colors relative group text-sm tracking-[0.04em] ${
                activeSection === 'kontak'
                  ? 'text-primary dark:text-tertiary-300 font-semibold'
                  : navTextBase(false)
              }`}
            >
              Kontak
              <span className={`absolute -bottom-1 left-0 h-[1.5px] transition-all duration-300 ${activeSection === 'kontak' ? 'w-full bg-primary dark:bg-tertiary-300' : 'w-0 group-hover:w-full ' + underlineColor(false)}`} />
            </a>
            {/* Mobile */}
            <a
              href="#kontak"
              onClick={(e) => scrollToSection(e, 'kontak')}
              className={`md:hidden font-body font-medium text-xl tracking-[0.08em] py-2 ${navTextBase(true)} flex`}
            >
              Kontak
            </a>
          </li>

          {/* ── Mobile Dark Mode Toggle ── */}
          <li className="md:hidden mt-4 pb-8">
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-3 font-body font-medium text-white/85 hover:text-white transition-colors text-xl tracking-[0.08em]"
            >
              {isDarkMode ? <>{sunIcon} Mode Terang</> : <>{moonIcon} Mode Gelap</>}
            </button>
          </li>
        </ul>

        {/* ── Desktop Actions ── */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled && !menuOpen
                ? 'text-neutral-600 hover:text-primary dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10'
                : 'text-white/85 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? sunIcon : moonIcon}
          </button>

          <a
            href="#kontak"
            onClick={(e) => scrollToSection(e, 'kontak')}
            className="font-heading text-xs font-bold text-white bg-primary py-3 px-7 tracking-[0.1em] transition-all shrink-0 hover:bg-primary-800 hover:shadow-lg hover:-translate-y-[1px] no-underline"
          >
            KONSULTASI GRATIS
          </a>
        </div>
      </div>
    </nav>
  );
}
