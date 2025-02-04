'use client';

import { useState } from 'react';
import Image from 'next/image';
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
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="aspect-[16/9] relative">
        <div className="absolute inset-0">
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            fill
            className="rounded-t-lg object-cover"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
          <h2 className="text-2xl font-bold">{projects[currentIndex].title}</h2>
          <p className="mt-2">{projects[currentIndex].description}</p>
          <Link 
            href={projects[currentIndex].link}
            className="inline-block mt-2 px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75"
      >
        →
      </button>
    </div>
  );
};

export default ProjectCarousel;