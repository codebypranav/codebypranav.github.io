'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export interface Project {
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  image: string;
  /** Shown in the faux browser bar above the screenshot. */
  shotLabel: string;
  /** Describes what the screenshot actually shows. */
  shotAlt: string;
  tags: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
  /** Advance on its own until the first manual interaction. */
  autoPlay?: boolean;
}

const AUTOPLAY_MS = 7000;
const DRAG_THRESHOLD = 60;

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({
  projects,
  autoPlay = true,
}) => {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  // Autoplay is a hint, not a cage: the first manual move turns it off for good.
  const [autoPlaying, setAutoPlaying] = useState(autoPlay);
  const [drag, setDrag] = useState(0);

  const reduced = useReducedMotion();
  const stageRef = useRef<HTMLDivElement | null>(null);
  const dragStart = useRef<number | null>(null);
  const pointerId = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setActive(((next % count) + count) % count),
    [count]
  );

  const manualGo = useCallback(
    (next: number) => {
      setAutoPlaying(false);
      go(next);
    },
    [go]
  );

  // Autoplay, paused while hovered/focused or when the tab is in the background.
  useEffect(() => {
    if (!autoPlaying || reduced || paused || count < 2) return;
    const id = setInterval(() => {
      if (!document.hidden) setActive((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [autoPlaying, reduced, paused, count]);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      manualGo(active - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      manualGo(active + 1);
    }
  };

  const onPointerDown = (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    dragStart.current = event.clientX;
    pointerId.current = event.pointerId;
    // Capture can fail if the pointer is already gone; the drag still works.
    try {
      stageRef.current?.setPointerCapture(event.pointerId);
    } catch {}
  };

  const onPointerMove = (event: React.PointerEvent) => {
    if (dragStart.current === null) return;
    setDrag(event.clientX - dragStart.current);
  };

  const endDrag = (event: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const delta = event.clientX - dragStart.current;
    dragStart.current = null;
    setDrag(0);
    if (pointerId.current !== null) {
      try {
        stageRef.current?.releasePointerCapture(pointerId.current);
      } catch {}
      pointerId.current = null;
    }
    if (Math.abs(delta) > DRAG_THRESHOLD) manualGo(active + (delta < 0 ? 1 : -1));
  };

  /** Signed distance from the active slide, wrapped so the deck reads as a loop. */
  const offsetOf = (index: number) => {
    const half = Math.floor(count / 2);
    return ((((index - active) % count) + count + half) % count) - half;
  };

  const current = projects[active];

  return (
    <div
      className="carousel"
      role="group"
      aria-roledescription="carousel"
      aria-label="Projects"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        ref={stageRef}
        className={`carousel-stage ${drag !== 0 ? 'carousel-stage-dragging' : ''}`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        aria-label="Project screenshots. Use the left and right arrow keys to browse."
      >
        {projects.map((project, index) => {
          const offset = offsetOf(index);
          const isActive = offset === 0;

          return (
            <div
              key={project.title}
              className={`carousel-slide ${isActive ? 'carousel-slide-active' : ''}`}
              style={
                {
                  '--offset': offset,
                  '--distance': Math.abs(offset),
                  '--drag': `${isActive ? drag * 0.35 : 0}px`,
                  zIndex: count - Math.abs(offset),
                } as React.CSSProperties
              }
              aria-hidden={!isActive}
            >
              <button
                type="button"
                className="carousel-shot"
                // A mouse affordance for stepping one over; the arrows and pips
                // below do the same job for keyboards, so this stays out of the
                // tab order rather than sitting focusable inside a hidden slide.
                onClick={() => !isActive && manualGo(index)}
                tabIndex={-1}
                aria-label={`Show ${project.title}`}
                disabled={isActive}
              >
                <span className="carousel-chrome" aria-hidden="true">
                  <span className="carousel-dot" />
                  <span className="carousel-dot" />
                  <span className="carousel-dot" />
                  <span className="carousel-chrome-label">{project.shotLabel}</span>
                </span>
                <span className="carousel-shot-frame">
                  <Image
                    src={project.image}
                    alt={project.shotAlt}
                    fill
                    sizes="(max-width: 768px) 92vw, 704px"
                    className="carousel-image"
                    priority={index === 0}
                    draggable={false}
                  />
                  <span className="carousel-sheen" aria-hidden="true" />
                </span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Remounting on `active` replays the entrance animation for each project. */}
      <div className="carousel-body" key={current.title}>
        <h3 className="carousel-title">{current.title}</h3>
        <ul className="carousel-tags">
          {current.tags.map((tag) => (
            <li key={tag} className="carousel-tag">
              {tag}
            </li>
          ))}
        </ul>
        <p className="carousel-description">{current.description}</p>
        <div className="carousel-links">
          {current.liveLink && (
            <Link href={current.liveLink} className="project-card-link" target="_blank">
              Live demo
            </Link>
          )}
          <Link
            href={current.repoLink}
            className="project-card-link project-card-link-secondary"
            target="_blank"
          >
            View code
          </Link>
        </div>
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={() => manualGo(active - 1)}
          aria-label="Previous project"
        >
          <span aria-hidden="true">←</span>
        </button>

        <div className="carousel-dots" role="group" aria-label="Choose a project">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-current={index === active}
              aria-label={project.title}
              className={`carousel-pip ${index === active ? 'carousel-pip-active' : ''}`}
              onClick={() => manualGo(index)}
            >
              <span
                className={`carousel-pip-fill ${
                  index === active && autoPlaying && !paused && !reduced
                    ? 'carousel-pip-timer'
                    : ''
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow"
          onClick={() => manualGo(active + 1)}
          aria-label="Next project"
        >
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <p className="carousel-counter" aria-hidden="true">
        <span className="carousel-counter-current">
          {String(active + 1).padStart(2, '0')}
        </span>
        <span className="carousel-counter-divider">/</span>
        {String(count).padStart(2, '0')}
      </p>

      {/* Announce deliberate moves only — autoplay shouldn't chatter. */}
      <p className="sr-only" aria-live={autoPlaying ? 'off' : 'polite'}>
        {current.title}, project {active + 1} of {count}.
      </p>
    </div>
  );
};

export default ProjectCarousel;
