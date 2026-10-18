import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import useModalDismiss from '../../hooks/useModalDismiss';

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';
const heading = `${mono} mb-3 block`;
const chip = 'rounded-full border border-cream/[0.16] px-[11px] py-[5px] text-[12.5px] text-cream-2';
const footLink = 'border-b pb-[3px] text-sm transition-colors hover:text-peach';

export default function ProjectDetailsModal({ project, onClose }) {
  const images = project.images?.length ? project.images : project.image ? [project.image] : [];
  const [active, setActive] = useState(0);
  useModalDismiss(onClose);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/90 p-[4vw] font-dm text-cream backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-[10px] border border-cream/10 bg-[#0b0a09]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-start justify-between gap-5 border-b border-cream/10 px-[26px] py-[22px]">
          <div>
            <h3 className="font-serif text-[24px] leading-[1.1] tracking-[-0.015em] lg:text-[clamp(24px,2.2vw,34px)]">{project.title}</h3>
            {project.tag && <p className={`${mono} mt-2 !text-sand`}>{project.tag}</p>}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 flex-none place-items-center rounded-full border border-cream/20 text-lg text-stone transition-colors hover:border-cream/45 hover:text-cream"
          >
            ×
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 space-y-7 overflow-y-auto p-[26px]">
          {/* Image gallery */}
          {images.length > 0 && (
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-cream/10">
                <img src={images[active]} alt={project.title} className="h-full w-full object-cover" />
              </div>
              {images.length > 1 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`h-14 w-20 overflow-hidden rounded-md border transition-all ${
                        i === active ? 'border-copper opacity-100' : 'border-cream/[0.16] opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${project.title} ${i + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="max-w-[70ch] text-[17px] leading-[1.7] text-cream">{project.longDescription || project.description}</p>

          {/* Key Features */}
          {project.features?.length > 0 && (
            <div>
              <span className={heading}>Key Features</span>
              <ul>
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="relative py-1.5 pl-6 text-[15px] leading-[1.6] text-cream-2 before:absolute before:left-0 before:top-[17px] before:h-px before:w-3 before:bg-copper before:content-['']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sub-projects (e.g. ML collection) */}
          {project.subProjects?.length > 0 && (
            <div>
              <span className={heading}>Projects in this Collection ({project.subProjects.length})</span>
              <div className="border-t border-cream/10">
                {project.subProjects.map((sp) => (
                  <div key={sp.name} className="border-b border-cream/10 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <h5 className="font-serif text-xl leading-tight">{sp.name}</h5>
                      {sp.notebook && (
                        <a
                          href={sp.notebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 border-b border-cream/40 pb-[3px] text-sm transition-colors hover:border-cream hover:text-peach"
                        >
                          Open Notebook <span className="text-copper">↗</span>
                        </a>
                      )}
                    </div>
                    <p className="mt-1.5 text-[15px] leading-[1.6] text-cream-2">{sp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          {project.tech?.length > 0 && (
            <div>
              <span className={heading}>Tech Stack</span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className={chip}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer links */}
        {(project.github || project.live) && (
          <div className="flex flex-shrink-0 items-center gap-[22px] border-t border-cream/10 px-[26px] py-4">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className={`${footLink} border-cream`}>
                Live Site <span className="text-copper">↗</span>
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${footLink} border-cream/40`}>
                View Code <span className="text-copper">↗</span>
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>,
    document.body
  );
}
