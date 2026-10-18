import { Link } from 'react-router-dom';
import EditorialSection from '../ui/EditorialSection';
import SectionHeader from '../ui/SectionHeader';
import { FeaturedCard, ProjectRow } from './ProjectCard';
import { featuredProjects, otherProjects } from '../../data/projects';

// Homepage order: featured (except id 1), others, then id 1
const allProjects = [
  ...featuredProjects.filter((p) => p.id !== 1),
  ...otherProjects,
  ...featuredProjects.filter((p) => p.id === 1),
];

// Production work leads as large cards; everything else is a compact list
const featured = allProjects.filter((p) => p.tag === 'Production');
const rest = allProjects.filter((p) => p.tag !== 'Production');

export default function Projects() {
  return (
    <EditorialSection id="projects">
      <SectionHeader
        number="04"
        label="projects"
        title="Things"
        titleEm="I've Built"
        subtitle="A selection of projects across full stack development, machine learning, and AI integration."
      />

      <div className="mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-[4vw]">
        {featured.map((project, i) => (
          <FeaturedCard key={project.id} project={project} number={i + 1} />
        ))}
      </div>

      <div className="mt-[90px]">
        <p className="font-mono text-xs uppercase tracking-[1.5px] text-stone">More projects</p>
        <div className="mt-5 border-t border-cream/10">
          {rest.map((project, i) => (
            <ProjectRow key={project.id} project={project} number={featured.length + i + 1} />
          ))}
        </div>
      </div>

      <Link
        to="/projects"
        className="mt-14 inline-flex items-center gap-2 rounded-full border border-cream/25 px-6 py-[13px] text-sm transition-colors hover:border-cream/50 hover:text-peach"
      >
        View All Projects <span className="text-copper">→</span>
      </Link>
    </EditorialSection>
  );
}
