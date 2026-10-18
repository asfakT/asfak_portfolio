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
  FiCode, FiCpu, FiBarChart2,
  FiLayers, FiActivity, FiBox, FiServer, FiTerminal,
} from 'react-icons/fi';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { skillCategories } from '../../data/skills';
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
function SkillRow({ name }) {
  const Icon = (skillIconMap[name] || { icon: FiCode }).icon;

  return (
    <div className="flex items-center gap-3 py-0.5">
      <Icon size={16} className="text-gray-400 flex-shrink-0" />
      <span className="text-gray-200 text-sm font-medium">{name}</span>
    </div>
  );
}

// ── Category card ─────────────────────────────────────────────────────────────
function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-xl border p-5"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div>
          <h3 className="text-white font-bold text-sm leading-tight">{category.category}</h3>
          <p className="text-[11px] text-gray-400 mt-0.5">
            {category.skills.length} skills
          </p>
        </div>

        {/* Tag */}
        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wider text-gray-300 border border-white/10">
          {category.tag}
        </span>
      </div>

      {/* Skill grid — strongest first, 2 columns on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
        {[...category.skills]
          .sort((a, b) => b.level - a.level)
          .map((skill) => (
            <SkillRow key={skill.name} name={skill.name} />
          ))}
      </div>
    </motion.div>
  );
}

// ── Loved tech row ────────────────────────────────────────────────────────────
const lovedTech = [SiReact, SiLaravel, SiPython, SiMysql, SiGit, SiDocker, SiFigma];

// ── Main export ───────────────────────────────────────────────────────────────
export default function Skills() {
  return (
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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4 px-5 py-3.5 rounded-xl"
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Loved tech icons */}
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-gray-400">I love working with</span>
          <div className="flex items-center gap-1.5">
            {lovedTech.map((Icon, i) => (
              <Icon key={i} size={16} className="text-gray-400 mx-1" />
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
