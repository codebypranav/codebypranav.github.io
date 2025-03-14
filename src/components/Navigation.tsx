'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wider">
          PRANAV SHUKLA
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300 transition-colors uppercase tracking-wide">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-300 transition-colors uppercase tracking-wide">
            About Me
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <div className="dropdown md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-icon flex flex-col justify-center items-center w-8 h-8"
          >
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white mb-1.5"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
          
          {isMenuOpen && (
            <div className="dropdown-content">
              <Link 
                href="/" 
                className="hover:text-gray-300 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="hover:text-gray-300 transition-colors uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;