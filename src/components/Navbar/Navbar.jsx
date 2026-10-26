import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiArrowUpRight } from 'react-icons/fi';
import Logo from '../ui/Logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  {
    href: '#experience',
    label: 'Experience',
    children: [
      { href: '#experience', label: 'Work Experience', tab: 'work' },
      { href: '#experience', label: 'Training Program', tab: 'training' },
      { href: '#experience', label: 'Competitive Programming', tab: 'cp' },
    ],
  },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#research', label: 'Research' },
  {
    href: '#achievements',
    label: 'Recognition',
    children: [
      { href: '#achievements', label: 'Achievements' },
      { href: '#certificates', label: 'Certificates' },
    ],
  },
  {
    href: '#lab',
    label: 'Learn',
    children: [
      { href: '#lab', label: 'Learning Lab' },
      { href: '#blog', label: 'Articles' },
    ],
  },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const sections = navLinks.flatMap((l) =>
      l.children ? l.children.map((c) => c.href.slice(1)) : [l.href.slice(1)]
    );
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = sections[0];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = id;
        }
      }
      setActive(current);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, tab) => {
    setMobileOpen(false);
    setOpenDropdown(null);
    const id = href.slice(1);

    // On another route: go home first, then let HomePage scroll to the section.
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id, tab } });
      return;
    }

    if (tab) {
      window.dispatchEvent(new CustomEvent('experience-tab', { detail: tab }));
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed inset-x-0 top-4 z-50 px-[5vw] font-dm"
      >
        <div
          className={`rounded-[14px] border border-cream/10 px-4 sm:px-5 transition-colors duration-300 ${
            scrolled ? 'bg-[#0E0D0C]/95' : 'bg-[#0E0D0C]/85'
          }`}
        >
          {/* h-[68px] navbar height; keep scroll-padding-top in index.css in sync */}
          <div className="flex items-center justify-between h-[68px]">

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              aria-label="Asfak Shahrier, home"
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <Logo size={40} />
              <span className="hidden sm:block font-serif text-[26px] leading-none text-cream">
                Asfak Shahrier
              </span>
            </a>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const hasChildren = !!link.children;
                const isActive = hasChildren
                  ? link.children.some((c) => c.href.slice(1) === active)
                  : active === link.href.slice(1);

                return (
                  <div
                    key={link.href + link.label}
                    className="relative"
                    onMouseEnter={() => hasChildren && setOpenDropdown(link.label)}
                    onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                    onFocus={() => hasChildren && setOpenDropdown(link.label)}
                    onBlur={(e) => {
                      if (hasChildren && !e.currentTarget.contains(e.relatedTarget)) setOpenDropdown(null);
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`group relative flex items-center gap-1 px-3.5 py-2.5 text-[15px] rounded-lg transition-colors duration-200 ${
                        isActive ? 'text-cream' : 'text-cream-2/80 hover:text-cream'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.07)' }}
                        />
                      )}
                      <span className="relative z-10">
                        {link.label}
                        <span
                          aria-hidden="true"
                          className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left transition-transform duration-300 ease-out ${
                            isActive ? 'scale-x-100 bg-copper' : 'scale-x-0 bg-peach group-hover:scale-x-100'
                          }`}
                        />
                      </span>
                      {hasChildren && (
                        <FiChevronDown
                          size={14}
                          className={`relative z-10 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                        />
                      )}
                    </a>

                    {hasChildren && (
                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 pt-2 min-w-[220px]"
                          >
                            <div className="rounded-xl border border-cream/10 bg-[#0E0D0C] overflow-hidden shadow-2xl shadow-black/60 py-1.5">
                              {link.children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={(e) => { e.preventDefault(); handleNavClick(child.href, child.tab); }}
                                  className="block px-4 py-2.5 text-sm text-cream-2 hover:text-cream hover:bg-cream/[0.04] transition-colors"
                                >
                                  {child.label}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* ── CTA + hamburger ── */}
            <div className="flex items-center gap-3">
<a
                href="mailto:shahrierasfak27@gmail.com"
                className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-[15px] font-medium text-cream rounded-full border border-cream/25 transition-colors duration-200 hover:border-cream/50"
              >
                Hire Me <FiArrowUpRight size={15} />
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-lg text-cream-2 hover:text-cream bg-cream/[0.06] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[96px] inset-x-[5vw] z-40 lg:hidden rounded-[14px] border border-cream/10 bg-[#0E0D0C] font-dm max-h-[calc(100vh-112px)] overflow-y-auto"
          >
            <div className="px-3 py-3 space-y-1">
              {navLinks.map((link) => {
                const isActive = link.children
                  ? link.children.some((c) => c.href.slice(1) === active)
                  : active === link.href.slice(1);
                return (
                  <div key={link.href + link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base transition-colors ${
                        isActive ? 'text-cream bg-cream/[0.06]' : 'text-cream-2/80 hover:text-cream'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-copper flex-shrink-0" />}
                      {link.label}
                    </a>

                    {link.children && (
                      <div className="ml-4 pl-3 border-l border-cream/10 space-y-0.5 mb-1">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(child.href, child.tab); }}
                            className="block px-4 py-2.5 rounded-lg text-sm text-stone hover:text-cream transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-3 pb-1">
                <a
                  href="mailto:shahrierasfak27@gmail.com"
                  className="flex w-full items-center justify-center gap-1.5 px-5 py-3 text-base font-medium text-cream rounded-full border border-cream/25 transition-colors hover:border-cream/50"
                >
                  Hire Me <FiArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
