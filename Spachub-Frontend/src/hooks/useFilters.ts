import { useState, useCallback } from "react";
import { Property } from "../types";

export const useFilters = (properties: Property[]) => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    priceRange: [0, 10000000], // Example range
    location: "",
  });

  const filteredProperties = properties.filter((property) => {
    return (
      property.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
      property.price >= filters.priceRange[0] &&
      property.price <= filters.priceRange[1] &&
      property.location.toLowerCase().includes(filters.location.toLowerCase())
    );
  });

  const updateFilter = useCallback((key: string, value: any) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      searchQuery: "",
      priceRange: [0, 100000],
      location: "",
    });
  }, []);

  return { filters, updateFilter, resetFilters, filteredProperties };
};
