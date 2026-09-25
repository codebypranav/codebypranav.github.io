'use client';

import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import ResumeViewer from '@/components/ResumeViewer';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import './components.css';
import React, { useState } from 'react';

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
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltipContact, setShowTooltipContact] = useState(false);

  const projects: Project[] = [
    {
      title: "AirFleet",
      description: "AI-enabled pilot logbook and operations dashboard for flight tracking, trip management, and aviation workflows.",
      link: "https://github.com/codebypranav/AirFleet",
      image: "/airfleet-preview.jpg"
    },
    {
      title: "ExplorAItion",
      description: "AI-powered travel planning app that turns preferences and historical trip data into personalized itinerary recommendations.",
      link: "https://github.com/codebypranav/ExplorAItion",
      image: "/resume-preview.png"
    },
    {
      title: "WasteWise",
      description: "Smart waste monitoring platform with analytics, threshold alerts, and computer-vision-based classification workflows.",
      link: "https://github.com/codebypranav/WasteWise",
      image: "/resume-preview.png"
    }
  ];

  function copyEmailToClipboard(text: string) {
    navigator.clipboard.writeText(text)
      .catch(err => {
        console.error('Failed to copy email: ', err);
      });
  }

  return (
    <main className="main-container">
      <div className="main-inner">
        {/* Introduction Section */}
        <section id="home" className="intro-section animate-on-load">
          <div
            className="profile-image-container animate-on-load animate-stagger-1"
            style={{ backgroundImage: "url('/personal_photo.jpg')" }}
            role="img"
            aria-label="Pranav Shukla"
          />
          <div className="intro-content animate-on-load animate-stagger-2">
            <h1 className="intro-title">Pranav Shukla</h1>
            <p className="intro-text">
              I&apos;m a Software Engineer building data-driven products, AI-enabled experiences, and scalable application systems for real-world problems. I work at Ford Motor Company on analytics and manufacturing software, and I&apos;ve also spent time building cloud, full-stack, and product-focused solutions across research and financial technology.
            </p>
            <p className="intro-text intro-text-margin">
              My work sits at the intersection of software engineering, cloud infrastructure, and practical AI. I enjoy turning messy business and user problems into thoughtful tools that are useful, reliable, and easy to operate.
            </p>
            <div className="contact-links animate-on-load animate-stagger-3">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <a
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                  onFocus={() => setShowTooltip(true)}
                  onBlur={() => setShowTooltip(false)}
                  title="Copy email to clipboard."
                  onClick={() => copyEmailToClipboard('pranavshuklajobs@gmail.com')}
                  className="contact-link"
                  tabIndex={0}
                >
                  <Image src="/mail-icon.png" alt="Email" width={20} height={20} className="contact-icon" />
                  <span>pranavshuklajobs@gmail.com</span>
                </a>
                {showTooltip && (
                  <div style={{
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0,0,0,0.85)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.95rem',
                    whiteSpace: 'nowrap',
                    zIndex: 1000,
                  }}>
                    Copy email to clipboard.
                  </div>
                )}
              </div>
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
            <p className="about-text">I like to think of myself as someone who balances strong execution with curiosity. I enjoy learning fast, collaborating with smart people, and building tools that solve real operational problems while staying approachable and thoughtful in how I work.</p>
          </div>

          {/* Skills */}
          <div 
            ref={skillsRef}
            className={`about-content animate-on-scroll ${skillsVisible ? 'animate' : ''}`}
          >
            <h3 className="about-subtitle">Skills</h3>
            <p className="about-text">I work across the full software lifecycle, from product thinking and design to backend systems, cloud deployment, and analytics.</p>
            <ul className="about-list">
              <li className="about-list-item">
                <span className="about-list-bullet"></span>
                <span className="about-list-text">Full-stack product development</span>
              </li>
              <li className="about-list-item">
                <span className="about-list-bullet"></span>
                <span className="about-list-text">Cloud and data infrastructure</span>
              </li>
              <li className="about-list-item">
                <span className="about-list-bullet"></span>
                <span className="about-list-text">Applied AI and intelligent workflows</span>
              </li>
            </ul>
            <p className="about-text">My toolkit includes Python, JavaScript/TypeScript, SQL, AWS, GCP, Docker, Next.js, React, Flask, Django, PostgreSQL, and PyTorch.</p>
          </div>

          {/* Experience */}
          <div 
            ref={experienceRef}
            className={`about-content animate-on-scroll ${experienceVisible ? 'animate' : ''}`}
          >
            <h3 className="about-subtitle">Experience</h3>
            <div className="about-experience">
              <p className="about-company">Ford Motor Company</p>
              <p className="about-text">Software Engineer focused on manufacturing analytics and operational tooling, building applications that improve plant visibility, process reliability, and decision support.</p>
              <p className="about-company">The Vanguard Group</p>
              <p className="about-text">Built and supported cloud-hosted internal tools, analytics workflows, and full-stack experiences across financial technology and real-time data environments.</p>
              <p className="about-company">Research & Product Projects</p>
              <p className="about-text">Developed applied software projects spanning healthcare data discovery, machine learning, travel personalization, and smart infrastructure monitoring.</p>
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
                <p className="about-degree">Michigan State University, December 2024</p>
              </div>
            </div>
            <div className="about-education">
              <div className="about-school">IAC</div>
              <div>
                <p className="about-text">International Baccalaureate Diploma / High School Diploma</p>
                <p className="about-degree">International Academy - Central/Okma, May 2020</p>
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

        {/* Resume Section */}
        <ResumeViewer />

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h2 className="section-header animate-on-load">Contact</h2>
          <div 
            ref={contactRef}
            className={`contact-content animate-on-scroll ${contactVisible ? 'animate' : ''}`}
          >
            <div className="contact-grid">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <a 
                  onMouseEnter={() => setShowTooltipContact(true)}
                  onMouseLeave={() => setShowTooltipContact(false)}
                  onFocus={() => setShowTooltipContact(true)}
                  onBlur={() => setShowTooltipContact(false)}
                  title="Copy email to clipboard."
                  onClick={() => copyEmailToClipboard('pranavshuklajobs@gmail.com')}
                  className="contact-link contact-item"
                  tabIndex={0}
                >
                  <Image src="/mail-icon.png" alt="Email" width={24} height={24} className="contact-icon" />
                  <span>pranavshuklajobs@gmail.com</span>
                </a>
                {showTooltipContact && (
                  <div style={{
                    position: 'absolute',
                    bottom: '120%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(0,0,0,0.85)',
                    color: '#fff',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.95rem',
                    whiteSpace: 'nowrap',
                    zIndex: 1000,
                  }}>
                    Copy email to clipboard.
                  </div>
                )}
              </div>
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