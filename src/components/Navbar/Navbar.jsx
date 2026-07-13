import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
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
    label: 'More',
    children: [
      { href: '#achievements', label: 'Achievements' },
      { href: '#certificates', label: 'Certificates' },
      { href: '#blog', label: 'Blog' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/92 backdrop-blur-xl border-b shadow-2xl shadow-black/60'
            : 'bg-transparent'
        }`}
        style={scrolled ? { borderColor: 'rgba(255,255,255,0.07)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          {/* h-20 = 80px navbar height */}
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              className="flex items-center gap-3 group flex-shrink-0"
            >
              <span
                className="transition-transform duration-300 group-hover:scale-105"
                style={{ filter: 'drop-shadow(0 0 14px rgba(59,130,246,0.45))' }}
              >
                <Logo size={44} />
              </span>
              <span className="hidden sm:block text-sm font-semibold uppercase tracking-[0.2em]">
                <span className="text-gray-200">Asfak</span>{' '}
                <span className="text-gray-400">Shahrier</span>
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
                      className={`relative flex items-center gap-1 px-4 py-2.5 text-[15px] font-medium rounded-lg transition-all duration-200 ${
                        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-lg"
                          style={{ background: 'rgba(255,255,255,0.07)' }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                      {hasChildren && <FiChevronDown size={14} className="relative z-10" />}
                      {isActive && (
                        <span
                          className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
                          style={{ boxShadow: '0 0 6px #3B82F6' }}
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
                            <div
                              className="rounded-xl border overflow-hidden shadow-2xl shadow-black/60"
                              style={{ background: 'rgba(10,10,10,0.98)', borderColor: 'rgba(255,255,255,0.1)' }}
                            >
                              {link.children.map((child) => (
                                <a
                                  key={child.label}
                                  href={child.href}
                                  onClick={(e) => { e.preventDefault(); handleNavClick(child.href, child.tab); }}
                                  className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
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
                className="hidden md:inline-flex items-center px-5 py-2.5 text-[15px] font-semibold text-white rounded-xl transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #10B981, #059669)',
                  boxShadow: '0 0 18px rgba(16,185,129,0.5), 0 0 6px rgba(16,185,129,0.35)',
                }}
              >
                Hire Me
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2.5 rounded-xl text-gray-300 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)' }}
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
            className="fixed top-20 left-0 right-0 z-40 lg:hidden"
            style={{
              background: 'rgba(0,0,0,0.97)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) => {
                const isActive = link.children
                  ? link.children.some((c) => c.href.slice(1) === active)
                  : active === link.href.slice(1);
                return (
                  <div key={link.href + link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                      style={isActive ? { background: 'rgba(59,130,246,0.12)', color: '#fff' } : {}}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />}
                      {link.label}
                    </a>

                    {link.children && (
                      <div className="ml-4 pl-3 border-l space-y-0.5 mb-1" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(child.href, child.tab); }}
                            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-500 hover:text-white transition-colors"
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
                  className="block w-full text-center px-5 py-3.5 text-base font-semibold text-white rounded-xl transition-colors"
                  style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
