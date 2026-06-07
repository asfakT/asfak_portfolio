// AS monogram — clean centered initials in a gradient tile.
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
      <defs>
        <linearGradient id="asLogoGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="13" fill="url(#asLogoGrad)" />
      {/* subtle top highlight for depth */}
      <rect width="48" height="24" rx="13" fill="#ffffff" opacity="0.08" />
      <text
        x="24"
        y="32"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="21"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        AS
      </text>
    </svg>
  );
}
