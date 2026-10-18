import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import { CertCard, CertModal } from '../components/Certificates/Certificates';
import { certificates } from '../data/certificates';

export default function CertificatesPage() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(certificates.map((c) => c.category).filter(Boolean)))],
    []
  );

  const filtered = certificates.filter((c) => {
    const matchesCategory = category === 'All' || c.category === category;
    const matchesQuery = c.title.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="min-h-screen font-dm text-cream" style={{ background: 'var(--bg-base)' }}>
      <div className="px-[5vw] pb-24 pt-32">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-peach">
          <span className="text-copper">←</span>
          Back to Home
        </Link>

        <div className="mt-10">
          <SectionHeader
            as="h1"
            label="certificates"
            title="All"
            titleEm="Certifications"
            subtitle="Verified credentials across competitive programming, data science, and AI."
          />
        </div>

        {/* Filter + search bar */}
        <div className="mt-16 flex flex-col gap-5 border-b border-cream/10 pb-[18px] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((t) => {
              const active = t === category;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(t)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? 'border-copper text-cream' : 'border-cream/[0.16] text-stone hover:border-cream/35 hover:text-cream'
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <label className="flex w-full items-center gap-2.5 border-b border-cream/25 py-2 transition-colors focus-within:border-copper md:w-72">
            <FiSearch size={16} className="flex-none text-[#9E978E]" aria-hidden="true" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search certificates..."
              aria-label="Search certificates"
              className="w-full bg-transparent text-[15px] text-cream outline-none placeholder:text-[#9E978E]"
            />
          </label>
        </div>

        {/* Card grid — same cards as the homepage slider */}
        {filtered.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-x-[3vw] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((cert) => (
              <CertCard key={cert.id} cert={cert} onClick={() => setSelected(cert)} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-serif text-[22px] italic text-[#9E978E]">No certificates match your search.</p>
        )}
      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
