import Logo from '../ui/Logo';
import {
  FiGithub, FiLinkedin,
  FiBookOpen, FiBriefcase, FiActivity,
} from 'react-icons/fi';
import { FaWhatsapp, FaMedium } from 'react-icons/fa';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';

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
    label: 'Medium',
    handle: '@shahrierasfak27',
    href: 'https://medium.com/@shahrierasfak27',
    icon: FaMedium,
    color: '#86efac',
    accent: '#1A8917',
  },
  {
    label: 'WhatsApp',
    handle: '+880 1796512473',
    href: 'https://wa.me/8801796512473',
    icon: FaWhatsapp,
    color: '#86efac',
    accent: '#25D366',
  },
];

const openTo = [
  {
    icon: FiBookOpen,
    title: 'MSc Applications',
    desc: 'MSc in AI / Machine Learning and related CS programs',
  },
  {
    icon: FiBriefcase,
    title: 'Engineering Roles',
    desc: 'Full stack, backend, or ML engineering at product companies',
  },
  {
    icon: FiActivity,
    title: 'Research Collaboration',
    desc: 'Joint research in ML / NLP and applied AI',
  },
];

const navLinks = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Research', 'Achievements', 'Certificates'];

const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';
const EMAIL = 'shahrierasfak27@gmail.com';

export default function Contact() {
  return (
    <EditorialSection id="contact" className="!pb-10">
      <SectionHeader
        number="10"
        label="contact"
        title="Let's Work"
        titleEm="Together"
        subtitle="Have an opportunity or idea in mind? Let's talk."
      />

      {/* ── Email CTA ── */}
      <div className="mt-16 border-y border-cream/10 py-10">
        <p className={`${mono} inline-flex items-center !text-green-400`}>
          <span className="mr-2.5 inline-block h-1.5 w-1.5 rounded-full bg-green-400" />
          Available for opportunities
        </p>
        <p className="mt-3.5 font-serif text-[28px] tracking-[-0.015em] lg:text-[clamp(28px,2.6vw,42px)]">Got something in mind?</p>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-3.5 inline-block break-all border-b border-cream/30 font-serif text-[34px] italic leading-[1.05] tracking-[-0.02em] transition-colors hover:border-copper hover:text-peach lg:text-[clamp(34px,4.6vw,76px)]"
        >
          {EMAIL} <span className="not-italic text-copper">↗</span>
        </a>
        <div className="mt-[26px] flex flex-wrap items-center gap-x-7 gap-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-[13px] text-sm transition-colors hover:border-cream/60 hover:text-peach"
          >
            Send Email <span className="text-copper">→</span>
          </a>
          <p className={mono}>Lakshmipur, Bangladesh · Open to Remote &amp; Relocation</p>
        </div>
      </div>

      {/* ── Open to + socials ── */}
      <div className="mt-[72px] grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[6vw]">
        <div>
          <p className="max-w-[56ch] text-[17px] leading-[1.7] text-cream-2">
            Whether you're a university admissions committee, a recruiter from a top tech company,
            or a fellow engineer — I'd love to hear from you.
          </p>
          <div className="mt-[22px] border-t border-cream/10">
            {openTo.map((item, i) => (
              <div key={item.title} className="grid grid-cols-[40px_1fr] gap-4 border-b border-cream/10 py-5">
                <span className={`${mono} !text-copper`}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <p className="font-serif text-2xl tracking-[-0.01em]">{item.title}</p>
                  <p className="mt-1 text-[14.5px] leading-[1.55] text-stone">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className={mono}>Find me on</p>
          <div className="mt-[22px] border-t border-cream/10">
            {socialLinks.map(({ label, handle, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-cream/10 py-5 transition-[padding] duration-300 hover:pl-2"
              >
                <div>
                  <p className="font-serif text-2xl transition-colors group-hover:text-peach">{label}</p>
                  <p className="mt-1 font-mono text-xs text-[#9E978E]">{handle}</p>
                </div>
                <span className="text-copper">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="mt-[72px] border-t border-cream/10 pt-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr_1fr] md:gap-[5vw]">
          <div>
            <p className="flex items-center gap-3 font-serif text-[28px]">
              <Logo size={40} />
              Asfak Shahrier
            </p>
            <p className="mt-1 text-[13px] text-[#9E978E]">Software Engineer · AI &amp; ML Enthusiast</p>
            <p className="mt-3.5 max-w-[38ch] text-[14.5px] leading-[1.6] text-stone">
              Building scalable systems, solving hard problems, and advancing AI research.
            </p>
            <p className="mt-3 text-[13px] text-[#9E978E]">Lakshmipur, Bangladesh</p>
          </div>

          <div>
            <p className={mono}>Quick Links</p>
            <div className="mt-3.5 grid grid-cols-2 gap-x-[18px] gap-y-2 text-sm text-stone">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="transition-colors hover:text-peach"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className={mono}>Get In Touch</p>
            <div className="mt-3.5 grid gap-2 text-sm text-stone">
              <a href={`mailto:${EMAIL}`} className="break-all transition-colors hover:text-peach">
                {EMAIL}
              </a>
              <a href="tel:+8801796512473" className="transition-colors hover:text-peach">
                +880 1796512473
              </a>
              <p>
                {socialLinks.map(({ label, href }, i) => (
                  <span key={label}>
                    {i > 0 && ' · '}
                    <a href={href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-peach">
                      {label}
                    </a>
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-cream/10 pt-[18px] text-[12.5px] text-[#9E978E]">
          <p>© {new Date().getFullYear()} Asfak Shahrier · Built with React, Tailwind &amp; Framer Motion</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="transition-colors hover:text-peach"
          >
            Back to top <span className="text-copper">↑</span>
          </button>
        </div>
      </footer>
    </EditorialSection>
  );
}
