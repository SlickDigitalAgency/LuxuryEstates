import { motion } from 'framer-motion';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  property: {
    title: string;
    price: string;
    location: string;
    image: string;
    beds: number;
    baths: number;
    sqft: string;
  };
  index: number;
}

export const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm border border-white/10"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
        <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
          {property.price}
        </p>
        <div className="flex items-center gap-2 text-neutral-300 mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex items-center gap-6 text-neutral-300">
          <div className="flex items-center gap-2">
            <BedDouble className="h-4 w-4" />
            <span className="text-sm">{property.beds} beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.baths} baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Square className="h-4 w-4" />
            <span className="text-sm">{property.sqft}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};