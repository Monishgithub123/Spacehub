import React from 'react';
import { Property } from '../types/index.js';

interface PropertyFormProps {
  property?: Property;
  onSubmit: (property: Omit<Property, 'id'>) => void;
  onCancel: () => void;
}

const PropertyForm: React.FC<PropertyFormProps> = ({ property, onSubmit, onCancel }) => {
  const [formData, setFormData] = React.useState({
    name: property?.name ?? '',
    location: property?.location ?? '',
    price: property?.price ?? 0,
    description: property?.description ?? '',
    imageUrl: property?.imageUrl ?? '',
    type: property?.type ?? '',
    amenities: property?.amenities?.join(', ') ?? '',
    openingHours: property?.openingHours ?? '',
    status: property?.status ?? 'Open Now'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      amenities: formData.amenities.split(',').map(a => a.trim()),
      price: Number(formData.price)
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-8 max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-y-auto max-h-[80vh] border border-gray-200"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Property Form</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-800">Name</label>
          <input
            type="text"
            value={formData.name}
            onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter property name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800">Location</label>
          <input
            type="text"
            value={formData.location}
            onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
            className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter property location"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800">Price</label>
        <input
          type="number"
          value={formData.price}
          onChange={e => setFormData(prev => ({ ...prev, price: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter price"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800">Description</label>
        <textarea
          value={formData.description}
          onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter description"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800">Image URL</label>
        <input
          type="url"
          value={formData.imageUrl}
          onChange={e => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter image URL"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800">Type</label>
        <input
          type="text"
          value={formData.type}
          onChange={e => setFormData(prev => ({ ...prev, type: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter property type"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800">Amenities (comma-separated)</label>
        <input
          type="text"
          value={formData.amenities}
          onChange={e => setFormData(prev => ({ ...prev, amenities: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter amenities"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-800">Opening Hours</label>
        <input
          type="text"
          value={formData.openingHours}
          onChange={e => setFormData(prev => ({ ...prev, openingHours: e.target.value }))}
          className="mt-1 block w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter opening hours"
          required
        />
      </div>

      <div className="flex justify-end space-x-4 mt-6">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-3 border border-gray-300 rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-100 focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-3 border border-transparent rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
        >
          {property ? 'Update' : 'Create'} Property
        </button>
      </div>
    </form>
  );
};

export default PropertyForm;
