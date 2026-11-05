import type { Metadata } from 'next';
import Image from 'next/image';
import type { ReactNode } from 'react';

export const metadata: Metadata = { title: 'Projects | Pranav Shukla' };

const projects = [
  {
    title: 'AirFleet',
    description: 'Flight simming and a love of aviation led me to build this pilot logbook, whose AI quick log fills 20+ form fields from one plain-text sentence, validated against a 33,000-airport dataset. It also keeps tamper-evident endorsement records (SHA-256) and tracks FAA currency (FAR 61.57).',
    repoLink: 'https://github.com/codebypranav/AirFleet',
    liveLink: 'https://airfleet.vercel.app/',
    image: '/project-airfleet.jpg',
    shotAlt: "AirFleet landing page: 'Every flight, in one place', with log, photograph and debrief steps.",
    tags: ['Next.js', 'Django REST', 'TypeScript', 'PostgreSQL', 'Gemini'],
  },
  {
    title: 'ExplorAItion',
    description: 'My travels led me to build this AI-powered travel planning app, which turns preferences and historical trip data into personalized itinerary recommendations. A concurrent worker pool and cache cut third-party API calls per search by ~10x.',
    repoLink: 'https://github.com/codebypranav/ExplorAItion',
    image: '/project-exploraition.jpg',
    shotAlt: 'ExplorAItion search results for a Paris trip, ranked by match score beside a map of the city.',
    tags: ['Go', 'Fiber', 'Pinecone', 'OpenAI', 'Next.js'],
  },
  {
    title: 'WasteWise',
    description: 'Built for SpartaHack X: a smart waste monitoring platform with analytics, threshold alerts, and computer-vision-based classification workflows.',
    repoLink: 'https://github.com/codebypranav/WasteWise',
    image: '/project-wastewise.jpg',
    shotAlt: 'WasteWise alerts dashboard listing bin capacity, temperature and sensor events by location.',
    tags: ['Python', 'Flask', 'React', 'SQLite', 'EfficientNet'],
  },
];

function ProjectLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link">
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <>
      <h1 className="sr-only">Projects</h1>
      <ol className="rows">
        {projects.map((project) => (
          <li key={project.title} className="project">
            <div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <ul className="project-tags">
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <p className="project-links">
                {project.liveLink && <ProjectLink href={project.liveLink}>live demo</ProjectLink>}
                <ProjectLink href={project.repoLink}>view code</ProjectLink>
              </p>
            </div>
            <Image src={project.image} alt={project.shotAlt} width={1440} height={900} className="project-shot" />
          </li>
        ))}
      </ol>
    </>
  );
}
