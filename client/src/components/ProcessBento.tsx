import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessBento() {
  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "We listen deeply to your vision, site, and lifestyle needs.",
    },
    {
      id: 2,
      title: "Design",
      description: "Technical plans refined to perfection with your input throughout.",
    },
    {
      id: 3,
      title: "Build",
      description: "Meticulous execution with constant updates until handover.",
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-white"
      aria-labelledby="plan-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">The Plan</p>
          <h2 
            id="plan-heading"
            className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Three Simple Steps
          </h2>
        </div>

        {/* 3 steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <article
              key={step.id}
              className="text-center"
              data-testid={`step-${step.id}`}
            >
              <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-serif font-light text-[#D4AF37]">
                  {step.id}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-light mb-4">
                {step.title}
              </h3>
              <p className="text-black/70 font-light leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        {/* See the Process link */}
        <div className="text-center">
          <Button 
            variant="ghost" 
            className="group text-black hover:bg-transparent px-0"
            aria-label="See the full process"
          >
            <span className="font-light tracking-wide mr-2">See the Process</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
