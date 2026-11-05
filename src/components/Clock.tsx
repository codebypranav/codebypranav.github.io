'use client';

import { useSyncExternalStore } from 'react';

const detroitTime = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Detroit',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 1000);
  return () => clearInterval(id);
};

export default function Clock() {
  const time = useSyncExternalStore(subscribe, () => detroitTime.format(Date.now()), () => '--:--');

  return <footer className="site-clock">ann arbor, mi <time>{time}</time></footer>;
}
