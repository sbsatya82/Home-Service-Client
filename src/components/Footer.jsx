// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center fixed bottom-0 w-full">
      <p>&copy; {new Date().getFullYear()} Home Services. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
