import { FiMapPin, FiMail, FiCalendar, FiBook, FiPhone } from 'react-icons/fi';
import heroImg from '../../assets/about_us_image.jpeg';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';

const education = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Gopalganj Science and Technology University (GSTU), Gopalganj',
    url: 'https://gstu.edu.bd/s/',
    period: '2020 — 2024',
    // gpa: 'CGPA 3.13 / 4.00',
    highlights: ['Graduated Dec 2024', '2 Research Papers (1 Published, 1 Completed)'],
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

const focusAreas = ['AI & ML Enthusiast', 'Full Stack Development', 'AI Integration', 'ML Research', 'System Design'];

// Small uppercase mono label
const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';

export default function About() {
  return (
    <EditorialSection id="about">
      <SectionHeader
        number="02"
        label="about me"
        title="The Engineer Behind"
        titleEm="the Code"
        subtitle="Curious about systems, algorithms, and applied AI research."
      />

      <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-20 lg:grid-cols-[minmax(260px,1fr)_2.2fr] lg:gap-[6vw]">
        {/* Photo — sticks while the bio scrolls on desktop */}
        <aside className="lg:sticky lg:top-[110px]">
          <div className="aspect-[34/42] w-full overflow-hidden rounded">
            <img
              src={heroImg}
              alt="Asfak Shahrier"
              className="h-full w-full object-cover object-top grayscale sepia-[.3] brightness-[.85] contrast-[1.08]"
            />
          </div>
        </aside>

        <div>
          {/* Lead paragraph */}
          <p className="font-serif text-[26px] leading-[1.3] tracking-[-0.01em] text-cream lg:text-[clamp(26px,2.4vw,36px)]">
            I'm a Software Engineer with hands-on experience building production web applications using{' '}
            <b className="font-normal italic text-sand">Laravel</b>,{' '}
            <b className="font-normal italic text-sand">Angular</b>, and{' '}
            <b className="font-normal italic text-sand">Django</b>, and integrating AI into them through the OpenAI and Gemini APIs.
          </p>

          {/* Remaining bio in two columns */}
          <div className="mt-10 gap-12 text-base leading-[1.75] text-cream-2 lg:columns-2 [&>p]:mb-[22px] [&>p]:break-inside-avoid">
            <p>
              Years of competitive programming, with{' '}
              <strong className="font-medium text-cream">3600+ problems</strong> solved across Codeforces, LeetCode, CodeChef, and AtCoder,
              sharpened my algorithmic thinking and my ability to write correct, optimized code under pressure.
            </p>
            <p>
              I also enjoy research that turns into real products. I've{' '}
              <strong className="font-medium text-cream">published</strong> a paper at Communications in Software and Systems
              (NPM link-sharing), with another <strong className="font-medium text-cream">completed manuscript</strong> (ML-based
              career prediction), and I love building AI applications on top of large language models.
            </p>
            <p>
              What drives me is <b className="font-medium text-sand">applied AI</b>. Right now I'm deepening my{' '}
              <strong className="font-medium text-cream">system design</strong> skills and focusing on building{' '}
              <b className="font-medium text-sand">AI-powered software</b> that's practical, scalable, and genuinely
              useful to real users.
            </p>
          </div>

          {/* Current Focus */}
          <div className="mt-7 border-t border-cream/10 pt-[22px]">
            <p className={mono}>Current Focus</p>
            <div className="mt-3.5 flex flex-wrap gap-2.5">
              {focusAreas.map((tag) => (
                <span key={tag} className="rounded-full border border-cream/[0.18] px-4 py-2 text-sm text-cream-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact info — 2×2 grid */}
          {/* 1 column on phones, 2×2 from sm up */}
          <dl className="mt-9 grid grid-cols-1 border-y border-cream/10 sm:grid-cols-2">
            {personalInfo.map(({ label, value, value2 }, i) => (
              <div
                key={label}
                className={`py-5 sm:pr-6 lg:py-[22px] ${i > 0 ? 'border-t border-cream/10' : ''} ${
                  i === 1 ? 'sm:border-t-0' : ''
                } ${i % 2 ? 'sm:border-l sm:border-cream/10 sm:pl-6' : ''}`}
              >
                <dt className={mono}>{label}</dt>
                <dd className="mt-2.5 break-words text-[15px] leading-normal text-cream">
                  {value}
                  {value2 && <span className="mt-0.5 block text-[13px] text-[#9E978E]">{value2}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Education — 3 columns */}
      <div className="mt-20 lg:mt-[110px]">
        <h3 className="mb-[30px] font-serif text-[36px] font-normal tracking-[-0.02em] lg:text-[clamp(36px,3.6vw,56px)]">
          Education
        </h3>
        <div className="grid grid-cols-1 border-y border-cream/10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {education.map((edu, i) => (
            <div
              key={edu.degree}
              className={`py-6 lg:px-7 lg:pb-[34px] lg:pt-[30px] ${
                i === 0 ? 'lg:pl-0' : 'border-t border-cream/10 lg:border-l lg:border-t-0'
              }`}
            >
              <p className="font-mono text-xs tracking-[1.5px] text-copper">{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-[18px] font-serif text-[24px] leading-[1.15] tracking-[-0.01em] lg:text-[clamp(24px,2vw,30px)]">
                {edu.degree}
              </p>
              <a
                href={edu.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-block text-sm leading-[1.55] text-stone transition-colors hover:text-peach"
              >
                {edu.institution} <span className="text-copper">↗</span>
              </a>
              {edu.gpa && <p className="mt-3 font-serif text-xl text-sand">{edu.gpa}</p>}
              {(edu.period !== '—' || edu.highlights.length > 0) && (
                <div className="mt-[18px] text-sm leading-[1.8] text-[#9E978E]">
                  {edu.period !== '—' && <p className={`${mono} !text-sand`}>{edu.period}</p>}
                  {edu.highlights.map((h) => (
                    <p key={h}>{h}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </EditorialSection>
  );
}
