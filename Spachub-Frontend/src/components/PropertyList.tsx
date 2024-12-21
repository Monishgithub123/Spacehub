import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component

const PropertyList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchQuery(value); // Update the search query
  };

  // Example property data
  const properties = [
    { id: 1, name: 'Space Office', location: 'Viman Nagar', propertyType: 'Commercial' },
    { id: 2, name: 'Tech Hub', location: 'Baner', propertyType: 'Dedicated Desks' },
    { id: 3, name: 'Co-Work Space', location: 'Kharadi', propertyType: 'Private Cabins' },
    { id: 4, name: 'Creative Studio', location: 'Viman Nagar', propertyType: 'Meeting Rooms' },
    { id: 5, name: 'Innovation Park', location: 'Kharadi', propertyType: 'Private Cabins' },
  ];

  // Filter properties based on the search query
  const filteredProperties = properties.filter(property => {
    const searchValue = searchQuery.toLowerCase();
    return (
      property.name.toLowerCase().includes(searchValue) ||
      property.location.toLowerCase().includes(searchValue) ||
      property.propertyType.toLowerCase().includes(searchValue)
    );
  });

  return (
    <div>
      <SearchBar value={searchQuery} onChange={handleSearchChange} />

      {/* Display filtered properties */}
      <div className="property-list py-6">
        <h2 className="text-xl font-semibold">Properties</h2>
        <ul>
          {filteredProperties.map((property) => (
            <li key={property.id} className="py-2">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">{property.name}</h3>
                  <p className="text-sm text-gray-600">{property.location}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">{property.propertyType}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PropertyList;
