import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Chocolate | Pranav Shukla' };

const chocolates: { bar: string; maker?: string; note?: string }[] = [
  { bar: 'Pure 67%', maker: 'Mindo' },
  { bar: 'Pure 77%', maker: 'Mindo' },
  { bar: '70% Oat', maker: 'Mindo' },
  { bar: 'Holy Fudge Chocolate', maker: 'TCHO' },
  { bar: 'Vegan Chocolate 70%', maker: 'Hu' },
  { bar: '60% Cacao Dark Chocolate', maker: 'Ghirardelli' },
  { bar: 'LINDOR Dark Chocolate', maker: 'Lindt' },
  { bar: 'LINDOR Milk Chocolate', maker: 'Lindt' },
  { bar: 'Milk Chocolate Square', maker: 'Ghirardelli' },
  { bar: "Hershey's Milk Chocolate" },
  { bar: 'Kit Kat' },
  { bar: '3 Musketeers' },
  { bar: "Hershey's Special Dark" },
  { bar: 'Milk Chocolate Caramel', maker: 'Ghirardelli' },
  { bar: 'Almond Joy' },
  { bar: 'LINDOR White Chocolate', maker: 'Lindt' },
  { bar: 'Dark Chocolate Mint', maker: 'Ghirardelli' },
];

export default function Chocolate() {
  return (
    <>
      <h1 className="sr-only">Chocolate</h1>
      <p className="chocolate-intro">I tend to prefer smooth, non-rustic, dark chocolates of around 65-80% cacao.</p>
      <ol>
        {chocolates.map((chocolate, index) => (
          <li key={chocolate.bar} className="project chocolate">
            <span className="project-tags">{index + 1}</span>
            <div>
              <h2>{chocolate.bar}</h2>
              {chocolate.maker && <p className="project-tags">{chocolate.maker}</p>}
              {chocolate.note && <p>{chocolate.note}</p>}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
