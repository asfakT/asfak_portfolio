import { FiArrowUpRight, FiClock } from 'react-icons/fi';
import Badge from '../ui/Badge';

export default function BlogCard({ post }) {
  return (
    <a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full rounded-2xl border overflow-hidden flex flex-col transition-colors duration-300 hover:border-blue-500/40"
      style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden flex-shrink-0 bg-black/40">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge color="blue" size="xs">{post.tags[0]}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-center gap-3 text-xs font-mono text-gray-500">
          <span>{post.date}</span>
          <span className="flex items-center gap-1">
            <FiClock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className="text-white font-bold text-base leading-snug line-clamp-2">{post.title}</h3>

        <p className="text-gray-400 text-sm leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center gap-2 text-sm font-semibold pt-3 border-t text-blue-400 group-hover:text-blue-300 transition-colors"
          style={{ borderColor: 'rgba(59,130,246,0.18)' }}
        >
          <span>Read on Medium</span>
          <FiArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </a>
  );
}
