import { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import { workExperience, trainingExperience, cpExperience, cpStats } from '../../data/experience';

const tabs = [
  { id: 'work', label: 'Work Experience' },
  { id: 'training', label: 'Training Program' },
  { id: 'cp', label: 'Competitive Programming' },
];

// Small uppercase mono label
const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';
const pad2 = (n) => String(n).padStart(2, '0');

function Chips({ items }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full border border-cream/[0.16] px-3 py-1.5 text-[13px] text-cream-2">
          {t}
        </span>
      ))}
    </div>
  );
}

// One accordion row, used for both work and training entries
function Entry({ title, org, period, facts, description, items, tech, link, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  return (
    <div className="border-t border-cream/10 last:border-b">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={bodyId}
        className="group grid w-full grid-cols-[1fr_24px] items-baseline gap-x-6 gap-y-2 py-7 text-left lg:grid-cols-[1fr_auto_28px]"
      >
        <span className="col-start-1 row-start-1 min-w-0">
          <span className="block font-serif text-[28px] leading-[1.08] tracking-[-0.015em] text-cream transition-colors group-hover:text-peach lg:text-[clamp(28px,2.6vw,42px)]">
            {title}
          </span>
          <span className="mt-1.5 block font-serif text-lg italic text-sand lg:text-[clamp(18px,1.5vw,22px)]">{org}</span>
        </span>
        <span className={`${mono} col-start-1 row-start-2 whitespace-nowrap !text-sand lg:col-start-2 lg:row-start-1`}>
          {period}
        </span>
        <span
          aria-hidden="true"
          className={`col-start-2 row-start-1 justify-self-end text-[22px] leading-none text-copper transition-transform duration-300 lg:col-start-3 ${
            open ? 'rotate-180' : ''
          }`}
        >
          {open ? '−' : '+'}
        </span>
      </button>

      <div
        id={bodyId}
        aria-hidden={!open}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-9">
            <p className={`${mono} flex flex-wrap gap-x-[22px] gap-y-2`}>
              {facts.filter((f) => f?.text).map((f) => (
                <span key={f.text} className={f.ok ? '!text-copper' : ''}>
                  {f.ok && <span aria-hidden="true">✓ </span>}
                  {f.text}
                </span>
              ))}
            </p>
            <p className="mt-5 max-w-[68ch] text-lg leading-[1.65] text-cream">{description}</p>
            <ul className="mt-[18px] max-w-[76ch]">
              {items.map((r) => (
                <li
                  key={r}
                  className="relative py-2.5 pl-[26px] text-[15.5px] leading-[1.7] text-cream-2 before:absolute before:left-0 before:top-[22px] before:h-px before:w-3 before:bg-copper before:content-['']"
                >
                  {r}
                </li>
              ))}
            </ul>
            <Chips items={tech} />
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[22px] inline-block border-b border-cream pb-[3px] text-sm transition-colors hover:text-peach"
              >
                View Certificate <span className="text-copper">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CpCard({ platform }) {
  const single = platform.rating == null && platform.contests == null;
  // Same three slots on every card; missing values show a muted dash
  const cells = [
    { value: platform.rating, label: platform.maxRating != null ? `Rating · max ${platform.maxRating}` : 'Rating', empty: single },
    { value: `${platform.problems}+`, label: single ? 'Problems Solved' : 'Solved' },
    { value: `${platform.contests}+`, label: 'Contests', empty: single },
  ];

  return (
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-md border border-cream/10 p-6 transition-colors hover:border-cream/25"
    >
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-serif text-[28px] tracking-[-0.01em] transition-colors group-hover:text-peach">{platform.platform}</p>
        <p className={`${mono} text-right !text-sand`}>{platform.rank}</p>
      </div>
      <p className="mt-0.5 font-mono text-xs text-[#9E978E]">@{platform.handle}</p>

      <div className="mt-5 grid grid-cols-3 border-y border-cream/10">
        {cells.map((c, i) => (
          <div key={c.label} className={`py-3.5 ${i > 0 ? 'border-l border-cream/10 pl-3.5' : ''}`}>
            <p className={`font-serif text-[30px] leading-none ${c.empty ? 'text-[#9E978E]' : ''}`}>{c.empty ? '–' : c.value}</p>
            <p className="mt-1.5 text-[11px] text-[#9E978E]">{c.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex-1 text-sm leading-[1.7] text-cream-2">
        {platform.highlights.map((h) => (
          <p key={h}>{h}</p>
        ))}
      </div>
      <p className="mt-4 text-[13px] text-stone">
        View Profile <span className="text-copper">↗</span>
      </p>
    </a>
  );
}

function CpPanel() {
  const stats = [
    { value: cpStats.totalProblems, label: 'Total Problems' },
    { value: cpStats.totalContests, label: 'Total Contests' },
    { value: cpStats.onsiteContests, label: 'Onsite Contests' },
    { value: cpStats.platforms, label: 'Platforms' },
  ];

  return (
    <>
      <div className="grid grid-cols-2 border-y border-cream/10 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`py-5 lg:py-7 ${i % 2 ? 'border-l border-cream/10 pl-3.5' : ''} ${
              i >= 2 ? 'border-t border-cream/10 lg:border-t-0' : ''
            } ${i === 2 ? 'lg:border-l lg:pl-[22px]' : ''} ${i % 2 ? 'lg:pl-[22px]' : ''}`}
          >
            <p className="font-serif text-4xl leading-none tracking-[-0.02em] lg:text-[clamp(36px,3.4vw,54px)]">
              {s.value}
              <span className="text-copper">+</span>
            </p>
            <p className="mt-2.5 text-sm text-stone">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        {cpExperience.map((p) => (
          <CpCard key={p.platform} platform={p} />
        ))}
      </div>

      <div className="mt-10">
        <p className={mono}>Favorite Problem Categories</p>
        <Chips items={cpStats.favoriteTopics} />
      </div>
    </>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  // Deep-link support: Navbar's Experience dropdown dispatches this event
  // to jump straight to a specific tab (Training Program / Competitive Programming).
  useEffect(() => {
    const handler = (e) => setActiveTab(e.detail);
    window.addEventListener('experience-tab', handler);
    return () => window.removeEventListener('experience-tab', handler);
  }, []);

  return (
    <EditorialSection id="experience">
      <SectionHeader
        number="03"
        label="experience"
        title="Where"
        titleEm="I've Been"
        subtitle="Professional journey spanning industry and competitive programming."
      />

      <div className="mt-11 grid grid-cols-1 items-start gap-9 lg:mt-20 lg:grid-cols-[minmax(240px,1fr)_2.4fr] lg:gap-[6vw]">
        {/* Sticky index = tabs */}
        <div role="tablist" aria-label="Experience categories" className="border-t border-cream/10 lg:sticky lg:top-[110px]">
          {tabs.map(({ id, label }, i) => {
            const selected = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveTab(id)}
                className={`flex w-full items-baseline justify-between border-b border-cream/10 py-5 text-left transition-colors ${
                  selected ? 'text-cream' : 'text-[#9E978E] hover:text-peach'
                }`}
              >
                <span className={`font-serif text-2xl tracking-[-0.01em] lg:text-[clamp(24px,2vw,32px)] ${selected ? 'italic' : ''}`}>
                  {label}
                </span>
                <span className={`font-mono text-xs tracking-[1.5px] ${selected ? 'text-copper' : ''}`}>{pad2(i + 1)}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {activeTab === 'work' &&
              workExperience.map((exp, i) => (
                <Entry
                  key={exp.id}
                  title={exp.role}
                  org={exp.company}
                  period={exp.period}
                  facts={[{ text: exp.type }, { text: exp.location }]}
                  description={exp.description}
                  items={exp.responsibilities}
                  tech={exp.tech}
                  defaultOpen={i === 0}
                />
              ))}

            {activeTab === 'training' &&
              trainingExperience.map((item, i) => (
                <Entry
                  key={item.id}
                  title={item.title}
                  org={item.organization}
                  period={item.period}
                  facts={[
                    { text: item.type },
                    item.verified && { text: 'Verified', ok: true },
                    item.hours && { text: item.hours },
                    item.serial && { text: `Serial: ${item.serial}` },
                  ]}
                  description={item.description}
                  items={item.highlights}
                  tech={item.tech}
                  link={item.url}
                  defaultOpen={i === 0}
                />
              ))}

            {activeTab === 'cp' && <CpPanel />}
          </motion.div>
        </AnimatePresence>
      </div>
    </EditorialSection>
  );
}
