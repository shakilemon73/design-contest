import { Search, Palette, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessBento() {
  const steps = [
    {
      id: 1,
      icon: Search,
      title: "Discover",
      description: "Align brief, site, style, budget. We listen deeply, assess your land, and explore what's possible.",
      output: "Costed concept + budget band",
      colSpan: "col-span-12 lg:col-span-7 row-span-2"
    },
    {
      id: 2,
      icon: Palette,
      title: "Design",
      description: "Lock drawings, selections, pricing.",
      output: "Itemised inclusions, finishes, program",
      colSpan: "col-span-12 lg:col-span-5"
    },
    {
      id: 3,
      icon: Hammer,
      title: "Build",
      description: "Craftsmanship + weekly updates.",
      output: "Quality checks, on time finish",
      colSpan: "col-span-12 lg:col-span-5"
    }
  ];

  return (
    <section 
      className="py-32 bg-background relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Floating background element - Principle 5: Jonathan Ive - Purposeful aesthetics */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Asymmetric Header - Principle 2: Steve Krug - Scannable hierarchy */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <h2 
              id="process-heading"
              className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-tight" 
              data-testid="text-plan-heading"
            >
              A Process
              <span className="block text-primary italic">Built for Trust</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-lg text-muted-foreground max-w-md">
              Three clear phases. Total transparency. Your vision, expertly executed.
            </p>
          </div>
        </div>

        {/* Broken Grid Layout - Principle 10: Susan Weinschenk - Information chunking */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article 
                key={step.id}
                className={`${step.colSpan} bg-card border border-border rounded-3xl p-8 md:p-10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl focus-within:border-primary/50 focus-within:shadow-xl`}
                data-testid={`card-step-${step.id}`}
                aria-labelledby={`step-${step.id}-title`}
              >
                <div className="h-full flex flex-col">
                  {/* Icon - Principle 10: Susan Weinschenk - Recognition over recall */}
                  <div 
                    className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
                    aria-hidden="true"
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  
                  {/* Step number badge - Principle 1: Don Norman - Signifiers */}
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4">
                    {index + 1}
                  </div>
                  
                  <h3 
                    id={`step-${step.id}-title`}
                    className="font-serif text-3xl md:text-4xl mb-4"
                  >
                    {step.title}
                  </h3>
                  <p className="text-foreground/80 text-base md:text-lg mb-4">
                    {step.description}
                  </p>
                  {/* Output - Principle 4: Aarron Walter - Setting expectations */}
                  <p className="text-sm text-primary italic mt-auto">
                    <span className="font-semibold">Output:</span> {step.output}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA - Principle 3: Luke Wroblewski - 44px minimum touch target */}
        <div className="flex justify-end">
          <Button 
            variant="outline" 
            size="lg" 
            className="group min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
            data-testid="button-see-process"
            aria-label="Explore our detailed building process"
          >
            Explore Our Process
            <ArrowRight 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              aria-hidden="true"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
