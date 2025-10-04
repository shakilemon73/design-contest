import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_home_hero_image_945187aa.png";
import logoImage from "@assets/Full_logo_gold_and_black_png_1759569939974.png";

export default function HeroSection() {
  return (
    <section 
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-foreground"
      aria-label="Hero section"
    >
      {/* Diagonal Split Background - Principle 5: Jonathan Ive - Purposeful design */}
      <div 
        className="absolute inset-0" 
        style={{ clipPath: 'polygon(0 0, 65% 0, 45% 100%, 0% 100%)' }}
        aria-hidden="true"
      >
        <div className="w-full h-full bg-background" />
      </div>
      
      {/* Floating Image - Principle 4: Aarron Walter - Delight through motion */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[55%] h-[50vh] md:h-[70vh] shadow-2xl -rotate-3 overflow-hidden rounded-lg border-4 border-primary/30"
        aria-hidden="true"
      >
        <img 
          src={heroImage} 
          alt="Luxury custom home in Macedon Ranges showcasing modern architecture"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          loading="eager"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content - Principle 2: Steve Krug - Scannable hierarchy */}
            <div className="lg:col-span-5">
              <img 
                src={logoImage} 
                alt="Jackson Dwellings logo" 
                className="h-16 mb-8 opacity-80"
                aria-hidden="true"
              />
              <h1 
                className="font-serif font-light text-5xl md:text-6xl lg:text-8xl leading-[0.95] tracking-tighter mb-8" 
                data-testid="text-hero-heading"
              >
                Build with
                <span className="block text-primary italic mt-2">Clarity</span>
              </h1>
              
              {/* Principle 2: Steve Krug - Clear, concise messaging (under 15 words) */}
              <p 
                className="text-lg md:text-xl leading-relaxed mb-10 max-w-md" 
                data-testid="text-hero-subhead"
              >
                Luxury custom homes in the Macedon Ranges. No surprises, no compromises.
              </p>

              {/* CTAs - Principle 3: Luke Wroblewski - 44px minimum touch targets */}
              <div className="flex flex-col sm:flex-row gap-4" role="group" aria-label="Primary actions">
                <Button 
                  size="lg" 
                  className="text-base px-8 group min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                  data-testid="button-book-consult-hero"
                  aria-label="Book a consultation with Jackson Dwellings"
                >
                  Book a Consult
                  <ArrowRight 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    aria-hidden="true"
                  />
                </Button>
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="text-base px-8 min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                  data-testid="button-download-guide"
                  aria-label="Download our comprehensive building guide"
                >
                  <Download className="mr-2 w-4 h-4" aria-hidden="true" />
                  Build Guide
                </Button>
              </div>
            </div>

            {/* Right Floating Stats - Principle 10: Susan Weinschenk - Social proof & recognition */}
            <div className="lg:col-span-7 lg:pl-24">
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-12 lg:mt-32">
                {/* Principle 6: Julie Zhuo - Consistent design system */}
                <div 
                  className="bg-primary/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-primary/20 transform rotate-2 hover:rotate-0 transition-all duration-300 hover:shadow-xl" 
                  data-testid="chip-custom-homes"
                  role="figure"
                  aria-label="100 plus custom homes completed"
                >
                  <div className="font-serif text-4xl md:text-5xl text-primary mb-2">100+</div>
                  <div className="text-xs md:text-sm font-accent uppercase tracking-wider">Custom Homes</div>
                </div>
                <div 
                  className="bg-primary/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-primary/20 transform -rotate-1 mt-8 hover:rotate-0 transition-all duration-300 hover:shadow-xl" 
                  data-testid="chip-on-time"
                  role="figure"
                  aria-label="100 percent projects completed on time"
                >
                  <div className="font-serif text-4xl md:text-5xl text-primary mb-2">100%</div>
                  <div className="text-xs md:text-sm font-accent uppercase tracking-wider">On Time</div>
                </div>
                <div 
                  className="bg-primary/10 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-primary/20 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:shadow-xl" 
                  data-testid="chip-specialist"
                  role="figure"
                  aria-label="15 plus years of experience"
                >
                  <div className="font-serif text-4xl md:text-5xl text-primary mb-2">15+</div>
                  <div className="text-xs md:text-sm font-accent uppercase tracking-wider">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
