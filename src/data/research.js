export const researchPapers = [
  {
    id: 1,
    title: 'Understanding Link Sharing Practice in NPM Related Tweets by Package Maintainers Community',
    status: 'In Press',
    venue: 'Communications in Software and Systems',
    year: 2025,
    abstract:
      'This study investigates link sharing behavior within the NPM ecosystem by analyzing 39,426 tweets from package maintainers on Twitter. We identify what types of resources are shared, which domains are most referenced, and the rate at which shared links decay over time.',
    findings: [
      'Analyzed 39,426 NPM-related tweets containing 18,408 unique links',
      '40% of tweets contain at least one external link',
      'Blog posts and tutorials are the most shared content targets',
      'GitHub is the top external domain referenced by NPM maintainers',
      '5% link decay rate — proposed ethical link-sharing guidelines for JS community',
    ],
    tools: ['Python', 'requests', 'NLTK', 'Pandas', 'Mixed-methods analysis'],
    keywords: ['NPM', 'Twitter', 'Link Sharing', 'Mining Software Repositories', 'Open Source', 'JavaScript'],
    doi: null,
    pdf: null,
    color: 'blue',
  },
  {
    id: 2,
    title: "Predicting CSE Undergraduate Students' Careers Using Machine Learning Algorithms in the Context of Bangladesh",
    status: 'Under Review',
    venue: 'IEEE Conference',
    year: 2025,
    abstract:
      'We propose the first multi-label career prediction framework for CSE undergraduates in Bangladesh using real survey data from 468 students across 47 universities. We collected 24 features including CGPA, technical skills, soft skills, research experience, publications, and preferred job sectors, then evaluated 10 ML classifiers.',
    findings: [
      'XGBoost achieved best accuracy 61.70%, Recall 0.737, F1 Micro 0.792, Hamming Loss 0.060',
      'Dataset: 468 students across 47 universities with 24 features collected',
      'Benchmarked 10 classifiers: XGBoost, RF, SVM, Neural Network, KNN, Voting Ensembles',
      'First multi-label career prediction framework for CSE undergrads in Bangladesh',
    ],
    tools: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    keywords: ['Machine Learning', 'Career Prediction', 'Multi-label Classification', 'XGBoost', 'CSE Education', 'Bangladesh'],
    doi: null,
    pdf: null,
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
