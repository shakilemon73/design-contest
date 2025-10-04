import { MapPin } from "lucide-react";

export default function ExpertiseShowcase() {
  const locations = [
    "Gisborne", "Macedon", "Mount Macedon", "Woodend",
    "Kyneton", "Riddells Creek", "Romsey", "Lancefield"
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-[#F5F5F0]"
      aria-label="Place expertise"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Place Expertise</p>
          <h2 className="font-serif font-light text-4xl md:text-5xl mb-8">
            Built for the Macedon Ranges
          </h2>
          
          {/* Short copy */}
          <p className="text-black/80 text-lg font-light leading-relaxed mb-12">
            Microclimates shift within kilometers. Bushfire overlays demand precision. Siting for light, views, and privacy requires intimate local knowledge. We've built here for over 15 years—we understand what works.
          </p>

          {/* Location pill links */}
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((location) => (
              <a
                key={location}
                href={`/projects?location=${location.toLowerCase().replace(' ', '-')}`}
                className="group flex items-center gap-2 px-4 py-2 bg-white border border-black/10 hover:border-[#D4AF37] hover:bg-white transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
                aria-label={`View projects in ${location}`}
              >
                <MapPin className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span className="text-sm font-light">{location}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
