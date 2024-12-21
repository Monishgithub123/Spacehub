import React from 'react';
import { Heart, MapPin, Clock, Edit, Trash } from 'lucide-react';
import { Property } from '../types/index.js';

interface PropertyCardProps {
  property: Property;
  onEdit: () => void;
  onDelete: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
      <div className="relative">
        {/* Property Image */}
        <img
          src={property.imageUrl || 'https://via.placeholder.com/600x400'}  // Placeholder image if no URL
          alt={property.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute top-4 right-4 flex space-x-2 z-10">
          {/* Wishlist Button */}
          <button
            aria-label="Add to wishlist"
            className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          >
            <Heart className="h-5 w-5 text-red-600" />
          </button>
          {/* Edit Button */}
          <button
            onClick={onEdit}
            aria-label="Edit property"
            className="p-2 bg-white rounded-full shadow-md hover:bg-blue-100"
          >
            <Edit className="h-5 w-5 text-blue-600" />
          </button>
          {/* Delete Button */}
          <button
            onClick={onDelete}
            aria-label="Delete property"
            className="p-2 bg-white rounded-full shadow-md hover:bg-red-100"
          >
            <Trash className="h-5 w-5 text-red-600" />
          </button>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-6 transition duration-300 ease-in-out hover:bg-gray-50">
        {/* Property Name and Location */}
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{property.name}</h3>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            {property.location}
          </div>
        </div>

        {/* Opening Hours */}
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <Clock className="h-4 w-4 mr-1" />
          <span>{property.openingHours}</span>
        </div>

        {/* Property Types */}
        <div className="mt-4 flex flex-wrap gap-2">
          {property.type.split('|').map((type) => (
            <span
              key={type}
              className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm rounded-full"
            >
              {type.trim()}
            </span>
          ))}
        </div>

        {/* Price and Get Quote Button */}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Price starting at</p>
            <p className="text-2xl font-bold text-indigo-600">₹{property.price.toLocaleString()}</p>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
