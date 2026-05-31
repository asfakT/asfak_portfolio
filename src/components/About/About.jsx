import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCalendar, FiBook } from 'react-icons/fi';
import heroImg from '../../assets/about_us_image.jpeg';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Gopalganj Science and Technology University (GSTU), Gopalganj',
    period: '2020 — 2024',
    // gpa: 'CGPA 3.13 / 4.00',
    highlights: ['Graduated Dec 2024', '2 Research Papers (In Press + Under Review)', '3200+ CP problems solved'],
    color: 'blue',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Gridakalindia Hazera Hasmat University College, Faridganj, Chandpur',
    period: '—',
    gpa: null,
    highlights: [],
    color: 'red',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: "Raipur Government Merchant's Academy, Raipur, Lakshmipur",
    period: '—',
    gpa: null,
    highlights: [],
    color: 'blue',
  },
];

const personalInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Lakshmipur, Bangladesh' },
  { icon: FiMail, label: 'Email', value: 'shahrierasfak27@gmail.com' },
  { icon: FiCalendar, label: 'Available', value: 'Immediately' },
  { icon: FiBook, label: 'Goal', value: 'MSc in Europe (AI/ML)' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        label="/ about me"
        title="The Engineer Behind the Code"
        subtitle="Passion for systems, algorithms, and research — driven by a relentless curiosity."
      />

      {/* Top: image + bio side by side */}
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-14">

        {/* Image — left, 2 columns on lg */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 flex justify-center lg:justify-start"
        >
          <div className="relative">
            {/* Glow behind image */}
            <div
              className="absolute inset-0 rounded-3xl blur-2xl"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.25) 0%, rgba(239,68,68,0.1) 60%, transparent 80%)',
                transform: 'scale(1.1)',
              }}
            />

            {/* Image frame */}
            <div
              className="relative overflow-hidden"
              style={{
                width: 340,
                height: 420,
                borderRadius: 24,
                border: '2px solid rgba(59,130,246,0.35)',
                boxShadow:
                  '0 0 0 6px rgba(59,130,246,0.08), 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(59,130,246,0.2)',
              }}
            >
              <img
                src={heroImg}
                alt="Asfak Shahrier"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
              />
              {/* Bottom gradient */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                }}
              />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg">Asfak Shahrier</p>
                <p className="text-blue-400 text-sm font-medium">Full Stack Engineer · Researcher</p>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div
              className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl border-2 border-blue-500/30"
              style={{ background: 'rgba(59,130,246,0.06)' }}
            />
            <div
              className="absolute -bottom-3 -left-3 w-12 h-12 rounded-xl border-2 border-red-500/30"
              style={{ background: 'rgba(239,68,68,0.06)' }}
            />
          </div>
        </motion.div>

        {/* Bio — right, 3 columns on lg */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-3 space-y-6"
        >
          <div className="space-y-5 text-gray-300 leading-relaxed text-base md:text-lg">
            <p>
              I'm a Full Stack Software Engineer and ML Researcher, building production systems with{' '}
              <span className="text-blue-400 font-semibold">Laravel</span>,{' '}
              <span className="text-blue-400 font-semibold">Angular</span>, and{' '}
              <span className="text-blue-400 font-semibold">Django</span> — and integrating AI via OpenAI and Gemini APIs.
            </p>
            <p>
              My competitive programming journey — solving{' '}
              <span className="text-white font-bold">3200+ problems</span> across Codeforces, LeetCode, CodeChef, and AtCoder —
              sharpened my algorithmic thinking and ability to write optimized, correct code under pressure.
            </p>
            <p>
              I've authored 2 research papers: one{' '}
              <span className="text-white font-bold">In Press</span> at Communications in Software and Systems (NPM link sharing),
              and one <span className="text-white font-bold">Under Review</span> at IEEE (ML career prediction for CSE students).
              Targeting <span className="text-white font-bold">MSc programs in Europe</span> with AI/ML focus.
            </p>
          </div>

          {/* Personal info grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {personalInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl border border-white/8"
                style={{ background: 'rgba(255,255,255,0.04)' }}
              >
                <div className="p-2.5 rounded-lg bg-blue-500/15 mt-0.5">
                  <Icon size={15} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</p>
                  <p className="text-gray-200 text-sm font-semibold mt-0.5">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Current focus */}
          <div
            className="p-5 rounded-2xl border border-blue-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 100%)' }}
          >
            <p className="text-blue-400 text-xs font-mono font-semibold mb-3 uppercase tracking-widest">Current Focus</p>
            <div className="flex flex-wrap gap-2">
              {['MSc Applications', 'AI Integration', 'Competitive Programming', 'ML Research'].map((tag) => (
                <Badge key={tag} color="blue" size="md">{tag}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-white font-bold text-xl flex items-center gap-2 mb-6">
          <FiBook className="text-blue-400" />
          Education
        </h3>

        <div className="space-y-4">
          {/* BSc — primary full-width card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl border transition-all duration-300 hover:border-blue-500/30"
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h4 className="text-white font-bold text-base leading-snug">{education[0].degree}</h4>
                <p className="text-gray-400 text-sm mt-1">{education[0].institution}</p>
              </div>
              <Badge color="blue" size="sm">{education[0].period}</Badge>
            </div>
            {education[0].gpa && <p className="text-blue-400 text-lg font-extrabold mb-3">{education[0].gpa}</p>}
            <ul className="flex flex-wrap gap-x-8 gap-y-1.5">
              {education[0].highlights.map((h) => (
                <li key={h} className="text-gray-400 text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* HSC + SSC — compact side by side */}
          <div className="grid sm:grid-cols-2 gap-4">
            {education.slice(1).map((edu, idx) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl border transition-all duration-300 hover:border-blue-500/20"
                style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: edu.color === 'blue' ? 'rgba(59,130,246,0.12)' : 'rgba(239,68,68,0.12)',
                      border: edu.color === 'blue' ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(239,68,68,0.25)',
                    }}
                  >
                    <FiBook size={14} className={edu.color === 'blue' ? 'text-blue-400' : 'text-red-400'} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-semibold text-sm leading-snug">{edu.degree}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{edu.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
