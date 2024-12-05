import { motion } from "framer-motion";
import { Building2, Users2, Trophy, Home } from "lucide-react";

const stats = [
  { icon: Building2, value: "500+", label: "Properties Sold" },
  { icon: Users2, value: "1000+", label: "Happy Clients" },
  { icon: Trophy, value: "15+", label: "Years Experience" },
  { icon: Home, value: "50+", label: "Luxury Properties" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-neutral-950/50 to-neutral-950/20 pointer-events-none" />
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-500/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-500/30 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent py-4">
            Redefining Luxury Real Estate
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300">
            With over 15 years of experience in luxury real estate, we've
            mastered the art of matching exceptional properties with discerning
            clients. Our portfolio includes some of the most prestigious
            addresses worldwide, and our commitment to excellence has made us
            the trusted choice for luxury property transactions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
              <div className="relative p-6 rounded-xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
                <stat.icon className="h-8 w-8 text-purple-400 mb-4" />
                <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-neutral-400">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-8 py-3 font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
            Learn More About Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};
