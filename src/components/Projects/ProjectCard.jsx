import { useState } from 'react';
import { motion } from 'framer-motion';
import { reveal } from '../ui/reveal';
import ProjectDetailsModal from './ProjectDetailsModal';

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';
const pad2 = (n) => String(n).padStart(2, '0');
const host = (url) => new URL(url).host.replace(/^www\./, '');

function Features({ items, small }) {
  return (
    <ul>
      {items.slice(0, 3).map((f) => (
        <li
          key={f}
          className={`relative pl-6 leading-[1.65] text-cream-2 before:absolute before:left-0 before:h-px before:w-3 before:bg-copper before:content-[''] ${
            small ? 'py-1 text-sm before:top-[15px]' : 'py-[7px] text-[15px] before:top-[19px]'
          }`}
        >
          {f}
        </li>
      ))}
    </ul>
  );
}

function Chips({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-full border border-cream/[0.16] px-[11px] py-[5px] text-[12.5px] text-cream-2">
          {t}
        </span>
      ))}
    </div>
  );
}

function Links({ project, onDetails }) {
  const link = 'border-b border-cream/40 pb-[3px] transition-colors hover:border-cream hover:text-peach';
  return (
    <div className="flex flex-wrap items-center gap-[22px] text-sm">
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer" className={link}>
          Live Site <span className="text-copper">↗</span>
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer" className={link}>
          Code <span className="text-copper">↗</span>
        </a>
      )}
      <button type="button" onClick={onDetails} className="text-stone transition-colors hover:text-peach">
        Details →
      </button>
    </div>
  );
}

// Large card for production projects: small browser-frame screenshot on top
export function FeaturedCard({ project, number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article {...reveal((number - 1) % 2)}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`View details for ${project.title}`}
        className="group block w-full overflow-hidden rounded-lg border border-cream/10 bg-[#0b0a09] text-left"
      >
        <span className="flex items-center gap-1.5 border-b border-cream/10 px-3.5 py-2.5">
          <i className="h-[7px] w-[7px] rounded-full bg-cream/20" />
          <i className="h-[7px] w-[7px] rounded-full bg-cream/20" />
          <i className="h-[7px] w-[7px] rounded-full bg-cream/20" />
          {project.live && <span className="ml-2.5 font-mono text-[11px] text-[#9E978E]">{host(project.live)}</span>}
        </span>
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className="block h-[clamp(150px,11vw,200px)] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
      </button>

      <p className="mt-[22px] flex gap-4">
        <span className={`${mono} !text-copper`}>{pad2(number)}</span>
        <span className={`${mono} !text-sand`}>{project.tag}</span>
      </p>
      <h3 className="mt-2.5 font-serif text-[28px] leading-[1.05] tracking-[-0.02em] lg:text-[clamp(28px,2.6vw,42px)]">
        {project.title}
      </h3>
      <div className="mt-3.5">
        <Features items={project.features || []} />
      </div>
      <div className="mt-4">
        <Chips items={project.tech} />
      </div>
      <div className="mt-[22px]">
        <Links project={project} onDetails={() => setOpen(true)} />
      </div>

      {open && <ProjectDetailsModal project={project} onClose={() => setOpen(false)} />}
    </motion.article>
  );
}

// Compact list row: number · title + tag + links · features + tech · thumbnail
export function ProjectRow({ project, number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.article {...reveal()} className="grid grid-cols-1 items-start gap-3.5 border-b border-cream/10 py-8 lg:grid-cols-[60px_1.3fr_1.1fr_200px] lg:gap-7">
      <span className={`${mono} !text-copper lg:pt-2.5`}>{pad2(number)}</span>
      <div>
        <h3 className="font-serif text-[26px] leading-[1.08] tracking-[-0.015em] lg:text-[clamp(26px,2.4vw,38px)]">{project.title}</h3>
        <span className={`${mono} mt-2 block !text-sand`}>{project.tag}</span>
        <div className="mt-4">
          <Links project={project} onDetails={() => setOpen(true)} />
        </div>
      </div>
      <div>
        <Features items={project.features || []} small />
        <div className="mt-3">
          <Chips items={project.tech} />
        </div>
      </div>
      {project.image && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label={`View details for ${project.title}`}
          className="group -order-1 block overflow-hidden rounded-md border border-cream/10 lg:order-none"
        >
          <img
            src={project.image}
            alt=""
            className="block aspect-[16/10] w-full object-cover object-top grayscale-[.3] brightness-[.85] transition duration-300 group-hover:grayscale-0 group-hover:brightness-100"
          />
        </button>
      )}

      {open && <ProjectDetailsModal project={project} onClose={() => setOpen(false)} />}
    </motion.article>
  );
}
