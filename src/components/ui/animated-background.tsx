
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-tr from-neutral-900/20 via-neutral-900/0 to-neutral-900/20"
      />
    </div>
  );
};