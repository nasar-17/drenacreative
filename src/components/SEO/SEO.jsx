import { useEffect } from 'react';

/**
 * SEO
 * Dynamically updates document.title and meta[name="description"]
 * for each page without requiring react-helmet.
 */
export function SEO({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}
