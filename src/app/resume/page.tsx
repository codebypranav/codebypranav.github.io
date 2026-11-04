import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Resume | Pranav Shukla' };

const PDF = '/Pranav_Shukla.pdf';

export default function Resume() {
  return (
    <div className="resume">
      <h1 className="sr-only">Resume</h1>
      <p className="resume-links">
        <a href={PDF} target="_blank" rel="noopener noreferrer" className="link">
          open
        </a>
        <a href={PDF} download className="link">download</a>
      </p>
      <object data={`${PDF}#view=FitH`} type="application/pdf" className="resume-frame" aria-label="Resume PDF">
        <p className="resume-fallback">
          Your browser can&apos;t show the PDF here. <a href={PDF} className="link">Open the resume</a>
        </p>
      </object>
    </div>
  );
}
