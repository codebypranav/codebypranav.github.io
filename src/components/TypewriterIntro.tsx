'use client';

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface TypewriterIntroProps {
  /** Static text that sits to the left of the animated phrase. */
  prefix?: string;
  /** Phrases cycled through, one character at a time. */
  phrases: string[];
}

/** Per-character and per-phase timings, in milliseconds. */
const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1700;
const BETWEEN_MS = 450;

const TypewriterIntro: React.FC<TypewriterIntroProps> = ({
  prefix = 'I build',
  phrases,
}) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();

  const current = phrases[phraseIndex % phrases.length] ?? '';

  useEffect(() => {
    if (reduced || phrases.length === 0) return;

    const schedule = (fn: () => void, ms: number) => {
      timeoutRef.current = setTimeout(fn, ms);
    };

    if (!deleting) {
      if (typed === current) {
        // Word complete — pause on it before clearing.
        schedule(() => setDeleting(true), HOLD_MS);
      } else {
        // A little jitter keeps the keystrokes from sounding mechanical.
        schedule(
          () => setTyped(current.slice(0, typed.length + 1)),
          TYPE_MS + Math.random() * 45
        );
      }
    } else if (typed === '') {
      schedule(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length);
        setDeleting(false);
      }, BETWEEN_MS);
    } else {
      schedule(() => setTyped(current.slice(0, typed.length - 1)), DELETE_MS);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [typed, deleting, current, phrases.length, reduced]);

  // Reduced motion gets the first phrase, fully typed, with no animation.
  const display = reduced ? (phrases[0] ?? '') : typed;
  // The cursor rests between words and blinks; it stays solid mid-keystroke.
  const resting = reduced || display === current || display === '';

  return (
    <div className="typewriter">
      {/* The animated line is decorative; screen readers get the plain list below. */}
      <p className="typewriter-line" aria-hidden="true">
        <span className="typewriter-prefix">{prefix}</span>{' '}
        <span className="typewriter-typed">{display}</span>
        <span
          className={`typewriter-cursor ${resting ? 'typewriter-cursor-blink' : ''}`}
        />
      </p>

      <span className="typewriter-rule" aria-hidden="true" />

      <p className="sr-only">
        {prefix} {phrases.join(', ')}.
      </p>
    </div>
  );
};

export default TypewriterIntro;
