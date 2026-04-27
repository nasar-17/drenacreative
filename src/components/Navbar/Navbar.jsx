import { useState, useEffect } from 'react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] px-5 md:px-8 transition-all duration-300 ${
        scrolled && !menuOpen
          ? 'bg-white/95 dark:bg-primary-900/95 shadow-sm dark:shadow-none dark:border-b dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-16 md:h-[72px] gap-4">
        {/* Logo */}
        <a
          href="#"
          className={`relative z-[1001] font-heading font-bold flex shrink-0 items-center gap-2 md:gap-3 transition-all duration-300 px-3 py-1.5 -ml-3 rounded-xl ${
            scrolled && !menuOpen 
              ? 'text-primary-800 dark:text-white hover:text-primary dark:hover:text-primary-300' 
              : 'text-white hover:text-white/85 bg-black/20 backdrop-blur-md border border-white/10'
          }`}
        >
          <img
            src="/Logo.png"
            className="w-8 h-8 md:w-10 md:h-10 object-contain shrink-0"
            alt="Logo"
          />
          <span className="text-[14px] md:text-lg tracking-normal md:tracking-[0.12em]">
            DRENA CREATIVE
          </span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1 z-[1001] relative"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'bg-white translate-y-[7px] rotate-45' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'}`} />
          <span className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'opacity-0' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'}`} />
          <span className={`block w-6 h-[2px] transition-all duration-300 ${menuOpen ? 'bg-white -translate-y-[7px] -rotate-45' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'}`} />
        </button>

        {/* Mobile menu overlay background */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] md:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          onClick={() => setMenuOpen(false)}
        />

        {/* Nav links */}
        <ul
          className={`flex list-none m-0 flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-8 fixed md:static top-0 right-0 bottom-0 w-[65vw] sm:w-[50vw] md:w-auto bg-[#1c2e3e] dark:bg-primary-950 md:bg-transparent md:dark:bg-transparent z-[1000] pt-24 md:pt-0 pl-10 md:pl-0 transition-transform duration-300 shadow-2xl md:shadow-none ${
            menuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'
          }`}
        >
          {['Tentang', 'Layanan', 'Proses', 'Kontak'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={`font-body font-medium transition-colors relative group text-xl md:text-sm tracking-[0.08em] md:tracking-[0.04em] ${
                  menuOpen
                    ? 'text-white/85 hover:text-white'
                    : scrolled
                    ? 'text-neutral-500 dark:text-neutral-300 hover:text-primary dark:hover:text-white'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-[1.5px] w-0 transition-all duration-300 group-hover:w-full ${
                  menuOpen ? 'bg-white' : scrolled ? 'bg-primary dark:bg-white' : 'bg-white'
                }`} />
              </a>
            </li>
          ))}
          
          {/* Mobile Dark Mode Toggle */}
          <li className="md:hidden mt-4">
            <button 
              onClick={toggleDarkMode}
              className="flex items-center gap-3 font-body font-medium text-white/85 hover:text-white transition-colors text-xl tracking-[0.08em]"
            >
              {isDarkMode ? (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                  Mode Terang
                </>
              ) : (
                <>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                  Mode Gelap
                </>
              )}
            </button>
          </li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors ${
              scrolled && !menuOpen 
                ? 'text-neutral-500 hover:text-primary dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10' 
                : 'text-white/85 hover:text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          <a
            href="#kontak"
            className="font-heading text-xs font-bold text-white bg-primary py-3 px-7 tracking-[0.1em] transition-all shrink-0 hover:bg-primary-800 hover:shadow-lg hover:-translate-y-[1px]"
          >
            KONSULTASI GRATIS
          </a>
        </div>
      </div>
    </nav>
  );
}
