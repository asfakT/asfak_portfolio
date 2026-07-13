import { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiX, FiAward, FiEye, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ViewAllButton from '../ui/ViewAllButton';
import useModalDismiss from '../../hooks/useModalDismiss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { certificates } from '../../data/certificates';

const colorMap = {
  blue:   { accent: '#3B82F6', bg: 'rgba(59,130,246,0.07)',  border: 'rgba(59,130,246,0.22)' },
  green:  { accent: '#10B981', bg: 'rgba(16,185,129,0.07)',  border: 'rgba(16,185,129,0.22)' },
  purple: { accent: '#8B5CF6', bg: 'rgba(139,92,246,0.07)',  border: 'rgba(139,92,246,0.22)' },
  red:    { accent: '#EF4444', bg: 'rgba(239,68,68,0.07)',   border: 'rgba(239,68,68,0.22)'  },
  yellow: { accent: '#F59E0B', bg: 'rgba(245,158,11,0.07)',  border: 'rgba(245,158,11,0.22)' },
};

const navBtn =
  'w-9 h-9 rounded-full flex items-center justify-center border border-white/15 bg-white/5 ' +
  'text-gray-300 transition-colors hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-white ' +
  'disabled:opacity-30 disabled:cursor-default';

export function CertModal({ cert, onClose }) {
  const c = colorMap[cert.color] || colorMap.blue;
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
        initial={{ opacity: 0, scale: 0.88, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 280, damping: 28 }}
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden border flex flex-col"
        style={{ background: '#0d0d0d', borderColor: c.border, maxHeight: '92vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-4 flex-shrink-0 border-b"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <div>
            <h3 className="text-white font-bold text-lg leading-snug">{cert.title}</h3>
            <p className="text-sm mt-0.5 font-medium" style={{ color: c.accent }}>
              {cert.issuer} · {cert.date}
            </p>
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
              >
                <FiEye size={13} />
                Verify Credential
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
          >
            <FiX size={18} />
          </button>
        </div>

        {/* Certificate image */}
        <div className="overflow-y-auto flex-1 bg-white">
          <img src={cert.imageUrl} alt={cert.title} className="w-full h-auto block" />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}

export function CertCard({ cert, onClick }) {
  const c = colorMap[cert.color] || colorMap.blue;
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer h-full rounded-2xl border overflow-hidden flex flex-col transition-colors duration-300 hover:border-white/25"
      style={{ background: c.bg, borderColor: c.border }}
    >
      {/* Certificate image — zooms on hover */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img
          src={cert.imageUrl}
          alt={cert.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <Badge color={cert.color} size="xs">{cert.category}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        {/* Icon + date */}
        <div className="flex items-center justify-between gap-2">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.06)', border: `1.5px solid ${c.accent}55` }}
          >
            {cert.icon}
          </div>
          <span className="text-gray-500 text-xs font-mono flex-shrink-0">{cert.date}</span>
        </div>

        {/* Title + subtitle */}
        <div>
          <h3 className="text-white font-bold text-base leading-snug">{cert.title}</h3>
          <p className="text-sm font-semibold mt-1" style={{ color: c.accent }}>{cert.subtitle}</p>
        </div>

        {/* Issuer */}
        <div className="flex items-center gap-2">
          <FiAward size={13} style={{ color: c.accent }} className="flex-shrink-0" />
          <p className="text-gray-400 text-sm truncate">{cert.issuer}</p>
        </div>

        {/* Description */}
        <p
          className="text-gray-400 text-sm leading-relaxed flex-1"
          style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
        >
          {cert.description}
        </p>

        {/* CTA */}
        <div
          className="flex items-center gap-2 text-sm font-semibold pt-3 border-t"
          style={{ color: c.accent, borderColor: `${c.accent}22` }}
        >
          <FiEye size={14} />
          <span>Preview Certificate</span>
        </div>
      </div>
    </div>
  );
}

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SectionWrapper id="certificates">
      <SectionTitle
        label="/ certificates"
        title="Certifications"
        subtitle="Verified credentials across competitive programming, data science, and AI."
      />

      <div className="cert-swiper">
        {/* Nav buttons — top right, like Projects */}
        <div className="flex justify-end gap-2 mb-5">
          <button ref={prevRef} aria-label="Previous certificate" className={navBtn}>
            <FiChevronLeft size={18} />
          </button>
          <button ref={nextRef} aria-label="Next certificate" className={navBtn}>
            <FiChevronRight size={18} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id} className="h-auto">
              <CertCard cert={cert} onClick={() => setSelected(cert)} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-2">
          <ViewAllButton to="/certificates">View All Certificates</ViewAllButton>
        </div>
      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </SectionWrapper>
  );
}
