import { useEffect, useRef, useState } from 'react';

const NAV_OFFSET = 110; // floating navbar (16px + 68px) plus breathing room

// Shows a static Learning Lab page (public/lab/...) inside the site layout.
// The iframe grows to its content height so the whole page scrolls as one.
export default function LabFrame({ src, title }) {
  const frameRef = useRef(null);
  const observerRef = useRef(null);
  const [height, setHeight] = useState(900);

  // Stop observing the old document when the page changes or the component unmounts.
  useEffect(() => () => observerRef.current?.disconnect(), [src]);

  const handleLoad = () => {
    const frame = frameRef.current;
    const doc = frame?.contentDocument;
    if (!doc) return;

    // The page's own "back to Learning Lab" link is not needed inside the site layout.
    doc.querySelector('header a[href="/lab"]')?.closest('p')?.remove();

    // In-page section links (#id) should scroll the main window, not the iframe.
    doc.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      const target = link && doc.getElementById(link.getAttribute('href').slice(1));
      if (!target) return;
      e.preventDefault();
      const top = frame.getBoundingClientRect().top + window.scrollY + target.getBoundingClientRect().top - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    });

    // The page never scrolls on its own: the main window does all the scrolling.
    doc.documentElement.style.overflow = 'hidden';

    const fit = () => setHeight(doc.documentElement.scrollHeight);
    fit();
    observerRef.current?.disconnect();
    observerRef.current = new ResizeObserver(fit);
    observerRef.current.observe(doc.body);
  };

  // The border sits on the wrapper, so the iframe's inner height equals its content height exactly.
  return (
    <div className="overflow-hidden rounded-lg border border-cream/10 bg-white">
      <iframe
        ref={frameRef}
        src={src}
        title={title}
        onLoad={handleLoad}
        scrolling="no"
        style={{ height }}
        className="block w-full border-0"
      />
    </div>
  );
}
