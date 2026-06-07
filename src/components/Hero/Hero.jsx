import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaMedium } from 'react-icons/fa';
import heroImg from '../../assets/hero_image1.jpeg';
import Button from '../ui/Button';

const roles = [
  'Software Engineer',
  'Full Stack Developer',
  'Competitive Programmer',
  'AI App Developer',
  'AI & Machine Learning Enthusiast',
];

const stats = [
  { value: '3200+', label: 'Problems Solved', color: 'blue' },
  { value: '2+', label: 'Years Experience', color: 'red' },
  { value: '2', label: 'Research Papers', color: 'blue' },
];


function TypeWriter({ words }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!deleting && subIndex === words[index].length + 10) {
        setDeleting(true);
        return;
      }
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? 50 : subIndex === words[index].length ? 1500 : 80);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 530);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <span className="text-gradient-blue">
      {words[index].substring(0, Math.min(subIndex, words[index].length))}
      <span className={blink ? 'opacity-100' : 'opacity-0'} style={{ transition: 'opacity 0.1s' }}>|</span>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0d0e14' }}
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Glow blobs */}
      <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-blue-500/[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-[460px] h-[460px] bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT: text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-sm font-medium">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-none tracking-tight text-white">
                Asfak
                
                <span className="text-gradient-mixed"> Shahrier</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 font-mono">
                I'm a <TypeWriter words={roles} />
              </p>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Building production web apps with <span className="text-blue-400 font-semibold">Laravel, Angular & React</span>,
              backed by strong <span className="text-white font-bold">competitive programming</span> fundamentals
              and hands-on <span className="text-blue-400 font-semibold">AI integration</span>.
            </motion.p>

            {/* Stack micro-line */}
            <motion.p variants={itemVariants} className="text-gray-500 text-sm font-mono tracking-wide">
              Laravel · Angular · React · Python · OpenAI · Gemini
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Button href="#projects" variant="primary" className="text-base px-7 py-3.5">
                View Projects <FiArrowRight />
              </Button>
              <Button href="#contact" variant="secondary" className="text-base px-7 py-3.5">
                Get In Touch
              </Button>
              <Button href="/resume.pdf" variant="ghost" target="_blank" rel="noopener noreferrer" className="text-base">
                <FiDownload /> Resume
              </Button>
            </motion.div>

            {/* Social row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="https://github.com/asfakT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/asfak-shahrier/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://medium.com/@shahrierasfak27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-blue-500/60 hover:bg-blue-500/10 transition-all duration-200"
                aria-label="Medium"
              >
                <FaMedium size={20} />
              </a>
              <span className="h-px w-10 bg-white/10" />
              <span className="text-gray-500 text-sm">shahrierasfak27@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-start justify-center lg:-mt-0"
          >
            {/* Subtle blue glow behind the figure */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse at 55% 40%, rgba(59,130,246,0.12) 0%, transparent 65%)',
              }}
            />

            <motion.img
              src={heroImg}
              alt="Asfak Shahrier"
              // animate={{ y: [0, -12, 0] }}
              // transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[520px] object-cover object-top select-none"
              style={{
                maskImage: 'radial-gradient(ellipse 80% 75% at 50% 28%, black 20%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 28%, black 20%, transparent 85%)',
                filter: 'drop-shadow(0 0 40px rgba(0,0,0,0.8))',
              }}
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-3 sm:gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-3 sm:p-5 rounded-2xl border border-white/8 hover:border-blue-500/30 transition-colors"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <p className={`text-2xl sm:text-3xl md:text-4xl font-extrabold ${stat.color === 'blue' ? 'text-gradient-blue' : 'text-gradient-red'}`}>
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1.5 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-gray-500 text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-10 bg-gradient-to-b from-blue-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
