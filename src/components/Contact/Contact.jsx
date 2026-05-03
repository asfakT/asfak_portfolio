import { motion } from 'framer-motion';
import {
  FiMail, FiGithub, FiLinkedin, FiTwitter, FiArrowRight, FiFacebook
} from 'react-icons/fi';
import { FaWhatsapp, FaCodepen } from 'react-icons/fa';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const socialLinks = [
  {
    label: 'GitHub',
    handle: '@asfak-shahrier',
    href: 'https://github.com',
    icon: FiGithub,
    color: '#6E7681',
    bg: 'hover:border-gray-500/50 hover:bg-gray-500/10',
  },
  {
    label: 'LinkedIn',
    handle: 'Asfak Shahrier',
    href: 'https://linkedin.com',
    icon: FiLinkedin,
    color: '#0A66C2',
    bg: 'hover:border-blue-500/50 hover:bg-blue-500/10',
  },
  {
    label: 'Twitter / X',
    handle: '@asfak_dev',
    href: 'https://twitter.com',
    icon: FiTwitter,
    color: '#1DA1F2',
    bg: 'hover:border-sky-400/50 hover:bg-sky-400/10',
  },
  {
    label: 'Facebook',
    handle: 'Asfak Shahrier',
    href: 'https://facebook.com',
    icon: FiFacebook,
    color: '#1877F2',
    bg: 'hover:border-blue-600/50 hover:bg-blue-600/10',
  },
  {
    label: 'WhatsApp',
    handle: '+880 1XXX-XXXXXX',
    href: 'https://wa.me/8801000000000',
    icon: FaWhatsapp,
    color: '#25D366',
    bg: 'hover:border-green-500/50 hover:bg-green-500/10',
  },
  {
    label: 'Codeforces',
    handle: 'asfak_shahrier',
    href: 'https://codeforces.com',
    icon: FaCodepen,
    color: '#EF4444',
    bg: 'hover:border-red-500/50 hover:bg-red-500/10',
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <SectionTitle
        label="/ contact"
        title="Let's Work Together"
        subtitle="Open to MSc opportunities, top engineering roles, and interesting collaborations."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left — message */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-gray-400 text-base leading-relaxed">
            Whether you're a university admissions committee, a recruiter from a top tech company,
            or a fellow engineer — I'd love to hear from you. My inbox is always open.
          </p>

          <div className="space-y-3">
            {[
              { title: 'MSc Applications', desc: 'Interested in ML, Algorithms, or Systems programs in Europe (Germany, Netherlands, UK)' },
              { title: 'Engineering Roles', desc: 'Open to senior full stack, backend, or ML engineering positions at product companies' },
              { title: 'Research Collaboration', desc: 'Interested in joint research in ML/NLP/CV applications' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-4 rounded-xl border border-border bg-white/2">
                <span className="text-blue-400 mt-0.5">→</span>
                <div>
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <Button href="mailto:asfak.shahrier@workslayr.com" variant="primary" className="w-fit">
            <FiMail size={16} />
            asfak.shahrier@workslayr.com
            <FiArrowRight size={14} />
          </Button>
        </motion.div>

        {/* Right — social links */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {socialLinks.map(({ label, handle, href, icon: Icon, color, bg }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className={`flex items-center gap-3 p-4 rounded-xl border border-border transition-all duration-300 group ${bg}`}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: color + '18', border: `1px solid ${color}30` }}
              >
                <Icon size={18} style={{ color }} />
              </div>
              <div>
                <p className="text-white text-sm font-semibold group-hover:text-gray-100">{label}</p>
                <p className="text-gray-600 text-xs font-mono">{handle}</p>
              </div>
              <FiArrowRight size={14} className="text-gray-700 group-hover:text-gray-400 ml-auto transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-20 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-xs font-bold">
            AS
          </div>
          <span className="text-gray-600 text-sm">Asfak Shahrier</span>
        </div>
        <p className="text-gray-700 text-xs font-mono">
          Built with React + Tailwind + Framer Motion · {new Date().getFullYear()}
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-gray-600 hover:text-blue-400 text-xs font-medium transition-colors flex items-center gap-1"
        >
          Back to top ↑
        </button>
      </motion.div>
    </SectionWrapper>
  );
}
