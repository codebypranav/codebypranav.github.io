'use client';

import { useEffect } from 'react';

export default function PointerGlow() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const root = document.documentElement;
    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      x = e.clientX;
      y = e.clientY;
      frame ||= requestAnimationFrame(() => {
        frame = 0;
        root.style.setProperty('--mx', `${x}px`);
        root.style.setProperty('--my', `${y}px`);
        root.dataset.pointer ??= '';
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      delete root.dataset.pointer;
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', onLeave);
    return () => {
      onLeave();
      window.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return null;
}
