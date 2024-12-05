import { motion } from "framer-motion";
import { Spotlight } from "./spotlight";
import { useEffect, useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        containerRef.current.style.setProperty("--x", `${x}px`);
        containerRef.current.style.setProperty("--y", `${y}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-r from-purple-600/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-1/4 w-1/2 h-1/2 bg-gradient-to-l from-pink-600/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-1/4 left-1/3 w-1/2 h-1/2 bg-gradient-to-t from-indigo-600/30 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      {/* Spotlight Effect */}
      <Spotlight className="opacity-0 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative text-4xl sm:text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-300"
          >
            Luxury Living Redefined
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-neutral-300 mb-8"
        >
          Experience unparalleled luxury in the world's most prestigious
          locations
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="rounded-full bg-gradient-to-r from-purple-500 via-purple-600 to-pink-600 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/25">
            Explore Properties
          </button>
          <button className="rounded-full border border-white/20 px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
    </motion.div>
  );
};
