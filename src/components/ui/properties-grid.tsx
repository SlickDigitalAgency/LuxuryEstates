import { PropertyCard } from "./property-card";

const properties = [
  {
    title: "Oceanfront Villa",
    price: "$8,900,000",
    location: "Malibu, California",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop",
    beds: 6,
    baths: 7,
    sqft: "7,500 sq ft",
  },
  {
    title: "Penthouse Suite",
    price: "$12,500,000",
    location: "Manhattan, New York",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    beds: 4,
    baths: 4.5,
    sqft: "5,200 sq ft",
  },
  {
    title: "Modern Estate",
    price: "$15,750,000",
    location: "Beverly Hills, California",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    beds: 8,
    baths: 10,
    sqft: "12,000 sq ft",
  },
];

export const PropertiesGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {properties.map((property, index) => (
        <PropertyCard key={index} property={property} index={index} />
      ))}
    </div>
  );
};
