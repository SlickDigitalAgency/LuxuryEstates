import { BackgroundGradient } from "./components/ui/background-gradient";
import { HeroSection } from "./components/ui/hero-section";
import { ServicesSection } from "./components/ui/services-section";
import { AboutSection } from "./components/ui/about-section";
import { FeaturedProperties } from "./components/ui/featured-properties";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 text-white overflow-hidden">
      <BackgroundGradient />
      <main>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FeaturedProperties /> {/* Updated component name */}
      </main>
    </div>
  );
}

export default App;
