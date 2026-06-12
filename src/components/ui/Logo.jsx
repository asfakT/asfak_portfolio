// Graph-node mark — nods to graph theory / competitive programming.
// Four connected nodes in blue + emerald.
export default function Logo({ size = 44, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Asfak Shahrier logo"
    >
      {/* edges */}
      <g stroke="#3B82F6" strokeWidth="2" opacity="0.55">
        <line x1="11" y1="15" x2="37" y2="11" />
        <line x1="11" y1="15" x2="26" y2="36" />
      </g>
      <g stroke="#10B981" strokeWidth="2" opacity="0.55">
        <line x1="37" y1="11" x2="26" y2="36" />
        <line x1="26" y1="36" x2="13" y2="38" />
      </g>
      {/* nodes */}
      <circle cx="11" cy="15" r="4.2" fill="#3B82F6" />
      <circle cx="37" cy="11" r="4.2" fill="#10B981" />
      <circle cx="26" cy="36" r="4.2" fill="#3B82F6" />
      <circle cx="13" cy="38" r="3.2" fill="#10B981" />
    </svg>
  );
}
