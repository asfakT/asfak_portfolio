import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SectionWrapper from '../ui/SectionWrapper';
import SectionTitle from '../ui/SectionTitle';
import { FeaturedProjectCard, SmallProjectCard } from './ProjectCard';
import { featuredProjects, otherProjects } from '../../data/projects';

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTitle
        label="/ projects"
        title="Things I've Built"
        subtitle="A selection of projects across full stack development, machine learning, and competitive programming tools."
      />

      {/* Featured Projects */}
      <div className="space-y-20 mb-20">
        {featuredProjects.map((project, i) => (
          <FeaturedProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="flex-1 h-px bg-border" />
        <span className="text-gray-600 text-sm font-mono whitespace-nowrap">Other Projects</span>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Other Projects Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {otherProjects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <SmallProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </SectionWrapper>
  );
}
