import { Navbar } from "@/components/Navbar";
import { PricingSection } from "@/components/PricingSection";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <PricingSection />
      </main>
    </div>
  );
};

export default Pricing;