# Portfolio Website - CLAUDE.md

Project reference for AI-assisted work on Asfak Shahrier's portfolio. Keep this file current: if you change structure,
design tokens, data fields, routes or deployment, update this file in the same change.

---

## Owner

- **Name:** Asfak Shahrier
- **Email (main):** shahrierasfak27@gmail.com
- **Role:** Software Engineer (Laravel, Angular, React, Django), competitive programmer, ML researcher, AI integration
- **Education:** B.Sc. CSE, Gopalganj Science and Technology University (GSTU), graduated Dec 2024
- **Goal:** MSc in Europe (AI/ML focus) and strong software engineering roles
- **Live site:** https://asfakshahrier.vercel.app (Vercel project `protfolio`)

---

## Tech stack

| Tool | Purpose |
|---|---|
| React 19 + Vite | UI and build |
| react-router-dom 7 | Routes: `/`, `/projects`, `/certificates`, `/blog` |
| Tailwind CSS 3 (NOT v4) | Styling. Do not use v4-only syntax |
| Framer Motion 12 | Scroll reveal, hero load-in, stat count-up |
| react-icons 5 | Icons (Fi = Feather, Fa = Font Awesome, Si = Simple Icons) |
| react-markdown | Renders chatbot replies |
| @headlessui/react | Accessible primitives |
| Vercel serverless (`api/`) | Chatbot backend (Groq, model `llama-3.1-8b-instant`) |

### Commands
```bash
npm run dev      # Vite only, http://localhost:5173 (no /api, chat will not work)
vercel dev       # site + /api on http://localhost:3000 (use this to test the chatbot)
npm run lint     # must pass with 0 errors
npm run build    # production build to dist/, must pass
```
After editing `tailwind.config.js`, restart the dev server (it is only read at startup).

---

## Project structure

```
index.html                  Google Fonts, favicon, meta
tailwind.config.js          Colour tokens + fonts (see Design system)
vercel.json                 SPA rewrite: /(.*) -> /index.html
api/
  chat.js                   Chatbot (Groq). Holds the PROFILE text the bot answers from. Needs GROQ_API_KEY
  hello.js                  Test endpoint
public/                     favicon.png, apple-touch-icon.png, resume.pdf, certs/, papers/, achievements/
docs/                       DEPLOYMENT.md, CONTINUE-PROMPT.md, ai-chatbot-plan.md
src/
  main.jsx                  React root, MotionConfig reducedMotion="user"
  App.jsx                   Router, routes, Navbar, SocialRail, ScrollButton, ChatWidget
  index.css                 Tailwind layers, CSS variables, scrollbar/selection, chat markdown styles
  pages/                    HomePage (all sections), ProjectsPage, CertificatesPage, BlogPage
  hooks/useModalDismiss.js  Esc / outside-click close for modals
  data/                     ALL CONTENT (see Data files)
  assets/                   hero_portrait.webp, logo.png, project banners, about image
  components/
    Navbar/                 Floating navbar with dropdowns
    Hero/                   Hero.jsx, HeroStats.jsx
    About/ Experience/ Projects/ Skills/ Research/ Achievements/ Certificates/ Blog/ Contact/
    Chat/ChatWidget.jsx     Floating chat button + panel
    ui/                     Shared pieces (see Components)
```

Home page order (`HomePage.jsx`): Hero, About, Experience, Projects, Skills, Research, Achievements, Certificates, Blog, Contact.
Sections are separated by a 1px divider and share the `--bg-base` background.

---

## Design system (current: warm editorial dark)

### Colour tokens (`tailwind.config.js`, use these everywhere)

| Token | Hex | Use |
|---|---|---|
| `ink` | `#030303` | Page background |
| `cream` | `#F1EEE8` | Primary text, borders at low opacity (`border-cream/10`) |
| `cream-2` | `#DEDAD4` | Body text on cards |
| `stone` | `#C4BEB6` | Secondary/muted text, mono labels |
| `sand` | `#E5CBB0` | Tags, venues, highlighted words |
| `copper` | `#FF8C59` | Accent: dots, arrows, numbers, active underline, focus border |
| `peach` | `#F2A67E` | Hover colour for every clickable name or link |

Other fixed colours used inline: panels `#0b0a09`, buttons/cards `#0d0d0d`, hint text `#9E978E`, online dot `emerald-400`.
Hairlines are `border-cream/10`. Hover for links and icon buttons: `hover:text-peach` (and `hover:bg-peach/10` for round icon buttons).

### Fonts
- `font-serif` = Instrument Serif: headings, names, big numbers
- `font-dm` = DM Sans: body text
- `font-mono` = JetBrains Mono: small uppercase labels (`text-xs uppercase tracking-[1.5px]`)
- Section titles: serif, huge (`clamp` up to ~104px), with an italic last word. Layout is full width with `px-[5vw]`.

### Global CSS (`src/index.css`)
Only `--bg-base` (#030303) is a CSS variable. Text selection and scrollbar hover are copper. A faint film-grain overlay sits on `body::after`.
The old blue tokens, `grid-bg`/`glow-*`/`text-gradient-*` utilities and the float/gradient animations were removed; do not bring them back.

### Motion
- Sections fade in once (`EditorialSection`, `viewport once`). Cards and rows fade up with `reveal(i)` from `ui/reveal.js`.
- Hero text slides up in a stagger. Hero stats count up once when seen (`HeroStats.jsx`).
- Hover changes colour only; buttons do not lift or move.
- Reduced motion is respected via `MotionConfig reducedMotion="user"`.

---

## Components (`src/components/ui/`)

| Component | What it does |
|---|---|
| `EditorialSection` | Full-width section wrapper (`px-[5vw]`, fade-in). Props: `id`, `className` |
| `SectionHeader` | Numbered label row, serif title with italic tail (`title`, `titleEm`), italic subtitle. Props: `number`, `label`, `title`, `titleEm`, `subtitle`, `as` |
| `CardSlider` | Scroll-snap slider (1/2/3 per view) with glass side buttons and dots. Used by Certificates and Blog |
| `SocialRail` | Fixed left icon rail (GitHub, LinkedIn, Medium, WhatsApp, Email). Shows from 1180px, fades over the footer |
| `ScrollButton` | Round button above the chat button: down arrow near top, up arrow after scrolling |
| `Logo` | AS monogram image (`src/assets/logo.png`) |
| `reveal.js` | `reveal(i)` returns motion props for a fade-up on scroll; spread onto a `motion.*` element |

Removed (do not recreate): Swiper, SectionWrapper, SectionTitle, Button, Badge, Particles, `theme.js`.

---

## Sections and pages

- **Navbar:** floating bar, height 68px. Links: Home, About, Experience (dropdown: Work Experience, Training Program, Competitive Programming), Projects, Skills, Research, More (dropdown: Achievements, Certificates, Blog), Contact, Hire Me. Active link = copper underline drawn left to right; hover = peach underline. Experience dropdown items switch the Experience tab via the `experience-tab` event. On other routes, links navigate home first (`state.scrollTo`).
- **Hero:** portrait on the right (`hero_portrait.webp`), name "Asfak Shahrier", 5 roles, tagline, View Projects / Get In Touch / Resume buttons, bottom row with GitHub, LinkedIn, Medium and email. Then `HeroStats`: 3600+ problems, 2+ years, 2 papers.
- **About:** photo, bio, 2x2 info grid, three education columns.
- **Experience:** 3 tabs (Work, Training, Competitive Programming). Work and training are accordions; CP is a grid of platform cards plus stats.
- **Projects:** production projects as large cards, other projects as list rows, "View All Projects" to `/projects` (filters + search). Details button opens `ProjectDetailsModal` (portal, Esc/outside click closes).
- **Skills:** one row per category, sorted by `level`, plus a logo row of favourite tech. Title is "Skills & Tools".
- **Research:** paper rows (year, status, details, thumbnail, Read Paper link) and a research-interests list.
- **Achievements:** achievements grid, onsite contest results table, photo gallery.
- **Certificates:** `CardSlider` of `CertCard`s, preview modal, "View All" to `/certificates` (category filter + search).
- **Blog:** `CardSlider` of Medium posts, "View All" to `/blog`.
- **Contact:** big email link, Open-to rows, social rows, footer with quick links.
- **Chat:** `ChatWidget` posts to `/api/chat` with the last 6 messages. Supports voice in and read-aloud. Rate limit 10 requests per minute per IP (in memory).

---

## Data files (`src/data/`, all content lives here)

| File | Exports |
|---|---|
| `projects.js` | `featuredProjects` (2), `otherProjects` (3). Fields: id, title, description, longDescription, features[], tech[], github, live, image, tag, subProjects[]. `tag: 'Production'` projects render as large cards |
| `experience.js` | `workExperience`, `trainingExperience`, `cpExperience`, `cpStats` (`totalProblems: 3600`, `onsiteContests: 6`, `platforms: 10`) |
| `skills.js` | `skillCategories`: category, icon, color, tag, skills[{ name, level }] |
| `research.js` | `researchPapers` (title, status, venue, supervisor, year, abstract, findings[], tools[], keywords[], doi, pdf, image), `researchInterests` |
| `achievements.js` | `achievements`, `certifications`, `contestHistory`, `contestGallery` |
| `certificates.js` | `certificates`: id, title, issuer, date, category, imageUrl, credentialUrl, description |
| `blog.js` | `blogPosts`: id, title, excerpt, date, readTime, tags, url, image |

If a field is optional (for example paper `venue`), the UI must skip it when empty.

---

## Facts that must stay in sync

Update all of these together: `src/data/*`, `Hero.jsx`/`HeroStats.jsx`, `About.jsx`, `Contact.jsx`, and the PROFILE text in `api/chat.js`.
- 3600+ problems solved, 10 platforms, 6 onsite contests
- 2 research papers: paper 1 is **Published** (Communications in Software and Systems, 2026); paper 2 is **Manuscript Completed** (2026) with no venue yet
- Honesty rule: never write a venue, "Under Review" or "Accepted" for a paper until it is true
- Work: Sites N Apps (Jan 2026 to present, remote, full-time) and Trickcel (Oct 2024 to Dec 2025, full-time, no "Remote" tag)
- Open to Remote and relocation is availability text, not a job location

---

## Deployment

- Hosting: Vercel, project `protfolio`. `api/*.js` run as serverless functions, so deploy the repo, not just `dist/`.
- Secret: `GROQ_API_KEY` must exist in Vercel (Production, and Preview if you want chat on previews) and in local `.env`.
- Deploy by Git (push or merge to `main` deploys production, other branches create previews) or by CLI (`vercel`, `vercel --prod`).
- Full steps and past problems: `docs/DEPLOYMENT.md`.

---

## Rules and conventions

- **Content lives in `src/data/*` and `api/chat.js`.** UI work must not change content unless asked.
- Warm palette only (tokens above). No blue accents, no gradient text, no emoji icons, no em dashes in site copy.
- Body text uses `text-cream` or `text-cream-2`; never dim greys. Muted text is `text-stone`.
- Every clickable name or link hovers to `text-peach`. Hover does not move elements.
- Framer Motion `whileInView` always uses `viewport={{ once: true }}`.
- Before finishing a change: `npm run lint` and `npm run build` pass, and check the page in a browser.
- The user commits and deploys; do not commit unless asked.

---

## Common tasks

- **Add a section:** create `src/components/Name/Name.jsx` using `<EditorialSection id="name">` and `<SectionHeader number label title titleEm subtitle />`; add its data in `src/data/`; add it to `HomePage.jsx` (with a divider) and a link in `navLinks` in `Navbar.jsx`.
- **Add a project / certificate / blog post / paper:** add an object to the matching array in `src/data/`.
- **Change photos:** hero is `src/assets/hero_portrait.webp`, logo is `src/assets/logo.png`, favicon files are in `public/`.
- **Update contact links:** `Contact.jsx` (`socialLinks`), `SocialRail.jsx` (`links`), `Hero.jsx` (`socials`), `Navbar.jsx` (Hire Me mailto).
- **Update what the chatbot knows:** edit the `PROFILE` string in `api/chat.js` and redeploy.

---

# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
