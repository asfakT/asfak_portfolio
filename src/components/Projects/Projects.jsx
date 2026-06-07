import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { SmallProjectCard } from './ProjectCard';
import { featuredProjects, otherProjects } from '../../data/projects';

// All projects in one uniform slider — CSE Career Prediction (id 1) placed last.
const allProjects = [
  ...featuredProjects.filter((p) => p.id !== 1),
  ...otherProjects,
  ...featuredProjects.filter((p) => p.id === 1),
];

const navBtn =
  'w-9 h-9 rounded-full flex items-center justify-center border border-white/15 bg-white/5 ' +
  'text-gray-300 transition-colors hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-white ' +
  'disabled:opacity-30 disabled:cursor-default';

export default function Projects() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="/ projects"
        title="Things I've Built"
        subtitle="A selection of projects across full stack development, machine learning, and AI integration."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="projects-swiper"
      >
        {/* Nav buttons — top right, never overlap cards */}
        <div className="flex justify-end gap-2 mb-5">
          <button ref={prevRef} aria-label="Previous projects" className={navBtn}>
            <FiChevronLeft size={18} />
          </button>
          <button ref={nextRef} aria-label="Next projects" className={navBtn}>
            <FiChevronRight size={18} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {allProjects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <SmallProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </SectionWrapper>
  );
}
