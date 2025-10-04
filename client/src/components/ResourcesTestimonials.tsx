import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, FileText } from "lucide-react";

export default function ResourcesTestimonials() {
  const testimonials = [
    {
      quote: "We always knew what was next. The finish is superb.",
      author: "Sarah & Michael Thompson",
      residence: "Woodend Estate",
      year: "2024"
    },
    {
      quote: "Calm, clear, and on time. It felt effortless.",
      author: "James Peterson",
      residence: "Mount Macedon Retreat",
      year: "2023"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-[#F5F5F0]"
      aria-label="Client testimonials and resources"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Testimonials - Editorial quotes */}
        <div className="mb-32 md:mb-48">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-6">Client Experience</p>
          <h3 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl mb-20 md:mb-32">
            What Our
            <span className="block text-[#D4AF37] italic mt-2">Clients Say</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-white p-10 md:p-12 lg:p-16 relative"
                role="listitem"
              >
                {/* Large quote mark */}
                <div className="absolute top-8 right-8 text-8xl md:text-9xl font-serif text-[#D4AF37]/10 leading-none">
                  "
                </div>
                
                <blockquote className="relative z-10">
                  <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-12 italic text-black/90">
                    {testimonial.quote}
                  </p>
                </blockquote>
                
                <footer className="border-t border-black/10 pt-6">
                  <p className="font-light text-lg mb-1">{testimonial.author}</p>
                  <p className="text-sm text-black/40">{testimonial.residence} — {testimonial.year}</p>
                </footer>
              </article>
            ))}
          </div>
        </div>

        {/* Resources - Minimal cards */}
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Portfolio Download */}
            <div className="bg-black text-white p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <FileText className="w-12 h-12 mb-6 text-[#D4AF37]" aria-hidden="true" />
                <h4 className="font-serif font-light text-3xl md:text-4xl mb-4">
                  Portfolio
                </h4>
                <p className="text-white/70 font-light text-lg leading-relaxed max-w-md">
                  Complete collection of our bespoke residences. Download our portfolio.
                </p>
              </div>
              <Button 
                className="bg-[#D4AF37] text-black hover:bg-[#C19A2E] mt-8 w-fit px-8 min-h-[56px] border-0"
                aria-label="Download portfolio PDF"
              >
                <Download className="mr-2 w-5 h-5" aria-hidden="true" />
                <span className="font-light tracking-wide uppercase">Download PDF</span>
              </Button>
            </div>

            {/* Process Guide */}
            <div className="bg-white p-10 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] border border-black/10">
              <div>
                <div className="w-12 h-12 mb-6 border border-black/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#D4AF37]" aria-hidden="true" />
                </div>
                <h4 className="font-serif font-light text-3xl md:text-4xl mb-4">
                  Building Guide
                </h4>
                <p className="text-black/70 font-light text-lg leading-relaxed max-w-md">
                  Everything you need to know about building your custom residence in the Macedon Ranges.
                </p>
              </div>
              <Button 
                variant="ghost" 
                className="group px-0 h-auto hover:bg-transparent text-black mt-8 w-fit"
                aria-label="View building guide"
              >
                <span className="font-light tracking-wide uppercase mr-2">View Guide</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
