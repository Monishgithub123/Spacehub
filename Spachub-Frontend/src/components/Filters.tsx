import React from 'react';
import { Filter } from 'lucide-react';
import { FilterState } from '../types/index.js';

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: any) => void;
  onReset: () => void;
}

const Filters: React.FC<FiltersProps> = ({ filters, onFilterChange, onReset }) => {
  return (
    <div className="bg-white shadow-md rounded-lg py-6 px-6 border-b-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-gray-700">
            <Filter className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="text-lg font-semibold">Quick Filters</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Location Filter */}
          <div className="flex-shrink-0">
            <select
              value={filters.location}
              onChange={(e) => onFilterChange('location', e.target.value)}
              className="form-select rounded-lg border-gray-300 py-2 pl-3 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            >
              <option value="">All Locations</option>
              <option value="Viman Nagar">Viman Nagar</option>
              <option value="Kharadi">Kharadi</option>
              <option value="Baner">Baner</option>
              <option value="Magarpatta">Magarpatta</option>
              <option value="Hinjewadi">Hinjewadi</option>
              <option value="Hadapsar">Hadapsar</option>
              <option value="Pimple Saudagar">Pimple Saudagar</option>
              <option value="Wakad">Wakad</option>
            </select>
          </div>

          {/* Property Type Filter */}
          <div className="flex-shrink-0">
            <select
              value={filters.propertyType}
              onChange={(e) => onFilterChange('propertyType', e.target.value)}
              className="form-select rounded-lg border-gray-300 py-2 pl-3 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            >
              <option value="">All Types</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Dedicated Desks">Dedicated Desks</option>
              <option value="Private Cabins">Private Cabins</option>
              <option value="Meeting Rooms">Meeting Rooms</option>
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex-shrink-0">
            <select
              value={`${filters.priceRange[0]}-${filters.priceRange[1]}`}
              onChange={(e) => {
                const [min, max] = e.target.value.split('-').map(Number);
                onFilterChange('priceRange', [min, max]);
              }}
              className="form-select rounded-lg border-gray-300 py-2 pl-3 pr-10 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
            >
              <option value="0-50000">All Prices</option>
              <option value="0-10000">₹0 - ₹10,000</option>
              <option value="10000-20000">₹10,000 - ₹20,000</option>
              <option value="20000-30000">₹20,000 - ₹30,000</option>
              <option value="30000-40000">₹30,000 - ₹40,000</option>
              <option value="40000-50000">₹40,000 - ₹50,000</option>
              <option value="50000-60000">₹50,000 - ₹60,000</option>
              <option value="60000-70000">₹60,000 - ₹70,000</option>
              <option value="70000-80000">₹70,000 - ₹80,000</option>
              <option value="80000-90000">₹80,000 - ₹90,000</option>
              <option value="90000-100000">₹90,000 - ₹1,00,000</option>
            </select>
          </div>

          {/* Reset Button */}
          <div className="flex-shrink-0">
            <button
              onClick={onReset}
              className="text-indigo-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
