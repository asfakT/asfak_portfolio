import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Badge from '../ui/Badge';

// Category tag → badge color
const tagColor = {
  'ML / Research': 'red',
  'Full Stack': 'blue',
  'AI / Web': 'purple',
  'Production': 'green',
  'Web App': 'blue',
};

export function FeaturedProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`grid lg:grid-cols-2 gap-6 lg:gap-10 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}
    >
      {/* Image */}
      <div className={`relative group overflow-hidden rounded-2xl border border-border ${!isEven ? 'lg:order-2' : ''}`}>
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>
        {/* Overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all">
              <FiGithub size={18} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-500/80 backdrop-blur-sm text-white hover:bg-blue-500 transition-all">
              <FiExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`space-y-4 ${!isEven ? 'lg:order-1' : ''}`}>
        <div className="flex items-center gap-2">
          <Badge color={project.color === 'blue' ? 'blue' : 'red'} size="md">{project.tag}</Badge>
          <span className="text-gray-400 text-sm font-mono">Featured Project</span>
        </div>

        <h3 className="text-white text-2xl md:text-3xl font-bold leading-tight">{project.title}</h3>

        <div
          className="p-5 rounded-xl"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-gray-300 text-base leading-relaxed">{project.longDescription}</p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {project.features.slice(0, 4).map((f) => (
            <li key={f} className="text-gray-300 text-base flex items-start gap-2.5">
              <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${project.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
              {f}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} color="gray" size="sm">{t}</Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-1">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-white text-base font-semibold transition-colors">
              <FiGithub size={17} /> Code
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className={`flex items-center gap-2 text-base font-semibold transition-colors ${
                project.color === 'blue' ? 'text-blue-400 hover:text-blue-300' : 'text-red-400 hover:text-red-300'
              }`}>
              <FiExternalLink size={17} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function SmallProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="h-full p-5 rounded-2xl border transition-all duration-300 flex flex-col hover:border-blue-500/30"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="flex items-start justify-between mb-4">
        {project.tag && <Badge color={tagColor[project.tag] || 'gray'} size="sm">{project.tag}</Badge>}
        <div className="flex gap-2">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-200 transition-colors">
              <FiGithub size={17} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-400 transition-colors">
              <FiExternalLink size={17} />
            </a>
          )}
        </div>
      </div>

      <h4 className="text-white font-bold text-base mb-3 leading-snug">{project.title}</h4>

      <ul className="space-y-2 flex-1 mb-4">
        {(project.features || []).slice(0, 3).map((f) => (
          <li key={f} className="text-gray-300 text-sm flex items-start gap-2 leading-snug">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-500" />
            <span className="line-clamp-2">{f}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tech.slice(0, 4).map((t) => (
          <Badge key={t} color="gray" size="sm">{t}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
