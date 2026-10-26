// Compact card for the home section: title, two-line summary, read time. The whole card links to the page.
export default function LabCard({ item }) {
  return (
    <a
      href={item.url}
      className="group flex h-full flex-col gap-1.5 rounded-lg border border-cream/10 bg-cream/[0.025] px-5 py-[18px] transition-colors hover:border-cream/25 hover:bg-cream/[0.04]"
    >
      <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-peach">{item.title}</h3>
      <p className="line-clamp-2 text-[14px] leading-[1.6] text-cream-2">{item.summary}</p>
      <p className="mt-auto pt-1.5 font-mono text-xs uppercase tracking-[1.5px] text-[#9E978E]">{item.readTime}</p>
    </a>
  );
}
