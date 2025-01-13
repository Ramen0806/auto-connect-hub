import { Features as FeaturesSection } from "@/components/Features";
import { Navbar } from "@/components/Navbar";

const Features = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <FeaturesSection />
      </main>
    </div>
  );
};

export default Features;