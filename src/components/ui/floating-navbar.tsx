import { motion } from "framer-motion";
import { Building2, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const FloatingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Background for Small Devices */}
      <div className="fixed top-0 left-0 w-full h-16 border border-white/10 bg-neutral-950/70 px-4 backdrop-blur-md z-40 md:hidden"></div>

      {/* Logo (Always Visible on Small Devices) */}
      <div className="fixed top-4 left-4 z-50 flex items-center gap-2 md:hidden">
        <span className="h-auto w-6 text-purple-600">
          <Building2 />
        </span>
        <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          LuxuryEstates
        </span>
      </div>

      {/* Hamburger Menu Button (Always Visible on Small Devices) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-4 right-4 z-50 md:hidden text-white hover:text-purple-400 transition-colors"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full Navbar (Hidden on Small Devices) */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="hidden md:block fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[95%] md:w-auto rounded-full border border-white/10 bg-neutral-950/70 px-4 md:px-8 py-4 backdrop-blur-md"
      >
        <div className="flex items-center justify-between md:justify-start md:gap-8">
          {/* Brand Logo (Hidden on Small Devices) */}
          <div className="hidden md:flex items-center gap-2">
            <span className="h-auto w-6 text-purple-600">
              <Building2 />
            </span>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              LuxuryEstates
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <Link
              to="/properties"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/book-viewing"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-2 font-medium text-white hover:opacity-90 transition-opacity"
            >
              Book Viewing
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-40 mt-4 p-4 bg-neutral-950/90 backdrop-blur-lg rounded-2xl border border-white/10 md:hidden"
        >
          <div className="flex flex-col gap-4">
            <Link
              to="/properties"
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Properties
            </Link>
            <Link
              to="/about"
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-neutral-300 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/book-viewing"
              className="rounded-full bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-2 font-medium text-white hover:opacity-90 transition-opacity"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Viewing
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
};
