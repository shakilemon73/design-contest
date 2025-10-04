import { CheckCircle } from "lucide-react";
import guideImage from "@assets/generated_images/Emma_and_Cameron_portrait_6d26d574.png";

export default function TheGuide() {
  const microProof = [
    "Licensed & certified",
    "Fully insured",
    "100+ residences delivered"
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-[#F5F5F0]"
      aria-labelledby="guide-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img 
                src={guideImage} 
                alt="Emma and Cameron Jackson, founders of Jackson Dwellings"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">The Guide</p>
            
            <h2 
              id="guide-heading"
              className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-8"
            >
              Emma & Cameron
            </h2>
            
            {/* 70-90 words of empathetic copy */}
            <p className="text-black/80 text-lg font-light leading-relaxed mb-10">
              Building a custom home is one of the biggest decisions you'll make. We understand the weight of that. As a husband-and-wife team, we treat every project as if it's our own—bringing clarity, craftsmanship, and care to every conversation. You'll work directly with us, not hand-offs to junior staff. Macedon Ranges microclimates, bushfire regs, and council nuances? We know them inside out.
            </p>

            {/* Three micro-proof chips */}
            <div className="space-y-4">
              {microProof.map((proof, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#D4AF37] flex-shrink-0" aria-hidden="true" />
                  <span className="text-black/80 font-light">{proof}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
