export default function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="text-gray-400 text-sm font-medium tracking-wider uppercase mb-3">
        {label}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
