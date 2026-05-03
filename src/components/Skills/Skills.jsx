import { motion } from 'framer-motion';
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiPhp,
  SiLaravel, SiDjango, SiAngular, SiTailwindcss,
  SiNumpy, SiPandas, SiOpencv,
  SiMysql, SiGit, SiReact, SiDocker, SiFigma,
} from 'react-icons/si';
import {
  FiCode, FiZap, FiCpu, FiTool, FiBarChart2,
  FiLayers, FiActivity, FiBox, FiServer,
  FiStar, FiShield, FiDatabase,
} from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { skillCategories } from '../../data/skills';
import skillsBg from '../../assets/skills_bg.png';

// ── Category icon map ─────────────────────────────────────────────────────────
const catIconMap = { code: FiCode, zap: FiZap, cpu: FiCpu, tool: FiTool };

// ── Category tag config ───────────────────────────────────────────────────────
const categoryMeta = {
  'Languages':              { tagIcon: FiStar,     tagColor: '#F59E0B' },
  'Frameworks & Libraries': { tagIcon: FiCode,     tagColor: '#3B82F6' },
  'Python Libraries':       { tagIcon: FiDatabase, tagColor: '#8B5CF6' },
  'CS & Tools':             { tagIcon: FiShield,   tagColor: '#10B981' },
};

// ── Per-skill icon + brand colors ─────────────────────────────────────────────
const skillIconMap = {
  'C / C++':        { icon: SiCplusplus,   bg: '#00427e', fg: '#ffffff' },
  'Python':         { icon: SiPython,      bg: '#2b5b84', fg: '#FFD43B' },
  'JavaScript':     { icon: SiJavascript,  bg: '#2f2a00', fg: '#F7DF1E' },
  'TypeScript':     { icon: SiTypescript,  bg: '#1a3a5c', fg: '#3178C6' },
  'PHP':            { icon: SiPhp,         bg: '#3a3475', fg: '#a6b0f0' },
  'Laravel':        { icon: SiLaravel,     bg: '#3b0a09', fg: '#FF2D20' },
  'Django':         { icon: SiDjango,      bg: '#0a1f15', fg: '#44B78B' },
  'Angular':        { icon: SiAngular,     bg: '#3b0009', fg: '#DD0031' },
  'Tailwind CSS':   { icon: SiTailwindcss, bg: '#0a1f29', fg: '#38BDF8' },
  'NumPy':          { icon: SiNumpy,       bg: '#001820', fg: '#4DABCF' },
  'Pandas':         { icon: SiPandas,      bg: '#13042e', fg: '#E70488' },
  'Matplotlib':     { icon: FiBarChart2,   bg: '#0b1e2f', fg: '#6cb4e4' },
  'OpenCV':         { icon: SiOpencv,      bg: '#1a0f3b', fg: '#9B72CF' },
  'Data Structures':{ icon: FiLayers,      bg: '#0f1e35', fg: '#60A5FA' },
  'Algorithms':     { icon: FiActivity,    bg: '#0f1e35', fg: '#60A5FA' },
  'OOP':            { icon: FiBox,         bg: '#0f1e35', fg: '#60A5FA' },
  'MySQL':          { icon: SiMysql,       bg: '#0d2035', fg: '#4479A1' },
  'Git / GitHub':   { icon: SiGit,         bg: '#2e0f08', fg: '#F05032' },
  'REST API':       { icon: FiServer,      bg: '#0f2418', fg: '#10B981' },
};

// ── Proficiency helper ────────────────────────────────────────────────────────
function prof(level) {
  if (level >= 90) return { label: 'Expert',       color: '#3B82F6' };
  if (level >= 80) return { label: 'Advanced',     color: '#10B981' };
  return              { label: 'Intermediate',  color: '#F59E0B' };
}

// ── Single skill row ──────────────────────────────────────────────────────────
function SkillRow({ name, level, index, barColor }) {
  const p = prof(level);
  const ic = skillIconMap[name] || { icon: FiCode, bg: '#1a1a2e', fg: '#9ca3af' };
  const Icon = ic.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="grid items-center gap-2.5"
      style={{ gridTemplateColumns: '30px 1fr auto 90px 36px' }}
    >
      {/* Brand icon */}
      <div
        className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: ic.bg }}
      >
        <Icon size={15} style={{ color: ic.fg }} />
      </div>

      {/* Name */}
      <span className="text-gray-200 text-sm font-medium truncate">{name}</span>

      {/* Proficiency badge */}
      <span
        className="text-[11px] font-bold px-2 py-0.5 rounded-md whitespace-nowrap"
        style={{ color: p.color, background: p.color + '18' }}
      >
        {p.label}
      </span>

      {/* Progress bar */}
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.07)' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.07, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${barColor}88, ${barColor})`,
            boxShadow: `0 0 6px ${barColor}55`,
          }}
        />
      </div>

      {/* Percentage */}
      <span className="text-[11px] font-mono text-right" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {level}%
      </span>
    </motion.div>
  );
}

// ── Category card ─────────────────────────────────────────────────────────────
function CategoryCard({ category, index }) {
  const CatIcon = catIconMap[category.icon] || FiCode;
  const meta = categoryMeta[category.category] || { tagIcon: FiCode, tagColor: '#3B82F6' };
  const TagIcon = meta.tagIcon;
  const { color } = category;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(10,11,18,0.85)',
        border: `1px solid ${color}28`,
        boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 8px 32px rgba(0,0,0,0.45)`,
      }}
    >
      {/* Top color stripe */}
      <div
        className="h-px"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}55, transparent 70%)` }}
      />

      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: color + '1a', border: `1px solid ${color}30` }}
            >
              <CatIcon size={20} style={{ color }} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm leading-tight">{category.category}</h3>
              <p className="text-[11px] font-mono mt-0.5" style={{ color: color + 'BB' }}>
                {category.skills.length} skills
              </p>
            </div>
          </div>

          {/* Tag */}
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold tracking-wider"
            style={{
              background: meta.tagColor + '14',
              color: meta.tagColor,
              border: `1px solid ${meta.tagColor}28`,
            }}
          >
            <TagIcon size={11} />
            {category.tag}
          </div>
        </div>

        {/* Skill rows */}
        <div className="space-y-3">
          {category.skills.map((skill, i) => (
            <SkillRow
              key={skill.name}
              name={skill.name}
              level={skill.level}
              index={i}
              barColor={color}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Loved tech row ────────────────────────────────────────────────────────────
const lovedTech = [
  { icon: SiReact,      color: '#61DAFB' },
  { icon: SiLaravel,    color: '#FF2D20' },
  { icon: SiPython,     color: '#FFD43B' },
  { icon: SiMysql,      color: '#4479A1' },
  { icon: SiGit,        color: '#F05032' },
  { icon: SiDocker,     color: '#2496ED' },
  { icon: SiFigma,      color: '#F24E1E' },
];

// ── Main export ───────────────────────────────────────────────────────────────
export default function Skills() {
  return (
    <div className="relative overflow-hidden">
      {/* Background globe image — top right, fades out */}
      <img
        src={skillsBg}
        alt=""
        aria-hidden="true"
        className="absolute top-0 right-0 w-[60%] pointer-events-none select-none"
        style={{
          opacity: 0.85,
          maskImage: 'radial-gradient(ellipse 95% 90% at 100% 0%, black 40%, rgba(0,0,0,0.7) 65%, transparent 88%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 90% at 100% 0%, black 40%, rgba(0,0,0,0.7) 65%, transparent 88%)',
        }}
      />
    <SectionWrapper id="skills">
      <SectionTitle
        label="/ skills"
        title="Technical Arsenal"
        subtitle="Technologies, frameworks, and tools I use to build and solve problems."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        {skillCategories.map((cat, i) => (
          <CategoryCard key={cat.category} category={cat} index={i} />
        ))}
      </div>

      {/* Bottom bar: legend + loved tech */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-4 px-5 py-3.5 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Proficiency legend */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-[11px] font-mono text-gray-500">// Proficiency Legend</span>
          {[
            { label: 'Expert',       color: '#3B82F6' },
            { label: 'Advanced',     color: '#10B981' },
            { label: 'Intermediate', color: '#F59E0B' },
          ].map(p => (
            <div key={p.label} className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
              <span className="text-xs text-gray-300 font-medium">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Loved tech icons */}
        <div className="flex items-center gap-2.5">
          <span className="text-[11px] font-mono text-gray-500">I love working with</span>
          <div className="flex items-center gap-1.5">
            {lovedTech.map((t, i) => {
              const Icon = t.icon;
              return (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.25, y: -3 }}
                  className="w-8 h-8 rounded-full flex items-center justify-center cursor-default"
                  style={{
                    background: t.color + '14',
                    border: `1px solid ${t.color}28`,
                  }}
                >
                  <Icon size={15} style={{ color: t.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
    </div>
  );
}
