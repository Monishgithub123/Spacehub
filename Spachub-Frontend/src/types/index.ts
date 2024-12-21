export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
  type: 'Apartment' | 'House' | 'Condo' | 'Commercial' | 'Land'; // Predefined property types
  amenities: string[]; // List of amenities
  openingHours: OpeningHours; // Start and end times for opening hours
  status: 'Open Now' | 'Coming Soon' | 'Closed' | 'Temporarily Unavailable'; // Extended status options
}

export interface FilterState {
  location: string;
  propertyType: 'Apartment' | 'House' | 'Condo' | 'Commercial' | 'Land'; // Fixed filtering options
  priceRange: [number, number]; // Tuple for price range
  searchQuery: string; // General search query
}

// Optional: Separate interface for opening hours
export interface OpeningHours {
  start: string; // e.g., '9:00 AM'
  end: string;   // e.g., '6:00 PM'
}
