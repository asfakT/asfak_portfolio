import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCode, FiExternalLink, FiBookOpen, FiCheckCircle, FiClock, FiAward, FiMapPin, FiGlobe } from 'react-icons/fi';
import { SiCodeforces, SiLeetcode, SiCodechef, SiHackerrank } from 'react-icons/si';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';
import { workExperience, trainingExperience, cpExperience, cpStats } from '../../data/experience';

const tabs = [
  { id: 'work', label: 'Work Experience', icon: FiBriefcase },
  { id: 'training', label: 'Training Program', icon: FiBookOpen },
  { id: 'cp', label: 'Competitive Programming', icon: FiCode },
];

// Real brand logos by platform (AtCoder has none → falls back to text icon)
const platformLogo = {
  Codeforces: SiCodeforces,
  LeetCode: SiLeetcode,
  CodeChef: SiCodechef,
  HackerRank: SiHackerrank,
};

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

function TrainingCard({ item, index }) {
  const isGreen = item.color === 'green';
  const accent = isGreen ? '#10B981' : '#3B82F6';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative overflow-hidden rounded-2xl border transition-all duration-300 group"
      style={{
        background: `linear-gradient(135deg, ${accent}0d 0%, transparent 60%)`,
        borderColor: `${accent}33`,
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ background: `linear-gradient(to bottom, ${accent}, ${accent}88)` }}
      />

      <div className="p-6 pl-7">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-white font-bold text-lg">{item.title}</h3>
              {item.verified && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border"
                  style={{ background: `${accent}1a`, color: accent, borderColor: `${accent}40` }}
                >
                  <FiCheckCircle size={10} /> Verified
                </span>
              )}
            </div>
            <p className="text-sm font-medium" style={{ color: accent }}>{item.organization}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge color={isGreen ? 'green' : 'blue'} size="sm">{item.period}</Badge>
            <Badge color="gray" size="sm">{item.type}</Badge>
          </div>
        </div>

        {item.hours && (
          <p className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
            <FiClock size={11} style={{ color: accent }} /> {item.hours}
            {item.serial && <span className="text-gray-700 font-mono ml-2">· Serial: {item.serial}</span>}
          </p>
        )}

        <p className="text-gray-300 text-base leading-relaxed mb-4">{item.description}</p>

        <ul className="space-y-2 mb-4">
          {item.highlights.map((h) => (
            <li key={h} className="text-gray-300 text-sm flex gap-2.5">
              <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {item.tech.map((t) => (
              <Badge key={t} color="gray" size="xs">{t}</Badge>
            ))}
          </div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105 flex-shrink-0"
              style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)`, boxShadow: `0 0 16px ${accent}40` }}
            >
              View Certificate <FiExternalLink size={13} />
            </a>
          )}
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
            {platformLogo[platform.platform]
              ? (() => {
                  const Logo = platformLogo[platform.platform];
                  return <Logo size={24} style={{ color: platform.color }} />;
                })()
              : <span style={{ color: platform.color }}>{platform.icon}</span>}
          </div>
          <div>
            <p className="text-white font-bold text-base">{platform.platform}</p>
            <p className="text-gray-400 text-sm font-mono">@{platform.handle}</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors whitespace-nowrap">
          View Profile
        </span>
      </div>

      {/* Stats row — single centered Solved when no rating/contests (e.g. CSES) */}
      {platform.rating == null && platform.contests == null ? (
        <div className="mb-4 p-3 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <p className="font-extrabold text-2xl" style={{ color: platform.color }}>{platform.problems}+</p>
          <p className="text-gray-400 text-xs mt-0.5 font-medium">Problems Solved</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="text-center">
            <p className="font-extrabold text-xl" style={{ color: platform.color }}>
              {platform.rating || '—'}
            </p>
            <p className="text-gray-400 text-xs mt-0.5 font-medium">
              {platform.maxRating > platform.rating ? `Rating · max ${platform.maxRating}` : 'Rating'}
            </p>
          </div>
          <div className="text-center border-x" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-white font-extrabold text-xl">{platform.problems}+</p>
            <p className="text-gray-400 text-xs mt-0.5 font-medium">Solved</p>
          </div>
          <div className="text-center">
            <p className="text-white font-extrabold text-xl">{platform.contests}+</p>
            <p className="text-gray-400 text-xs mt-0.5 font-medium">Contests</p>
          </div>
        </div>
      )}

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
      <div className="flex flex-wrap gap-1 p-1 rounded-xl w-full sm:w-fit mb-10 border" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`relative flex flex-1 sm:flex-none items-center justify-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 whitespace-nowrap ${
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
        {activeTab === 'work' && (
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
        )}

        {activeTab === 'training' && (
          <motion.div
            key="training"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            {trainingExperience.map((item, i) => (
              <TrainingCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        )}

        {activeTab === 'cp' && (
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
                { label: 'Total Problems', value: cpStats.totalProblems + '+', color: 'blue', icon: FiCheckCircle },
                { label: 'Total Contests', value: cpStats.totalContests + '+', color: 'green', icon: FiAward },
                { label: 'Onsite Contests', value: cpStats.onsiteContests + '+', color: 'blue', icon: FiMapPin },
                { label: 'Platforms', value: cpExperience.length + '+', color: 'green', icon: FiGlobe },
              ].map((s) => {
                const isBlue = s.color === 'blue';
                const box = isBlue ? 'bg-blue-500/10 border-blue-500/25' : 'bg-emerald-500/10 border-emerald-500/25';
                const accent = isBlue ? 'text-blue-400' : 'text-emerald-400';
                const Icon = s.icon;
                return (
                  <div key={s.label} className={`p-5 rounded-2xl border text-center ${box}`}>
                    <Icon className={`mx-auto mb-2 ${accent}`} size={20} />
                    <p className={`text-3xl font-extrabold ${accent}`}>{s.value}</p>
                    <p className="text-gray-300 text-sm font-medium mt-1.5">{s.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Platform cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
