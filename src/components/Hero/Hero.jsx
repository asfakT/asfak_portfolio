import { motion } from 'framer-motion';
import { FiArrowDown, FiArrowUpRight } from 'react-icons/fi';
import heroImg from '../../assets/hero_portrait.webp';
import HeroStats from './HeroStats';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Competitive Programmer',
  'AI App Developer',
  'AI & Machine Learning Enthusiast',
];

const socials = [
  { label: 'GitHub', href: 'https://github.com/asfakT' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/asfak-shahrier/' },
  { label: 'Medium', href: 'https://medium.com/@shahrierasfak27' },
];

const EMAIL = 'shahrierasfak27@gmail.com';

// Small uppercase mono label used for meta text
const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';
const textLink = 'inline-flex items-center gap-1 transition-colors hover:text-peach hover:underline underline-offset-4';

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden bg-ink font-dm text-cream lg:min-h-screen">
        {/* ── Portrait: stacked on mobile, right side on desktop ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mt-[96px] h-[52vh] w-full lg:mt-0 lg:absolute lg:right-[8vw] lg:top-1/2 lg:h-auto lg:w-[clamp(620px,58vw,1180px)] lg:-translate-y-[46%] lg:aspect-[1672/941]"
        >
          <img
            src={heroImg}
            alt="Asfak Shahrier"
            className="hero-portrait-mask h-full w-full select-none object-cover object-[78%_center] brightness-[.82] saturate-[.92] lg:object-center"
            draggable={false}
          />
          {/* Soft vignette so the photo sinks into the page */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{ background: 'radial-gradient(ellipse 70% 75% at 70% 42%, transparent 45%, rgba(3,3,3,0.55) 100%)' }}
          />
        </motion.div>

        {/* ── Top meta ── */}
        <div className="relative z-10 -mt-6 flex flex-col gap-2 px-[5vw] lg:absolute lg:inset-x-[5vw] lg:top-[112px] lg:mt-0 lg:flex-row lg:justify-between lg:px-0">
          <p className={mono}>
            <span className="mr-2.5 inline-block h-1.5 w-1.5 bg-copper align-[1px]" />
            Open to Opportunities
          </p>
          <p className={mono}>Lakshmipur, Bangladesh · Open to Remote &amp; Relocation</p>
        </div>

        {/* ── Main content ── */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          animate="show"
          className="relative z-10 flex flex-col justify-center px-[5vw] pb-10 pt-7 lg:min-h-screen lg:max-w-[54vw] lg:pb-[130px] lg:pt-[160px]"
        >
          <motion.p variants={fade} className={`${mono} mb-[18px] !text-copper`}>01 / Home</motion.p>

          <motion.h1
            variants={fade}
            className="whitespace-nowrap font-serif text-[44px] font-normal leading-none tracking-[-0.04em] sm:text-[64px] lg:text-[clamp(64px,7vw,120px)]"
          >
            Asfak <em className="italic">Shahrier</em>
          </motion.h1>

          <motion.p
            variants={fade}
            className={`${mono} mt-[26px] flex max-w-[640px] flex-col text-[13px] leading-loose !text-sand lg:flex-row lg:flex-wrap`}
          >
            {roles.map((role, i) => (
              <span key={role} className="whitespace-nowrap">
                {role}
                {i < roles.length - 1 && <span className="mx-2.5 hidden text-copper lg:inline">·</span>}
              </span>
            ))}
          </motion.p>

          <motion.p variants={fade} className="mt-6 max-w-[520px] text-base leading-[1.65] text-cream-2 lg:text-lg">
            Building production web apps with <span className="font-medium text-sand">Laravel, Angular &amp; React</span>,
            backed by strong competitive programming fundamentals and hands-on AI integration.
          </motion.p>

          <motion.div variants={fade} className="mt-[34px] flex flex-wrap items-center gap-[26px] text-sm">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-cream/25 bg-ink/60 px-6 py-3 transition-colors hover:border-cream/50 hover:text-peach"
            >
              View Projects <FiArrowDown size={14} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-1 border-b border-cream pb-1 transition-colors hover:text-peach">
              Get In Touch <FiArrowUpRight size={14} />
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-cream/35 pb-1 text-cream-2 transition-colors hover:border-cream hover:text-peach"
            >
              Resume
            </a>
          </motion.div>
        </motion.div>

        {/* ── Bottom meta: links ── */}
        <div className="relative z-10 mx-[5vw] mb-8 flex flex-col gap-3 border-t border-cream/10 pt-4 lg:absolute lg:inset-x-[5vw] lg:bottom-[26px] lg:mx-0 lg:mb-0 lg:flex-row lg:justify-between">
          <p className={mono}>
            {socials.map(({ label, href }, i) => (
              <span key={label}>
                {i > 0 && ' · '}
                <a href={href} target="_blank" rel="noopener noreferrer" className={textLink}>
                  {label} <FiArrowUpRight size={11} className="text-copper" />
                </a>
              </span>
            ))}
          </p>
          <a href={`mailto:${EMAIL}`} className={`${mono} ${textLink}`}>
            {EMAIL} <FiArrowUpRight size={11} className="text-copper" />
          </a>
        </div>
      </section>

      <HeroStats />
    </>
  );
}
