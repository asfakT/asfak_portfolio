import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiSearch } from 'react-icons/fi';
import { labPath, topicSlug } from './labUtils';

const mono = 'font-mono text-xs uppercase tracking-[1.5px]';

// Docs-style contents: collapsible topic groups, search, current entry highlighted.
export default function LabSidebar({ items, topics, currentId, currentTopic, onNavigate }) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(() => new Set([currentTopic]));

  const q = query.trim().toLowerCase();
  const toggle = (topic) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) next.delete(topic);
      else next.add(topic);
      return next;
    });

  return (
    <nav aria-label="Learning Lab contents" className="font-dm">
      <Link to="/" onClick={onNavigate} className="inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-peach">
        <span className="text-copper">←</span>
        Back to Home
      </Link>

      <label className="mt-5 flex items-center gap-2.5 border-b border-cream/25 py-2 transition-colors focus-within:border-copper">
        <FiSearch size={15} className="flex-none text-[#9E978E]" aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          aria-label="Search the Learning Lab"
          className="w-full bg-transparent text-sm text-cream outline-none placeholder:text-[#9E978E]"
        />
      </label>

      <p className={`${mono} mt-7 px-2.5 text-sand`}>Topics</p>

      <ul className="mt-2 space-y-0.5">
        {topics.map((topic) => {
          const all = items.filter((item) => item.topic === topic);
          const matches = q ? all.filter((item) => item.title.toLowerCase().includes(q)) : all;
          if (q && matches.length === 0) return null;

          const expanded = q ? true : open.has(topic);
          const listId = `lab-topic-${topicSlug(topic)}`;

          return (
            <li key={topic}>
              <button
                type="button"
                onClick={() => toggle(topic)}
                aria-expanded={expanded}
                aria-controls={listId}
                className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[15px] text-cream-2 transition-colors hover:bg-cream/[0.04] hover:text-cream"
              >
                <span className="flex-1">{topic}</span>
                <span className="font-mono text-xs text-[#9E978E]">{all.length}</span>
                <FiChevronRight
                  size={15}
                  aria-hidden="true"
                  className={`text-[#9E978E] transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
                />
              </button>

              {expanded && (
                <ul id={listId} className="mb-2 ml-[18px] border-l border-cream/10 pl-2.5">
                  {matches.length === 0 && <li className="px-2.5 py-1.5 text-sm italic text-[#9E978E]">Coming soon</li>}
                  {matches.map((item) => {
                    const active = item.id === currentId;
                    return (
                      <li key={item.id}>
                        <Link
                          to={labPath(item)}
                          onClick={onNavigate}
                          aria-current={active ? 'page' : undefined}
                          className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm transition-colors ${
                            active ? 'bg-copper/10 text-cream' : 'text-stone hover:text-peach'
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`h-2 w-2 flex-none rounded-full border ${active ? 'border-copper bg-copper' : 'border-cream/25'}`}
                          />
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
