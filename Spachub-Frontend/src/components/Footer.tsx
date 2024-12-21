import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-6">
          {/* Footer Heading */}
          <div className="text-center">
            <h3 className="text-4xl font-semibold text-white tracking-wide">SpaceHub</h3>
            <p className="mt-2 text-lg text-gray-400">Discover the best coworking spaces for your business, wherever you are.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-8 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFacebookF size={28} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaTwitter size={28} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-800 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLinkedinIn size={28} />
            </a>
          </div>

          {/* Copyright and Crafted By Text */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} SpaceHub, All Rights Reserved.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Crafted with ❤️ by <span className="text-white">Monish Yedlewar</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
