export const researchPapers = [
  {
    id: 1,
    title: 'Understanding Link Sharing Practice in NPM Related Tweets by Package Maintainers Community',
    status: 'Published',
    venue: 'Communications in Software and Systems',
    supervisor: 'Dr. Syful Islam, GSTU',
    year: 2025,
    abstract:
      'A mixed-methods study of link-sharing in the NPM ecosystem: what maintainers share on Twitter, which domains dominate, and how fast links decay.',
    findings: [
      '39,426 tweets / 18,408 links analyzed; 40% contain an external link',
      'GitHub is the top external domain; ~5% link decay rate',
      'Indexed in Scopus, Web of Science (ESCI), DOAJ & CrossRef',
    ],
    tools: ['Python', 'requests', 'NLTK', 'Pandas', 'Mixed-methods analysis'],
    keywords: ['NPM', 'Twitter', 'Link Sharing', 'Mining Software Repositories', 'Open Source', 'JavaScript'],
    doi: null,
    pdf: '/papers/published_paper.pdf',
    image: '/papers/research-npm-link-sharing.png',
    color: 'blue',
  },
  {
    id: 2,
    title: "Predicting CSE Undergraduate Students' Careers Using Machine Learning Algorithms in the Context of Bangladesh",
    status: 'Under Review',
    venue: 'IEEE Conference',
    supervisor: 'Dr. Saleh Ahmed, GSTU',
    year: 2025,
    abstract:
      "The first multi-label ML framework predicting CSE students' career paths in Bangladesh — built on survey data from 468 students across 47 universities (24 features, 10 classifiers).",
    findings: [
      'XGBoost best: 61.70% accuracy, F1 Micro 0.792',
      'Dataset: 468 students, 47 universities, 24 features',
      'First multi-label career-prediction framework in Bangladesh',
    ],
    tools: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    keywords: ['Machine Learning', 'Career Prediction', 'Multi-label Classification', 'XGBoost', 'CSE Education', 'Bangladesh'],
    doi: null,
    pdf: '/papers/cse-career-prediction.pdf',
    image: '/papers/research-cse-prediction.png',
    color: 'red',
  },
];

export const researchInterests = [
  'Machine Learning & Predictive Modeling',
  'Mining Software Repositories',
  'Natural Language Processing',
  'Algorithm Design & Optimization',
  'AI Integration & LLM Applications',
  'Open Source Ecosystem Analysis',
];
