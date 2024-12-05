import { motion } from 'framer-motion';
import { Home, Key, Building2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expert guidance in buying and selling luxury properties, ensuring maximum value and seamless transactions."
  },
  {
    icon: Key,
    title: "Property Rentals",
    description: "Premium rental services for high-end properties, catering to discerning tenants and property owners."
  },
  {
    icon: Building2,
    title: "Luxury Property Management",
    description: "Comprehensive management services ensuring your investment maintains its pristine condition and value."
  },
  {
    icon: TrendingUp,
    title: "Investment Consultation",
    description: "Strategic advice on real estate investments, market analysis, and portfolio optimization."
  }
];

export const ServicesSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/50 via-purple-900/20 to-neutral-950/50 pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Our Premium Services
          </h2>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Experience unparalleled service in luxury real estate with our comprehensive suite of offerings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              
              <div className="relative h-full p-8 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <service.icon className="h-10 w-10 text-purple-400 mb-6 transition-transform group-hover:scale-110 duration-300" />
                
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                
                <p className="text-neutral-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};