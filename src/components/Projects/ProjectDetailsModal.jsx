import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import Badge from '../ui/Badge';
import { tagColor } from './ProjectCard';
import useModalDismiss from '../../hooks/useModalDismiss';

export default function ProjectDetailsModal({ project, onClose }) {
  const accent = tagColor[project.tag] === 'green' ? '#10B981' : '#3B82F6';
  const images = project.images?.length ? project.images : project.image ? [project.image] : [];
  const [active, setActive] = useState(0);
  useModalDismiss(onClose);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden border flex flex-col"
        style={{ background: '#0d0d0d', borderColor: `${accent}44`, maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-start justify-between gap-4 px-6 py-4 flex-shrink-0 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div>
            <h3 className="text-white font-bold text-lg leading-snug">{project.title}</h3>
            {project.tag && (
              <div className="mt-1.5">
                <Badge color={tagColor[project.tag] || 'gray'} size="sm">{project.tag}</Badge>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
            aria-label="Close"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Image gallery */}
          {images.length > 0 && (
            <div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <img src={images[active]} alt={project.title} className="w-full h-full object-cover" />
              </div>
              {images.length > 1 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {images.map((img, i) => (
                    <button
                      key={img}
                      onClick={() => setActive(i)}
                      className="w-20 h-14 rounded-lg overflow-hidden border transition-all"
                      style={{ borderColor: i === active ? accent : 'rgba(255,255,255,0.12)', opacity: i === active ? 1 : 0.6 }}
                    >
                      <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed">
            {project.longDescription || project.description}
          </p>

          {/* Key Features */}
          {project.features?.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Key Features</h4>
              <ul className="space-y-2">
                {project.features.map((f) => (
                  <li key={f} className="text-gray-300 text-sm flex items-start gap-2 leading-snug">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Sub-projects (e.g. ML collection) */}
          {project.subProjects?.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">
                Projects in this Collection ({project.subProjects.length})
              </h4>
              <div className="space-y-3">
                {project.subProjects.map((sp) => (
                  <div
                    key={sp.name}
                    className="rounded-xl border p-4"
                    style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h5 className="text-white font-semibold text-sm">{sp.name}</h5>
                      {sp.notebook && (
                        <a
                          href={sp.notebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs font-semibold flex-shrink-0 transition-colors"
                          style={{ color: accent }}
                        >
                          Open Notebook
                          <FiArrowUpRight size={13} />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mt-1.5">{sp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          {project.tech?.length > 0 && (
            <div>
              <h4 className="text-white font-semibold text-sm mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <Badge key={t} color="gray" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer links */}
        {(project.github || project.live) && (
          <div
            className="flex items-center gap-3 px-6 py-4 flex-shrink-0 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-gray-200 border transition-colors hover:text-white hover:border-white/30"
                style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <FiGithub size={16} />
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ background: accent }}
              >
                <FiExternalLink size={16} />
                Live Site
              </a>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>,
    document.body
  );
}
