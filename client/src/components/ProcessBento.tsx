import { ArrowRight, Circle } from "lucide-react";

export default function ProcessBento() {
  const steps = [
    { id: 1, title: "Discover", description: "We listen deeply to your vision, site, and lifestyle needs.", offset: "0" },
    { id: 2, title: "Design", description: "Technical plans refined to perfection with your input throughout.", offset: "100" },
    { id: 3, title: "Build", description: "Meticulous execution with constant updates until handover.", offset: "200" }
  ];

  return (
    <section 
      className="py-32 md:py-48 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white relative overflow-hidden"
      aria-labelledby="plan-heading"
    >
      {/* Floating geometric background elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Artistic header */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6 font-light">The Plan</p>
          <h2 
            id="plan-heading"
            className="font-serif font-light text-6xl md:text-8xl lg:text-9xl leading-[0.9]"
          >
            <span className="block">Three</span>
            <span className="block italic text-[#D4AF37] ml-8 md:ml-16">Phases</span>
          </h2>
        </div>

        {/* Floating progress cards - Unique staggered layout */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent" aria-hidden="true" />

          <div className="space-y-32">
            {steps.map((step, index) => (
              <article
                key={step.id}
                className={`relative ${index % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}
                data-testid={`step-${step.id}`}
                style={{
                  transform: `translateX(${index % 2 === 0 ? '0' : '0'})`,
                }}
              >
                {/* Floating card */}
                <div className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 p-10 md:p-12 hover:border-[#D4AF37]/50 transition-all duration-500 relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  
                  {/* Number badge */}
                  <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#D4AF37] flex items-center justify-center">
                    <span className="text-5xl font-serif font-light text-black">{step.id}</span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 ml-16">
                    <h3 className="text-4xl md:text-5xl font-serif font-light mb-6 group-hover:text-[#D4AF37] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-lg font-light leading-relaxed mb-8">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-transparent"
                          style={{ width: `${(step.id / 3) * 100}%` }}
                          aria-hidden="true"
                        />
                      </div>
                      <Circle className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 border-r border-b border-[#D4AF37]/20" aria-hidden="true" />
                </div>

                {/* Connection dot */}
                <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-0 md:right-[50%]' : 'left-8 md:left-[50%]'} -translate-y-1/2 w-4 h-4 rounded-full bg-[#D4AF37] border-4 border-black z-20`} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>

        {/* See the Process CTA */}
        <div className="mt-24 flex justify-center">
          <button className="group flex items-center gap-4 px-8 py-4 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
            <span className="text-lg font-light tracking-wider">See the Complete Process</span>
            <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-2 transition-transform" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
