import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, Download, Volume2, VolumeX } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_home_hero_image_945187aa.png";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section 
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Full-screen cinematic video background */}
      <div className="absolute inset-0">
        {/* Video with fallback to image */}
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover opacity-70"
          aria-label="Luxury home showcase video"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          {/* Fallback image */}
          <img 
            src={heroImage} 
            alt="Luxury custom home in Macedon Ranges"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
        {/* Video controls - Don Norman: Visibility & Feedback */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-24 right-6 z-30 p-3 bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-white" aria-hidden="true" />
          ) : (
            <Volume2 className="w-5 h-5 text-white" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Main content - Split vertical layout */}
      <div className="relative z-20 min-h-screen flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 w-full">
          {/* Year badge - Luxury detail */}
          <div className="inline-block mb-8">
            <div className="px-4 py-2 border border-white/30 backdrop-blur-sm">
              <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-light">
                Est. 2008
              </span>
            </div>
          </div>

          {/* Oversized headline - Bold luxury typography */}
          <h1 className="font-serif text-white mb-8 max-w-6xl">
            <span className="block text-5xl md:text-7xl lg:text-9xl font-light leading-[0.9] tracking-tighter">
              Build Beyond
            </span>
            <span className="block text-4xl md:text-6xl lg:text-8xl font-light italic text-[#D4AF37] mt-4 leading-[0.9]">
              Expectations
            </span>
          </h1>

          {/* Split layout - Info and CTAs */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left - Tagline */}
            <div className="lg:col-span-5">
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-md font-light">
                Bespoke residences crafted for the Macedon Ranges. 
                Where vision meets precision.
              </p>
            </div>

            {/* Right - CTAs + Stats */}
            <div className="lg:col-span-7 flex flex-col md:flex-row md:items-end justify-between gap-8">
              {/* CTA Buttons - Luke Wroblewski: Mobile-first touch targets */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-black hover:bg-white/90 min-h-[56px] px-8 group border-0"
                  aria-label="Book a private consultation"
                >
                  <Calendar className="mr-2 w-5 h-5" aria-hidden="true" />
                  <span className="font-light tracking-wide">Private Consultation</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black min-h-[56px] px-8"
                  aria-label="Download portfolio"
                >
                  <Download className="mr-2 w-5 h-5" aria-hidden="true" />
                  <span className="font-light tracking-wide">Portfolio</span>
                </Button>
              </div>

              {/* Stats - Minimal luxury indicators */}
              <div className="flex gap-8 md:gap-12">
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] text-4xl md:text-5xl font-serif font-light">100+</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest mt-2">Residences</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] text-4xl md:text-5xl font-serif font-light">15+</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest mt-2">Years</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#D4AF37] text-4xl md:text-5xl font-serif font-light">100%</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest mt-2">On Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" aria-hidden="true" />
      </div>
    </section>
  );
}
