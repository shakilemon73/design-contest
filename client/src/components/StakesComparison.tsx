import { X, Check } from "lucide-react";

export default function StakesComparison() {
  const risks = [
    { title: "Budget Uncertainty", description: "Unexpected costs disrupt planning" },
    { title: "Timeline Delays", description: "No clear completion date" },
    { title: "Decision Fatigue", description: "Overwhelmed by endless choices" },
    { title: "Quality Compromises", description: "Shortcuts to save time" }
  ];

  const benefits = [
    { title: "Fixed Investment", description: "Know your cost upfront" },
    { title: "Guaranteed Timeline", description: "Contract-locked completion" },
    { title: "Guided Selection", description: "Expert curation process" },
    { title: "Supervised Quality", description: "No compromise on finish" }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-white relative"
      aria-labelledby="stakes-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 md:mb-32">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">The Difference</p>
          <h2 
            id="stakes-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
          >
            Why
            <span className="block text-[#D4AF37] italic mt-4">Choose Us</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Without - Risks */}
          <article 
            className="bg-[#F5F5F0] p-10 md:p-12 lg:p-16"
            aria-labelledby="without-heading"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 flex items-center justify-center border border-red-600/20">
                <X className="w-6 h-6 text-red-600" aria-hidden="true" />
              </div>
              <h3 
                id="without-heading"
                className="font-serif font-light text-3xl md:text-4xl"
              >
                Without Clarity
              </h3>
            </div>
            
            <ul className="space-y-6" role="list">
              {risks.map((risk, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-black/5 last:border-0"
                >
                  <X className="w-5 h-5 text-red-600/50 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-light text-lg mb-1">{risk.title}</p>
                    <p className="text-sm text-black/50 font-light">{risk.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          {/* With Jackson Dwellings - Benefits */}
          <article 
            className="bg-black text-white p-10 md:p-12 lg:p-16"
            aria-labelledby="with-heading"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37]/30">
                <Check className="w-6 h-6 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 
                id="with-heading"
                className="font-serif font-light text-3xl md:text-4xl"
              >
                With Jackson
              </h3>
            </div>
            
            <ul className="space-y-6" role="list">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-4 pb-6 border-b border-white/10 last:border-0"
                >
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-light text-lg mb-1">{benefit.title}</p>
                    <p className="text-sm text-white/50 font-light">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
