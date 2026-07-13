import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiSearch } from 'react-icons/fi';
import SectionTitle from '../components/ui/SectionTitle';
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
    <div
      className="min-h-screen"
      style={{ background: 'linear-gradient(180deg, #000000 0%, #0a0a0a 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors mb-8"
        >
          <FiArrowLeft size={16} />
          Back to Home
        </Link>

        <SectionTitle
          label="/ blog"
          title="All Posts"
          subtitle="Articles on databases, system design, and software engineering, published on Medium."
        />

        {/* Filter + search bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => {
              const active = t === tag;
              return (
                <button
                  key={t}
                  onClick={() => setTag(t)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    active
                      ? 'text-white border-transparent'
                      : 'text-gray-400 border-white/10 hover:text-white hover:border-white/25'
                  }`}
                  style={active ? { background: 'rgba(59,130,246,0.18)', borderColor: 'rgba(59,130,246,0.4)' } : {}}
                >
                  {t}
                </button>
              );
            })}
          </div>

          <div className="relative md:w-64">
            <FiSearch size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search posts..."
              className="w-full pl-9 pr-3 py-2.5 rounded-xl text-sm text-gray-200 placeholder-gray-500 border outline-none focus:border-blue-500/50 transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center py-16">No posts match your search.</p>
        )}
      </div>
    </div>
  );
}
