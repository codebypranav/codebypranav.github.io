import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = { title: 'Contact | Pranav Shukla' };

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact</h1>
      <Contact />
    </>
  );
}
