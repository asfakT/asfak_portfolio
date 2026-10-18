import { SiReact, SiLaravel, SiPython, SiMysql, SiGit, SiDocker, SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';
import { reveal } from '../ui/reveal';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import { skillCategories } from '../../data/skills';

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';
const pad2 = (n) => String(n).padStart(2, '0');

const lovedTech = [
  { icon: SiReact, name: 'React' },
  { icon: SiLaravel, name: 'Laravel' },
  { icon: SiPython, name: 'Python' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: SiGit, name: 'Git' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiFigma, name: 'Figma' },
];

export default function Skills() {
  return (
    <EditorialSection id="skills">
      <SectionHeader
        number="05"
        label="skills"
        title="Skills &"
        titleEm="Tools"
        subtitle="Technologies, frameworks, and tools I use to build and solve problems."
      />

      {/* One row per category: number · name + tag + count · skills (strongest first) */}
      <div className="mt-16 border-t border-cream/10">
        {skillCategories.map((cat, i) => (
          <motion.article
            key={cat.category}
            {...reveal()}
            className="grid grid-cols-1 items-baseline gap-2.5 border-b border-cream/10 py-[26px] lg:grid-cols-[60px_300px_1fr] lg:gap-7 lg:py-[30px]"
          >
            <span className={`${mono} !text-copper`}>{pad2(i + 1)}</span>
            <div>
              <h3 className="font-serif text-[26px] leading-[1.1] tracking-[-0.015em] lg:text-[clamp(26px,2.3vw,36px)]">
                {cat.category}
              </h3>
              <p className="mt-2 flex gap-3.5">
                <span className={`${mono} !text-sand`}>{cat.tag}</span>
                <span className={mono}>{cat.skills.length} skills</span>
              </p>
            </div>
            <p className="flex flex-wrap text-[17px] leading-[1.75] text-cream-2 lg:text-[clamp(17px,1.35vw,21px)]">
              {[...cat.skills]
                .sort((a, b) => b.level - a.level)
                .map((skill, j, list) => (
                  <span key={skill.name} className="whitespace-nowrap">
                    {skill.name}
                    {j < list.length - 1 && <span className="mx-3.5 text-copper">·</span>}
                  </span>
                ))}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Loved tech */}
      <div className="mt-14 flex flex-wrap items-center gap-x-7 gap-y-3.5 border-t border-cream/10 pt-[22px]">
        <p className={mono}>I love working with</p>
        <div className="flex flex-wrap gap-[22px]">
          {lovedTech.map(({ icon: Icon, name }) => (
            <Icon key={name} size={20} title={name} className="text-stone transition-colors hover:text-cream" />
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}
