export default function Home() {
  return (
    <>
      <h1 className="sr-only">Pranav Shukla</h1>
      <div className="prose">
        <p>
          Hi! I&apos;m Pranav! I&apos;m a software engineer at{' '}
          <a href="https://www.ford.com/" target="_blank" rel="noopener noreferrer" className="link">Ford</a>
          {' '}working on full-stack applications, machine learning models, and AI agents.
        </p>
        <p>
          Before that, I worked on software at{' '}
          <a href="https://www.vanguard.com/" target="_blank" rel="noopener noreferrer" className="link">Vanguard</a>
          . I studied computer science at Michigan State University. I&apos;m interested in data-driven products, cloud infrastructure, and practical AI.
        </p>
        <p>
          Outside work, I travel and fly a lot of simulated hours, and I want to get my pilot&apos;s license one day. I also really like chocolate.
        </p>
      </div>
      <p className="flight-time">total flight time: 0.0&nbsp;hrs · msfs 2020: 779.1&nbsp;hrs · ppl: someday</p>
    </>
  );
}
