import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for small businesses just getting started with automation",
    features: [
      "3 Simple Automations",
      "Email Support",
      "Basic Integration Setup",
      "Monthly Check-ins",
    ],
  },
  {
    name: "Pro",
    price: "$599",
    description: "Ideal for growing businesses needing more advanced automation",
    features: [
      "10 Advanced Automations",
      "Priority Support",
      "Advanced Integration Setup",
      "Weekly Check-ins",
      "Custom Workflow Design",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For businesses needing comprehensive automation solutions",
    features: [
      "Unlimited Automations",
      "24/7 Priority Support",
      "Full System Integration",
      "Daily Check-ins",
      "Custom Development",
      "Dedicated Account Manager",
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Choose the perfect plan for your automation needs
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" size="lg">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};