import { CheckCircle, Sparkles } from "lucide-react";
import guideImage from "@assets/generated_images/Emma_and_Cameron_portrait_6d26d574.png";

export default function TheGuide() {
  const microProof = [
    "Licensed & certified",
    "Fully insured",
    "100+ residences delivered"
  ];

  return (
    <section 
      className="py-32 md:py-48 bg-white relative overflow-hidden"
      aria-labelledby="guide-heading"
    >
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5F0] via-white to-[#F5F5F0]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#D4AF37]/5 to-transparent skew-x-[-10deg] origin-top-right" aria-hidden="true" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Photo with artistic framing */}
          <div className="lg:col-span-5 relative">
            {/* Decorative frame elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-l-2 border-t-2 border-[#D4AF37]/30" aria-hidden="true" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 border-r-2 border-b-2 border-[#D4AF37]/30" aria-hidden="true" />
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={guideImage} 
                  alt="Emma and Cameron Jackson, founders of Jackson Dwellings"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -right-8 bottom-12 bg-black text-white px-8 py-6 shadow-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  <span className="text-xs tracking-[0.3em] uppercase text-white/60">Est.</span>
                </div>
                <p className="text-5xl font-serif font-light">2008</p>
              </div>
            </div>
          </div>

          {/* Content with freeform elements */}
          <div className="lg:col-span-7">
            {/* Artistic label */}
            <div className="inline-block mb-8 relative">
              <div className="absolute inset-0 bg-[#D4AF37]/10 -skew-x-12" aria-hidden="true" />
              <p className="relative px-6 py-2 text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-light">
                The Guide
              </p>
            </div>
            
            <h2 
              id="guide-heading"
              className="font-serif font-light text-5xl md:text-7xl mb-10 leading-[1.1]"
            >
              <span className="block">Emma</span>
              <span className="block text-[#D4AF37]">& Cameron</span>
            </h2>
            
            {/* 70-90 words with artistic treatment */}
            <div className="relative mb-12">
              {/* Quotation mark decoration */}
              <div className="absolute -left-4 -top-2 text-[#D4AF37]/10 text-9xl font-serif leading-none" aria-hidden="true">"</div>
              
              <p className="relative text-black/80 text-xl md:text-2xl font-light leading-relaxed">
                Building a custom home is one of the biggest decisions you'll make. We understand the weight of that. As a husband-and-wife team, we treat every project as if it's our own—bringing clarity, craftsmanship, and care to every conversation. You'll work directly with us, not hand-offs to junior staff. Macedon Ranges microclimates, bushfire regs, and council nuances? We know them inside out.
              </p>
            </div>

            {/* Three micro-proof chips with unique design */}
            <div className="grid sm:grid-cols-3 gap-4">
              {microProof.map((proof, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-[#F5F5F0] to-white p-6 border border-black/5 hover:border-[#D4AF37]/30 transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-[#D4AF37] mb-4 group-hover:scale-110 transition-transform" aria-hidden="true" />
                  <p className="text-sm font-light leading-relaxed">{proof}</p>
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/20" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
