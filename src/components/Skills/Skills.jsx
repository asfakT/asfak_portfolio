import { motion } from 'framer-motion';
import {
  SiCplusplus, SiPython, SiJavascript, SiTypescript, SiPhp,
  SiLaravel, SiDjango, SiAngular, SiTailwindcss,
  SiNumpy, SiPandas, SiOpencv,
  SiMysql, SiGit, SiReact, SiDocker, SiFigma,
  SiHtml5, SiBootstrap, SiScikitlearn, SiOpenai,
  SiGooglegemini, SiJupyter,
} from 'react-icons/si';
import {
  FiCode, FiZap, FiCpu, FiTool, FiBarChart2,
  FiLayers, FiActivity, FiBox, FiServer,
  FiStar, FiShield, FiDatabase, FiTerminal,
} from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { skillCategories } from '../../data/skills';
import skillsBg from '../../assets/skills_bg.png';

// ── Category icon map ─────────────────────────────────────────────────────────
const catIconMap = { code: FiCode, zap: FiZap, cpu: FiCpu, tool: FiTool, aperture: FiActivity, shield: FiShield };

// ── Category tag config ───────────────────────────────────────────────────────
const categoryMeta = {
  'Languages':              { tagIcon: FiStar,     tagColor: '#F59E0B' },
  'Frameworks & Libraries': { tagIcon: FiCode,     tagColor: '#3B82F6' },
  'Python Libraries':       { tagIcon: FiDatabase, tagColor: '#8B5CF6' },
  'CS & Tools':             { tagIcon: FiShield,   tagColor: '#10B981' },
};

// ── Per-skill icon + brand colors ─────────────────────────────────────────────
const skillIconMap = {
  // Languages
  'C / C++':            { icon: SiCplusplus,    bg: '#00427e', fg: '#ffffff' },
  'Python':             { icon: SiPython,       bg: '#2b5b84', fg: '#FFD43B' },
  'JavaScript':         { icon: SiJavascript,   bg: '#2f2a00', fg: '#F7DF1E' },
  'TypeScript':         { icon: SiTypescript,   bg: '#1a3a5c', fg: '#3178C6' },
  'PHP':                { icon: SiPhp,          bg: '#3a3475', fg: '#a6b0f0' },
  // Web
  'Tailwind CSS':       { icon: SiTailwindcss,  bg: '#0a1f29', fg: '#38BDF8' },
  'HTML / CSS':         { icon: SiHtml5,        bg: '#2e1207', fg: '#E34F26' },
  'REST API':           { icon: FiServer,       bg: '#0f2418', fg: '#10B981' },
  'Django':             { icon: SiDjango,       bg: '#0a1f15', fg: '#44B78B' },
  'Angular':            { icon: SiAngular,      bg: '#3b0009', fg: '#DD0031' },
  'Laravel':            { icon: SiLaravel,      bg: '#3b0a09', fg: '#FF2D20' },
  'Bootstrap':          { icon: SiBootstrap,    bg: '#1a0f2e', fg: '#A87FFB' },
  'React':              { icon: SiReact,        bg: '#0a1f29', fg: '#61DAFB' },
  // ML & Data Science
  'Pandas':             { icon: SiPandas,       bg: '#13042e', fg: '#E70488' },
  'Scikit-learn':       { icon: SiScikitlearn,  bg: '#2e1a00', fg: '#F7931E' },
  'NumPy':              { icon: SiNumpy,        bg: '#001820', fg: '#4DABCF' },
  'XGBoost':            { icon: FiActivity,     bg: '#1f0f2e', fg: '#b07be0' },
  'Matplotlib':         { icon: FiBarChart2,    bg: '#0b1e2f', fg: '#6cb4e4' },
  'Seaborn':            { icon: FiBarChart2,    bg: '#1f0f2e', fg: '#9b6dd6' },
  'NLTK':               { icon: FiBox,          bg: '#1f0f2e', fg: '#9b6dd6' },
  'OpenCV':             { icon: SiOpencv,       bg: '#1a0f3b', fg: '#9B72CF' },
  // AI Integration
  'OpenAI GPT API':     { icon: SiOpenai,       bg: '#0a1f18', fg: '#10A37F' },
  'Google Gemini API':  { icon: SiGooglegemini, bg: '#0a142e', fg: '#8AB4F8' },
  'LLM App Development':{ icon: FiCpu,          bg: '#2e0a0a', fg: '#f08a8a' },
  // Tools & Infrastructure
  'Git / GitHub':       { icon: SiGit,          bg: '#2e0f08', fg: '#F05032' },
  'VS Code':            { icon: FiCode,         bg: '#0a1f29', fg: '#38BDF8' },
  'MySQL / PostgreSQL': { icon: SiMysql,        bg: '#0d2035', fg: '#4479A1' },
  'Jupyter Notebook':   { icon: SiJupyter,      bg: '#2e1407', fg: '#F37726' },
  'LaTeX':              { icon: FiBox,          bg: '#0f2418', fg: '#10B981' },
  'Figma':              { icon: SiFigma,        bg: '#2e0f08', fg: '#F24E1E' },
  // CS Fundamentals
  'Data Structures':    { icon: FiLayers,       bg: '#072a30', fg: '#22D3EE' },
  'Algorithms':         { icon: FiActivity,     bg: '#072a30', fg: '#22D3EE' },
  'OOP':                { icon: FiBox,          bg: '#072a30', fg: '#22D3EE' },
  'Operating Systems':  { icon: FiTerminal,     bg: '#072a30', fg: '#22D3EE' },
};

// ── Single skill row ──────────────────────────────────────────────────────────
function SkillRow({ name, index }) {
  const ic = skillIconMap[name] || { icon: FiCode, bg: '#1a1a2e', fg: '#9ca3af' };
  const Icon = ic.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex items-center gap-3 py-0.5"
    >
      {/* Brand icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
        style={{ background: ic.bg }}
      >
        <Icon size={16} style={{ color: ic.fg }} />
      </div>

      {/* Name */}
      <span className="text-gray-200 text-sm font-medium">{name}</span>
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

        {/* Skill grid — strongest first, 2 columns on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
          {[...category.skills]
            .sort((a, b) => b.level - a.level)
            .map((skill, i) => (
              <SkillRow key={skill.name} name={skill.name} index={i} />
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5 items-start">
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
        className="flex flex-wrap items-center justify-center gap-4 px-5 py-3.5 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
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
