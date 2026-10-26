// Helpers shared by the Learning Lab list, sidebar and article page.

// 'System Design' -> 'system-design', 'AI / ML' -> 'ai-ml'
export const topicSlug = (topic) =>
  topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// In-site route for an entry: /lab/<topic-slug>/<id>
export const labPath = (item) => `/lab/${topicSlug(item.topic)}/${item.id}`;

// Reading order used by the sidebar and Previous / Next: grouped by topic
// (in labTopics order), oldest first inside each topic.
export const readingOrder = (items, topics) =>
  topics.flatMap((topic) => items.filter((item) => item.topic === topic).reverse());
