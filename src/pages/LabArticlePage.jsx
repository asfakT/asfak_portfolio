import { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LabSidebar from '../components/Lab/LabSidebar';
import LabFrame from '../components/Lab/LabFrame';
import { labPath, readingOrder, topicSlug } from '../components/Lab/labUtils';
import { labItems, labTopics } from '../data/lab';

const mono = 'font-mono text-xs uppercase tracking-[1.5px]';

function PagerLink({ item, label, alignRight }) {
  return (
    <Link
      to={labPath(item)}
      className={`group flex-1 rounded-lg border border-cream/10 px-5 py-4 transition-colors hover:border-cream/25 ${alignRight ? 'sm:text-right' : ''}`}
    >
      <span className={`${mono} block text-[#9E978E]`}>{label}</span>
      <span className="mt-1 block font-serif text-[22px] leading-tight transition-colors group-hover:text-peach">{item.title}</span>
    </Link>
  );
}

export default function LabArticlePage() {
  const { topic, slug } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);

  const ordered = useMemo(() => readingOrder(labItems, labTopics), []);
  const index = ordered.findIndex((i) => i.id === slug && topicSlug(i.topic) === topic);
  const item = ordered[index];
  const prev = index > 0 ? ordered[index - 1] : null;
  const next = index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : null;

  useEffect(() => {
    if (!item) return undefined;
    const previousTitle = document.title;
    document.title = `${item.title} | Learning Lab`;
    return () => {
      document.title = previousTitle;
    };
  }, [item]);

  if (!item) {
    return (
      <div className="min-h-screen px-[5vw] pt-40 font-dm text-cream" style={{ background: 'var(--bg-base)' }}>
        <p className="font-serif text-[32px] italic">This entry does not exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm text-stone transition-colors hover:text-peach">
          <span className="text-copper">←</span>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-dm text-cream" style={{ background: 'var(--bg-base)' }}>
      <div className="px-[5vw] pb-24 pt-28 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-12">
        {/* Phone and tablet: contents open from a button */}
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="lab-sidebar"
          className="mb-6 rounded-full border border-cream/25 px-5 py-2.5 text-sm transition-colors hover:border-cream/50 hover:text-peach lg:hidden"
        >
          {menuOpen ? 'Hide contents' : 'Contents'}
        </button>

        <aside
          id="lab-sidebar"
          className={`${menuOpen ? 'block' : 'hidden'} mb-10 lg:sticky lg:top-28 lg:mb-0 lg:block lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:pr-2`}
        >
          <LabSidebar
            key={item.id}
            items={ordered}
            topics={labTopics}
            currentId={item.id}
            currentTopic={item.topic}
            onNavigate={() => setMenuOpen(false)}
          />
        </aside>

        <main className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className={`${mono} text-sand`}>
              Learning Lab <span className="text-[#9E978E]">/</span> {item.topic}
            </p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-sm text-stone transition-colors hover:text-peach">
              Open in new tab <span className="text-copper">↗</span>
            </a>
          </div>

          <LabFrame key={item.id} src={item.url} title={item.title} />

          {(prev || next) && (
            <nav aria-label="Previous and next" className="mt-10 flex flex-col gap-4 sm:flex-row">
              {prev && <PagerLink item={prev} label="← Previous" />}
              {next && <PagerLink item={next} label="Next →" alignRight />}
            </nav>
          )}
        </main>
      </div>
    </div>
  );
}
