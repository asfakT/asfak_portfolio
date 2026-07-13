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
import ViewAllButton from '../ui/ViewAllButton';
import BlogCard from './BlogCard';
import { blogPosts } from '../../data/blog';

const navBtn =
  'w-9 h-9 rounded-full flex items-center justify-center border border-white/15 bg-white/5 ' +
  'text-gray-300 transition-colors hover:bg-blue-500/20 hover:border-blue-500/40 hover:text-white ' +
  'disabled:opacity-30 disabled:cursor-default';

export default function Blog() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <SectionWrapper id="blog">
      <SectionTitle
        label="/ blog"
        title="Latest Writing"
        subtitle="Articles on databases, system design, and software engineering, published on Medium."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="blog-swiper"
      >
        <div className="flex justify-end gap-2 mb-5">
          <button ref={prevRef} aria-label="Previous posts" className={navBtn}>
            <FiChevronLeft size={18} />
          </button>
          <button ref={nextRef} aria-label="Next posts" className={navBtn}>
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
          {blogPosts.map((post) => (
            <SwiperSlide key={post.id} className="h-auto">
              <BlogCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-2">
          <ViewAllButton to="/blog">View All Posts</ViewAllButton>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
