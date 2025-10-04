import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download, Home, Star, ExternalLink } from "lucide-react";

export default function ResourcesTestimonials() {
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
    <section className="py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Resources - Asymmetric bento grid */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <h3 className="font-serif font-light text-5xl md:text-6xl mb-4" data-testid="text-resources-heading">
                Resources
                <span className="block text-primary italic">Hub</span>
              </h3>
              <p className="text-lg text-muted-foreground">
                Everything you need to make informed decisions
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="col-span-2 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg" data-testid="resource-card-0">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-serif text-2xl mb-2">FAQs</h4>
                <p className="text-sm text-muted-foreground mb-4">Common questions answered</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                  Browse →
                </Button>
              </div>

              <div className="row-span-2 bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg flex flex-col" data-testid="resource-card-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-serif text-2xl mb-2">Articles</h4>
                <p className="text-sm text-muted-foreground mb-4">Insights & tips</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent mt-auto">
                  Read →
                </Button>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl p-8 hover:shadow-xl transition-all transform hover:-translate-y-1" data-testid="resource-card-2">
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center mb-4">
                  <Download className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-2xl mb-2">Build Guide</h4>
                <p className="text-sm text-primary-foreground/80 mb-4">Free PDF download</p>
                <Button variant="secondary" size="sm" data-testid="button-download-guide-resources">
                  Download
                </Button>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg" data-testid="resource-card-3">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Home className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-serif text-2xl mb-2">Knockdown Rebuild</h4>
                <p className="text-sm text-muted-foreground mb-4">Replace existing</p>
                <Button variant="ghost" size="sm" className="p-0 h-auto hover:bg-transparent">
                  Explore →
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials - Overlapping scrapbook style */}
        <div>
          <h3 className="font-serif font-light text-5xl md:text-6xl text-center mb-16" data-testid="text-testimonials-heading">
            What Our <span className="text-primary italic">Clients Say</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto mb-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative bg-card border-2 border-primary/20 rounded-3xl p-10 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  index === 0 ? 'md:-rotate-2 hover:rotate-0' : 'md:rotate-2 md:mt-12 hover:rotate-0'
                }`}
                data-testid={`testimonial-card-${index}`}
              >
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl text-primary-foreground">"</span>
                </div>
                
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="font-serif text-2xl mb-6 leading-relaxed italic text-foreground/90">
                  {testimonial.quote}
                </blockquote>
                
                <div className="border-t border-border/50 pt-4">
                  <p className="font-accent font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
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
      </div>
    </section>
  );
}
