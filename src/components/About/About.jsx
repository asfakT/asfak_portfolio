import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiCalendar, FiBook } from 'react-icons/fi';
import heroImg from '../../assets/about_us_image.jpeg';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import Badge from '../ui/Badge';

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'University of Dhaka',
    period: '2019 — 2023',
    gpa: '3.72 / 4.00',
    highlights: ["Dean's List 4 semesters", 'Thesis: ML for Crop Disease Detection', 'CS Club President'],
    color: 'blue',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dhaka College, Science',
    period: '2017 — 2019',
    gpa: 'GPA 5.00 / 5.00',
    highlights: ['Top 1% nationally', 'Mathematics & Physics distinction'],
    color: 'red',
  },
];

const personalInfo = [
  { icon: FiMapPin, label: 'Location', value: 'Dhaka, Bangladesh' },
  { icon: FiMail, label: 'Email', value: 'asfak.shahrier@workslayr.com' },
  { icon: FiCalendar, label: 'Available', value: 'Immediately' },
  { icon: FiBook, label: 'Goal', value: 'MSc in Europe (2025)' },
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
              I'm a Full Stack Software Engineer with a strong foundation in computer science, competitive programming,
              and machine learning research. I specialize in building scalable backend systems with{' '}
              <span className="text-blue-400 font-semibold">Laravel</span> and crafting modern frontends with{' '}
              <span className="text-blue-400 font-semibold">React</span>.
            </p>
            <p>
              My competitive programming journey — solving{' '}
              <span className="text-white font-bold">3200+ problems</span> across Codeforces, LeetCode, and AtCoder —
              sharpened my algorithmic thinking and ability to write optimized, correct code under pressure.
            </p>
            <p>
              I've published research on deep learning for agricultural disease detection and NLP for low-resource languages.
              Currently, I'm preparing for{' '}
              <span className="text-white font-bold">MSc programs in Europe</span> with a focus on AI/ML,
              while continuing to grow professionally in industry.
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
              {['MSc Applications', 'System Design', 'Open Source', 'ML Research'].map((tag) => (
                <Badge key={tag} color="blue" size="md">{tag}</Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Education timeline */}
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

        <div className="grid md:grid-cols-2 gap-5">
          {education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 rounded-2xl border transition-all duration-300 hover:border-blue-500/30"
              style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <h4 className="text-white font-bold text-base leading-snug">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                </div>
                <Badge color={edu.color === 'blue' ? 'blue' : 'red'} size="sm">{edu.period}</Badge>
              </div>
              <p className={`text-lg font-extrabold mb-3 ${edu.color === 'blue' ? 'text-blue-400' : 'text-red-400'}`}>
                {edu.gpa}
              </p>
              <ul className="space-y-1.5">
                {edu.highlights.map((h) => (
                  <li key={h} className="text-gray-400 text-sm flex items-center gap-2.5">
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${edu.color === 'blue' ? 'bg-blue-500' : 'bg-red-500'}`} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
