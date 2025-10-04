import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

export default function ResourcesTestimonials() {
  const testimonials = [
    {
      quote: "We always knew what was next. The finish is superb.",
      author: "Sarah & Michael Thompson",
      residence: "Woodend Estate"
    },
    {
      quote: "Calm, clear, and on time. It felt effortless.",
      author: "James Peterson",
      residence: "Mount Macedon Retreat"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-[#F5F5F0]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Testimonials</p>
          <h2 
            id="testimonials-heading"
            className="font-serif font-light text-4xl md:text-5xl"
          >
            What Clients Say
          </h2>
        </div>

        {/* Two short quotes */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="bg-white p-10 md:p-12"
              role="listitem"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 mb-6" aria-hidden="true" />
              <blockquote>
                <p className="font-serif text-2xl font-light italic text-black/90 leading-relaxed mb-8">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <footer className="border-t border-black/10 pt-6">
                <p className="font-light text-lg mb-1">{testimonial.author}</p>
                <p className="text-sm text-black/40">{testimonial.residence}</p>
              </footer>
            </article>
          ))}
        </div>

        {/* Link to Google Reviews */}
        <div className="text-center">
          <Button 
            variant="ghost" 
            className="text-black hover:bg-transparent px-0 group"
            aria-label="Read all reviews on Google"
          >
            <span className="font-light tracking-wide mr-2">Read all reviews on Google</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
