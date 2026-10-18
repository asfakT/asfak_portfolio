import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import BlogCard from '../components/Blog/BlogCard';
import { blogPosts } from '../data/blog';

export default function BlogPage() {
  const [tag, setTag] = useState('All');
  const [query, setQuery] = useState('');

  const tags = useMemo(
    () => ['All', ...Array.from(new Set(blogPosts.flatMap((p) => p.tags)))],
    []
  );

  const filtered = blogPosts.filter((p) => {
    const matchesTag = tag === 'All' || p.tags.includes(tag);
    const matchesQuery = p.title.toLowerCase().includes(query.trim().toLowerCase());
    return matchesTag && matchesQuery;
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
            label="blog"
            title="All"
            titleEm="Posts"
            subtitle="Articles on databases, system design, and software engineering, published on Medium."
          />
        </div>

        {/* Filter + search bar */}
        <div className="mt-16 flex flex-col gap-5 border-b border-cream/10 pb-[18px] md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const active = t === tag;
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setTag(t)}
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
              placeholder="Search posts..."
              aria-label="Search posts"
              className="w-full bg-transparent text-[15px] text-cream outline-none placeholder:text-[#9E978E]"
            />
          </label>
        </div>

        {/* Card grid — same cards as the homepage slider */}
        {filtered.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-x-[3vw] gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-serif text-[22px] italic text-[#9E978E]">No posts match your search.</p>
        )}
      </div>
    </div>
  );
}
