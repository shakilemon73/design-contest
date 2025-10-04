import { Search, Palette, Hammer, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessBento() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Floating background element */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Asymmetric Header */}
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-serif font-light text-6xl md:text-7xl leading-tight" data-testid="text-plan-heading">
              A Process
              <span className="block text-primary italic">Built for Trust</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p className="text-lg text-muted-foreground max-w-md">
              Three clear phases. Total transparency. Your vision, expertly executed.
            </p>
          </div>
        </div>

        {/* Broken Grid Layout */}
        <div className="grid grid-cols-12 gap-6 mb-12">
          {/* Discover - Large */}
          <div className="col-span-12 lg:col-span-7 row-span-2 bg-card border border-border rounded-3xl p-10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2" data-testid="card-step-1">
            <div className="h-full flex flex-col">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Search className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-serif text-4xl mb-4">Discover</h3>
              <p className="text-foreground/80 text-lg mb-4">
                Align brief, site, style, budget. We listen deeply, assess your land, and explore what's possible.
              </p>
              <p className="text-sm text-primary italic mt-auto">
                Output: Costed concept + budget band
              </p>
            </div>
          </div>

          {/* Design - Medium Top */}
          <div className="col-span-12 lg:col-span-5 bg-card border border-border rounded-3xl p-10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2" data-testid="card-step-2">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Palette className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-4xl mb-4">Design</h3>
            <p className="text-foreground/80 mb-4">
              Lock drawings, selections, pricing.
            </p>
            <p className="text-sm text-primary italic">
              Output: Itemised inclusions, finishes, program
            </p>
          </div>

          {/* Build - Medium Bottom */}
          <div className="col-span-12 lg:col-span-5 bg-card border border-border rounded-3xl p-10 hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2" data-testid="card-step-3">
            <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Hammer className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-4xl mb-4">Build</h3>
            <p className="text-foreground/80 mb-4">
              Craftsmanship + weekly updates.
            </p>
            <p className="text-sm text-primary italic">
              Output: Quality checks, on time finish
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="outline" size="lg" className="group" data-testid="button-see-process">
            Explore Our Process
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
