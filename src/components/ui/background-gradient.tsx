import { motion } from 'framer-motion';

export const BackgroundGradient = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-900 via-neutral-950 to-neutral-950"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(165,119,255,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_600px_at_0%_400px,rgba(255,119,225,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(45%_45%_at_50%_50%,transparent_50%,rgba(0,0,0,0.8)_100%)]" />
    </div>
  );
};