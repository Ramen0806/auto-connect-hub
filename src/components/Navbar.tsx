import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            AutomatePro
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-foreground/80 hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/get-started">
              <Button>Get Started</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/features" className="text-foreground/80 hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">
                Pricing
              </Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/get-started">
                <Button className="w-full">Get Started</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};