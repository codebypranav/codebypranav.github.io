'use client';

import { useState } from 'react';

const EMAIL = 'pranavshuklajobs@gmail.com';

export default function Contact() {
  const [status, setStatus] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setStatus('copied');
    } catch {
      setStatus('copy failed');
    }
    setTimeout(() => setStatus(''), 2000);
  };

  return (
    <ul className="contact-links">
      <li className="contact-email">
        <button type="button" onClick={copyEmail} title="Copy email to clipboard." className="link">
          {EMAIL}
        </button>
        <span className="contact-status" aria-live="polite">{status}</span>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/pranavshuklafts" target="_blank" rel="noopener noreferrer" className="link">
          linkedin.com/in/pranavshuklafts
        </a>
      </li>
      <li>
        <a href="https://www.github.com/codebypranav/" target="_blank" rel="noopener noreferrer" className="link">
          github.com/codebypranav
        </a>
      </li>
    </ul>
  );
}
