import Image from 'next/image';
import ProjectCarousel from '@/components/ProjectCarousel';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  link: string;
  image: string;
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "RESUME",
      description: "My professional resume built with Word.",
      link: "https://github.com/codebypranav/Resume",
      image: "/resume-preview.png"
    },
    {
      title: "AIRFLEET",
      description: "AI-enabled pilot logbook for real-life operations and sim flights.",
      link: "https://github.com/codebypranav/AirFleet",
      image: "/airfleet-preview.jpg"
    }
  ];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-16 items-center md:items-start">
          <div className="w-64 h-64 relative flex-shrink-0">
            <Image
              src="/personal_photo.png"
              alt="Pranav Shukla"
              width={256}
              height={256}
              className="object-cover rounded-lg shadow-lg border border-white/30"
              priority
            />
          </div>
          <div className="flex-grow">
            <h1 className="text-3xl font-bold uppercase tracking-wider mb-4 border-b border-white/30 pb-2">PRANAV SHUKLA</h1>
            <p className="text-lg leading-relaxed">
              Hello, I&apos;m a recent graduate of Michigan State University, with a Bachelors of Science in Computer Science. I have extensive experience interning at Vanguard as a Software Engineering Intern, where I did full-stack and cloud development. Some technologies I know include <span className="font-bold">Python</span>, <span className="font-bold">Django</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">React</span>, <span className="font-bold">AWS</span>, and <span className="font-bold">Docker</span>.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Outside of work, I enjoy photography, playing Minecraft, running, listening to music, hiking, reading, and eating chocolate.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:pranavshuklajobs@gmail.com" 
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors border border-white/30 px-4 py-2 rounded"
              >
                <Image src="/mail-icon.png" alt="Email" width={20} height={20} className="invert" />
                <span>pranavshuklajobs@gmail.com</span>
              </a>
              <Link 
                href="https://www.linkedin.com/in/pranavshuklafts" 
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors border border-white/30 px-4 py-2 rounded"
                target="_blank"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={20} height={20} className="invert" />
                <span>linkedin.com/in/pranavshuklafts</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <h2 className="text-4xl font-bold mb-8 text-center uppercase tracking-widest border-b border-white/30 pb-2">PROJECTS</h2>
        <ProjectCarousel projects={projects} />
      </div>
    </main>
  );
} 