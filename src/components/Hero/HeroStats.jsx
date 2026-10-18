import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

const stats = [
  { value: '3600', suffix: '+', label: 'Problems Solved' },
  { value: '2', suffix: '+', label: 'Years Experience' },
  { value: '2', suffix: '', label: 'Research Papers' },
];

// Counts up from 0 once when scrolled into view (final value shown at once for reduced motion)
function Counter({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const end = Number(value);
  const [n, setN] = useState(reduce ? end : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, end, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, end]);

  return (
    <span ref={ref} className="tabular-nums" aria-label={String(end)}>
      <span aria-hidden="true">{n}</span>
    </span>
  );
}

export default function HeroStats() {
  return (
    <section aria-label="Highlights" className="bg-ink font-dm">
      <div className="mx-[5vw] grid grid-cols-3 border-y border-cream/10">
        {stats.map(({ value, suffix, label }, i) => (
          <div key={label} className={`px-3 py-6 lg:px-8 lg:py-10 ${i === 0 ? 'pl-0 lg:pl-0' : 'border-l border-cream/10'}`}>
            <p className="font-serif text-4xl leading-none tracking-[-0.02em] text-cream lg:text-[56px]">
              <Counter value={value} />
              {suffix && <span className="text-copper">{suffix}</span>}
            </p>
            <p className="mt-3 text-xs text-stone lg:text-[15px]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
