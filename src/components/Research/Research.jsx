import { motion } from 'framer-motion';
import { reveal } from '../ui/reveal';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import { researchPapers, researchInterests } from '../../data/research';

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';

// Published / In Press = filled copper dot; any other status = hollow sand dot
function Status({ status }) {
  const review = status !== 'Published' && status !== 'In Press';
  return (
    <span className={`${mono} inline-flex items-center gap-2 ${review ? '!text-sand' : '!text-copper'}`}>
      <span className={`h-[7px] w-[7px] rounded-full ${review ? 'border border-sand' : 'bg-copper'}`} />
      {status}
    </span>
  );
}

function PaperRow({ paper }) {
  return (
    <motion.article {...reveal()} className="grid grid-cols-1 gap-[22px] border-b border-cream/10 py-12 lg:grid-cols-[200px_1fr_240px] lg:gap-[4vw]">
      {/* Year + status */}
      <div className="flex items-baseline gap-[18px] lg:block">
        <p className="font-serif text-[56px] leading-none tracking-[-0.02em]">{paper.year}</p>
        <div className="lg:mt-4">
          <Status status={paper.status} />
        </div>
      </div>

      {/* Details */}
      <div>
        <h3 className="font-serif text-[26px] leading-[1.12] tracking-[-0.015em] lg:text-[clamp(26px,2.3vw,38px)]">{paper.title}</h3>
        {paper.venue && <p className="mt-2.5 font-serif text-xl italic text-sand">{paper.venue}</p>}
        {paper.supervisor && <p className="mt-1 text-[13px] text-[#9E978E]">Supervised by {paper.supervisor}</p>}
        <p className="mt-5 max-w-[70ch] text-[17px] leading-[1.7] text-cream">{paper.abstract}</p>

        <p className={`${mono} mt-6`}>Key Findings</p>
        <ul className="mt-2.5">
          {paper.findings.map((f) => (
            <li
              key={f}
              className="relative py-1.5 pl-6 text-[15px] leading-[1.6] text-cream-2 before:absolute before:left-0 before:top-[17px] before:h-px before:w-3 before:bg-copper before:content-['']"
            >
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {paper.keywords.map((k) => (
            <span key={k} className="rounded-full border border-cream/[0.16] px-[11px] py-[5px] text-[12.5px] text-cream-2">
              {k}
            </span>
          ))}
        </div>
        <p className="mt-3.5 font-mono text-xs text-stone">
          {paper.tools.slice(0, 4).map((t, i) => (
            <span key={t}>
              {i > 0 && <span className="mx-[9px] text-[#9E978E]">/</span>}
              {t}
            </span>
          ))}
        </p>
        {paper.doi && (
          <a href={paper.doi} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block border-b border-cream/40 pb-[3px] text-sm transition-colors hover:text-peach">
            DOI <span className="text-copper">↗</span>
          </a>
        )}
      </div>

      {/* First-page thumbnail + PDF */}
      <div className="max-w-[260px] lg:max-w-none">
        {paper.image && paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${paper.title} (PDF)`}
            className="group block overflow-hidden rounded border border-cream/10 bg-white"
          >
            <img
              src={paper.image}
              alt=""
              className="block aspect-[4/5] w-full object-cover object-top opacity-[.88] contrast-[1.05] grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </a>
        )}
        {paper.pdf && (
          <a
            href={paper.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex gap-1.5 border-b border-cream pb-[3px] text-sm transition-colors hover:text-peach"
          >
            Read Paper <span className="text-copper">↗</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function Research() {
  return (
    <EditorialSection id="research">
      <SectionHeader
        number="06"
        label="research"
        title="Academic"
        titleEm="Contributions"
        subtitle="Published and under-review research at the intersection of ML, NLP, and real-world applications."
      />

      <div className="mt-16 border-t border-cream/10">
        {researchPapers.map((paper) => (
          <PaperRow key={paper.id} paper={paper} />
        ))}
      </div>

      {/* Research interests — 3-column serif list */}
      <div className="mt-20">
        <p className={mono}>Research Interests</p>
        <div className="mt-4 grid grid-cols-1 border-t border-cream/10 md:grid-cols-3">
          {researchInterests.map((interest, i) => (
            <span
              key={interest}
              className={`border-b border-cream/10 py-4 font-serif text-[22px] text-cream-2 ${
                i % 3 ? 'md:border-l md:pl-6' : ''
              }`}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}
