'use client';

import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container animate-on-load">
      <div className="nav-wrapper">
        <button 
          onClick={() => scrollToSection('home')}
          className="nav-brand"
        >
          Pranav Shukla
        </button>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <button 
            onClick={() => scrollToSection('home')}
            className="nav-link"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="nav-link"
          >
            About Me
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contact
          </button>
          <a
            href="https://github.com/codebypranav/Resume"
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Navigation */}
        <div className="dropdown">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-button"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
          
          <div className={`dropdown-content ${isMenuOpen ? 'show' : ''}`}>
            <button 
              onClick={() => scrollToSection('home')}
              className="dropdown-link"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="dropdown-link"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="dropdown-link"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="dropdown-link"
            >
              Contact
            </button>
            <a
              href="https://github.com/codebypranav/Resume"
              className="dropdown-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;