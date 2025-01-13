import { useEffect } from "react";

export const CalendlyEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Schedule a Free Consultation</h2>
          <p className="text-muted-foreground">
            Book a time to discuss how we can help automate your business processes
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/your-calendly-link"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>
      </div>
    </section>
  );
};