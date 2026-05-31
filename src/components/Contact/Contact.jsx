import { motion } from 'framer-motion';
import {
  FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowRight,
  FiFacebook, FiArrowUpCircle, FiMapPin, FiSend,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { SiCodeforces } from 'react-icons/si';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@asfakT',
    href: 'https://github.com/asfakT',
    icon: FiGithub,
    color: '#e2e8f0',
    accent: '#6E7681',
  },
  {
    label: 'LinkedIn',
    handle: 'Asfak Shahrier',
    href: 'https://www.linkedin.com/in/asfak-shahrier/',
    icon: FiLinkedin,
    color: '#60A5FA',
    accent: '#0A66C2',
  },
  {
    label: 'Twitter / X',
    handle: '@asfak_dev',
    href: '#',
    icon: FiTwitter,
    color: '#7dd3fc',
    accent: '#1DA1F2',
  },
  {
    label: 'Facebook',
    handle: 'Asfak Shahrier',
    href: '#',
    icon: FiFacebook,
    color: '#93c5fd',
    accent: '#1877F2',
  },
  {
    label: 'WhatsApp',
    handle: '+880 1796512473',
    href: 'https://wa.me/8801796512473',
    icon: FaWhatsapp,
    color: '#86efac',
    accent: '#25D366',
  },
  {
    label: 'Codeforces',
    handle: 'Asfak_Shahrier',
    href: 'https://codeforces.com/profile/Asfak_Shahrier',
    icon: SiCodeforces,
    color: '#fca5a5',
    accent: '#EF4444',
  },
];

const openTo = [
  {
    icon: '🎓',
    title: 'MSc Applications',
    desc: 'ML, Algorithms, or Systems programs in Germany, Netherlands, UK',
  },
  {
    icon: '💼',
    title: 'Engineering Roles',
    desc: 'Senior full stack, backend, or ML engineering at product companies',
  },
  {
    icon: '🔬',
    title: 'Research Collaboration',
    desc: 'Joint research in ML / NLP / Computer Vision applications',
  },
];

const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Research', 'Achievements'];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle
        label="/ contact"
        title="Let's Work Together"
        subtitle="Open to MSc opportunities, top engineering roles, and interesting collaborations."
      />

      {/* ── Email CTA banner ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl p-8 md:p-10 mb-14 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{
          background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(239,68,68,0.08) 100%)',
          border: '1px solid rgba(59,130,246,0.25)',
          boxShadow: '0 0 60px rgba(59,130,246,0.1)',
        }}
      >
        {/* Glow blob */}
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-1">
            Got something in mind?
          </h3>
          <p className="text-gray-300 text-base flex items-center gap-2">
            <FiMapPin size={14} className="text-blue-400" />
            Lakshmipur, Bangladesh · Open to Remote &amp; Relocation
          </p>
        </div>

        <motion.a
          href="mailto:shahrierasfak27@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="relative z-10 flex items-center gap-3 px-7 py-4 rounded-2xl font-bold text-white text-base flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, #10B981, #059669)',
            boxShadow: '0 0 18px rgba(16,185,129,0.5), 0 0 6px rgba(16,185,129,0.35)',
          }}
        >
          <FiSend size={18} />
          Send Email
          <FiArrowRight size={16} />
        </motion.a>
      </motion.div>

      {/* ── Main grid: open-to + social ── */}
      <div className="grid lg:grid-cols-2 gap-10 mb-16">

        {/* Left — open to */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            Whether you're a university admissions committee, a recruiter from a top tech company,
            or a fellow engineer — I'd love to hear from you.
          </p>

          {openTo.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 p-5 rounded-2xl border transition-all duration-300 hover:border-blue-500/30"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <p className="text-white font-bold text-base mb-1">{item.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right — social grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {socialLinks.map(({ label, handle, href, icon: Icon, color, accent }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="flex items-center gap-3.5 p-4 rounded-2xl border transition-all duration-300 group"
              style={{ background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.09)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = accent + '55';
                e.currentTarget.style.background = accent + '12';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.09)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              }}
            >
              {/* Icon box */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: accent + '20', border: `1.5px solid ${accent}40` }}
              >
                <Icon size={20} style={{ color: accent }} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-white font-bold text-sm">{label}</p>
                <p className="text-gray-400 text-xs font-mono truncate">{handle}</p>
              </div>

              <FiArrowRight
                size={15}
                className="text-gray-600 group-hover:text-gray-300 flex-shrink-0 transition-all duration-200 group-hover:translate-x-1"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <motion.footer
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pt-10 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">

          {/* Col 1 — brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-sm text-white"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  boxShadow: '0 0 16px rgba(59,130,246,0.4)',
                }}
              >
                AS
              </div>
              <div>
                <p className="text-white font-bold text-base">Asfak Shahrier</p>
                <p className="text-gray-400 text-xs">Full Stack Engineer · Researcher</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building scalable systems, solving hard problems, and advancing AI research.
            </p>
            <p className="text-gray-500 text-xs flex items-center gap-1.5">
              <FiMapPin size={12} className="text-blue-400" />
              Lakshmipur, Bangladesh
            </p>
          </div>

          {/* Col 2 — quick nav */}
          <div>
            <p className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Quick Links</p>
            <div className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors flex-shrink-0" />
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — contact info */}
          <div>
            <p className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Get In Touch</p>
            <div className="space-y-3">
              <a
                href="mailto:shahrierasfak27@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors duration-200 group"
              >
                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <FiMail size={14} className="text-blue-400" />
                </div>
                <span className="text-sm">shahrierasfak27@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20">
                  <span className="w-3.5 h-3.5 block text-center text-green-400 text-xs font-bold">✓</span>
                </div>
                <span className="text-sm">Open to remote &amp; relocation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-500 text-xs font-mono">
            © {new Date().getFullYear()} Asfak Shahrier · Built with React, Tailwind &amp; Framer Motion
          </p>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -3, scale: 1.05 }}
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 text-sm font-semibold transition-colors duration-200"
          >
            Back to top
            <FiArrowUpCircle size={18} />
          </motion.button>
        </div>
      </motion.footer>
    </SectionWrapper>
  );
}
