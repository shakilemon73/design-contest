import { X, Check } from "lucide-react";

export default function StakesComparison() {
  const withoutPlan = [
    "Budget uncertainty",
    "Timeline delays",
    "Decision overwhelm",
    "Quality compromises"
  ];

  const withJackson = [
    "Fixed investment",
    "Guaranteed timeline",
    "Guided selection",
    "Supervised quality"
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-white"
      aria-labelledby="stakes-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Stakes</p>
          <h2 
            id="stakes-heading"
            className="font-serif font-light text-4xl md:text-5xl lg:text-6xl"
          >
            Two Paths
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Without a plan */}
          <article className="bg-[#F5F5F0] p-10 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-serif font-light">Without a plan</h3>
            </div>
            <ul className="space-y-4" role="list">
              {withoutPlan.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-600/50 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-black/70 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </article>

          {/* With Jackson Dwellings */}
          <article className="bg-black text-white p-10 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-serif font-light">With Jackson Dwellings</h3>
            </div>
            <ul className="space-y-4" role="list">
              {withJackson.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-white/90 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
