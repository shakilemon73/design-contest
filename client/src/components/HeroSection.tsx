import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_home_hero_image_945187aa.png";
import logoImage from "@assets/Full_logo_gold_and_black_png_1759569939974.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-foreground">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0" style={{ clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0% 100%)' }}>
        <div className="w-full h-full bg-background" />
      </div>
      
      {/* Floating Image with Parallax */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 w-[55%] h-[70vh] shadow-2xl -rotate-3 overflow-hidden rounded-lg border-4 border-primary/30">
        <img 
          src={heroImage} 
          alt="Luxury custom home" 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5">
              <img src={logoImage} alt="JD" className="h-16 mb-8 opacity-80" />
              <h1 className="font-serif font-light text-6xl md:text-8xl leading-[0.95] tracking-tighter mb-8" data-testid="text-hero-heading">
                Build with
                <span className="block text-primary italic mt-2">Clarity</span>
              </h1>
              
              <p className="text-lg leading-relaxed mb-10 max-w-md" data-testid="text-hero-subhead">
                Luxury custom homes in the Macedon Ranges. No surprises, no compromises.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base px-8 group" data-testid="button-book-consult-hero">
                  Book a Consult
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-download-guide">
                  Build Guide
                </Button>
              </div>
            </div>

            {/* Right Floating Stats */}
            <div className="lg:col-span-7 lg:pl-24">
              <div className="grid grid-cols-3 gap-6 mt-12 lg:mt-32">
                <div className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 transform rotate-2" data-testid="chip-custom-homes">
                  <div className="font-serif text-5xl text-primary mb-2">100+</div>
                  <div className="text-sm font-accent uppercase tracking-wider">Custom Homes</div>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 transform -rotate-1 mt-8" data-testid="chip-on-time">
                  <div className="font-serif text-5xl text-primary mb-2">100%</div>
                  <div className="text-sm font-accent uppercase tracking-wider">On Time</div>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm p-6 rounded-2xl border border-primary/20 transform rotate-3" data-testid="chip-specialist">
                  <div className="font-serif text-5xl text-primary mb-2">15+</div>
                  <div className="text-sm font-accent uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
