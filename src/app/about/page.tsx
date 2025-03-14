import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose lg:prose-xl">
          {/* Personal Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>My friends know me for my photography, and my sister knows me as a troublemaker, but we can get to know each other as professionals. I like to think of myself as someone who manages to keep a light heart while also producing results.</p>
          </section>

          {/* Skills */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <p>With a strong foundation in computer science and experience in software engineering, I specialize in full stack development, cloud computing, and machine learning. Proficient in Python, JavaScript/TypeScript, C++, and SQL, I have built scalable applications using React, Django, Flask, and AWS. My expertise extends to working with PostgreSQL, Docker, TensorFlow, and Linux as well.</p>
          </section>

          {/* Experience */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <p>I have gained software engineering experience through multiple internships at The Vanguard Group, where I developed cloud-hosted trading applications, optimized financial calculations, and improved user interfaces. Additionally, I have contributed to research-driven projects, such as the Henry Ford Health Research Synergy Vanguard Portal, where I built searchable databases and API integrations to support interdisciplinary collaboration. My experience in full-stack development, cloud computing, and data analytics allows me to build scalable, efficient, and impactful software solutions.</p>
          </section>

          {/* Education */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            <p>I earned my Bachelor of Science in Computer Science from Michigan State University in December 2024.</p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="space-y-2">
              <span>You can reach me at </span>
              <a 
                href="mailto:pranavshuklajobs@gmail.com" 
                className="text-blue-600 hover:underline"
              >
                pranavshuklajobs@gmail.com
              </a>
              <span>, connect with me on </span>
              <Link 
                href="https://www.linkedin.com/in/pranavshuklafts/" 
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                LinkedIn
              </Link>
              <span>, or explore my projects on </span>
              <Link 
                href="https://www.github.com/codebypranav/" 
                className="text-blue-600 hover:underline"
                target="_blank"
              >
                GitHub
              </Link>
              <span>.</span>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 