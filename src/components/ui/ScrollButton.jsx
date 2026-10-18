import { useEffect, useState } from 'react';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

// Sits above the chat button: jumps to the bottom from the top, back to the top once scrolled.
export default function ScrollButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function go() {
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
    window.scrollTo({ top: scrolled ? 0 : document.documentElement.scrollHeight, behavior });
  }

  const Icon = scrolled ? FiArrowUp : FiArrowDown;
  return (
    <button
      type="button"
      onClick={go}
      aria-label={scrolled ? 'Scroll to top' : 'Scroll to bottom'}
      className="fixed bottom-[78px] right-6 z-[55] flex h-10 w-10 items-center justify-center rounded-full border border-cream/30 bg-[#0d0d0d] text-cream shadow-[0_8px_28px_rgba(0,0,0,0.6)] transition-[color,border-color] duration-200 hover:border-peach/70 hover:text-peach"
    >
      <Icon size={18} />
    </button>
  );
}
