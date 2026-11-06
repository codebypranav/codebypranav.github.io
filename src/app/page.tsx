import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pranav Shukla</h1>
      <div className="prose">
        <p>
          Hi, I&apos;m Pranav! I&apos;m a software engineer at{' '}
          <a href="https://www.ford.com/" target="_blank" rel="noopener noreferrer" className="link">Ford</a>
          , building full-stack applications, machine learning models, and AI agents. Previously, I graduated from Michigan State University with a degree in Computer Science in December 2024, and interned as a SWE at{' '}
          <a href="https://www.vanguard.com/" target="_blank" rel="noopener noreferrer" className="link">Vanguard</a>
          . Currently, I&apos;m drawn to manufacturing, robotics, energy, and practical AI.
        </p>
        <p>
          Outside of work, I love to travel, read, run, take photos, play video games, and listen to music. I&apos;m also an aviation enthusiast: I log a lot of simulated flight hours and hope to earn my PPL someday. I also never say no to (high quality){' '}
          <Link href="/chocolate" className="link">chocolate</Link>
          .
        </p>
      </div>
      <p className="flight-time">total flight time: 0.0&nbsp;hrs · msfs 2020: 779.1&nbsp;hrs · ppl: someday</p>
    </>
  );
}
