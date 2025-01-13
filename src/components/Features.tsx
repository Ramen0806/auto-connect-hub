import { Workflow, Clock, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Custom Workflows",
    description: "Build powerful automations tailored to your business needs",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Automate repetitive tasks and focus on growing your business",
  },
  {
    icon: TrendingUp,
    title: "Scale Faster",
    description: "Streamline operations and handle growth with ease",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Solutions</h2>
          <p className="text-muted-foreground">
            We help businesses automate their workflows and grow faster
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/50 backdrop-blur-sm border border-border/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};