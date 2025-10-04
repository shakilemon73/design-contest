import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Check, Clock } from "lucide-react";

export default function ProcessVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = [
    { title: "Initial Consultation", check: true },
    { title: "Design & Planning", check: true },
    { title: "Permits & Approvals", check: true },
    { title: "Construction", check: false },
    { title: "Final Inspection", check: false },
    { title: "Handover", check: false }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-white"
      aria-labelledby="process-video-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Video */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">The Process</p>
            <h2 
              id="process-video-heading"
              className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-[0.9] mb-8"
            >
              How We
              <span className="block text-[#D4AF37] italic mt-2">Build Together</span>
            </h2>

            {/* Video Player - Top placement for discoverability */}
            <div className="relative aspect-video bg-black rounded-sm overflow-hidden mb-8">
              {isPlaying ? (
                <video
                  autoPlay
                  controls
                  className="w-full h-full"
                  aria-label="Custom home building process explained"
                >
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" type="video/mp4" />
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English"
                    default
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=675&fit=crop"
                    alt="Construction site overview"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 bg-black/40 hover:bg-black/60 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset group"
                    aria-label="Play process video"
                  >
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-black ml-1" aria-hidden="true" />
                      </div>
                      <div className="flex items-center gap-2 text-white">
                        <Clock className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm font-light">5:30</span>
                      </div>
                    </div>
                  </button>
                </>
              )}
            </div>

            <p className="text-black/60 text-base font-light leading-relaxed">
              A detailed walkthrough of our three-phase methodology. From initial vision to final handover, understand every step of your journey.
            </p>
          </div>

          {/* Right - Process Steps Checklist */}
          <div className="bg-[#F5F5F0] p-10 md:p-12 lg:p-16">
            <h3 className="font-serif text-3xl md:text-4xl font-light mb-8">
              Your Journey
            </h3>

            <ul className="space-y-6" role="list">
              {steps.map((step, index) => (
                <li 
                  key={index}
                  className={`flex items-start gap-4 pb-6 border-b border-black/10 last:border-0 transition-all ${
                    step.check ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    step.check ? 'bg-[#D4AF37]' : 'border border-black/20'
                  }`}>
                    {step.check ? (
                      <Check className="w-5 h-5 text-black" aria-hidden="true" />
                    ) : (
                      <span className="text-xs text-black/40">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`font-light text-lg ${step.check ? 'text-black' : 'text-black/50'}`}>
                      {step.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Button 
              className="mt-10 bg-black text-white hover:bg-black/90 min-h-[56px] px-8 w-full border-0"
              aria-label="Download detailed process guide"
            >
              <span className="font-light tracking-wide uppercase">Download Process Guide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
