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
  { value: '3200+', label: 'Problems Solved' },
  { value: '2+', label: 'Years Experience' },
  { value: '2', label: 'Research Papers' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const socialClass =
  'p-3 rounded-lg border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-colors duration-200';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#0d0e14' }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── LEFT: text content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            {/* Status */}
            <motion.p variants={itemVariants} className="inline-flex items-center gap-2 text-green-400 text-sm font-medium">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
              Open to Opportunities
            </motion.p>

            {/* Name */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-none tracking-tight text-white">
                Asfak Shahrier
              </h1>
            </motion.div>

            {/* Roles */}
            <motion.p variants={itemVariants} className="text-lg sm:text-xl font-medium text-gray-200 leading-relaxed">
              {roles.map((role, i) => (
                <span key={role}>
                  {i > 0 && <span className="text-gray-500 mx-2">·</span>}
                  {role}
                </span>
              ))}
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg"
            >
              Building production web apps with <span className="text-blue-400 font-semibold">Laravel, Angular & React</span>,
              backed by strong <span className="text-white font-bold">competitive programming</span> fundamentals
              and hands-on <span className="text-blue-400 font-semibold">AI integration</span>.
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
              <a href="https://github.com/asfakT" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="GitHub">
                <FiGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/asfak-shahrier/" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="LinkedIn">
                <FiLinkedin size={20} />
              </a>
              <a href="https://medium.com/@shahrierasfak27" target="_blank" rel="noopener noreferrer" className={socialClass} aria-label="Medium">
                <FaMedium size={20} />
              </a>
              <span className="h-px w-10 bg-white/10" />
              <span className="text-gray-400 text-sm">shahrierasfak27@gmail.com</span>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative flex items-start justify-center"
          >
            <img
              src={heroImg}
              alt="Asfak Shahrier"
              className="relative w-full max-w-[520px] object-cover object-top select-none"
              style={{
                maskImage: 'radial-gradient(ellipse 80% 75% at 50% 28%, black 20%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 80% 75% at 50% 28%, black 20%, transparent 85%)',
              }}
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Stats line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 sm:mt-20 pt-6 border-t border-white/[0.08] flex flex-wrap gap-x-10 gap-y-3"
        >
          {stats.map((stat) => (
            <p key={stat.label} className="text-gray-400 text-sm sm:text-base">
              <span className="text-white text-xl sm:text-2xl font-bold mr-2">{stat.value}</span>
              {stat.label}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
