import { PropertiesGrid } from "./properties-grid";

export const FeaturedProperties = () => {
  return (
    <section id="properties" className="py-20">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4">
          Featured Properties
        </h2>

        {/* Description */}
        <p className="text-neutral-300 text-center mb-12 max-w-2xl mx-auto text-lg sm:text-xl lg:text-2xl">
          Discover our handpicked selection of the most exclusive properties in
          prime locations.
        </p>

        {/* Properties Grid */}
        <PropertiesGrid />
      </div>
    </section>
  );
};
