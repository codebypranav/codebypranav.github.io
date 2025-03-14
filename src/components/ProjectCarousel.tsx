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
    <div className="relative max-w-4xl mx-auto border border-white/30 rounded-lg">
      <div className="aspect-[16/9] relative">
        <div className="absolute inset-0">
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            fill
            className="rounded-t-lg object-cover grayscale"
            priority
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white p-6 border-t border-white/30">
          <h2 className="text-2xl font-bold uppercase tracking-wider">{projects[currentIndex].title}</h2>
          <p className="mt-2 text-gray-300">{projects[currentIndex].description}</p>
          <Link 
            href={projects[currentIndex].link}
            className="inline-block mt-4 px-6 py-2 border border-white/50 text-white rounded hover:bg-white/10 transition-colors uppercase tracking-wider font-semibold"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 border border-white/30 z-10 hover:bg-opacity-90 transition-all font-bold"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-3 border border-white/30 z-10 hover:bg-opacity-90 transition-all font-bold"
      >
        →
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-2">
        {projects.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 border border-white/50 ${index === currentIndex ? 'bg-white' : 'bg-transparent'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;