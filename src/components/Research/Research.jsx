import { motion } from 'framer-motion';
import { FiFileText, FiExternalLink, FiCheckCircle, FiClock } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { researchPapers, researchInterests } from '../../data/research';

const researchImages = [
  'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=900&q=80',
  'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80',
];

function PaperCard({ paper, index }) {
  const isPublished = paper.status === 'Published';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.15 }}
      className="overflow-hidden rounded-2xl border transition-all duration-300 hover:border-blue-500/30"
      style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.03)' }}
    >
      {/* Paper image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={researchImages[index % researchImages.length]}
          alt={paper.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        {/* Status badge on image */}
        <div className="absolute top-4 right-4">
          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
            isPublished
              ? 'bg-green-500/20 text-green-300 border border-green-500/30'
              : 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
          }`}>
            {isPublished ? <FiCheckCircle size={12} /> : <FiClock size={12} />}
            {paper.status}
          </div>
        </div>
        {/* Year */}
        <div className="absolute bottom-4 left-5">
          <p className="text-gray-400 text-xs font-mono">{paper.year}</p>
        </div>
      </div>

      <div className="p-6">
        {/* Title + venue */}
        <div className="flex items-start gap-3 mb-4">
          <div className={`p-2.5 rounded-xl mt-0.5 flex-shrink-0 ${
            paper.color === 'blue' ? 'bg-blue-500/15 border border-blue-500/25' : 'bg-red-500/15 border border-red-500/25'
          }`}>
            <FiFileText size={17} className={paper.color === 'blue' ? 'text-blue-400' : 'text-red-400'} />
          </div>
          <div>
            <h3 className="text-white font-bold text-base leading-snug mb-2">{paper.title}</h3>
            <p className={`text-sm font-medium ${paper.color === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>
              {paper.venue}
            </p>
          </div>
        </div>

        {/* Abstract */}
        <div
          className="p-4 rounded-xl mb-4"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-300 text-sm leading-relaxed">{paper.abstract}</p>
        </div>

        {/* Findings */}
        <div className="mb-4">
          <p className="text-gray-300 text-sm font-semibold mb-2.5">Key Findings</p>
          <ul className="space-y-2">
            {paper.findings.map((f) => (
              <li key={f} className="text-gray-400 text-sm flex items-start gap-2.5">
                <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${paper.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {paper.keywords.map((k) => (
            <Badge key={k} color={paper.color === 'blue' ? 'blue' : 'red'} size="sm">{k}</Badge>
          ))}
        </div>

        {/* Tools + DOI */}
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex flex-wrap gap-1.5">
            {paper.tools.slice(0, 4).map((t) => (
              <Badge key={t} color="gray" size="sm">{t}</Badge>
            ))}
          </div>
          {paper.doi && (
            <a
              href={paper.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              DOI <FiExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionTitle
        label="/ research"
        title="Academic Contributions"
        subtitle="Published and under-review research at the intersection of ML, NLP, and real-world applications."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {researchPapers.map((paper, i) => (
          <PaperCard key={paper.id} paper={paper} index={i} />
        ))}
      </div>

      {/* Research interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl border"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.07) 0%, transparent 50%, rgba(239,68,68,0.07) 100%)',
          borderColor: 'rgba(255,255,255,0.08)',
        }}
      >
        <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
          <span className="text-blue-400">⦿</span> Research Interests
        </h3>
        <div className="flex flex-wrap gap-2">
          {researchInterests.map((interest) => (
            <Badge key={interest} color="blue" size="md">{interest}</Badge>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
