import { Navbar } from "@/components/Navbar";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

const GetStarted = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CalendlyEmbed />
      </main>
    </div>
  );
};

export default GetStarted;