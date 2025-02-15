// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-blue-500 text-white fixed top-0 w-full z-20 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">Home Services</Link>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex items-center space-x-4 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 gap-3 md:space-y-0">
              <li>
                <Link to="/" className="hover:underline" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline" onClick={closeMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:underline" onClick={closeMenu}>
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/token" className="hover:underline" onClick={closeMenu}>
                  Token
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
