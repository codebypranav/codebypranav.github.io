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
    <div className="carousel-container">
      <div className="carousel-aspect">
        <div className="carousel-image-container">
          <Image
            src={projects[currentIndex].image}
            alt={projects[currentIndex].title}
            fill
            className="carousel-image"
            priority
          />
        </div>
        <div className="carousel-overlay">
          <h2 className="carousel-title">{projects[currentIndex].title}</h2>
          <p className="carousel-description">{projects[currentIndex].description}</p>
          <Link 
            href={projects[currentIndex].link}
            className="carousel-link"
            target="_blank"
          >
            View Project
          </Link>
        </div>
      </div>
      
      <button
        onClick={prevSlide}
        className="carousel-button prev"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="carousel-button next"
      >
        →
      </button>

      {/* Indicator dots */}
      <div className="carousel-indicators">
        {projects.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;