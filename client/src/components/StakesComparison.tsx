import { X, Check } from "lucide-react";

export default function StakesComparison() {
  const withoutPlan = [
    "Budget blowouts",
    "Timeline drift",
    "Decision fatigue",
    "Compromises on finish"
  ];

  const withJD = [
    "Cost clarity",
    "Predictable schedule",
    "Confident choices",
    "Craftsmanship you can feel every day"
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-center mb-16" data-testid="text-stakes-heading">
          The Stakes
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-primary/20" />
          
          <div className="relative" data-testid="section-without-plan">
            <div className="bg-destructive/5 rounded-2xl p-8 md:p-10 border border-destructive/20 transform md:-rotate-1">
              <h3 className="font-serif text-2xl mb-6 text-destructive">Without a clear plan</h3>
              <ul className="space-y-4">
                {withoutPlan.map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`item-without-${index}`}>
                    <X className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative" data-testid="section-with-jd">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-10 border border-primary/20 transform md:rotate-1">
              <h3 className="font-serif text-2xl mb-6 text-primary">With Jackson Dwellings</h3>
              <ul className="space-y-4">
                {withJD.map((item, index) => (
                  <li key={index} className="flex items-start gap-3" data-testid={`item-with-${index}`}>
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
