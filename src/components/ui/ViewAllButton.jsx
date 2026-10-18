import { Link } from 'react-router-dom';

export default function ViewAllButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                 text-gray-200 border border-white/10 transition-colors
                 hover:text-white hover:border-white/25"
    >
      {children}
    </Link>
  );
}
