import { Badge } from "@/components/ui/badge";
import { MapPin, Play } from "lucide-react";
import landscape1 from "@assets/generated_images/Macedon_Ranges_landscape_1_cb01c550.png";
import landscape2 from "@assets/generated_images/Macedon_Ranges_expertise_2_ffbb8bea.png";
import videoThumb from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";

export default function ExpertiseShowcase() {
  const locations = [
    "Gisborne", "Macedon", "Mount Macedon", "Woodend",
    "Kyneton", "Riddells Creek", "Romsey", "Sunbury"
  ];

  const videos = [
    { id: 1, title: "JD Process in 90s", duration: "1:30" },
    { id: 2, title: "Client Story", duration: "3:45" },
    { id: 3, title: "Site Walk-through", duration: "5:12" }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Place Expertise - Asymmetric split */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-sm font-accent uppercase tracking-widest text-primary mb-4">Local Expertise</p>
            <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight mb-6" data-testid="text-expertise-heading">
              Built for the
              <span className="block text-primary italic">Macedon Ranges</span>
            </h2>
            
            <p className="text-lg leading-relaxed mb-8 text-foreground/80" data-testid="text-expertise-description">
              Microclimates. Bushfire overlays. Siting for light and views. We understand what makes this region unique—designing for year-round comfort while respecting the land.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
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

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 aspect-[21/9] rounded-2xl overflow-hidden shadow-lg transform hover:-rotate-1 transition-all duration-300" data-testid="image-expertise-1">
                <img src={landscape1} alt="Macedon Ranges" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:rotate-2 transition-all duration-300" data-testid="image-expertise-2">
                <img src={landscape2} alt="Bushfire compliance" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:-rotate-2 transition-all duration-300" data-testid="image-expertise-3">
                <img src={landscape1} alt="Site views" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Videos - Horizontal scroll layout */}
        <div>
          <div className="mb-12">
            <h3 className="font-serif font-light text-5xl md:text-6xl mb-4" data-testid="text-videos-heading">
              See How We <span className="text-primary italic">Build</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl">
              From concept to completion, watch our process unfold.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  index === 1 ? 'md:scale-105' : ''
                }`}
                data-testid={`video-card-${video.id}`}
              >
                <div className="aspect-video relative">
                  <img
                    src={videoThumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-accent">
                    {video.duration}
                  </div>
                </div>
                <div className="p-6 bg-card border border-border">
                  <h4 className="font-serif text-xl">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
