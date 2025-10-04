import { Button } from "@/components/ui/button";
import { ArrowUpRight, Award, Shield, Users } from "lucide-react";
import guideImage from "@assets/generated_images/Emma_and_Cameron_portrait_6d26d574.png";

export default function TheGuide() {
  const credentials = [
    { icon: Award, label: "Licensed & Certified" },
    { icon: Shield, label: "Fully Insured" },
    { icon: Users, label: "100+ Residences" }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-white relative overflow-hidden"
      aria-labelledby="guide-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Grid Layout - Editorial Style */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image - Large editorial photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src={guideImage} 
                alt="Emma and Cameron Jackson, founders"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
              {/* Floating credential badge */}
              <div className="absolute bottom-8 -right-8 bg-[#D4AF37] text-black px-8 py-6">
                <p className="font-serif text-5xl font-light">15+</p>
                <p className="text-xs tracking-widest uppercase mt-2">Years Building</p>
              </div>
            </div>
          </div>

          {/* Content - Editorial */}
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">The Studio</p>
            
            <h2 
              id="guide-heading"
              className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8"
            >
              Emma &
              <span className="block text-[#D4AF37] italic mt-2">Cameron</span>
            </h2>
            
            <p className="text-black/70 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl">
              A husband-and-wife team building luxury homes with unprecedented attention to detail. Small, dedicated team. Direct supervision. Specialist craftspeople.
            </p>

            <p className="text-black/60 text-base font-light leading-relaxed mb-12 max-w-xl">
              Your Macedon Ranges residence deserves builders who understand microclimates, bushfire regulations, and the art of siting for light and views.
            </p>

            {/* Credentials - Minimal grid */}
            <div className="space-y-6 mb-12 pb-12 border-b border-black/10">
              {credentials.map((cred, index) => {
                const Icon = cred.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 flex items-center justify-center border border-black/10">
                      <Icon className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                    </div>
                    <span className="text-sm tracking-wide">{cred.label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Button 
              variant="ghost" 
              className="group px-0 h-auto hover:bg-transparent text-black"
              aria-label="Learn more about our studio"
            >
              <span className="font-light tracking-wide uppercase mr-2">About The Studio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
