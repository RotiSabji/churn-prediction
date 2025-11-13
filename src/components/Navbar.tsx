'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-blue-600">ChurnPredict</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
            <Link href="/#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="/#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Login</Link>
            <Link href="/signup" className="px-6 py-2 bg-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium">Sign Up</Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg hover:bg-gray-100">
            <svg className="w-6 h-6 text-gray-700" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link href="/#features" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link href="/#how-it-works" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</Link>
            <Link href="/#about" className="block text-gray-700 hover:text-blue-600 transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <div className="pt-3 space-y-2 border-t border-gray-200">
              <Link href="/login" className="block w-full text-center py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsMenuOpen(false)}>Login</Link>
              <Link href="/signup" className="block w-full text-center py-2 bg-blue-600 text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
