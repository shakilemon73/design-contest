import { X, Check } from "lucide-react";

export default function StakesComparison() {
  const risksWithout = [
    {
      title: "Budget Blowouts",
      description: "Unexpected costs derail your dream",
      id: "budget"
    },
    {
      title: "Timeline Drift",
      description: "Delays stack up with no end in sight",
      id: "timeline"
    },
    {
      title: "Decision Fatigue",
      description: "Overwhelmed by endless choices",
      id: "decision"
    },
    {
      title: "Compromises on Finish",
      description: "Settling for less than you imagined",
      id: "finish"
    }
  ];

  const benefitsWith = [
    {
      title: "Cost Clarity",
      description: "Know your investment upfront",
      id: "cost"
    },
    {
      title: "Predictable Schedule",
      description: "Weekly updates, on-time completion",
      id: "schedule"
    },
    {
      title: "Confident Choices",
      description: "Guided selections, documented process",
      id: "choices"
    },
    {
      title: "Premium Execution",
      description: "No shortcuts, supervised quality",
      id: "quality"
    }
  ];

  return (
    <section 
      className="py-32 bg-background relative"
      aria-labelledby="stakes-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header - Principle 2: Steve Krug - Clear visual hierarchy */}
        <div className="mb-20">
          <h2 
            id="stakes-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-9xl leading-[0.9] mb-6" 
            data-testid="text-stakes-heading"
          >
            The
            <span className="block text-primary italic">Stakes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl lg:ml-32">
            Building without a guide means risk. Building with Jackson Dwellings means clarity.
          </p>
        </div>

        {/* Comparison cards - Principle 4: Aarron Walter - Emotional color psychology */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative">
          {/* Without Plan - Principle 8: Farai Madzima - High contrast for accessibility */}
          <article 
            className="relative lg:pr-12" 
            data-testid="section-without-plan"
            aria-labelledby="without-plan-heading"
          >
            <div className="bg-card border-2 border-destructive/30 rounded-3xl p-8 md:p-12 shadow-xl transform lg:-rotate-2 hover:rotate-0 transition-all duration-300 focus-within:rotate-0 focus-within:shadow-2xl">
              {/* Badge - Principle 1: Don Norman - Clear signifiers */}
              <div 
                className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                aria-label="Risks to avoid"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </div>
              
              <h3 
                id="without-plan-heading"
                className="font-serif text-3xl md:text-4xl mb-8 text-destructive"
              >
                Without a Clear Plan
              </h3>
              
              {/* List - Principle 10: Susan Weinschenk - Chunked information */}
              <ul className="space-y-5" role="list">
                {risksWithout.map((risk, index) => (
                  <li 
                    key={risk.id}
                    className="flex items-start gap-4" 
                    data-testid={`item-without-${index}`}
                  >
                    <div 
                      className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <X className="w-4 h-4 text-destructive" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{risk.title}</div>
                      <div className="text-sm text-muted-foreground">{risk.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* With JD - Principle 4: Aarron Walter - Positive emotional design */}
          <article 
            className="relative lg:pl-12 lg:-ml-8 lg:mt-16" 
            data-testid="section-with-jd"
            aria-labelledby="with-jd-heading"
          >
            <div className="bg-card border-2 border-primary/40 rounded-3xl p-8 md:p-12 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-300 focus-within:rotate-0 focus-within:shadow-2xl">
              {/* Badge - Principle 1: Don Norman - Positive signifiers */}
              <div 
                className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg"
                aria-label="Benefits you receive"
              >
                <Check className="w-6 h-6" aria-hidden="true" />
              </div>
              
              <h3 
                id="with-jd-heading"
                className="font-serif text-3xl md:text-4xl mb-8 text-primary"
              >
                With Jackson Dwellings
              </h3>
              
              {/* List - Principle 6: Julie Zhuo - Consistent system design */}
              <ul className="space-y-5" role="list">
                {benefitsWith.map((benefit, index) => (
                  <li 
                    key={benefit.id}
                    className="flex items-start gap-4" 
                    data-testid={`item-with-${index}`}
                  >
                    <div 
                      className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{benefit.title}</div>
                      <div className="text-sm text-muted-foreground">{benefit.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
