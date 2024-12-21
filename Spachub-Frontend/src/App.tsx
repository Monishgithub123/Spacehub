import React, { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import PropertyCard from "./components/PropertyCard";
import PropertyModal from "./components/PropertyModal";
import Footer from "./components/Footer";
import { useFilters } from "./hooks/useFilters";
import { useProperties } from "./hooks/useProperties";
import { Property } from "./types";
import { Plus } from "lucide-react";

const App: React.FC = () => {
  const {
    properties,
    addProperty,
    updateProperty,
    deleteProperty,
    fetchProperties,
  } = useProperties();
  const { filters, updateFilter, resetFilters, filteredProperties } =
    useFilters(properties);

  const [selectedProperty, setSelectedProperty] = useState<
    Property | undefined
  >();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProperty = () => {
    setSelectedProperty(undefined);
    setIsModalOpen(true);
  };

  const handleEditProperty = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleSubmitProperty = (propertyData: Omit<Property, "id">) => {
    if (selectedProperty) {
      updateProperty(selectedProperty._id, propertyData);
    } else {
      addProperty(propertyData);
    }
    setIsModalOpen(false);
  };

  const handleResetFilters = () => {
    resetFilters();
    fetchProperties(); // Trigger re-fetch from API
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={filters.searchQuery}
        onSearchChange={(value) => updateFilter("searchQuery", value)}
      />

      <Filters
        filters={filters}
        onFilterChange={updateFilter}
        onReset={handleResetFilters}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleAddProperty}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Property
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onEdit={() => handleEditProperty(property)}
              onDelete={() => deleteProperty(property._id)}
            />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No properties found matching your criteria
            </p>
          </div>
        )}
      </main>

      <PropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitProperty}
        property={selectedProperty}
        title={selectedProperty ? "Edit Property" : "Add Property"}
      />

      <Footer />
    </div>
  );
};

export default App;
