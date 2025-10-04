import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Quote, Star } from "lucide-react";

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Thompson",
      residence: "Woodend Estate",
      quote: "The clarity and communication throughout the entire build was exceptional. We always knew what was next.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: 2,
      name: "James Peterson",
      residence: "Mount Macedon Retreat",
      quote: "From design to handover, the process felt effortless. The attention to detail is simply outstanding.",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-[#F5F5F0]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Client Stories</p>
          <h2 
            id="testimonials-heading"
            className="font-serif font-light text-5xl md:text-7xl leading-[0.9]"
          >
            Hear From
            <span className="block text-[#D4AF37] italic mt-4">Our Clients</span>
          </h2>
        </div>

        {/* Video Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="bg-white overflow-hidden group"
              data-testid={`testimonial-${testimonial.id}`}
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {activeVideo === testimonial.id ? (
                  <video
                    autoPlay
                    controls
                    className="w-full h-full"
                    aria-label={`Video testimonial from ${testimonial.name}`}
                  >
                    <source src={testimonial.videoUrl} type="video/mp4" />
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
                      src={testimonial.thumbnail} 
                      alt={`${testimonial.name} home`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Play Button Overlay */}
                    <button
                      onClick={() => setActiveVideo(testimonial.id)}
                      className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-inset"
                      aria-label={`Play video testimonial from ${testimonial.name}`}
                    >
                      <div className="w-20 h-20 rounded-full bg-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-10 h-10 text-black ml-1" aria-hidden="true" />
                      </div>
                    </button>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                {/* Rating */}
                <div className="flex gap-1 mb-6" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" 
                      aria-hidden="true"
                    />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-10 h-10 text-[#D4AF37]/20 mb-4" aria-hidden="true" />
                <blockquote>
                  <p className="text-xl md:text-2xl font-serif font-light italic text-black/90 leading-relaxed mb-8">
                    {testimonial.quote}
                  </p>
                </blockquote>

                {/* Author */}
                <footer className="border-t border-black/10 pt-6">
                  <p className="font-light text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-black/40">{testimonial.residence}</p>
                </footer>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white min-h-[56px] px-8"
            aria-label="Read all client reviews"
          >
            <span className="font-light tracking-wide uppercase">All Reviews</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
