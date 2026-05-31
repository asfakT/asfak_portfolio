export const featuredProjects = [
  {
    id: 1,
    title: 'CSE Career Prediction — ML Research',
    description:
      'First multi-label ML framework predicting career paths for 468 CSE students across 47 universities in Bangladesh. XGBoost achieved 61.70% accuracy, Recall 0.737, F1 Micro 0.792. Submitted to IEEE.',
    longDescription:
      'Proposed the first multi-label career prediction framework for CSE undergraduates in Bangladesh using real survey data. Collected 24 features including CGPA, technical skills, soft skills, research experience, and preferred job sectors. Benchmarked 10 classifiers.',
    features: [
      '468 students surveyed across 47 universities in Bangladesh',
      'XGBoost best: accuracy 61.70%, Recall 0.737, F1 Micro 0.792, Hamming Loss 0.060',
      '10 ML models: XGBoost, Random Forest, SVM, Neural Network, KNN, Voting Ensembles',
      '24 features including CGPA, skills, research experience, preferred job sectors',
      'Submitted to IEEE Conference — Under Review',
    ],
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    github: 'https://github.com/asfakT/ml-data-analysis-collection',
    live: null,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tag: 'ML / Research',
    color: 'red',
  },
  {
    id: 2,
    title: 'LMS — Learning Management System',
    description:
      'Production LMS handling course management, student enrollment, assignment submission, and email notification system. Built with admin dashboard and currently live in production.',
    longDescription:
      'Developed full frontend for a production LMS with course management, student enrollment, assignment submission, and email notifications. Admin dashboard manages students, courses, and progress tracking with full Laravel API backend integration.',
    features: [
      'Course management and student enrollment system',
      'Assignment submission and grading with email notifications',
      'Admin dashboard for students, courses, and progress tracking',
      'Backend integration with Laravel REST APIs',
      'Currently live in production',
    ],
    tech: ['Laravel', 'MySQL', 'Blade', 'Bootstrap'],
    github: 'https://github.com/asfakT/lms-react-laravel',
    live: null,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tag: 'Full Stack',
    color: 'blue',
  },
];

export const otherProjects = [
  {
    id: 3,
    title: 'IELTS Daily Tracker',
    description:
      'Full-stack IELTS prep tracker with AI-powered writing review using OpenAI GPT and Google Gemini APIs. Features daily practice logging, automated feedback, score tracking, and progress visualization.',
    tech: ['Python', 'Laravel', 'OpenAI API', 'Google Gemini API', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/asfakT/IELTS_TRACKER_APP',
    live: null,
    tag: 'AI / Web',
  },
  {
    id: 4,
    title: 'E-commerce Platform',
    description:
      'Production-grade e-commerce platform with Angular frontend currently serving real users. Integrated product catalog, cart, and order management APIs with CI/CD workflow.',
    tech: ['Angular', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/asfakT/laravel-ecommerce-system',
    live: null,
    tag: 'Production',
  },
  {
    id: 5,
    title: 'CareHUB — Salon & Parlor Booking',
    description:
      'Online booking system for finding, comparing, and booking salons based on reviews, pricing, and availability. Real-time time-slot booking with barber selection.',
    tech: ['Django', 'PostgreSQL', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/asfakT/CareHUB',
    live: null,
    tag: 'Web App',
  },
];
