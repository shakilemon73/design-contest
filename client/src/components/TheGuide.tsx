import guideImage from "@assets/generated_images/Emma_and_Cameron_portrait_6d26d574.png";

export default function TheGuide() {
  return (
    <section className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Floating accent circles */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image - Overlapping asymmetric placement */}
          <div className="lg:col-span-5 relative" data-testid="image-guide-portrait">
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary/40 shadow-2xl transform lg:-rotate-6 hover:rotate-0 transition-transform duration-700">
              <img 
                src={guideImage} 
                alt="Emma & Cameron" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-2xl shadow-xl transform rotate-3">
              <div className="font-serif text-3xl">15+</div>
              <div className="text-xs font-accent uppercase tracking-wider">Years Building</div>
            </div>
          </div>

          {/* Content - Asymmetric spacing */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="mb-8">
              <p className="text-sm font-accent uppercase tracking-widest text-primary mb-4">Your Guides</p>
              <h2 className="font-serif font-light text-6xl md:text-7xl leading-tight mb-6 text-background" data-testid="text-guide-heading">
                Emma & Cameron
                <span className="block text-primary italic text-5xl mt-2">Building Trust, One Home at a Time</span>
              </h2>
            </div>
            
            <p className="text-xl leading-relaxed mb-12 text-background/80 max-w-2xl" data-testid="text-guide-description">
              A luxury build, guided by people who listen. Small team, documented selections, close supervision, specialist crews. Your Macedon Ranges home deserves craftspeople who understand microclimates, bushfire overlays, and siting for views.
            </p>

            {/* Micro proof - horizontal pills */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-background/10 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full" data-testid="chip-specialists">
                <span className="font-accent text-sm tracking-wide text-background">Local MR Specialists</span>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full" data-testid="chip-showroom">
                <span className="font-accent text-sm tracking-wide text-background">Showroom & Curated Inclusions</span>
              </div>
              <div className="bg-background/10 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full" data-testid="chip-experience">
                <span className="font-accent text-sm tracking-wide text-background">100+ Completed Homes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
