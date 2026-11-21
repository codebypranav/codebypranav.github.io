import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pranav Shukla</h1>
      <div className="prose">
        <p>
          Hi, I&apos;m Pranav! I&apos;m a software engineer at{' '}
          <a href="https://www.ford.com/" target="_blank" rel="noopener noreferrer" className="link">Ford</a>
          , where I build full-stack applications, machine learning models, and AI agents. I graduated from Michigan State University in December 2024 with a degree in Computer Science, after interning a few summers as a SWE at{' '}
          <a href="https://www.vanguard.com/" target="_blank" rel="noopener noreferrer" className="link">Vanguard</a>
          . These days, I&apos;m most interested in manufacturing, robotics, energy, and practical AI.
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
