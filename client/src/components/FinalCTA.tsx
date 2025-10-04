import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section 
      className="py-32 md:py-48 bg-black text-white"
      aria-labelledby="final-cta-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2 
          id="final-cta-heading"
          className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-8"
        >
          Ready to start your
          <span className="block text-[#D4AF37] italic mt-3">custom home journey?</span>
        </h2>

        {/* Book a Consult button + Connect link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <Button 
            size="lg" 
            className="bg-[#D4AF37] text-black hover:bg-[#C19A2E] min-h-[56px] px-10 border-0 text-lg"
            aria-label="Book a consultation"
          >
            <Calendar className="mr-2 w-5 h-5" aria-hidden="true" />
            <span className="font-light tracking-wide">Book a Consult</span>
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-white hover:bg-white/10 min-h-[56px] px-10 text-lg group"
            aria-label="Connect with us"
          >
            <span className="font-light tracking-wide mr-2">Connect</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
