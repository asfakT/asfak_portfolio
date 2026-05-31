import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCode, FiExternalLink } from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { workExperience, cpExperience, cpStats } from '../../data/experience';

const tabs = [
  { id: 'work', label: 'Work Experience', icon: FiBriefcase },
  { id: 'cp', label: 'Competitive Programming', icon: FiCode },
];

function WorkCard({ exp, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="flex gap-4">
        {/* Timeline */}
        <div className="hidden sm:flex flex-col items-center">
          <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-1.5 ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
          <div className="flex-1 w-px bg-border mt-2" />
        </div>

        <div className="flex-1 pb-8">
          <div
            className="p-6 rounded-2xl border transition-all duration-300 group-hover:border-blue-500/25"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                <p className="text-base mt-1 flex items-center gap-1.5">
                  <span className={exp.color === 'blue' ? 'text-blue-400 font-semibold' : 'text-red-400 font-semibold'}>{exp.company}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-400">{exp.location}</span>
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <Badge color={exp.color === 'blue' ? 'blue' : 'red'} size="sm">{exp.period}</Badge>
                <Badge color="gray" size="sm">{exp.type}</Badge>
              </div>
            </div>

            <p className="text-gray-300 text-base leading-relaxed mb-4">{exp.description}</p>

            {/* Responsibilities */}
            <ul className="space-y-2.5 mb-4">
              {exp.responsibilities.map((r) => (
                <li key={r} className="text-gray-300 text-base flex gap-2.5">
                  <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
                  {r}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5">
              {exp.tech.map((t) => (
                <Badge key={t} color="gray" size="xs">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CPPlatformCard({ platform, index }) {
  return (
    <motion.a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="block p-6 rounded-2xl border transition-all duration-300 group"
      style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}
    >
      {/* Platform header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-extrabold"
            style={{ backgroundColor: platform.color + '28', border: `1.5px solid ${platform.color}55` }}
          >
            <span style={{ color: platform.color }}>{platform.icon}</span>
          </div>
          <div>
            <p className="text-white font-bold text-base">{platform.platform}</p>
            <p className="text-gray-400 text-sm font-mono">@{platform.handle}</p>
          </div>
        </div>
        <FiExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
        <div className="text-center">
          <p className="font-extrabold text-xl" style={{ color: platform.color }}>
            {platform.rating || '—'}
          </p>
          <p className="text-gray-400 text-xs mt-0.5 font-medium">Rating</p>
        </div>
        <div className="text-center border-x" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p className="text-white font-extrabold text-xl">{platform.problems}</p>
          <p className="text-gray-400 text-xs mt-0.5 font-medium">Solved</p>
        </div>
        <div className="text-center">
          <p className="text-white font-extrabold text-xl">{platform.contests}</p>
          <p className="text-gray-400 text-xs mt-0.5 font-medium">Contests</p>
        </div>
      </div>

      {/* Rank badge */}
      <div
        className="text-center py-2.5 rounded-xl text-sm font-extrabold tracking-wide mb-4"
        style={{ backgroundColor: platform.color + '20', color: platform.color, border: `1px solid ${platform.color}35` }}
      >
        {platform.rank}
      </div>

      {/* Highlights */}
      <ul className="space-y-2">
        {platform.highlights.map((h) => (
          <li key={h} className="text-gray-300 text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: platform.color }} />
            {h}
          </li>
        ))}
      </ul>
    </motion.a>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <SectionWrapper id="experience">
      <SectionTitle
        label="/ experience"
        title="Where I've Been"
        subtitle="Professional journey spanning industry and competitive programming."
      />

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-xl w-fit mb-10 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`relative flex items-center gap-2 px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 ${
              activeTab === id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {activeTab === id && (
              <motion.div
                layoutId="tab-bg"
                className="absolute inset-0 bg-blue-500/20 border border-blue-500/30 rounded-lg"
              />
            )}
            <Icon size={14} className="relative z-10" />
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'work' ? (
          <motion.div
            key="work"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-0"
          >
            {workExperience.map((exp, i) => (
              <WorkCard key={exp.id} exp={exp} index={i} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="cp"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Total stats banner */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { label: 'Total Problems', value: cpStats.totalProblems + '+', color: 'blue' },
                { label: 'Total Contests', value: cpStats.totalContests + '+', color: 'red' },
                { label: 'Onsite Contests', value: cpStats.onsiteContests + '+', color: 'blue' },
                { label: 'Platforms', value: 10, color: 'red' },
              ].map((s) => (
                <div key={s.label} className={`p-5 rounded-2xl border text-center ${
                  s.color === 'blue' ? 'bg-blue-500/10 border-blue-500/25' : 'bg-red-500/10 border-red-500/25'
                }`}>
                  <p className={`text-3xl font-extrabold ${s.color === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>{s.value}</p>
                  <p className="text-gray-300 text-sm font-medium mt-1.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Platform cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {cpExperience.map((p, i) => (
                <CPPlatformCard key={p.platform} platform={p} index={i} />
              ))}
            </div>

            {/* Favorite topics */}
            <div className="p-6 rounded-2xl border" style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)' }}>
              <p className="text-gray-200 text-base font-semibold mb-3">Favorite Problem Categories</p>
              <div className="flex flex-wrap gap-2">
                {cpStats.favoriteTopics.map((t) => (
                  <Badge key={t} color="blue" size="sm">{t}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
