// Spread onto a motion element: fades up once when scrolled into view.
// `i` staggers siblings (capped so long lists don't wait).
export const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut', delay: Math.min(i, 3) * 0.08 },
});
