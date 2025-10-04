import { Button } from "@/components/ui/button";
import { Calendar, ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section 
      className="py-32 md:py-48 lg:py-64 bg-black text-white relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8">Begin Your Journey</p>
        
        <h2 
          id="final-cta-heading"
          className="font-serif font-light text-5xl md:text-6xl lg:text-8xl leading-[0.95] mb-12 max-w-5xl mx-auto"
        >
          Ready to build with
          <span className="block text-[#D4AF37] italic mt-4">absolute clarity?</span>
        </h2>

        <p className="text-white/70 text-lg md:text-xl font-light max-w-2xl mx-auto mb-16">
          Schedule a private consultation to discuss your vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button 
            size="lg" 
            className="bg-[#D4AF37] text-black hover:bg-[#C19A2E] min-h-[64px] px-10 border-0 text-lg group" 
            aria-label="Book a private consultation"
          >
            <Calendar className="mr-3 w-6 h-6" aria-hidden="true" />
            <span className="font-light tracking-wide">Book Consultation</span>
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-white hover:bg-white/10 min-h-[64px] px-10 text-lg group"
            aria-label="Explore our portfolio"
          >
            <span className="font-light tracking-wide mr-3">Explore Portfolio</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
          <span>No Obligation</span>
          <span className="w-px h-4 bg-white/20" aria-hidden="true" />
          <span>Private Consultation</span>
          <span className="w-px h-4 bg-white/20" aria-hidden="true" />
          <span>Local Team</span>
        </div>
      </div>
    </section>
  );
}
