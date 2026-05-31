# Portfolio Website — AGENTS.md

Complete reference for AI-assisted development of Asfak Shahrier's portfolio site.

---

## Owner

- **Name:** Asfak Shahrier
- **Email (main):** shahrierasfak27@gmail.com | asfak.shahrier@workslayr.com (work/portfolio)
- **Role:** Full Stack Software Engineer (Laravel, Angular, React, Django), Competitive Programmer, ML Researcher, AI Integration
- **Education:** B.Sc. CSE — Gopalganj Science and Technology University (GSTU), CGPA 3.13/4.00, Dec 2024
- **Goal:** MSc in Europe (AI/ML focus) + Top tech company roles

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 19.x | UI framework |
| Vite | 8.x | Build tool / dev server |
| Tailwind CSS | 3.x | Styling (utility-first) |
| Framer Motion | 12.x | Animations (scroll reveal, hover, float) |
| React Icons | 5.x | Icons (Fi* = Feather, Fa* = FontAwesome) |
| Swiper | 12.x | Project carousel slider |
| @headlessui/react | 2.x | Accessible UI primitives |

### Dev Commands
```bash
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build
```


├── index.html                    ← HTML entry (Google Fonts: Inter, JetBrains Mono)
├── vite.config.js
├── tailwind.config.js            ← Custom colors, fonts, animations
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx                  ← React root entry
    ├── App.jsx                   ← Root layout + section dividers + alternating backgrounds
    ├── App.css                   ← Empty (all styles via Tailwind)
    ├── index.css                 ← Tailwind directives + custom utilities + Swiper overrides
    │
    ├── assets/
    │   ├── hero_image1.jpeg      ← Hero section photo (circular frame with rings)
    │   └── about_us_image.jpeg   ← About section photo (tall card, 340×420)
    │
    ├── data/                     ← ALL CONTENT LIVES HERE — edit these to update text
    │   ├── projects.js           ← featuredProjects (2), otherProjects (3)
    │   ├── experience.js         ← workExperience (2), cpExperience (4 platforms), cpStats
    │   ├── skills.js             ← skillCategories (5 groups)
    │   ├── research.js           ← researchPapers (2), researchInterests
    │   └── achievements.js       ← achievements (6), contestHistory (5)
    │
    ├── components/
    │   ├── Navbar/
    │   │   └── Navbar.jsx        ← Fixed navbar, h-20, blur-on-scroll, active link dot
    │   ├── Hero/
    │   │   └── Hero.jsx          ← Full-screen, typewriter, circular photo + rings, stats bar
    │   ├── About/
    │   │   └── About.jsx         ← Photo left (340×420), bio right, education cards
    │   ├── Experience/
    │   │   └── Experience.jsx    ← Tabs: [Work Experience | Competitive Programming]
    │   ├── Projects/
    │   │   ├── Projects.jsx      ← 2 featured (alt layout) + Swiper carousel
    │   │   └── ProjectCard.jsx   ← FeaturedProjectCard + SmallProjectCard
    │   ├── Skills/
    │   │   └── Skills.jsx        ← 4 category cards with animated bars + badge cloud
    │   ├── Research/
    │   │   └── Research.jsx      ← Paper cards with banner image, abstract, findings
    │   ├── Achievements/
    │   │   └── Achievements.jsx  ← Achievement cards + contest table + photo gallery
    │   ├── Contact/
    │   │   └── Contact.jsx       ← Social links grid + email CTA + footer
    │   └── ui/                   ← Reusable primitives
    │       ├── SectionWrapper.jsx   ← motion section, fade-in on scroll, max-w-7xl
    │       ├── SectionTitle.jsx     ← label + h2 + subtitle + gradient underline
    │       ├── Button.jsx           ← variants: primary/secondary/red/ghost
    │       └── Badge.jsx            ← colored pill tags, sizes: xs/sm/md
    │
    └── (hooks/, utils/, pages/ — not yet created, reserved for future use)
```

---

## Design System

### Colors
```js
// Background layers (darkest → lightest card)
black        = #000000   // base bg
surface      = #0d0d0d   // alternating section bg
card         = #111111   // card backgrounds
card-hover   = #161616
border       = #1f1f1f   // subtle borders
border-light = #2a2a2a   // hover borders

// Accents
blue-400  = #60A5FA
blue-500  = #3B82F6   ← primary accent
blue-600  = #2563EB
red-400   = #F87171
red-500   = #EF4444   ← secondary accent

// Text hierarchy
white      = primary headings
gray-200   = body text (high visibility)
gray-300   = body text (standard)
gray-400   = secondary labels
gray-500+  = avoid — too dim on black bg
```

### Custom CSS Utilities (src/index.css)
```css
.text-gradient-blue   /* blue→lightblue gradient text */
.text-gradient-red    /* red→lightred gradient text */
.text-gradient-mixed  /* blue→purple→red gradient text (used on hero name) */
.glow-blue            /* blue box-shadow glow */
.glow-red             /* red box-shadow glow */
.grid-bg              /* subtle dot grid background pattern */
```

### Typography
- **Font:** Inter (headings + body), JetBrains Mono (code/labels)
- **Section titles:** `text-4xl md:text-5xl font-extrabold`
- **Card headings:** `text-lg font-bold`
- **Body text:** `text-base md:text-lg text-gray-300`
- **Labels/mono:** `text-sm font-mono text-gray-400`

### Animations (Framer Motion)
- **Section reveal:** `initial opacity:0 y:40 → whileInView opacity:1 y:0` (SectionWrapper)
- **Stagger children:** containerVariants with staggerChildren: 0.12 (Hero)
- **Float:** `animate y:[0,-10,0]` duration 5s (hero photo)
- **Spin ring:** `animate rotate:360` duration 18s linear (hero outer ring)
- **Skill bars:** `whileInView width: level%` duration 0.9s easeOut
- **Hover lift:** `whileHover y:-5` on cards

---

## Section-by-Section Guide

### App.jsx — Layout
Sections alternate between two backgrounds with glowing gradient dividers:
- `SectionDivider` — 2px line, blue→red gradient, box-shadow glow
- Even sections: `#000000` bg
- Odd sections: `#0a0a0d` bg
- Section order: Hero → About → Experience → Projects → Skills → Research → Achievements → Contact

### Navbar (Navbar.jsx)
- Height: `h-20` (80px)
- Logo: `w-11 h-11` rounded-xl, gradient bg, glow shadow
- Links: `text-[15px] px-4 py-2.5`, active = white + blue dot glow
- Hire Me: gradient button with glow, `px-5 py-2.5`
- Mobile: hamburger at `lg:hidden` (992px breakpoint)
- Scroll detection: sets `scrolled` state → adds blur/border

### Hero (Hero.jsx)
- Image: `src/assets/hero_image1.jpeg` — 300×300 circle
- Rings: spinning conic-gradient outer, dashed middle, radial glow inner
- Typewriter: cycles through `['Full Stack Engineer', 'Competitive Programmer', 'ML Researcher', 'Problem Solver']`
- Stats bar: 4 cards at bottom (3200+ problems, 2 papers, 2 jobs, 3.13 CGPA)
- **To change hero image:** swap `hero_image1.jpeg` in assets + update import in Hero.jsx

### About (About.jsx)
- Image: `src/assets/about_us_image.jpeg` — 340×420 tall card, `objectPosition: top center`
- Layout: `lg:grid-cols-5` → image takes 2 cols, bio takes 3 cols
- Education: 2 cards side by side on md+
- **To change about image:** swap `about_us_image.jpeg` in assets (filename must match import)

### Experience (Experience.jsx)
- Tab 1 — Work Experience: timeline cards from `src/data/experience.js → workExperience`
- Tab 2 — Competitive Programming: stats banner + 4 platform cards from `cpExperience`
- Platform cards: show Rating, Solved, Contests, Rank badge, Highlights
- **To add a platform:** add entry to `cpExperience` array in experience.js

### Projects (Projects.jsx + ProjectCard.jsx)
- Featured: 2 projects from `featuredProjects`, alternate left/right image layout
- Carousel: Swiper with 1/2/3 slides per view (mobile/tablet/desktop), autoplay 4s
- Other projects: from `otherProjects` array (6 items)
- **To add a project:** push to `otherProjects` or replace `featuredProjects` entries

### Skills (Skills.jsx)
- 5 category cards: Languages, Frameworks & Web, ML & Data Science, AI Integration, Tools & Infrastructure
- Each skill has `name` and `level` (0–100) — bar animates on scroll
- **To update skills:** edit `src/data/skills.js`

### Research (Research.jsx)
- Each paper card has a banner image (Unsplash URL), abstract, findings, keywords, tools
- Paper images: `researchImages` array inside Research.jsx (Unsplash URLs, index % length)
- Status badges: "In Press" = blue, "Published" = green, "Under Review" = yellow
- Current papers: NPM link sharing (In Press, Communications in S&S) + CSE career prediction (Under Review, IEEE)
- **To add a paper:** push to `researchPapers` in research.js

### Achievements (Achievements.jsx)
- 6 achievement cards in 2-col grid
- Contest ranking table with progress bar
- Photo gallery: 6 Unsplash images (replace with real contest photos)
- **To update:** edit `src/data/achievements.js`

### Contact (Contact.jsx)
- 6 social links: GitHub, LinkedIn, Twitter, Facebook, WhatsApp, Codeforces
- Email CTA button links to `mailto:asfak.shahrier@workslayr.com`
- Footer: built-with note + back-to-top button
- **To update social links:** edit `socialLinks` array inside Contact.jsx directly

---

## Data Files — Quick Reference

### src/data/projects.js
```js
featuredProjects: [{ id, title, description, longDescription, features[], tech[], github, live, image, tag, color }]
otherProjects:    [{ id, title, description, tech[], github, live, tag }]
```

### src/data/experience.js
```js
workExperience: [{ id, role, company, location, period, type, description, responsibilities[], tech[], color }]
cpExperience:   [{ platform, handle, rating, maxRating, rank, problems, contests, color, icon, url, highlights[] }]
cpStats:        { totalProblems, totalContests, bestRank, favoriteTopics[] }
```

### src/data/skills.js
```js
skillCategories: [{ category, icon, color, tag, skills: [{ name, level }] }]
// 5 groups: Languages | Frameworks & Web | ML & Data Science | AI Integration | Tools & Infrastructure
```

### src/data/research.js
```js
researchPapers: [{ id, title, status, venue, year, abstract, findings[], tools[], keywords[], doi, pdf, color }]
researchInterests: string[]
```

### src/data/achievements.js
```js
achievements:   [{ id, title, description, category, year, icon, color }]
contestHistory: [{ name, rank, participants, year }]
```

---

## UI Components — Usage

### SectionWrapper
```jsx
<SectionWrapper id="section-id">
  {/* content */}
</SectionWrapper>
// Wraps in motion.section with fade-in on scroll, max-w-7xl, py-20 md:py-28
```

### SectionTitle
```jsx
<SectionTitle
  label="/ section-name"   // mono label above title
  title="Main Heading"
  subtitle="Optional subtitle text"
/>
```

### Button
```jsx
<Button variant="primary">...</Button>    // blue filled
<Button variant="secondary">...</Button>  // border outline
<Button variant="red">...</Button>        // red filled
<Button variant="ghost">...</Button>      // text only
<Button href="/url" target="_blank">...</Button>  // renders as <a>
```

### Badge
```jsx
<Badge color="blue|red|green|yellow|purple|gray" size="xs|sm|md">
  Text
</Badge>
```

---

## Common Tasks

### Add a new section
1. Create `src/components/NewSection/NewSection.jsx`
2. Use `<SectionWrapper id="new-section">` + `<SectionTitle>`
3. Add data file in `src/data/` if needed
4. Import and add to `src/App.jsx` between `<SectionDivider />` and `<AltSection>`
5. Add nav link to `navLinks` array in `Navbar.jsx`

### Change a profile photo
- Hero: replace `src/assets/hero_image1.jpeg` (keep same filename OR update import in Hero.jsx line 4)
- About: replace `src/assets/about_us_image.jpeg` (keep same filename OR update import in About.jsx line 3)

### Update personal info
- Name, email, social links: search for "Asfak" and "asfak.shahrier" across components
- Key locations: `Navbar.jsx` (Hire Me mailto), `Hero.jsx` (email text), `Contact.jsx` (socialLinks array + email href)

### Adjust animation speed
- Scroll reveal: `SectionWrapper.jsx` → `transition={{ duration: 0.6 }}`
- Hero float: `Hero.jsx` → `transition={{ duration: 5 }}`
- Skill bars: `Skills.jsx SkillBar` → `transition={{ duration: 0.9 }}`

### Add real social links
Edit `socialLinks` array in `src/components/Contact/Contact.jsx`:
```js
{ label: 'GitHub', handle: '@yourhandle', href: 'https://github.com/yourhandle', ... }
```

---

## Known Patterns & Conventions

- **Never use `text-gray-500` or darker for body text** — too dim on black background. Use `text-gray-300` minimum.
- **Inline styles for one-off values** — when Tailwind doesn't have exact hex/rgba, use `style={{}}` directly.
- **All section backgrounds** use inline `style={{ background: '...' }}` in App.jsx `AltSection`, not Tailwind bg classes.
- **Border colors** often done via `style={{ borderColor: 'rgba(255,255,255,0.08)' }}` for precision.
- **Framer Motion** `whileInView` always paired with `viewport={{ once: true }}` — animate only once on scroll.
- **Swiper CSS** must be imported in the component file: `import 'swiper/css'` etc.
- **Tailwind v3** is used — NOT v4. Do not use v4-only syntax like `@theme` or `bg-white/8` without the `/` opacity syntax check.

---

## Deployment Notes

- Build output: `dist/` folder (run `npm run build`)
- Assets are hashed by Vite: `hero_image1-DGMNu81P.jpeg` etc.
- To deploy: upload `dist/` to any static host (Vercel, Netlify, GitHub Pages)
- For Vercel/Netlify SPA routing: add `/* → /index.html` rewrite rule
