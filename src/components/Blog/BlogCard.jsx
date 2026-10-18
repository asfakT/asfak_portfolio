const mono = 'font-mono text-xs uppercase tracking-[1.5px] text-stone';

// Same card shape as CertCard; the whole card opens the article on Medium
export default function BlogCard({ post }) {
  return (
    <a href={post.url} target="_blank" rel="noopener noreferrer" className="group flex h-full flex-col rounded-lg border border-cream/10 bg-cream/[0.025] p-4 transition-colors hover:border-cream/25 hover:bg-cream/[0.04]">
      <div className="grid h-[200px] w-full place-items-center overflow-hidden rounded-md border border-cream/10 bg-[#0b0a09] p-3.5">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="max-h-full max-w-full rounded-sm object-contain brightness-[.92] grayscale-[.35] transition duration-300 group-hover:brightness-100 group-hover:grayscale-0"
        />
      </div>
      <p className="mt-[18px] flex justify-between gap-3">
        <span className={`${mono} !text-sand`}>{post.tags[0]}</span>
        <span className={`${mono} flex-none !text-copper`}>{post.date}</span>
      </p>
      <h3 className="mt-3 line-clamp-2 font-serif transition-colors group-hover:text-peach text-[24px] leading-[1.15] tracking-[-0.015em] lg:text-[clamp(24px,1.9vw,30px)]">
        {post.title}
      </h3>
      <p className="mt-1.5 text-sm text-[#9E978E]">{post.readTime}</p>
      <p className="mb-1 mt-2.5 line-clamp-3 text-[14.5px] leading-[1.65] text-cream-2">{post.excerpt}</p>
      <p className="mt-auto pt-3.5 text-sm text-stone transition-colors group-hover:text-peach">
        Read on Medium <span className="text-copper">↗</span>
      </p>
    </a>
  );
}
