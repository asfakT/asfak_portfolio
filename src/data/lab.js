// Learning Lab entries. Each page lives in public/lab-pages/<topic-slug>/<id>.html.
// Newest first. To add an entry: put the HTML file in public/lab-pages/ and add one object here.
export const labSubtitle = 'How real apps like WhatsApp and YouTube work, explained step by step with diagrams.';

// Sidebar groups, in display order. A topic with no entries yet shows "Coming soon".
// An entry's HTML folder must match its topic slug: 'System Design' -> public/lab-pages/system-design/
export const labTopics = ['System Design', 'Networking', 'Data Structures', 'Databases', 'DevOps', 'AI / ML'];

export const labItems = [
  {
    id: 'news-feed',
    title: 'Facebook News Feed',
    summary: 'Precomputed feeds, hybrid fan-out for high-follower accounts, caching for viral posts, and cursor-based pagination.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '13 min read',
    url: '/lab-pages/system-design/news-feed.html',
  },
  {
    id: 'ticketmaster',
    title: 'Ticketmaster',
    summary: 'Preventing double booking with seat reservations and TTL locks, payment webhooks, a virtual waiting queue, and event search.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '15 min read',
    url: '/lab-pages/system-design/ticketmaster.html',
  },
  {
    id: 'gopuff',
    title: 'Gopuff Local Delivery',
    summary: 'Real-time inventory across nearby warehouses, transactional ordering to prevent overselling, and read scaling.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '14 min read',
    url: '/lab-pages/system-design/gopuff.html',
  },
  {
    id: 'dropbox',
    title: 'Dropbox File Sync',
    summary: 'Presigned and resumable chunked uploads, content fingerprints, cross-device synchronization, and secure sharing.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '16 min read',
    url: '/lab-pages/system-design/dropbox.html',
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener (Bitly)',
    summary: 'Unique short codes with a counter and base62 encoding, and low-latency redirects with caching and a CDN.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '14 min read',
    url: '/lab-pages/system-design/url-shortener.html',
  },
  {
    id: 'rate-limiter',
    title: 'Distributed Rate Limiter',
    summary: 'Token bucket algorithm at the API gateway, atomic checks with Redis Lua scripts, sharding, and failure handling.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '11 min read',
    url: '/lab-pages/system-design/rate-limiter.html',
  },
  {
    id: 'leetcode',
    title: 'LeetCode Online Judge',
    summary: 'Isolated code execution in hardened containers, queue-based scaling for contests, and a Redis sorted set leaderboard.',
    topic: 'System Design',
    date: 'Oct 26, 2026',
    readTime: '10 min read',
    url: '/lab-pages/system-design/leetcode.html',
  },
  {
    id: 'youtube',
    title: 'YouTube Video Streaming',
    summary: 'Direct uploads to object storage, segment-based transcoding pipelines, and adaptive bitrate streaming through a CDN.',
    topic: 'System Design',
    date: 'Oct 24, 2026',
    readTime: '12 min read',
    url: '/lab-pages/system-design/youtube.html',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Messaging',
    summary: 'Real-time delivery over WebSockets, offline inboxes, Redis Pub/Sub routing across servers, and multi-device support.',
    topic: 'System Design',
    date: 'Oct 24, 2026',
    readTime: '14 min read',
    url: '/lab-pages/system-design/whatsapp.html',
  },
];
