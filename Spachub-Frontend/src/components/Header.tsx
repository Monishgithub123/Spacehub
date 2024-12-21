import React from 'react';
import SearchBar from './SearchBar.js';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange }) => {
  return (
    <header className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand Name */}
          <h1 className="text-3xl font-semibold text-white tracking-wider">
            SpaceHub
          </h1>

          {/* Search Bar and Call-to-Action */}
          <div className="flex items-center space-x-6">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              className="bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button className="bg-white text-indigo-700 px-5 py-2 font-medium rounded-lg shadow-md hover:bg-indigo-100 transition duration-300">
              Request Callback
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
