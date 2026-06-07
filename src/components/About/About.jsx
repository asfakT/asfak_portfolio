import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCalendar, FiBook, FiPhone } from 'react-icons/fi';
import heroImg from '../../assets/about_us_image.jpeg';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Gopalganj Science and Technology University (GSTU), Gopalganj',
    url: 'https://gstu.edu.bd/s/',
    period: '2020 — 2024',
    // gpa: 'CGPA 3.13 / 4.00',
    highlights: ['Graduated Dec 2024', '2 Research Papers (In Press + Under Review)'],
    color: 'blue',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Gridakalindia Hazera Hasmat University College, Faridganj, Chandpur',
    url: 'https://www.sohopathi.com/gridakalindia-hazera-hasmate-degree-college/',
    period: '—',
    gpa: null,
    highlights: [],
    color: 'red',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: "Raipur Government Merchant's Academy, Raipur, Lakshmipur",
    url: 'https://www.sohopathi.com/raipur-marchants-academy/',
    period: '—',
    gpa: null,
    highlights: [],
    color: 'blue',
  },
];

const personalInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Chittagong, Lakshmipur, Bangladesh' },
  { icon: FiMail, label: 'Email', value: 'shahrierasfak27@gmail.com', value2: 'asfakcse027@gmail.com' },
  { icon: FiPhone, label: 'Phone', value: '+8801796512473', value2: '01635828435' },
  { icon: FiBook, label: 'Goal', value: 'AI Research & Application Development' },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        label="/ about me"
        title="The Engineer Behind the Code"
        subtitle="Curious about systems, algorithms, and applied AI research."
      />

      {/* Top: image + bio side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-14">

        {/* Left: image + contact info stacked */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2"
        >
          <div className="w-full max-w-[360px] mx-auto lg:mx-0 space-y-5">
            {/* Image */}
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
                className="relative overflow-hidden w-full"
                style={{
                  aspectRatio: '34 / 42',
                  borderRadius: 24,
                  border: '2px solid rgba(59,130,246,0.35)',
                  boxShadow:
                    '0 0 0 6px rgba(59,130,246,0.08), 0 30px 80px rgba(0,0,0,0.7), 0 0 40px rgba(59,130,246,0.2)',
                }}
              >
                <img
                  src={heroImg}
                  alt="Asfak Shahrier"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'top center' }}
                />
              </div>

              {/* Decorative corner accents */}
              <div
                className="absolute -top-3 -right-3 w-16 h-16 rounded-2xl border-2 border-blue-500/30"
                style={{ background: 'rgba(59,130,246,0.06)' }}
              />
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12 rounded-xl border-2 border-red-500/30"
                style={{ background: 'rgba(239,68,68,0.06)' }}
              />
            </div>
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
              I'm a Software Engineer with hands-on experience building production web applications using{' '}
              <span className="text-blue-400 font-semibold">Laravel</span>,{' '}
              <span className="text-blue-400 font-semibold">Angular</span>, and{' '}
              <span className="text-blue-400 font-semibold">Django</span>, and integrating AI into them through the OpenAI and Gemini APIs.
            </p>
            <p>
              Years of competitive programming, with{' '}
              <span className="text-white font-bold">3200+ problems</span> solved across Codeforces, LeetCode, CodeChef, and AtCoder,
              sharpened my algorithmic thinking and my ability to write correct, optimized code under pressure.
            </p>
            <p>
              I also enjoy research that turns into real products. I've authored 2 papers, one{' '}
              <span className="text-white font-bold">In Press</span> at Communications in Software and Systems (NPM link sharing)
              and one <span className="text-white font-bold">Under Review</span> at IEEE (ML based career prediction for CSE students),
              and I love building AI applications on top of large language models.
            </p>
            <p>
              What drives me is <span className="text-blue-400 font-semibold">applied AI</span>. Right now I'm deepening my{' '}
              <span className="text-white font-bold">system design</span> skills and focusing on building{' '}
              <span className="text-blue-400 font-semibold">AI-powered software</span> that's practical, scalable, and genuinely
              useful to real users.
            </p>
          </div>

        </motion.div>
      </div>

      {/* Current Focus — full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-5 rounded-2xl border border-blue-500/20 mb-6"
        style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.08) 0%, transparent 100%)' }}
      >
        <p className="text-blue-400 text-xs font-mono font-semibold mb-3 uppercase tracking-widest">Current Focus</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {['AI & ML Enthusiast', 'Full Stack Development', 'AI Integration', 'ML Research', 'System Design'].map((tag) => (
            <span
              key={tag}
              className="text-center px-3 py-2.5 rounded-lg text-sm font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/25 transition-colors hover:bg-blue-500/20 hover:border-blue-500/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Contact info — full-width 4-across row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-14"
      >
        {personalInfo.map(({ icon: Icon, label, value, value2 }) => (
          <div
            key={label}
            className="flex items-start gap-3 p-4 rounded-xl border border-white/8 bg-white/5 transition-colors hover:bg-white/[0.07] hover:border-blue-500/40"
          >
            <div className="p-2.5 rounded-lg bg-blue-500/15 mt-0.5 flex-shrink-0">
              <Icon size={15} className="text-blue-400" />
            </div>
            <div className="min-w-0">
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wide">{label}</p>
              <p className="text-gray-200 text-sm font-semibold mt-0.5 break-words leading-snug">{value}</p>
              {value2 && <p className="text-gray-400 text-xs mt-1 break-words leading-snug">{value2}</p>}
            </div>
          </div>
        ))}
      </motion.div>

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
                <a
                  href={education[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 text-sm mt-1 inline-block hover:text-blue-400 transition-colors"
                >
                  {education[0].institution}
                </a>
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
                    <a
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 text-xs mt-1 leading-relaxed inline-block hover:text-blue-400 transition-colors"
                    >
                      {edu.institution}
                    </a>
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
