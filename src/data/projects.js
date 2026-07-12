import learningEventBanner from '../assets/learning-event-banner.png';
import ecommerceBanner from '../assets/ecommerce-banner.png';

export const featuredProjects = [
  {
    id: 1,
    title: 'Learning & Event Management Platform',
    description:
      'Production Laravel 10 e-learning and live-event platform with course authoring, drip content, live-event ticketing, cart/coupon checkout, and Stripe payments.',
    longDescription:
      'Production Laravel 10 e-learning and live-event platform with course authoring, drip content, and live-event ticketing. Automated transactional email lifecycle, PDF certificate/invoice generation, and real-time notifications via Pusher/Echo.',
    features: [
      'Production Laravel 10 e-learning and live-event platform with course authoring, drip content, live-event ticketing, cart/coupon checkout, and Stripe payments',
      'Automated transactional email lifecycle, PDF certificate/invoice generation, and real-time notifications via Pusher/Echo',
    ],
    tech: ['Laravel 10', 'PHP 8.1', 'Blade', 'Alpine.js', 'Bootstrap', 'Stripe', 'dompdf', 'Pusher/Echo', 'MySQL'],
    github: null,
    live: 'https://altrainer.com/',
    image: learningEventBanner,
    tag: 'Production',
    color: 'blue',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description:
      'Production e-commerce frontend serving real users — Angular 17 SSR app with full buyer flow: inventory browsing, product customization, cart, checkout, and order management APIs.',
    longDescription:
      'Production e-commerce frontend serving real users. Angular 17 SSR app with full buyer flow including inventory browsing, product customization, cart, checkout, and order management APIs. NgRx state management, multi-language (i18n), light/dark theming, and secure auth with route guards.',
    features: [
      'Production e-commerce frontend serving real users — Angular 17 SSR app with full buyer flow: inventory browsing, product customization, cart, checkout, and order management APIs',
      'NgRx state management, multi-language (i18n), light/dark theming, secure auth with route guards, and unit/integration tests',
    ],
    tech: ['Angular 17', 'SSR (Angular Universal)', 'NgRx', 'Tailwind CSS', 'TypeScript', 'REST API', 'Git'],
    github: null,
    live: 'https://thibstrailers.com/',
    image: ecommerceBanner,
    tag: 'Production',
    color: 'blue',
  },
];

export const otherProjects = [
  {
    id: 3,
    title: 'IELTS Daily Tracker',
    description:
      'Full-stack IELTS prep tracker with AI-powered writing review using OpenAI GPT and Google Gemini APIs. Features daily practice logging, automated feedback, score tracking, and progress visualization.',
    features: [
      'AI writing review via OpenAI GPT + Google Gemini',
      'Daily practice logging with automated feedback',
      'Score tracking and progress visualization',
    ],
    tech: ['Python', 'Laravel', 'OpenAI API', 'Google Gemini API', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/asfakT/IELTS_TRACKER_APP',
    live: null,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80',
    tag: 'AI / Web',
  },
  {
    id: 5,
    title: 'CareHUB — Salon & Parlor Booking',
    description:
      'Online booking system for finding, comparing, and booking salons based on reviews, pricing, and availability. Real-time time-slot booking with barber selection.',
    features: [
      'Real-time time-slot booking with barber selection',
      'Compare salons by reviews, pricing and availability',
      'Built with Django and PostgreSQL backend',
    ],
    tech: ['Django', 'PostgreSQL', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/asfak27/quantum-trio',
    live: null,
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80',
    tag: 'Web App',
  },
];
