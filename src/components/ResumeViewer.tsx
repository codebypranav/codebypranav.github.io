'use client';

import { useState } from 'react';

export default function ResumeViewer() {
  const [scale, setScale] = useState(100);

  return (
    <section id="resume" className="resume-section">
      <h2 className="section-header animate-on-load">Resume</h2>
      <div className="resume-container">
        <div className="resume-controls">
          <div className="resume-zoom-controls">
            <button
              onClick={() => setScale(prev => Math.max(prev - 10, 50))}
              className="resume-btn"
            >
              −
            </button>
            <span className="resume-zoom-level">{scale}%</span>
            <button
              onClick={() => setScale(prev => Math.min(prev + 10, 200))}
              className="resume-btn"
            >
              +
            </button>
          </div>

          <a
            href="/Pranav_Shukla.pdf"
            download
            className="resume-btn resume-download-btn"
          >
            Download
          </a>
        </div>

        <div className="resume-viewer">
          <embed
            src="/Pranav_Shukla.pdf"
            type="application/pdf"
            width="100%"
            height="800"
            style={{ transform: `scale(${scale / 100})`, transformOrigin: 'top center' }}
          />
        </div>
      </div>
    </section>
  );
}
