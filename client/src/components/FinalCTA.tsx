import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section 
      className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background decoration - Principle 5: Jonathan Ive - Purposeful aesthetics */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        {/* Heading - Principle 2: Steve Krug - Clear, scannable message */}
        <h2 
          id="final-cta-heading"
          className="font-serif font-light text-3xl md:text-5xl lg:text-6xl mb-8 text-background leading-tight" 
          data-testid="text-final-cta-heading"
        >
          Ready to stop guessing and start building{" "}
          <span className="text-primary italic">with clarity</span>?
        </h2>

        {/* CTAs - Principle 3: Luke Wroblewski - 44px minimum touch targets */}
        <div 
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-4" 
          role="group" 
          aria-label="Final call to action buttons"
        >
          <Button 
            size="lg" 
            className="text-base px-8 group min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
            data-testid="button-book-consult-final"
            aria-label="Book a consultation to discuss your custom home"
          >
            <Calendar className="mr-2 w-4 h-4" aria-hidden="true" />
            Book a Consult
          </Button>
          <Button 
            size="lg" 
            variant="secondary" 
            className="text-base px-8 group min-h-[44px] min-w-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
            data-testid="button-connect-final"
            aria-label="Connect with us to learn more"
          >
            Connect
            <ArrowRight 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
              aria-hidden="true"
            />
          </Button>
        </div>

        {/* Trust indicator - Principle 10: Susan Weinschenk - Reducing anxiety */}
        <p className="text-sm text-background/70 mt-8">
          No obligation · Free consultation · Local team
        </p>
      </div>
    </section>
  );
}
