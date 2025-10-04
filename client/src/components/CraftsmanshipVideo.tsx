import { useState } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function CraftsmanshipVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const details = [
    { number: "01", title: "Custom Millwork", description: "Bespoke joinery in our workshop" },
    { number: "02", title: "Stone Selection", description: "Hand-picked natural materials" },
    { number: "03", title: "Precision Installation", description: "Millimeter-perfect execution" },
    { number: "04", title: "Final Inspection", description: "Every detail examined" }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-black text-white"
      aria-labelledby="craftsmanship-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4">Excellence</p>
          <h2 
            id="craftsmanship-heading"
            className="font-serif font-light text-5xl md:text-7xl leading-[0.9] mb-8"
          >
            The Details That
            <span className="block text-[#D4AF37] italic mt-4">Define Us</span>
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light max-w-3xl mx-auto">
            See the precision, care, and artistry that goes into every element of your residence.
          </p>
        </div>

        {/* Full-Width Video Player */}
        <div className="mb-20">
          <div className="relative aspect-[21/9] bg-[#1a1a1a] rounded-sm overflow-hidden">
            {isPlaying ? (
              <>
                <video
                  autoPlay
                  muted={isMuted}
                  loop
                  className="w-full h-full object-cover"
                  aria-label="Craftsmanship detail reel"
                >
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* Floating controls */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="absolute top-6 right-6 p-3 bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-black/70 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" aria-hidden="true" />
                  ) : (
                    <Volume2 className="w-5 h-5" aria-hidden="true" />
                  )}
                </button>
              </>
            ) : (
              <>
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=823&fit=crop"
                  alt="Luxury home interior detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset group"
                  aria-label="Play craftsmanship video"
                >
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-12 h-12 text-black ml-2" aria-hidden="true" />
                    </div>
                    <div className="text-center">
                      <p className="text-white text-lg font-light mb-2">Watch Craftsmanship Reel</p>
                      <p className="text-white/60 text-sm">2:15 — Behind the scenes</p>
                    </div>
                  </div>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Detail Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {details.map((detail) => (
            <article
              key={detail.number}
              className="bg-[#1a1a1a] p-8 border border-white/5 hover:border-[#D4AF37]/30 transition-colors"
              role="listitem"
            >
              <span className="text-5xl font-serif font-light text-[#D4AF37]/30 mb-6 block">
                {detail.number}
              </span>
              <h3 className="font-serif text-xl font-light mb-3">
                {detail.title}
              </h3>
              <p className="text-white/60 text-sm font-light leading-relaxed">
                {detail.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
