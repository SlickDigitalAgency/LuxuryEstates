
import { motion } from 'framer-motion';

interface Property {
  title: string;
  price: string;
  location: string;
  image: string;
}

const properties: Property[] = [
  {
    title: "Modern Beachfront Villa",
    price: "$5,900,000",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Luxury Penthouse",
    price: "$7,200,000",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
  },
  {
    title: "Contemporary Estate",
    price: "$4,500,000",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
  }
];

export const MovingCards = () => {
  return (
    <div className="flex flex-col gap-8">
      {properties.map((property, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="group relative overflow-hidden rounded-xl bg-neutral-900/50 p-8 hover:bg-neutral-900/75"
        >
          <div className="flex gap-4">
            <div className="w-32 h-32 overflow-hidden rounded-lg">
              <img
                src={property.image}
                alt={property.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-white">{property.title}</h3>
              <p className="text-2xl font-bold text-purple-400">{property.price}</p>
              <p className="text-neutral-300">{property.location}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};