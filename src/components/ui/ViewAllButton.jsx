import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

export default function ViewAllButton({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                 text-gray-200 bg-white/[0.04] border border-white/10 transition-colors
                 hover:text-white hover:border-blue-500/40 hover:bg-white/[0.06]"
    >
      {children}
      <FiArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
