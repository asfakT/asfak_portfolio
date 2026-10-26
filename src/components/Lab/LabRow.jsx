const mono = 'font-mono text-xs uppercase tracking-[1.5px]';

// One line of the Learning Lab index: number, title, one-line summary, topic and read time.
export default function LabRow({ item, number }) {
  return (
    <a
      href={item.url}
      className="group grid grid-cols-[36px_minmax(0,1fr)] items-baseline gap-x-3 gap-y-2 border-b border-cream/10 py-[22px] md:grid-cols-[56px_minmax(0,1fr)_auto] md:gap-x-5"
    >
      <span className="font-serif text-[22px] text-copper">{String(number).padStart(2, '0')}</span>
      <div className="min-w-0">
        <h3 className="font-serif text-[24px] leading-[1.15] tracking-[-0.015em] transition-colors group-hover:text-peach lg:text-[clamp(24px,2.2vw,32px)]">
          {item.title}
        </h3>
        <p className="mt-1.5 max-w-[72ch] text-[14.5px] leading-[1.6] text-cream-2">{item.summary}</p>
      </div>
      <span className={`${mono} col-start-2 whitespace-nowrap text-[#9E978E] md:col-start-auto md:text-right`}>
        {item.topic}
        <span className="ml-2.5 text-copper">{item.readTime.replace(' read', '')}</span>
      </span>
    </a>
  );
}
