import { X, Check, ArrowRight } from "lucide-react";

export default function StakesComparison() {
  const withoutPlan = [
    { text: "Budget uncertainty", detail: "Costs spiral without control" },
    { text: "Timeline delays", detail: "No clear completion date" },
    { text: "Decision overwhelm", detail: "Endless choices, no guidance" },
    { text: "Quality compromises", detail: "Shortcuts to save time" }
  ];

  const withJackson = [
    { text: "Fixed investment", detail: "Know your cost upfront" },
    { text: "Guaranteed timeline", detail: "Contract-locked completion" },
    { text: "Guided selection", detail: "Expert curation process" },
    { text: "Supervised quality", detail: "No compromise on finish" }
  ];

  return (
    <section 
      className="py-32 md:py-48 bg-gradient-to-b from-white via-[#F5F5F0] to-white relative overflow-hidden"
      aria-labelledby="stakes-heading"
    >
      {/* Decorative split line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Centered artistic header */}
        <div className="text-center mb-20 md:mb-32">
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 bg-[#D4AF37]/5 blur-xl" aria-hidden="true" />
            <p className="relative text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-light px-6 py-2">
              Stakes
            </p>
          </div>
          
          <h2 
            id="stakes-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl mb-6"
          >
            Two Paths
          </h2>
          
          <div className="flex items-center justify-center gap-8 mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-red-600/30" aria-hidden="true" />
            <span className="text-sm font-light tracking-widest">VS</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#D4AF37]/30" aria-hidden="true" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Without a plan - Danger zone */}
          <article className="group relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            
            <div className="relative bg-white p-10 md:p-12 lg:p-16 border border-red-600/10 hover:border-red-600/30 transition-colors">
              {/* Header */}
              <div className="flex items-start gap-4 mb-12 pb-8 border-b border-black/5">
                <div className="w-14 h-14 rounded-full bg-red-600/10 flex items-center justify-center flex-shrink-0">
                  <X className="w-7 h-7 text-red-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-light mb-2">Without a plan</h3>
                  <p className="text-sm text-black/40 font-light">The risky path</p>
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-6" role="list">
                {withoutPlan.map((item, index) => (
                  <li key={index} className="group/item flex gap-4">
                    <X className="w-5 h-5 text-red-600/50 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-lg font-light mb-1">{item.text}</p>
                      <p className="text-sm text-black/40 font-light">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* With Jackson Dwellings - Success zone */}
          <article className="group relative">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            
            <div className="relative bg-black text-white p-10 md:p-12 lg:p-16 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors">
              {/* Header */}
              <div className="flex items-start gap-4 mb-12 pb-8 border-b border-white/10">
                <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-7 h-7 text-[#D4AF37]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-3xl font-serif font-light mb-2">With Jackson Dwellings</h3>
                  <p className="text-sm text-white/40 font-light">The clear path</p>
                </div>
              </div>

              {/* Items */}
              <ul className="space-y-6" role="list">
                {withJackson.map((item, index) => (
                  <li key={index} className="group/item flex gap-4">
                    <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <p className="text-lg font-light mb-1">{item.text}</p>
                      <p className="text-sm text-white/40 font-light">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <button className="group/cta flex items-center gap-3 text-[#D4AF37] hover:gap-5 transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
                  <span className="font-light">Start with clarity</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
