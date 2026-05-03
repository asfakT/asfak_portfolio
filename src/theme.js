// ─────────────────────────────────────────────────────────────────────────────
//  DESIGN TOKENS  —  change values here to update the entire project
// ─────────────────────────────────────────────────────────────────────────────

export const colors = {
  // ── Accent colors (primary / secondary) ──────────────────────────────────
  primary: {
    light:  '#60A5FA',   // blue-400
    base:   '#3B82F6',   // blue-500  ← main accent
    dark:   '#2563EB',   // blue-600
    glow:   'rgba(59, 130, 246, 0.35)',
    subtle: 'rgba(59, 130, 246, 0.10)',
  },
  secondary: {
    light:  '#4a7fc1',   // lighter variant
    base:   '#366297',   // rgb(54,98,151)  ← secondary accent
    dark:   '#274d78',   // darker variant
    glow:   'rgba(54, 98, 151, 0.35)',
    subtle: 'rgba(54, 98, 151, 0.10)',
  },
  accent: '#9333EA',     // purple — used in mixed gradient only

  // ── Backgrounds ───────────────────────────────────────────────────────────
  bg: {
    base:    '#0d0e14',   // lightest section bg (default sections)
    surface: '#10111a',   // slightly deeper
    dark:    '#111318',   // dark alt sections
    darker:  '#13141c',   // darkest alt sections
    card:    '#14151e',   // card backgrounds
    cardHover: '#191a24', // card hover
  },

  // ── Text hierarchy ────────────────────────────────────────────────────────
  text: {
    primary:   '#ffffff',
    secondary: '#e5e7eb',  // gray-200
    muted:     '#d1d5db',  // gray-300
    subtle:    '#9ca3af',  // gray-400
  },

  // ── Borders ───────────────────────────────────────────────────────────────
  border: {
    default: 'rgba(255, 255, 255, 0.08)',
    hover:   'rgba(255, 255, 255, 0.15)',
    primary: 'rgba(59, 130, 246, 0.30)',
  },
};

// ── Gradients ────────────────────────────────────────────────────────────────
export const gradients = {
  primary:      `linear-gradient(135deg, ${colors.primary.base}, ${colors.primary.light})`,
  primaryBtn:   `linear-gradient(135deg, ${colors.primary.base}, ${colors.primary.dark})`,
  secondary:    `linear-gradient(135deg, ${colors.secondary.base}, ${colors.secondary.light})`,
  mixed:        `linear-gradient(135deg, ${colors.primary.base} 0%, ${colors.accent} 50%, ${colors.secondary.base} 100%)`,
  divider:      `linear-gradient(90deg, transparent 0%, ${colors.primary.base} 40%, ${colors.secondary.base} 60%, transparent 100%)`,
  dividerFlip:  `linear-gradient(90deg, transparent 0%, ${colors.secondary.base} 40%, ${colors.primary.base} 60%, transparent 100%)`,
  sectionLight: `linear-gradient(180deg, ${colors.bg.base} 0%, ${colors.bg.surface} 100%)`,
  sectionDark:  `linear-gradient(180deg, ${colors.bg.dark} 0%, ${colors.bg.darker} 100%)`,
};

// ── Shadows / Glow ────────────────────────────────────────────────────────────
export const shadows = {
  primaryGlow:   `0 0 24px ${colors.primary.glow}`,
  secondaryGlow: `0 0 24px ${colors.secondary.glow}`,
  card:          `0 8px 32px rgba(0, 0, 0, 0.40)`,
  cardHover:     `0 12px 40px rgba(0, 0, 0, 0.55), 0 0 0 1px ${colors.border.primary}`,
  button:        `0 4px 20px ${colors.primary.glow}`,
  buttonRed:     `0 4px 20px ${colors.secondary.glow}`,
};

// ── Button variant styles (used in Button.jsx) ────────────────────────────────
export const buttonVariants = {
  primary: {
    background: gradients.primaryBtn,
    color:      colors.text.primary,
    border:     'none',
    boxShadow:  shadows.button,
  },
  secondary: {
    background: 'transparent',
    color:      colors.text.secondary,
    border:     `1px solid ${colors.border.hover}`,
  },
  red: {
    background: gradients.secondary,
    color:      colors.text.primary,
    border:     'none',
    boxShadow:  shadows.buttonRed,
  },
  ghost: {
    background: 'transparent',
    color:      colors.text.subtle,
    border:     'none',
  },
};
