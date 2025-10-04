import { MapPin } from "lucide-react";
import landscape1 from "@assets/generated_images/Macedon_Ranges_landscape_1_cb01c550.png";
import landscape2 from "@assets/generated_images/Macedon_Ranges_expertise_2_ffbb8bea.png";

export default function ExpertiseShowcase() {
  const locations = [
    "Gisborne", "Macedon", "Mount Macedon", "Woodend",
    "Kyneton", "Riddells Creek", "Romsey", "Sunbury"
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-black text-white"
      aria-label="Local expertise"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Regional Mastery</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
              Built for the
              <span className="block text-[#D4AF37] italic mt-2">Macedon Ranges</span>
            </h2>
            
            <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-xl">
              Microclimates. Bushfire overlays. Siting for light and views. We understand what makes this region unique.
            </p>

            {/* Location grid - Minimal badges */}
            <div className="grid grid-cols-2 gap-3">
              {locations.map((location) => (
                <div
                  key={location}
                  className="group flex items-center gap-3 px-4 py-3 border border-white/10 hover:border-[#D4AF37] transition-colors"
                  role="listitem"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                  <span className="text-sm font-light tracking-wide">{location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Images - Asymmetric editorial layout */}
          <div className="grid grid-cols-2 gap-6">
            <figure className="col-span-2 aspect-[21/9] overflow-hidden">
              <img 
                src={landscape1} 
                alt="Macedon Ranges panoramic landscape"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </figure>
            <figure className="aspect-square overflow-hidden">
              <img 
                src={landscape2} 
                alt="Bushfire compliance zone"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </figure>
            <figure className="aspect-square overflow-hidden">
              <img 
                src={landscape1} 
                alt="Site positioning for views"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
