'use client';

import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
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
          <div className="project-card-links">
            {project.liveLink && (
              <Link
                href={project.liveLink}
                className="project-card-link"
                target="_blank"
              >
                View Project
              </Link>
            )}
            <Link
              href={project.repoLink}
              className="project-card-link project-card-link-secondary"
              target="_blank"
            >
              View Code
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCarousel;
