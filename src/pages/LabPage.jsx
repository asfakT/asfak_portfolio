import { useState, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import LabRow from '../components/Lab/LabRow';
import { labItems, labSubtitle } from '../data/lab';

const PER_PAGE = 10;

export default function LabPage() {
  const [topic, setTopic] = useState('All');
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const listRef = useRef(null);

  const topics = useMemo(() => ['All', ...Array.from(new Set(labItems.map((i) => i.topic)))], []);
  const countFor = (t) => (t === 'All' ? labItems.length : labItems.filter((i) => i.topic === t).length);

  const q = query.trim().toLowerCase();
  const filtered = labItems.filter((i) => {
    const matchesTopic = topic === 'All' || i.topic === topic;
    const matchesQuery = !q || `${i.title} ${i.summary} ${i.topic}`.toLowerCase().includes(q);
    return matchesTopic && matchesQuery;
  });
  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = Math.min(page, pageCount);
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const goToPage = (p) => {
    setPage(p);
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const pageBtn = 'grid h-10 min-w-10 place-items-center rounded-full border px-3 text-sm transition-colors';
  const idle = 'border-cream/[0.16] text-stone hover:border-cream/35 hover:text-cream';

  return (
    <div className="min-h-screen font-dm text-cream" style={{ background: 'var(--bg-base)' }}>
      <div className="px-[5vw] pb-24 pt-32">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-peach">
          <span className="text-copper">←</span>
          Back to Home
        </Link>

        <div className="mt-10">
          <SectionHeader as="h1" label="learning lab" title="Learning" titleEm="Lab" subtitle={labSubtitle} />
        </div>

        {/* Topic filter + search */}
        <div ref={listRef} className="mt-16 flex scroll-mt-28 flex-col gap-5 border-b border-cream/10 pb-[18px] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {topics.map((t) => {
              const active = t === topic;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setTopic(t);
                    setPage(1);
                  }}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${active ? 'border-copper text-cream' : idle}`}
                >
                  {t}
                  <span className="ml-1.5 font-mono text-xs text-[#9E978E]">{countFor(t)}</span>
                </button>
              );
            })}
          </div>

          <label className="flex w-full items-center gap-2.5 border-b border-cream/25 py-2 transition-colors focus-within:border-copper md:w-72">
            <FiSearch size={16} className="flex-none text-[#9E978E]" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search topics..."
              aria-label="Search the Learning Lab"
              className="w-full bg-transparent text-[15px] text-cream outline-none placeholder:text-[#9E978E]"
            />
          </label>
        </div>

        {/* Index list */}
        {visible.length > 0 ? (
          <div>
            {visible.map((item, i) => (
              <LabRow key={item.id} item={item} number={(current - 1) * PER_PAGE + i + 1} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-serif text-[22px] italic text-[#9E978E]">Nothing matches your search.</p>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <nav aria-label="Pagination" className="mt-14 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(current - 1)}
              aria-label="Previous page"
              disabled={current === 1}
              className={`${pageBtn} ${idle} disabled:cursor-default disabled:opacity-35`}
            >
              <span className="text-copper">←</span>
            </button>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                aria-current={p === current ? 'page' : undefined}
                onClick={() => goToPage(p)}
                className={`${pageBtn} ${p === current ? 'border-copper text-cream' : idle}`}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goToPage(current + 1)}
              aria-label="Next page"
              disabled={current === pageCount}
              className={`${pageBtn} ${idle} disabled:cursor-default disabled:opacity-35`}
            >
              <span className="text-copper">→</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
