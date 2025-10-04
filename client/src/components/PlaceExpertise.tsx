import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import landscape1 from "@assets/generated_images/Macedon_Ranges_landscape_1_cb01c550.png";
import landscape2 from "@assets/generated_images/Macedon_Ranges_expertise_2_ffbb8bea.png";
import landscape3 from "@assets/generated_images/Craftsmanship_detail_image_eb1b3805.png";

export default function PlaceExpertise() {
  const locations = [
    "Gisborne",
    "Macedon",
    "Mount Macedon",
    "Woodend",
    "Kyneton",
    "Riddells Creek",
    "Romsey",
    "Sunbury"
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif font-light text-4xl md:text-5xl mb-6" data-testid="text-expertise-heading">
              Built for the <span className="text-primary italic">Macedon Ranges</span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-8 text-foreground/80" data-testid="text-expertise-description">
              Microclimates, bushfire overlays, siting for light and views—we understand what makes this region unique. Every home is designed for year-round comfort, respecting the land while maximizing the natural beauty around you.
            </p>

            <div className="flex flex-wrap gap-3">
              {locations.map((location) => (
                <Badge
                  key={location}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-4 py-2"
                  data-testid={`location-${location.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <MapPin className="w-3 h-3 mr-1" />
                  {location}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-testid="image-expertise-1">
              <img src={landscape1} alt="Macedon Ranges landscape" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg" data-testid="image-expertise-2">
              <img src={landscape2} alt="Bushfire compliance" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-lg" data-testid="image-expertise-3">
              <img src={landscape3} alt="Craftsmanship detail" className="w-full h-full object-cover" />
            </div>
            <div className="col-span-2 aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" data-testid="image-expertise-4">
              <img src={landscape1} alt="Site views" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
