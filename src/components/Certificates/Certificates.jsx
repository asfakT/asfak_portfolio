import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useModalDismiss from '../../hooks/useModalDismiss';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import CardSlider from '../ui/CardSlider';
import { certificates } from '../../data/certificates';

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';

// Full certificate image + details, opened from any card
export function CertModal({ cert, onClose }) {
  useModalDismiss(onClose);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-ink/90 p-[4vw] font-dm text-cream"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        role="dialog"
        aria-modal="true"
        aria-label={cert.title}
        className="flex max-h-[92vh] w-full max-w-[920px] flex-col overflow-hidden rounded-[10px] border border-cream/10 bg-[#0b0a09]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-shrink-0 justify-between gap-5 border-b border-cream/10 px-[26px] py-[22px]">
          <div>
            <h3 className="font-serif text-[24px] leading-[1.1] tracking-[-0.015em] lg:text-[clamp(24px,2.2vw,34px)]">{cert.title}</h3>
            <p className={`${mono} mt-2 !text-sand`}>
              {cert.issuer} · {cert.date}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block border-b border-cream pb-[3px] text-sm transition-colors hover:text-peach"
              >
                Verify Credential <span className="text-copper">↗</span>
              </a>
            )}
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
        <div className="flex-1 overflow-y-auto bg-white">
          <img src={cert.imageUrl} alt={cert.title} className="block h-auto w-full" />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

// Card used by the homepage slider and the All Certificates grid
export function CertCard({ cert, onClick }) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-cream/10 bg-cream/[0.025] p-4 transition-colors hover:border-cream/25 hover:bg-cream/[0.04]">
      <button
        type="button"
        onClick={onClick}
        aria-label={`Preview ${cert.title}`}
        className="grid h-[200px] w-full place-items-center overflow-hidden rounded-md border border-cream/10 bg-[#0b0a09] p-3.5"
      >
        <img
          src={cert.imageUrl}
          alt=""
          loading="lazy"
          className="max-h-full max-w-full rounded-sm object-contain brightness-[.92] grayscale-[.35] transition duration-300 group-hover:brightness-100 group-hover:grayscale-0"
        />
      </button>
      <p className="mt-[18px] flex justify-between gap-3">
        <span className={`${mono} !text-sand`}>{cert.category}</span>
        <span className={`${mono} flex-none !text-copper`}>{cert.date}</span>
      </p>
      <h3 className="mt-3 font-serif text-[24px] leading-[1.1] tracking-[-0.015em] lg:text-[clamp(24px,1.9vw,30px)]">{cert.title}</h3>
      <p className="mt-1.5 font-serif text-lg italic text-sand">{cert.subtitle}</p>
      <p className="mt-1.5 text-sm text-[#9E978E]">{cert.issuer}</p>
      <p className="mb-1 mt-2.5 line-clamp-3 text-[14.5px] leading-[1.65] text-cream-2">{cert.description}</p>
      <button type="button" onClick={onClick} className="mt-auto self-start pt-3.5 text-sm text-stone transition-colors hover:text-peach">
        Preview Certificate <span className="text-copper">→</span>
      </button>
    </article>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);

  return (
    <EditorialSection id="certificates">
      <SectionHeader
        number="08"
        label="certificates"
        title="Certifications"
        subtitle="Verified credentials across competitive programming, data science, and AI."
      />

      <CardSlider
        items={certificates}
        getKey={(cert) => cert.id}
        label="certificates"
        renderItem={(cert) => <CertCard cert={cert} onClick={() => setSelected(cert)} />}
      />

      <Link
        to="/certificates"
        className="mt-14 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-[13px] text-sm transition-colors hover:border-cream/50 hover:text-peach"
      >
        View All Certificates <span className="text-copper">→</span>
      </Link>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </EditorialSection>
  );
}
