import { motion } from 'framer-motion';
import { reveal } from '../ui/reveal';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import { achievements, contestHistory, contestGallery } from '../../data/achievements';

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';

export default function Achievements() {
  return (
    <EditorialSection id="achievements">
      <SectionHeader
        number="07"
        label="achievements"
        title="Milestones &"
        titleEm="Recognition"
        subtitle="A track record of results in competitive programming, research, and engineering."
      />

      {/* Achievements — 2-column hairline grid */}
      <div className="mt-16 grid grid-cols-1 border-l border-t border-cream/10 md:grid-cols-2">
        {achievements.map((a, i) => (
          <motion.article key={a.id} {...reveal(i % 2)} className="border-b border-r border-cream/10 px-6 pb-7 pt-6 lg:px-7">
            <div className="flex justify-between gap-3">
              <span className={`${mono} !text-sand`}>{a.category}</span>
              {a.year && <span className={`${mono} !text-copper`}>{a.year}</span>}
            </div>
            <h3 className="mt-3.5 font-serif text-[22px] leading-[1.15] tracking-[-0.01em] lg:text-[clamp(22px,1.9vw,30px)]">
              {a.title}
            </h3>
            <p className="mt-2.5 text-[15px] leading-[1.65] text-cream-2">{a.description}</p>
          </motion.article>
        ))}
      </div>

      {/* Onsite contest results — verified placements only */}
      <div className="mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className={mono}>Onsite Contest Results</h3>
          <span className={mono}>2021 — 2023</span>
        </div>
        <div className="mt-4 border-t border-cream/10">
          {contestHistory.map((contest) => (
            <div
              key={contest.name}
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-5 gap-y-1.5 border-b border-cream/10 py-[18px] md:grid-cols-[1fr_90px_260px]"
            >
              <p className="text-[17px] text-cream">{contest.name}</p>
              <p className={`${mono} !text-[#9E978E]`}>{contest.year}</p>
              <p
                className={`${mono} col-span-2 md:col-span-1 md:text-right ${
                  contest.placement.includes('#1') ? '!text-copper' : '!text-sand'
                }`}
              >
                {contest.placement}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Contest photos — small, last; caption under each photo */}
      <div className="mt-20">
        <p className={mono}>Contest Highlights</p>
        <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-3 sm:gap-x-4 lg:grid-cols-6">
          {contestGallery.map((g) => (
            <figure key={g.src}>
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="block aspect-[4/3] w-full rounded-md border border-cream/10 object-cover saturate-[.9]"
              />
              <figcaption className="mt-2 text-xs leading-[1.4] text-cream-2">{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}
