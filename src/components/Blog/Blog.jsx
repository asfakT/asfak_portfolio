import { Link } from 'react-router-dom';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import CardSlider from '../ui/CardSlider';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blog';

export default function Blog() {
  return (
    <EditorialSection id="blog">
      <SectionHeader
        number="09"
        label="blog"
        title="Latest"
        titleEm="Writing"
        subtitle="Articles on databases, system design, and software engineering, published on Medium."
      />

      <CardSlider items={blogPosts} getKey={(post) => post.id} label="posts" renderItem={(post) => <BlogCard post={post} />} />

      <Link
        to="/blog"
        className="mt-14 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-[13px] text-sm transition-colors hover:border-cream/50 hover:text-peach"
      >
        View All Posts <span className="text-copper">→</span>
      </Link>
    </EditorialSection>
  );
}
