import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import featuredImage from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";

export default function FeaturedProject() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-center mb-16" data-testid="text-featured-heading">
          Featured Project: <span className="text-primary italic">What luxury looks like</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1" data-testid="image-featured-project">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform lg:rotate-2">
              <img 
                src={featuredImage} 
                alt="Casa Lauren, Trentham" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
              <span className="font-accent text-sm tracking-wide">Casa Lauren</span>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-3xl mb-4">Casa Lauren, Trentham</h3>
            <p className="text-lg leading-relaxed mb-8 text-foreground/80" data-testid="text-project-description">
              A contemporary family home designed for Macedon Ranges living. Natural materials, expansive glazing for bushland views, and meticulous attention to bushfire compliance. The clients wanted a sanctuary that felt both modern and timeless—crafted without compromise.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-background rounded-lg" data-testid="stat-bedrooms">
                <div className="font-serif text-3xl text-primary mb-1">4</div>
                <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Bedrooms</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg" data-testid="stat-living">
                <div className="font-serif text-3xl text-primary mb-1">2</div>
                <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Living Areas</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg" data-testid="stat-timeline">
                <div className="font-serif text-3xl text-primary mb-1">10</div>
                <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Month Build</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg" data-testid="stat-budget">
                <div className="font-serif text-3xl text-primary mb-1">$1.8-2.4M</div>
                <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Budget Range</div>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 mb-8 italic text-foreground/70" data-testid="text-client-quote">
              "Clear decisions, no surprises. The finish is superb."
            </blockquote>

            <Button variant="outline" className="group" data-testid="button-view-case-study">
              View case study
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
