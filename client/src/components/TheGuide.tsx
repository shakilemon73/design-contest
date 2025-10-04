import { Award, Home, Users } from "lucide-react";
import guideImage from "@assets/generated_images/Emma_and_Cameron_portrait_6d26d574.png";

export default function TheGuide() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr,3fr] gap-12 items-center">
          <div className="relative" data-testid="image-guide-portrait">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-primary/20">
              <img 
                src={guideImage} 
                alt="Emma & Cameron" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif font-light text-4xl md:text-5xl mb-6" data-testid="text-guide-heading">
              The Guide: <span className="text-primary">Empathy + Authority</span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-8 text-foreground/90" data-testid="text-guide-description">
              A luxury build, guided by people who listen. Our small, hands-on team provides documented selections, close supervision, and specialist crews who understand the unique demands of the Macedon Ranges. Every decision is yours, supported by our 15+ years of experience turning visions into homes you'll love for a lifetime.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50" data-testid="chip-specialists">
                <Home className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-accent">Local MR specialists</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50" data-testid="chip-showroom">
                <Users className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-accent">Showroom & curated inclusions</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50" data-testid="chip-experience">
                <Award className="w-8 h-8 text-primary mb-2" />
                <span className="text-sm font-accent">15+ yrs experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
