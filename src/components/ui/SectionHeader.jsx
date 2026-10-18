// Editorial section header: numbered label row, serif title (optional italic tail), italic subtitle.
export default function SectionHeader({ number, label, title, titleEm, subtitle, as: Heading = 'h2' }) {
  return (
    <header>
      <p className="flex items-center border-t border-cream/10 pt-[18px] font-mono text-xs uppercase tracking-[1.5px] text-sand">
        <span className="mr-2.5 inline-block h-1.5 w-1.5 bg-copper" />
        {number ? `${number} / ` : '/ '}
        {label}
      </p>
      <Heading className="mt-12 whitespace-nowrap font-serif text-[7.6vw] font-normal leading-none tracking-[-0.035em] lg:text-[clamp(40px,5.8vw,104px)]">
        {title}
        {titleEm && (
          <>
            {' '}
            <em className="italic">{titleEm}</em>
          </>
        )}
      </Heading>
      {subtitle && (
        <p className="mt-[22px] font-serif text-[22px] italic text-stone lg:text-[clamp(22px,2vw,30px)]">{subtitle}</p>
      )}
    </header>
  );
}
