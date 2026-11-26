import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Resume | Pranav Shukla' };

const PDF = '/Pranav_Shukla.pdf';

const sections = [
  {
    title: 'Work experience',
    entries: [
      {
        name: 'Ford',
        detail: 'Software Engineer · Dearborn, MI',
        dates: 'Mar 2025 – Present',
        points: [
          'Owned deployment and operation of a production analytics system used by manufacturing leadership to monitor plant-wide quality metrics across multiple facilities.',
          'Designed and implemented end-to-end data flows (GCP → Flask APIs → React/D3 dashboards), balancing latency, correctness, and operational simplicity in a live production environment.',
          'Reduced data retrieval latency from ~2 minutes to ~15 seconds by diagnosing system-level bottlenecks across queries, concurrency, and service architecture.',
          'Served as the technical point of contact for clarifying ambiguous requirements, diagnosing production issues, and making tradeoff decisions based on stakeholder and operational constraints.',
        ],
      },
      {
        name: 'Vanguard',
        detail: 'Software Engineer Intern · Malvern, PA',
        dates: 'May 2024 – Aug 2024',
        points: [
          'Delivered automation for ETF trading workflows, reducing operations and contributing ~$8M in annual cost savings.',
          'Improved system reliability using Splunk and Postman to debug failures and reduce testing cycles by ~30%.',
          'Led delivery of a GDP nowcasting project, coordinating engineering efforts and acting as technical liaison for stakeholders.',
        ],
      },
      {
        name: 'Vanguard',
        detail: 'Software Engineer Intern · Malvern, PA',
        dates: 'May 2023 – Aug 2023',
        points: [
          'Built and iterated on analytics tools (React, D3) used by traders, incorporating feedback from non-engineering stakeholders.',
          'Diagnosed and optimized performance-critical systems across Python and TypeScript services, improving throughput by 5–25% in live financial environments.',
        ],
      },
      {
        name: 'Vanguard',
        detail: 'Software Engineer Intern · Malvern, PA',
        dates: 'May 2022 – Aug 2022',
        points: [
          'Constructed cloud infrastructure using SpringBoot that connected traders with real-time data suppliers, saving over $100K monthly, and automated data cleanup via AWS Lambda functions with Python’s boto3 to cut storage costs.',
          'Configured 30+ Atlassian Bamboo CI/CD pipelines with YAML to optimize deployments for AWS-hosted services.',
        ],
      },
    ],
  },
  {
    title: 'Projects',
    entries: [
      {
        name: 'AirFleet',
        dates: 'Jan 2025 – Present',
        points: [
          'Designed and built a full-stack aviation analytics platform integrating secure authentication, scalable PostgreSQL storage, and AI-assisted log summarization, reducing pilot data review time by ~40% and improving decision efficiency.',
        ],
      },
      {
        name: 'Henry Ford Health – Research Synergy Vanguard Portal',
        dates: 'Sep 2024 – Dec 2024',
        points: [
          'Integrated Elasticsearch into a Flask-based API to improve researcher discovery and collaboration, and automated data ingestion from external clinical directories to maintain up-to-date records.',
          'Automated the extraction of critical research data from Henry Ford’s “Find A Doc” system using Python’s BeautifulSoup4 and designed intuitive React.js UI components to ensure a seamless user experience.',
        ],
      },
      {
        name: 'SpartaHack X – WasteWise',
        dates: 'Feb 2025',
        points: [
          'Developed a smart waste bin system with React and Flask, integrating an ESP32-S3 and ultrasonic sensor for monitoring.',
          'Leveraged PyTorch and Torchvision to train a computer vision model that classifies waste types and triggers alerts.',
        ],
      },
    ],
  },
  {
    title: 'Skills',
    skills: [
      ['Languages/Frameworks', 'Python, C++, JavaScript, TypeScript, Java, C, SQL, HTML5, CSS, Next.js, React, Flask'],
      ['Technologies', 'Docker, AWS, GCP, PostgreSQL, Linux, PyTorch, TensorFlow, Cursor, Claude Code, GitHub Copilot, ChatGPT'],
    ],
  },
  {
    title: 'Education',
    entries: [
      {
        name: 'Michigan State University',
        detail: 'B.S. Computer Science · East Lansing, MI',
        dates: 'Sep 2020 – Dec 2024',
        points: [
          'Courses: Data Structures & Algorithms, Discrete Structures, Computer Architecture & Organization, Web Development, Computer Systems, Computer Graphics, Mobile Development, Big Data Analysis, Biometrics and Pattern Recognition',
        ],
      },
    ],
  },
];

export default function Resume() {
  return (
    <>
      <h1 className="sr-only">Resume</h1>
      <div className="resume-actions">
        <a href={PDF} download="Pranav_Shukla_Resume.pdf" className="resume-download">
          <span aria-hidden="true">↓ </span>download pdf
        </a>
        <a href={PDF} target="_blank" rel="noopener noreferrer" className="link">view pdf</a>
      </div>
      {sections.map((section) => (
        <section key={section.title} className="resume-section">
          <h2>{section.title}</h2>
          {section.entries?.map((entry) => (
            <article key={`${entry.name} ${entry.dates}`} className="resume-entry">
              <header>
                <h3>{entry.name}</h3>
                <p className="resume-dates">{entry.dates}</p>
              </header>
              {'detail' in entry && <p className="resume-detail">{entry.detail}</p>}
              <ul>
                {entry.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
            </article>
          ))}
          {section.skills && (
            <dl>
              {section.skills.map(([label, list]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{list}</dd>
                </div>
              ))}
            </dl>
          )}
        </section>
      ))}
    </>
  );
}
