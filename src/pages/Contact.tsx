import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <ContactSection />
      </main>
    </div>
  );
};

export default Contact;