import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Calendar, Download, Volume2, VolumeX, Play, Pause, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_home_hero_image_945187aa.png";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const trustChips = [
    "100+ custom homes",
    "On time and on budget",
    "Specialist trades"
  ];

  return (
    <section 
      id="main-content"
      className="relative min-h-screen overflow-hidden bg-black"
      aria-label="Hero section"
    >
      {/* Single strong silent loop video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
          className="w-full h-full object-cover opacity-60"
          aria-label="Luxury home showcase"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
          <img 
            src={heroImage} 
            alt="Luxury custom home in Macedon Ranges"
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
        
        {/* Video controls */}
        <div className="absolute top-32 lg:top-36 right-6 z-30 flex gap-2" role="group" aria-label="Video controls">
          <button
            onClick={togglePlayPause}
            className="p-3 bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" aria-hidden="true" />
            ) : (
              <Play className="w-5 h-5 text-white" aria-hidden="true" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="p-3 bg-black/30 backdrop-blur-sm border border-white/20 hover:bg-black/50 transition-all min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" aria-hidden="true" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center pb-12 md:pb-24">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
          {/* H1: The Problem */}
          <h1 className="font-serif text-white mb-6 max-w-4xl">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight">
              Building a luxury custom home
            </span>
            <span className="block text-3xl md:text-5xl lg:text-6xl font-light text-[#D4AF37] mt-3 leading-[1.1]">
              shouldn't feel risky
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-light mb-10">
            Clarity on cost, timeline, craftsmanship for your Macedon Ranges home
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-[#D4AF37] text-black hover:bg-[#C19A2E] min-h-[56px] px-8 border-0 text-base font-light tracking-wide shadow-lg"
              aria-label="Book a consultation"
            >
              <Calendar className="mr-2 w-5 h-5" aria-hidden="true" />
              <span>Book a Consult</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/40 text-white hover:bg-white/10 hover:border-white min-h-[56px] px-8 text-base font-light tracking-wide"
              aria-label="Download the build guide"
            >
              <Download className="mr-2 w-5 h-5" aria-hidden="true" />
              <span>Download the Build Guide</span>
            </Button>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-6">
            {trustChips.map((chip, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <CheckCircle className="w-4 h-4 text-[#D4AF37]" aria-hidden="true" />
                <span className="text-white/90 text-sm font-light">{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <ArrowDown className="w-6 h-6 text-white/60" aria-hidden="true" />
        <span className="sr-only">Scroll down to explore</span>
      </div>
    </section>
  );
}
