import { motion } from 'framer-motion';
import { buttonVariants } from '../../theme';

export default function Button({ children, variant = 'primary', href, onClick, className = '', target, rel }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 cursor-pointer hover:-translate-y-0.5';

  const style = buttonVariants[variant] || buttonVariants.primary;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={`${base} ${className}`}
        style={style}
        whileTap={{ scale: 0.97 }}
        whileHover={{ filter: 'brightness(1.12)' }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={`${base} ${className}`}
      style={style}
      whileTap={{ scale: 0.97 }}
      whileHover={{ filter: 'brightness(1.12)' }}
    >
      {children}
    </motion.button>
  );
}
