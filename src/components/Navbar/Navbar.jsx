import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../ui/Logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#research', label: 'Research' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.slice(1));
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

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
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
              <span className="hidden sm:block font-bold text-white text-lg tracking-tight">
                Asfak<span className="text-blue-400">.dev</span>
              </span>
            </a>

            {/* ── Desktop nav links ── */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                const isActive = active === id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className={`relative px-4 py-2.5 text-[15px] font-medium rounded-lg transition-all duration-200 ${
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
                    {isActive && (
                      <span
                        className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
                        style={{ boxShadow: '0 0 6px #3B82F6' }}
                      />
                    )}
                  </a>
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
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
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
