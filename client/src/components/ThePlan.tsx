import { ArrowRight, Search, Palette, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThePlan() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description: "Align brief, site, style, budget.",
      output: "Output: costed concept + band."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Lock drawings, selections, pricing.",
      output: "Output: itemised inclusions, finishes, program."
    },
    {
      icon: Hammer,
      title: "Build",
      description: "Craftsmanship + weekly updates.",
      output: "Output: quality checks, on time finish."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-light text-4xl md:text-5xl mb-4" data-testid="text-plan-heading">
            The Plan: <span className="text-primary">3 Steps</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`card-step-${index + 1}`}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-2">{step.description}</p>
                  <p className="text-sm text-muted-foreground/80 italic">{step.output}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-6 w-6 h-6 text-primary/30" />
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" className="group" data-testid="button-see-process">
            See the Process
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
