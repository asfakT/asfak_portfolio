import { motion } from 'framer-motion';

// Full-width section (5vw side padding) for the editorial redesign.
// Sections move here from SectionWrapper one at a time.
export default function EditorialSection({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`w-full px-[5vw] py-20 font-dm text-cream lg:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
