'use client';

import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './components.css';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function Home() {
  const { elementRef: introRef, isVisible: introVisible } = useScrollAnimation();
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation();
  const { elementRef: experienceRef, isVisible: experienceVisible } = useScrollAnimation();
  const { elementRef: educationRef, isVisible: educationVisible } = useScrollAnimation();
  const { elementRef: projectsRef, isVisible: projectsVisible } = useScrollAnimation();
  const { elementRef: contactRef, isVisible: contactVisible } = useScrollAnimation();

  const projects: Project[] = [
    {
      title: "Resume",
      description: "My professional resume built with Word.",
      link: "https://github.com/codebypranav/Resume",
      image: "/resume-preview.png"
    },
    {
      title: "AirFleet",
      description: "AI-enabled pilot logbook for real-life operations and sim flights.",
      link: "https://github.com/codebypranav/AirFleet",
      image: "/airfleet-preview.jpg"
    }
  ];

  return (
    <main className="main-container">
      <div className="main-inner">
        {/* Introduction Section */}
        <section id="home" className="intro-section animate-on-load">
          <div className="profile-image-container animate-on-load animate-stagger-1">
            <Image
              src="/personal_photo.png"
              alt="Pranav Shukla"
              width={256}
              height={256}
              className="profile-image"
              priority
            />
          </div>
          <div className="intro-content animate-on-load animate-stagger-2">
            <h1 className="intro-title">Pranav Shukla</h1>
            <p className="intro-text">
              Hello, I&apos;m a recent graduate of Michigan State University, with a Bachelors of Science in Computer Science. I have extensive experience interning at Vanguard as a Software Engineering Intern, where I did full-stack and cloud development. Some technologies I know include <span className="intro-text-bold">Python</span>, <span className="intro-text-bold">Django</span>, <span className="intro-text-bold">Next.js</span>, <span className="intro-text-bold">React</span>, <span className="intro-text-bold">AWS</span>, and <span className="intro-text-bold">Docker</span>.
            </p>
            <p className="intro-text intro-text-margin">
              Outside of work, I enjoy photography, cooking, mountain biking, aviation, trains, exploring new cities/nature, checking out eateries, running, keeping up with Formula 1, listening to music, traveling, learning German/French/Hindi, hiking, reading, and most of all, eating chocolate.
            </p>
            <div className="contact-links animate-on-load animate-stagger-3">
              <a 
                href="mailto:pranavshuklajobs@gmail.com" 
                className="contact-link"
              >
                <Image src="/mail-icon.png" alt="Email" width={20} height={20} className="contact-icon" />
                <span>pranavshuklajobs@gmail.com</span>
              </a>
              <Link 
                href="https://www.linkedin.com/in/pranavshuklafts" 
                className="contact-link"
                target="_blank"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={20} height={20} className="contact-icon" />
                <span>linkedin.com/in/pranavshuklafts</span>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <h2 className="section-header animate-on-load">About Me</h2>
          
          {/* Personal Introduction */}
          <div 
            ref={introRef}
            className={`about-content animate-on-scroll ${introVisible ? 'animate' : ''}`}
          >
            <h3 className="about-subtitle">Introduction</h3>
            <p className="about-text">I like to think of myself as someone who manages to keep a light heart while also producing results. I love meeting other developers and learning from them, especially in terms of their latest creations.</p>
          </div>

          {/* Skills */}
          <div 
            ref={skillsRef}
            className={`about-content animate-on-scroll ${skillsVisible ? 'animate' : ''}`}
          >
            <h3 className="about-subtitle">Skills</h3>
            <p className="about-text">With a strong foundation in computer science and experience in software engineering, I specialize in:</p>
            <ul className="about-list">
              <li className="about-list-item">
                <span className="about-list-bullet"></span>
                <span className="about-list-text">Full Stack Development</span>
              </li>
              <li className="about-list-item">
                <span className="about-list-bullet"></span>
                <span className="about-list-text">Cloud Computing</span>
              </li>
              <li className="about-list-item">
                <span className="about-list-bullet"></span>
                <span className="about-list-text">Machine Learning</span>
              </li>
            </ul>
            <p className="about-text">Proficient in Python, JavaScript/TypeScript, C++, and SQL, I have built scalable applications using React, Django, Flask, and AWS. My expertise extends to working with PostgreSQL, Docker, TensorFlow, and Linux as well.</p>
          </div>

          {/* Experience */}
          <div 
            ref={experienceRef}
            className={`about-content animate-on-scroll ${experienceVisible ? 'animate' : ''}`}
          >
            <h3 className="about-subtitle">Experience</h3>
            <div className="about-experience">
              <p className="about-company">The Vanguard Group</p>
              <p className="about-text">I have gained software engineering experience through multiple internships at The Vanguard Group, where I developed cloud-hosted trading applications, optimized financial calculations, and improved user interfaces.</p>
              <p className="about-company">Henry Ford Health Research Synergy Vanguard Portal</p>
              <p className="about-text">I worked with other MSU students to develop the Henry Ford Health Research Synergy Vanguard Portal, where I built searchable databases and API integrations to support interdisciplinary collaboration.</p>
            </div>
          </div>

          {/* Education */}
          <div 
            ref={educationRef}
            className={`about-content animate-on-scroll ${educationVisible ? 'animate' : ''}`}
          >
            <h3 className="about-subtitle">Education</h3>
            <div className="about-education">
              <div className="about-school">MSU</div>
              <div>
                <p className="about-text">Bachelor of Science in Computer Science</p>
                <p className="about-degree">Michigan State University, 2024</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h2 className="section-header animate-on-load">Projects</h2>
          <div 
            ref={projectsRef}
            className={`animate-on-scroll ${projectsVisible ? 'animate' : ''}`}
          >
            <ProjectCarousel projects={projects} />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2 className="section-header animate-on-load">Contact</h2>
          <div 
            ref={contactRef}
            className={`contact-content animate-on-scroll ${contactVisible ? 'animate' : ''}`}
          >
            <div className="contact-grid">
              <a 
                href="mailto:pranavshuklajobs@gmail.com" 
                className="contact-item"
              >
                <Image src="/mail-icon.png" alt="Email" width={24} height={24} className="contact-icon" />
                <span>pranavshuklajobs@gmail.com</span>
              </a>
              <Link 
                href="https://www.linkedin.com/in/pranavshuklafts/" 
                className="contact-item"
                target="_blank"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} className="contact-icon" />
                <span>linkedin.com/in/pranavshuklafts</span>
              </Link>
              <Link 
                href="https://www.github.com/codebypranav/" 
                className="contact-item"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>github.com/codebypranav</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
} 