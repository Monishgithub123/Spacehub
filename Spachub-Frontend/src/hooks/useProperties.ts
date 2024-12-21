import { useState, useCallback, useEffect } from "react";
import { Property } from "../types/index.js";

export const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch all properties from the API
  const fetchProperties = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/spaces");
      if (!response.ok) {
        throw new Error("Failed to fetch properties");
      }
      const data: Property[] = await response.json();
      setProperties(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add a new property using API
  const addProperty = useCallback(async (property: Omit<Property, "id">) => {
    setError(null);
    try {
      const response = await fetch("/api/spaces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(property),
      });
      if (!response.ok) {
        throw new Error("Failed to add property");
      }
      const newProperty: Property = await response.json();
      setProperties((prev) => [...prev, newProperty]);
    } catch (err: any) {
      setError(err.message);
    }
  }, []);

  // Update an existing property using API
  const updateProperty = useCallback(
    async (id: string, updates: Partial<Property>) => {
      setError(null);
      try {
        const response = await fetch(`/api/spaces/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updates),
        });
        if (!response.ok) {
          throw new Error("Failed to update property");
        }
        const updatedProperty: Property = await response.json();
        setProperties((prev) =>
          prev.map((property) =>
            property._id === id ? updatedProperty : property
          )
        );
      } catch (err: any) {
        setError(err.message);
      }
    },
    []
  );

  // Delete a property using API
  const deleteProperty = useCallback(async (id: string) => {
    setError(null);
    try {
      const response = await fetch(`/api/spaces/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete property");
      }
      setProperties((prev) => prev.filter((property) => property._id !== id));
    } catch (err: any) {
      setError(err.message);
    }
  }, []);

  // Fetch properties on mount
  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  return {
    properties,
    addProperty,
    updateProperty,
    deleteProperty,
    fetchProperties, // Expose fetch method
    loading,
    error,
  };
};
