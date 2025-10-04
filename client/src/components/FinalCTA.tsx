import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-serif font-light text-4xl md:text-6xl mb-8" data-testid="text-final-cta-heading">
          Ready to stop guessing and start building{" "}
          <span className="text-primary italic">with clarity</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            className="text-base px-8 bg-primary hover:bg-primary/90 text-primary-foreground" 
            data-testid="button-book-consult-final"
          >
            Book a Consult
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-8 border-background text-background hover:bg-background/10" 
            data-testid="button-connect-final"
          >
            Connect
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
