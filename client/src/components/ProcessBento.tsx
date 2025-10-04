import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessBento() {
  const steps = [
    {
      id: 1,
      number: "01",
      title: "Discover",
      description: "Deep understanding of vision, site, and lifestyle. We explore every possibility.",
      deliverable: "Concept + Budget Framework",
      bgColor: "bg-[#F5F5F0]"
    },
    {
      id: 2,
      number: "02",
      title: "Design",
      description: "Technical precision meets aesthetic refinement. Every detail documented.",
      deliverable: "Complete Specifications",
      bgColor: "bg-white"
    },
    {
      id: 3,
      number: "03",
      title: "Deliver",
      description: "Meticulous execution with constant communication. Excellence guaranteed.",
      deliverable: "Your Residence, On Time",
      bgColor: "bg-[#F5F5F0]"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-black text-white relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Our Method</p>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <h2 
                id="process-heading"
                className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
              >
                The Journey
                <span className="block text-[#D4AF37] italic mt-4">To Excellence</span>
              </h2>
            </div>
            <div className="lg:col-span-6 flex items-end">
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Three deliberate phases. Absolute transparency. Your vision, expertly realized.
              </p>
            </div>
          </div>
        </div>

        {/* Process Cards - Asymmetric luxury layout */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <article
              key={step.id}
              className={`
                group relative overflow-hidden transition-all duration-500 hover:shadow-2xl
                ${index === 0 ? 'lg:ml-0' : index === 1 ? 'lg:ml-24' : 'lg:ml-48'}
              `}
              data-testid={`step-${step.id}`}
            >
              <div className={`${step.bgColor} text-black p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-start justify-between gap-8`}>
                {/* Left - Number and Title */}
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-black/20">
                      {step.number}
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Center - Description */}
                <div className="lg:w-1/3">
                  <p className="text-black/70 text-lg md:text-xl font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Right - Deliverable */}
                <div className="lg:w-1/3 flex flex-col items-start lg:items-end justify-between h-full">
                  <div className="inline-block px-4 py-2 border border-black/10">
                    <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-1">Deliverable</p>
                    <p className="text-sm font-light">{step.deliverable}</p>
                  </div>
                  
                  <ArrowUpRight 
                    className="w-8 h-8 mt-6 lg:mt-0 text-black/20 group-hover:text-[#D4AF37] transition-colors" 
                    aria-hidden="true"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-24 flex justify-center">
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black min-h-[56px] px-8 group"
            aria-label="Learn more about our process"
          >
            <span className="font-light tracking-wide uppercase mr-2">Explore Process</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
