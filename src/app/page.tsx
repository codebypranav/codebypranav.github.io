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
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="flex-grow">
            <p className="text-lg leading-relaxed">
              Hello, my name is Pranav Shukla. I&apos;m a recent graduate of Michigan State University, with a Bachelors of Science in Computer Science. I have extensive experience interning at Vanguard as a Software Engineering Intern, where I did full-stack and cloud development. Some technologies I know include Python, Django, Next.js, React, AWS, and Docker.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Outside of work, I enjoy photography, playing Minecraft, running, hiking, reading, and eating chocolate.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              If you would like to get to know me better, or want to reach out to work with me, please email me at{' '}
              <a href="mailto:pranavshuklajobs@gmail.com" className="text-blue-600 hover:underline">
                pranavshuklajobs@gmail.com
              </a>
              , or reach out on my LinkedIn at{' '}
              <Link href="https://www.linkedin.com/in/pranavshuklafts" className="text-blue-600 hover:underline" target="_blank">
                www.linkedin.com/in/pranavshuklafts
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <ProjectCarousel projects={projects} />
      </div>
    </main>
  );
} 