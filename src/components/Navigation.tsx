import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Pranav Shukla
        </Link>
        <div className="space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 