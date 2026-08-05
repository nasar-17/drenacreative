import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 * - On route change without hash → scroll to top instantly
 * - On route change with hash → smooth scroll to the target element
 *   (accounts for sticky navbar height)
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Give the DOM time to paint the new page before scrolling
      const scrollToHash = () => {
        const el = document.querySelector(hash);
        if (el) {
          const navHeight = 80; // sticky navbar height
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
          return true;
        }
        return false;
      };

      if (!scrollToHash()) {
        // Element not yet mounted — retry with small delays
        const t1 = setTimeout(() => {
          if (!scrollToHash()) {
            setTimeout(scrollToHash, 300);
          }
        }, 100);
        return () => clearTimeout(t1);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname, hash]);

  return null;
}
