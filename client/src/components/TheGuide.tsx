import guideImage from "@assets/generated_images/Emma_and_Cameron_portrait_6d26d574.png";

export default function TheGuide() {
  const trustIndicators = [
    { label: "Local MR Specialists", id: "specialists" },
    { label: "Showroom & Curated Inclusions", id: "showroom" },
    { label: "100+ Completed Homes", id: "experience" }
  ];

  return (
    <section 
      className="py-32 bg-foreground text-background relative overflow-hidden"
      aria-labelledby="guide-heading"
    >
      {/* Floating accent circles - Principle 5: Jonathan Ive - Subtle aesthetics */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image - Principle 4: Aarron Walter - Emotional design through imagery */}
          <div className="lg:col-span-5 relative" data-testid="image-guide-portrait">
            <figure className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-4 border-primary/40 shadow-2xl transform lg:-rotate-6 hover:rotate-0 transition-transform duration-700 focus-within:rotate-0">
                <img 
                  src={guideImage} 
                  alt="Emma and Cameron Jackson, founders of Jackson Dwellings, standing together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating badge - Principle 10: Susan Weinschenk - Social proof */}
              <figcaption 
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-xl transform rotate-3"
                role="note"
                aria-label="15 plus years of building experience"
              >
                <div className="font-serif text-2xl md:text-3xl">15+</div>
                <div className="text-xs font-accent uppercase tracking-wider">Years Building</div>
              </figcaption>
            </figure>
          </div>

          {/* Content - Principle 2: Steve Krug - Clear scannable content */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="mb-8">
              {/* Eyebrow - Principle 1: Don Norman - Clear signifiers */}
              <p className="text-xs md:text-sm font-accent uppercase tracking-widest text-primary mb-4">
                Your Guides
              </p>
              <h2 
                id="guide-heading"
                className="font-serif font-light text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 text-background" 
                data-testid="text-guide-heading"
              >
                Emma & Cameron
                <span className="block text-primary italic text-3xl md:text-5xl mt-2">
                  Building Trust, One Home at a Time
                </span>
              </h2>
            </div>
            
            {/* Principle 2: Steve Krug - Keep descriptions scannable */}
            <p 
              className="text-lg md:text-xl leading-relaxed mb-12 text-background/90 max-w-2xl" 
              data-testid="text-guide-description"
            >
              A luxury build, guided by people who listen. Small team, documented selections, close supervision, specialist crews. Your Macedon Ranges home deserves craftspeople who understand microclimates, bushfire overlays, and siting for views.
            </p>

            {/* Trust badges - Principle 10: Susan Weinschenk - Social validation */}
            <div 
              className="flex flex-wrap gap-3 md:gap-4" 
              role="list" 
              aria-label="Trust indicators"
            >
              {trustIndicators.map((indicator) => (
                <div 
                  key={indicator.id}
                  className="bg-background/10 backdrop-blur-sm border border-primary/30 px-4 md:px-6 py-2 md:py-3 rounded-full hover:bg-background/20 transition-colors min-h-[44px] flex items-center focus-within:ring-2 focus-within:ring-primary"
                  data-testid={`chip-${indicator.id}`}
                  role="listitem"
                  tabIndex={0}
                >
                  <span className="font-accent text-xs md:text-sm tracking-wide text-background">
                    {indicator.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
