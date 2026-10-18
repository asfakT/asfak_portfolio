import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';
import Research from '../components/Research/Research';
import Achievements from '../components/Achievements/Achievements';
import Certificates from '../components/Certificates/Certificates';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';

function SectionDivider() {
  return <div className="w-full h-px bg-white/[0.06]" />;
}

function AltSection({ children }) {
  return <div style={{ background: 'var(--bg-base)' }}>{children}</div>;
}

export default function HomePage() {
  const location = useLocation();

  // When arriving from another route with a target section (Navbar link),
  // scroll to it after the homepage mounts.
  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const tab = location.state?.tab;
    if (tab) {
      window.dispatchEvent(new CustomEvent('experience-tab', { detail: tab }));
    }
    // Images loading below shift layout, so a single scroll lands short.
    // Re-scroll a few times over ~1s to correct for reflow.
    const delays = [50, 300, 600, 1000];
    const timers = delays.map((d) =>
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, d)
    );
    return () => timers.forEach(clearTimeout);
  }, [location.state]);

  return (
    <main>
      <Hero />

      <SectionDivider />
      <AltSection>
        <About />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Experience />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Projects />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Skills />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Research />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Achievements />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Certificates />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Blog />
      </AltSection>

      <SectionDivider />
      <AltSection>
        <Contact />
      </AltSection>
    </main>
  );
}
