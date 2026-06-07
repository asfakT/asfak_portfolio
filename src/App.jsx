import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Research from './components/Research/Research';
import Achievements from './components/Achievements/Achievements';
import Certificates from './components/Certificates/Certificates';
import Contact from './components/Contact/Contact';

import section1 from './assets/section1.jpg';
import section2 from './assets/section2.jpg';
import section3 from './assets/section3.jpg';

function SectionDivider({ flip = false }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 2 }}>
      <div
        className="absolute inset-0"
        style={{
          background: flip
            ? 'linear-gradient(90deg, transparent 0%, #10B981 40%, #3B82F6 60%, transparent 100%)'
            : 'linear-gradient(90deg, transparent 0%, #3B82F6 40%, #10B981 60%, transparent 100%)',
          boxShadow: '0 0 18px 3px rgba(59,130,246,0.25)',
        }}
      />
    </div>
  );
}

// Same technique as Skills section — absolute <img> with mask fade
function BgDecor({ src, pos = 'top-right', opacity = 0.22 }) {
  const posStyle = {
    'top-right':    { top: 0, right: 0 },
    'top-left':     { top: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
    'bottom-left':  { bottom: 0, left: 0 },
  }[pos];

  const maskOrigin = {
    'top-right':    '95% 5%',
    'top-left':     '5% 5%',
    'bottom-right': '95% 95%',
    'bottom-left':  '5% 95%',
  }[pos];

  const mask = `radial-gradient(ellipse 85% 80% at ${maskOrigin}, black 25%, rgba(0,0,0,0.55) 55%, transparent 82%)`;

  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="absolute w-[55%] pointer-events-none select-none"
      style={{
        ...posStyle,
        opacity,
        maskImage: mask,
        WebkitMaskImage: mask,
        objectFit: 'cover',
        zIndex: 0,
      }}
    />
  );
}

function AltSection({ children, dark = false, bgImg = null, bgPos = 'top-right' }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: dark
          ? 'linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)'
          : 'linear-gradient(180deg, #000000 0%, #050505 100%)',
      }}
    >
      {bgImg && <BgDecor src={bgImg} pos={bgPos} opacity={0.42} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />

        <SectionDivider />
        <AltSection dark bgImg={section1} bgPos="top-right">
          <About />
        </AltSection>

        <SectionDivider flip />
        <AltSection bgImg={section2} bgPos="top-right">
          <Experience />
        </AltSection>

        <SectionDivider />
        <AltSection dark bgImg={section3} bgPos="top-right">
          <Projects />
        </AltSection>

        <SectionDivider flip />
        <AltSection bgImg={section1} bgPos="bottom-left">
          <Skills />
        </AltSection>

        <SectionDivider />
        <AltSection dark bgImg={section1} bgPos="bottom-right">
          <Research />
        </AltSection>

        <SectionDivider flip />
        <AltSection bgImg={section2} bgPos="top-left">
          <Achievements />
        </AltSection>

        <SectionDivider flip />
        <AltSection dark bgImg={section3} bgPos="top-right">
          <Certificates />
        </AltSection>

        <SectionDivider />
        <AltSection dark bgImg={section3} bgPos="bottom-left">
          <Contact />
        </AltSection>
      </main>
    </div>
  );
}

export default App;
