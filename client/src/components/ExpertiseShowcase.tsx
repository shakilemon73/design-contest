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
    <section 
      className="py-32 bg-background"
      aria-label="Local expertise and video content"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Place Expertise - Principle 2: Steve Krug - Clear content organization */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-32">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-xs md:text-sm font-accent uppercase tracking-widest text-primary mb-4">
              Local Expertise
            </p>
            <h2 
              className="font-serif font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" 
              data-testid="text-expertise-heading"
            >
              Built for the
              <span className="block text-primary italic">Macedon Ranges</span>
            </h2>
            
            <p 
              className="text-base md:text-lg leading-relaxed mb-8 text-foreground/80" 
              data-testid="text-expertise-description"
            >
              Microclimates. Bushfire overlays. Siting for light and views. We understand what makes this region unique—designing for year-round comfort while respecting the land.
            </p>

            {/* Location badges - Principle 10: Susan Weinschenk - Recognition through location */}
            <div 
              className="flex flex-wrap gap-3 mb-8" 
              role="list" 
              aria-label="Service locations in Macedon Ranges"
            >
              {locations.map((location) => (
                <Badge
                  key={location}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-3 md:px-4 py-2 min-h-[44px] flex items-center gap-2 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  data-testid={`location-${location.toLowerCase().replace(/\s+/g, '-')}`}
                  role="listitem"
                  tabIndex={0}
                  aria-label={`We service ${location}`}
                >
                  <MapPin className="w-3 h-3" aria-hidden="true" />
                  <span>{location}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Images - Principle 4: Aarron Walter - Emotional connection through imagery */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <figure 
                className="col-span-2 aspect-[21/9] rounded-2xl overflow-hidden shadow-lg transform hover:-rotate-1 transition-all duration-300 focus-within:rotate-0" 
                data-testid="image-expertise-1"
                tabIndex={0}
              >
                <img 
                  src={landscape1} 
                  alt="Panoramic view of Macedon Ranges landscape showcasing local terrain"
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </figure>
              <figure 
                className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:rotate-2 transition-all duration-300 focus-within:rotate-0" 
                data-testid="image-expertise-2"
                tabIndex={0}
              >
                <img 
                  src={landscape2} 
                  alt="Bushfire compliance zone in Macedon Ranges"
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </figure>
              <figure 
                className="aspect-square rounded-2xl overflow-hidden shadow-lg transform hover:-rotate-2 transition-all duration-300 focus-within:rotate-0" 
                data-testid="image-expertise-3"
                tabIndex={0}
              >
                <img 
                  src={landscape1} 
                  alt="Site views and positioning for luxury homes"
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
              </figure>
            </div>
          </div>
        </div>

        {/* Videos - Principle 3: Luke Wroblewski - Touch-friendly video cards */}
        <div>
          <div className="mb-12">
            <h3 
              className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-4" 
              data-testid="text-videos-heading"
            >
              See How We <span className="text-primary italic">Build</span>
            </h3>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl">
              From concept to completion, watch our process unfold.
            </p>
          </div>

          <div 
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8" 
            role="list" 
            aria-label="Video content"
          >
            {videos.map((video, index) => (
              <article
                key={video.id}
                className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 focus-within:shadow-2xl focus-within:-translate-y-2 ${
                  index === 1 ? 'md:scale-105' : ''
                }`}
                data-testid={`video-card-${video.id}`}
                role="listitem"
              >
                {/* Video thumbnail - Principle 1: Don Norman - Clear play affordance */}
                <button
                  className="w-full aspect-video relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-label={`Play video: ${video.title}, duration ${video.duration}`}
                >
                  <img
                    src={videoThumb}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    role="presentation"
                  />
                  {/* Overlay - Principle 1: Don Norman - Signifiers for interaction */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div 
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg"
                      aria-hidden="true"
                    >
                      <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                  {/* Duration badge - Principle 10: Susan Weinschenk - Set expectations */}
                  <span 
                    className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs md:text-sm font-accent"
                    aria-label={`Video duration: ${video.duration}`}
                  >
                    {video.duration}
                  </span>
                </button>
                <div className="p-4 md:p-6 bg-card border border-border">
                  <h4 className="font-serif text-lg md:text-xl">{video.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
