import { useState, useRef, useEffect } from 'react';

// Glass buttons: frosted light fill so they read clearly on top of any card image
const navBtn =
  'absolute top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-cream/30 ' +
  'bg-cream/10 text-2xl text-cream shadow-[0_6px_24px_rgba(0,0,0,0.5)] backdrop-blur-md transition ' +
  'hover:border-cream/60 hover:bg-cream/20 disabled:cursor-default disabled:opacity-35 disabled:hover:border-cream/30 disabled:hover:bg-cream/10';

// Scroll-snap slider: 1 / 2 / 3 cards per view, side buttons + dots.
// Buttons sit at the vertical middle of the cards.
export default function CardSlider({ items, getKey, renderItem, label }) {
  const trackRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);

  const lockUntil = useRef(0); // ignore scroll sync while a button-driven smooth scroll runs

  const step = () => {
    const track = trackRef.current;
    const first = track?.firstElementChild;
    if (!first) return 0;
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
  };

  useEffect(() => {
    const measure = () => {
      const w = step();
      if (w) setPerView(Math.max(1, Math.round(trackRef.current.clientWidth / w)));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const pages = Math.max(1, items.length - perView + 1);
  const active = Math.min(current, pages - 1);

  const go = (i) => {
    const next = Math.max(0, Math.min(i, pages - 1));
    setCurrent(next);
    lockUntil.current = Date.now() + 700;
    trackRef.current.scrollTo({ left: next * step(), behavior: 'smooth' });
  };

  // Swipe / trackpad: follow the real scroll position
  const onScroll = () => {
    if (Date.now() < lockUntil.current || !step()) return;
    const i = Math.round(trackRef.current.scrollLeft / step());
    if (i !== current) setCurrent(i);
  };

  return (
    <>
      <div className="relative mt-14">
        {pages > 1 && (
          <button
            type="button"
            aria-label={`Previous ${label}`}
            onClick={() => go(active - 1)}
            disabled={active <= 0}
            className={`${navBtn} left-1.5 lg:-left-[23px]`}
          >
            ‹
          </button>
        )}
        <div
          ref={trackRef}
          onScroll={onScroll}
          className="grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-[3vw] overflow-x-auto [scrollbar-width:none] md:auto-cols-[calc((100%_-_3vw)/2)] lg:auto-cols-[calc((100%_-_6vw)/3)] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <div key={getKey(item)} className="h-full snap-start">
              {renderItem(item)}
            </div>
          ))}
        </div>
        {pages > 1 && (
          <button
            type="button"
            aria-label={`Next ${label}`}
            onClick={() => go(active + 1)}
            disabled={active >= pages - 1}
            className={`${navBtn} right-1.5 lg:-right-[23px]`}
          >
            ›
          </button>
        )}
      </div>

      {pages > 1 && (
        <div className="mt-7 flex justify-center gap-2">
          {Array.from({ length: pages }, (_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`Go to slide ${k + 1}`}
              aria-current={k === active}
              onClick={() => go(k)}
              className={`h-[7px] rounded-full transition-all ${k === active ? 'w-[22px] bg-copper' : 'w-[7px] bg-cream/25'}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
