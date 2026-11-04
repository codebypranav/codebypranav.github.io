'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {}
};

const LINKS = [
  ['/projects', 'projects'],
  ['/resume', 'resume'],
  ['/contact', 'contact'],
];

const Navigation = () => {
  const path = usePathname().replace(/(.)\/$/, '$1');

  return (
    <nav className="nav">
      <Link href="/" className="nav-home" aria-current={path === '/' ? 'page' : undefined}>pranav shukla</Link>
      {LINKS.map(([href, label]) => (
        <Link key={href} href={href} aria-current={path === href ? 'page' : undefined}>{label}</Link>
      ))}
      <button type="button" onClick={toggleTheme} aria-label="Toggle theme">◐</button>
    </nav>
  );
};

export default Navigation;
