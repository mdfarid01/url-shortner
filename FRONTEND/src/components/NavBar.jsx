import React from 'react';
import { Link } from '@tanstack/react-router';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 shadow-lg border-b border-purple-300">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left side - App Name & Icon */}
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 010 5.656l-3.536 3.536a4 4 0 01-5.656-5.656l1.414-1.414M10.172 13.828a4 4 0 010-5.656l3.536-3.536a4 4 0 015.656 5.656l-1.414 1.414" />
            </svg>
            <Link to="/" className="text-2xl font-extrabold text-white drop-shadow-lg tracking-wide hover:text-yellow-200 transition">
              URL Shortener
            </Link>
          </div>
          
          {/* Right side - Auth buttons */}
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-white font-semibold hover:text-yellow-200 transition px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              to="/auth"
              className="bg-white text-purple-700 font-bold px-4 py-2 rounded-xl shadow hover:bg-purple-100 transition"
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;