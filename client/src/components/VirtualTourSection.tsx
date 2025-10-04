import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, X, Volume2, VolumeX, Maximize, Clock } from "lucide-react";
import project1 from "@assets/generated_images/Project_gallery_image_1_6ad66448.png";
import project2 from "@assets/generated_images/Project_gallery_image_2_79b8fb06.png";
import project3 from "@assets/generated_images/Project_gallery_image_3_236c9d46.png";

export default function VirtualTourSection() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const tours = [
    {
      id: 1,
      title: "Mount Macedon Retreat",
      thumbnail: project1,
      duration: "3:24",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      description: "Contemporary luxury nestled in nature"
    },
    {
      id: 2,
      title: "Gisborne Estate",
      thumbnail: project2,
      duration: "4:15",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      description: "Expansive modern family residence"
    },
    {
      id: 3,
      title: "Woodend Residence",
      thumbnail: project3,
      duration: "2:48",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      description: "Elegant architectural statement"
    }
  ];

  const currentTour = tours.find(t => t.id === selectedVideo);

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-black text-white"
      aria-labelledby="virtual-tours-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Experience</p>
          <h2 
            id="virtual-tours-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.9]"
          >
            Virtual
            <span className="block text-[#D4AF37] italic mt-4">Tours</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mt-8 max-w-2xl">
            Explore completed residences from anywhere. See craftsmanship, flow, and attention to detail.
          </p>
        </div>

        {/* Video Gallery Grid - UX Best Practice: Top placement for discoverability */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tours.map((tour) => (
            <article
              key={tour.id}
              className="group relative overflow-hidden bg-[#1a1a1a] cursor-pointer"
              onClick={() => setSelectedVideo(tour.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedVideo(tour.id);
                }
              }}
              aria-label={`Watch virtual tour of ${tour.title}`}
            >
              {/* Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={tour.thumbnail} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Play overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-black ml-1" aria-hidden="true" />
                  </div>
                </div>
                {/* Duration badge - Don Norman: Visibility */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm flex items-center gap-2">
                  <Clock className="w-3 h-3" aria-hidden="true" />
                  <span className="text-xs font-light">{tour.duration}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-light mb-2">{tour.title}</h3>
                <p className="text-white/60 text-sm font-light">{tour.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Video Player Modal - Accessible & Mobile-Optimized */}
        {selectedVideo && currentTour && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="video-modal-title"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 
                    id="video-modal-title"
                    className="font-serif text-2xl md:text-3xl font-light"
                  >
                    {currentTour.title}
                  </h3>
                  <p className="text-white/60 text-sm font-light mt-1">
                    {currentTour.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 min-h-[44px] min-w-[44px] hover:bg-white/10 transition-colors rounded-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                  aria-label="Close video"
                >
                  <X className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Video Player with Controls */}
              <div className="relative aspect-video bg-black rounded-sm overflow-hidden">
                <video
                  autoPlay
                  controls
                  muted={isMuted}
                  className="w-full h-full"
                  aria-label={`Virtual tour of ${currentTour.title}`}
                >
                  <source src={currentTour.videoUrl} type="video/mp4" />
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English"
                    default
                  />
                  Your browser does not support the video tag.
                </video>

                {/* Custom controls overlay */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 min-h-[44px] min-w-[44px] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors rounded-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <Volume2 className="w-5 h-5" aria-hidden="true" />
                    )}
                  </button>
                  <button
                    onClick={() => {
                      const video = document.querySelector('video');
                      if (video) {
                        if (document.fullscreenElement) {
                          document.exitFullscreen();
                        } else {
                          video.requestFullscreen();
                        }
                      }
                    }}
                    className="p-2 min-h-[44px] min-w-[44px] bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors rounded-sm flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
                    aria-label="Fullscreen"
                  >
                    <Maximize className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* CTA below video */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-white/60 text-sm font-light">
                  Want to experience this residence in person?
                </p>
                <Button 
                  className="bg-[#D4AF37] text-black hover:bg-[#C19A2E] min-h-[48px] px-6 border-0"
                  aria-label="Schedule a private tour"
                >
                  <span className="font-light tracking-wide">Schedule Tour</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
