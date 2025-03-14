import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 border-b border-white/30 pb-2 text-center">About Me</h1>
        
        <div className="text-white space-y-10">
          {/* Personal Introduction */}
          <section className="border border-white/20 p-6 bg-black/50">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Introduction</h2>
            <p className="text-lg">My friends know me for my photography, and my sister knows me as a troublemaker, but we can get to know each other as professionals. I like to think of myself as someone who manages to keep a light heart while also producing results.</p>
          </section>

          {/* Skills */}
          <section className="border border-white/20 p-6 bg-black/50">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Skills</h2>
            <p className="text-lg">With a strong foundation in computer science and experience in software engineering, I specialize in:</p>
            <ul className="list-none mt-4 space-y-2">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white"></span>
                <span className="font-semibold">Full Stack Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white"></span>
                <span className="font-semibold">Cloud Computing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white"></span>
                <span className="font-semibold">Machine Learning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-white"></span>
                <span className="font-semibold">DevOps/Site Reliability Engineering</span>
              </li>
            </ul>
            <p className="mt-4 text-lg">Proficient in Python, JavaScript/TypeScript, C++, and SQL, I have built scalable applications using React, Django, Flask, and AWS. My expertise extends to working with PostgreSQL, Docker, TensorFlow, and Linux as well.</p>
          </section>

          {/* Experience */}
          <section className="border border-white/20 p-6 bg-black/50">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Experience</h2>
            <div className="space-y-4 text-lg">
              <p className="font-bold">The Vanguard Group</p>
              <p>I have gained software engineering experience through multiple internships at The Vanguard Group, where I developed cloud-hosted trading applications, optimized financial calculations, and improved user interfaces.</p>
              <p className="font-bold mt-4">Research Projects</p>
              <p>I have contributed to research-driven projects, such as the Henry Ford Health Research Synergy Vanguard Portal, where I built searchable databases and API integrations to support interdisciplinary collaboration.</p>
            </div>
          </section>

          {/* Education */}
          <section className="border border-white/20 p-6 bg-black/50">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Education</h2>
            <div className="flex items-center gap-4 text-lg">
              <div className="font-bold text-xl">MSU</div>
              <div>
                <p>Bachelor of Science in Computer Science</p>
                <p className="text-gray-300">Michigan State University, 2024</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="border border-white/20 p-6 bg-black/50">
            <h2 className="text-2xl font-bold mb-4 border-b border-white/20 pb-2">Contact</h2>
            <div className="flex flex-col gap-4 text-lg">
              <a 
                href="mailto:pranavshuklajobs@gmail.com" 
                className="inline-flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
              >
                <Image src="/mail-icon.png" alt="Email" width={24} height={24} className="brightness-0 invert" />
                <span>pranavshuklajobs@gmail.com</span>
              </a>
              <Link 
                href="https://www.linkedin.com/in/pranavshuklafts/" 
                className="inline-flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                target="_blank"
              >
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={24} height={24} className="brightness-0 invert" />
                <span>linkedin.com/in/pranavshuklafts</span>
              </Link>
              <Link 
                href="https://www.github.com/codebypranav/" 
                className="inline-flex items-center gap-3 text-white hover:text-gray-300 transition-colors"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>github.com/codebypranav</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 