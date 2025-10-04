import { X, Check } from "lucide-react";

export default function StakesComparison() {
  return (
    <section className="py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Asymmetric header with oversized typography */}
        <div className="mb-20">
          <h2 className="font-serif font-light text-7xl md:text-9xl leading-[0.9] mb-6" data-testid="text-stakes-heading">
            The
            <span className="block text-primary italic">Stakes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl lg:ml-32">
            Building without a guide means risk. Building with Jackson Dwellings means clarity.
          </p>
        </div>

        {/* Overlapping scrapbook-style cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 relative">
          {/* Without Plan - Tilted left */}
          <div className="relative lg:pr-12" data-testid="section-without-plan">
            <div className="bg-card border-2 border-destructive/30 rounded-3xl p-12 shadow-xl transform lg:-rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="absolute -top-4 -right-4 bg-destructive text-destructive-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                ✕
              </div>
              <h3 className="font-serif text-4xl mb-8 text-destructive">Without a Clear Plan</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4" data-testid="item-without-0">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Budget Blowouts</div>
                    <div className="text-sm text-muted-foreground">Unexpected costs derail your dream</div>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="item-without-1">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Timeline Drift</div>
                    <div className="text-sm text-muted-foreground">Delays stack up with no end in sight</div>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="item-without-2">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Decision Fatigue</div>
                    <div className="text-sm text-muted-foreground">Overwhelmed by endless choices</div>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="item-without-3">
                  <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Compromises on Finish</div>
                    <div className="text-sm text-muted-foreground">Settling for less than you imagined</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* With JD - Tilted right, overlapping */}
          <div className="relative lg:pl-12 lg:-ml-8 lg:mt-16" data-testid="section-with-jd">
            <div className="bg-card border-2 border-primary/40 rounded-3xl p-12 shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h3 className="font-serif text-4xl mb-8 text-primary">With Jackson Dwellings</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4" data-testid="item-with-0">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Cost Clarity</div>
                    <div className="text-sm text-muted-foreground">Know your investment upfront</div>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="item-with-1">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Predictable Schedule</div>
                    <div className="text-sm text-muted-foreground">Weekly updates, on-time completion</div>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="item-with-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Confident Choices</div>
                    <div className="text-sm text-muted-foreground">Guided selections, documented process</div>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="item-with-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Craftsmanship You Can Feel</div>
                    <div className="text-sm text-muted-foreground">Every detail, every day, for a lifetime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
