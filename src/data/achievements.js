export const achievements = [
  {
    id: 1,
    title: 'Country Rank #1 — CodeChef (Bangladesh)',
    description:
      'Ranked #1 in Bangladesh at CodeChef Starters June 2021 (Division 3).',
    category: 'Competitive Programming',
    year: 2021,
    icon: '🥇',
    color: 'yellow',
  },
  {
    id: 2,
    title: 'Codeforces Specialist + LeetCode Knight',
    description:
      'Codeforces Specialist (rating 1462, top 20% globally) and LeetCode Knight (rating 1854, top 6% globally).',
    category: 'Competitive Programming',
    year: null,
    icon: '⚔️',
    color: 'blue',
  },
  {
    id: 3,
    title: '3rd Place — UGV South Zone Contest',
    description: '3rd place (team) at the UGV South Zone Programming Contest.',
    category: 'Competitive Programming',
    year: null,
    icon: '🥉',
    color: 'blue',
  },
  {
    id: 4,
    title: '4th Place — GSTU Intra University 2023',
    description:
      '4th place (team) at the GSTU Intra University Programming Contest 2023.',
    category: 'Competitive Programming',
    year: 2023,
    icon: '🏅',
    color: 'blue',
  },
  {
    id: 5,
    title: '4th Place — KU Programming Contest',
    description: '4th place (team) at the KU CSE Fest 2022 Programming Contest.',
    category: 'Competitive Programming',
    year: 2022,
    icon: '🏅',
    color: 'blue',
  },
  {
    id: 8,
    title: '5th Place — Learnathon 3.0',
    description:
      '5th place at Learnathon 3.0, an industry-mentored training program by Brainstation 23.',
    category: 'Training Program',
    year: 2025,
    icon: '🏅',
    color: 'red',
  },
  {
    id: 6,
    title: '2 Research Papers',
    description:
      'First-authored 2 research papers: one Published in Communications in Software and Systems (indexed in Scopus & Web of Science), one Under Review at IEEE.',
    category: 'Research',
    year: 2025,
    icon: '📄',
    color: 'red',
  },
  {
    id: 7,
    title: 'Data Analysis Certificate — BCC',
    description:
      '80-hour Data Analysis certification from Bangladesh Computer Council (ICT Division, EDGE Project).',
    category: 'Certification',
    year: 2024,
    icon: '🎓',
    color: 'green',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'Data Analysis with Python',
    issuer: 'Dept. of CSE, Bangabandhu Sheikh Mujibur Rahman Science and Technology University',
    authority: 'Bangladesh Computer Council, ICT Division — EDGE Project',
    period: 'May 2024 — Sep 2024',
    hours: '80 hours',
    serial: 'EDGE-DSTS-110-2094-00006',
    date: '27 Nov 2024',
    url: 'https://github.com/asfakT/Certifications/blob/main/Digital-Skill-Certify.pdf',
    skills: ['Python', 'Data Analysis', 'Machine Learning', 'Statistics', 'Pandas', 'NumPy'],
  },
];

// Onsite contest results — verified placements only (no fabricated participant counts).
export const contestHistory = [
  { name: 'CodeChef Starters — June 2021 (Div 3)', placement: 'Country Rank #1 · Bangladesh', year: 2021 },
  { name: 'UGV South Zone Programming Contest', placement: '3rd Place · Team', year: null },
  { name: 'GSTU Intra University Programming Contest', placement: '4th Place · Team', year: 2023 },
  { name: 'KU CSE Fest Programming Contest', placement: '4th Place · Team', year: 2022 },
];

// Real contest photos — proof of onsite participation.
export const contestGallery = [
  { src: '/achievements/ugv1.png', caption: 'UGV South Zone — 3rd Place (Team)' },
  { src: '/achievements/ugv2.png', caption: 'UGV South Zone — Team' },
  { src: '/achievements/ku-contest.png', caption: 'KU CSE Fest 2022 — 4th Place (Team)' },
  { src: '/achievements/ku-contest-2.png', caption: 'KU CSE Fest 2022 — Contest Round' },
  { src: '/achievements/ku-contest-3.png', caption: 'KU CSE Fest 2022 — Team' },
  { src: '/achievements/learnathon.jpeg', caption: 'Learnathon 3.0 — 5th Place (Brainstation 23)' },
];
