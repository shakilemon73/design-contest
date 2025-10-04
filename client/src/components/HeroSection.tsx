import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_home_hero_image_945187aa.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img 
          src={heroImage} 
          alt="Luxury custom home" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-tight tracking-tight mb-6" data-testid="text-hero-heading">
            Building a luxury custom home{" "}
            <span className="text-primary italic">shouldn't feel risky</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl" data-testid="text-hero-subhead">
            Clarity on cost, timeline, craftsmanship for your Macedon Ranges home
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="text-base px-8" data-testid="button-book-consult-hero">
              Book a Consult
            </Button>
            <Button size="lg" variant="secondary" className="text-base px-8" data-testid="button-download-guide">
              Download the Build Guide
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-12">
            <div className="flex items-center gap-2" data-testid="chip-custom-homes">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-accent tracking-wide">100+ custom homes</span>
            </div>
            <div className="flex items-center gap-2" data-testid="chip-on-time">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-accent tracking-wide">On time and on budget</span>
            </div>
            <div className="flex items-center gap-2" data-testid="chip-specialist">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-accent tracking-wide">Specialist trades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
