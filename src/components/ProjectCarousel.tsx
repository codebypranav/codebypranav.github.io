'use client';

import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.title} className="project-card">
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-description">{project.description}</p>
          <Link
            href={project.link}
            className="project-card-link"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;