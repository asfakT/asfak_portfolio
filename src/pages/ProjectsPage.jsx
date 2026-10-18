import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import SectionHeader from '../components/ui/SectionHeader';
import { ProjectRow } from '../components/Projects/ProjectCard';
import { featuredProjects, otherProjects } from '../data/projects';

const allProjects = [...featuredProjects, ...otherProjects];

export default function ProjectsPage() {
  const [tag, setTag] = useState('All');
  const [query, setQuery] = useState('');

  const tags = useMemo(
    () => ['All', ...Array.from(new Set(allProjects.map((p) => p.tag).filter(Boolean)))],
    []
  );

  const filtered = allProjects.filter((p) => {
    const matchesTag = tag === 'All' || p.tag === tag;
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
            label="projects"
            title="All"
            titleEm="Projects"
            subtitle="Everything I've built across full stack development, machine learning, and AI integration."
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
              placeholder="Search projects..."
              aria-label="Search projects"
              className="w-full bg-transparent text-[15px] text-cream outline-none placeholder:text-[#9E978E]"
            />
          </label>
        </div>

        {/* List */}
        {filtered.length > 0 ? (
          <div>
            {filtered.map((project, i) => (
              <ProjectRow key={project.id} project={project} number={i + 1} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center font-serif text-[22px] italic text-[#9E978E]">No projects match your search.</p>
        )}
      </div>
    </div>
  );
}
