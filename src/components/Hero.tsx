import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-secondary to-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Automation Solutions for Modern Businesses
          </span>
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
            Transform Your Business with Powerful Automations
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Save time and grow your business with custom automation solutions. We help you automate repetitive tasks and streamline your workflows.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="px-8">Get Started</Button>
            <Button size="lg" variant="outline" className="px-8">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};