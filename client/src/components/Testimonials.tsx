import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "We always knew what was next. The finish is superb.",
      author: "Sarah & Michael",
      project: "Woodend Family Home"
    },
    {
      quote: "Calm, clear, and on time. It felt easy.",
      author: "James Thompson",
      project: "Mount Macedon Retreat"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-center mb-16" data-testid="text-testimonials-heading">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-primary/10 ${
                index === 0 ? 'transform md:-rotate-1' : 'transform md:rotate-1'
              }`}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="font-serif text-2xl mb-6 leading-relaxed italic text-foreground/90">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-accent text-sm font-semibold">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.project}</p>
              </div>

              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span className="text-3xl text-primary-foreground">"</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="group" data-testid="button-google-reviews">
            Read more on Google Reviews
            <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
