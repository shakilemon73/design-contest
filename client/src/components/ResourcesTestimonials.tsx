import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download, Home, Star, ExternalLink } from "lucide-react";

export default function ResourcesTestimonials() {
  const resources = [
    {
      id: 0,
      icon: FileText,
      title: "FAQs",
      description: "Common questions answered",
      action: "Browse →",
      colSpan: "col-span-2",
      variant: "default" as const
    },
    {
      id: 1,
      icon: BookOpen,
      title: "Articles",
      description: "Insights & tips",
      action: "Read →",
      colSpan: "row-span-2",
      variant: "default" as const
    },
    {
      id: 2,
      icon: Download,
      title: "Build Guide",
      description: "Free PDF download",
      action: "Download",
      colSpan: "",
      variant: "primary" as const
    },
    {
      id: 3,
      icon: Home,
      title: "Knockdown Rebuild",
      description: "Replace existing",
      action: "Explore →",
      colSpan: "",
      variant: "default" as const
    }
  ];

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
    <section 
      className="py-32 bg-muted/20"
      aria-label="Resources and client testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Resources - Principle 6: Julie Zhuo - Consistent design system */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-12 gap-12 mb-12">
            <div className="lg:col-span-4">
              <h3 
                className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-4" 
                data-testid="text-resources-heading"
              >
                Resources
                <span className="block text-primary italic">Hub</span>
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                Everything you need to make informed decisions
              </p>
            </div>

            {/* Resource cards - Principle 1: Don Norman - Clear affordances */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6">
              {resources.map((resource) => {
                const Icon = resource.icon;
                const isPrimary = resource.variant === 'primary';
                
                return (
                  <article
                    key={resource.id}
                    className={`
                      ${resource.colSpan} 
                      ${isPrimary 
                        ? 'bg-primary text-primary-foreground hover:shadow-xl' 
                        : 'bg-card border border-border hover:border-primary/50 hover:shadow-lg'
                      } 
                      rounded-2xl p-6 md:p-8 transition-all transform hover:-translate-y-1 
                      focus-within:shadow-xl focus-within:-translate-y-1 
                      ${resource.id === 1 ? 'flex flex-col' : ''}
                    `}
                    data-testid={`resource-card-${resource.id}`}
                    tabIndex={0}
                    role="article"
                  >
                    {/* Icon - Principle 10: Susan Weinschenk - Recognition */}
                    <div 
                      className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 ${
                        isPrimary ? 'bg-primary-foreground/20' : 'bg-primary/10'
                      }`}
                      aria-hidden="true"
                    >
                      <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isPrimary ? '' : 'text-primary'}`} />
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl mb-2">{resource.title}</h4>
                    <p className={`text-sm mb-4 ${isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                      {resource.description}
                    </p>
                    {/* CTA - Principle 3: Luke Wroblewski - Touch targets */}
                    {isPrimary ? (
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        data-testid="button-download-guide-resources"
                        className="min-h-[44px] w-full focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        aria-label="Download our free building guide PDF"
                      >
                        {resource.action}
                      </Button>
                    ) : (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className={`p-0 h-auto hover:bg-transparent ${resource.id === 1 ? 'mt-auto' : ''} focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
                        aria-label={`${resource.action} ${resource.title}`}
                      >
                        {resource.action}
                      </Button>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        {/* Testimonials - Principle 10: Susan Weinschenk - Social proof */}
        <div>
          <h3 
            className="font-serif font-light text-4xl md:text-5xl lg:text-6xl text-center mb-16" 
            data-testid="text-testimonials-heading"
          >
            What Our <span className="text-primary italic">Clients Say</span>
          </h3>

          <div 
            className="grid sm:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto mb-12"
            role="list"
            aria-label="Client testimonials"
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className={`
                  relative bg-card border-2 border-primary/20 rounded-3xl p-8 md:p-10 
                  shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-105 
                  focus-within:shadow-2xl focus-within:scale-105
                  ${index === 0 ? 'sm:-rotate-2 hover:rotate-0 focus-within:rotate-0' : 'sm:rotate-2 sm:mt-12 hover:rotate-0 focus-within:rotate-0'}
                `}
                data-testid={`testimonial-card-${index}`}
                tabIndex={0}
                role="listitem"
              >
                {/* Quote mark - Principle 1: Don Norman - Visual signifier */}
                <div 
                  className="absolute -top-6 -left-6 w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                  aria-hidden="true"
                >
                  <span className="text-3xl md:text-4xl text-primary-foreground">"</span>
                </div>
                
                {/* Star rating - Principle 4: Aarron Walter - Emotional validation */}
                <div className="flex gap-1 mb-6" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </div>
                
                <blockquote className="font-serif text-xl md:text-2xl mb-6 leading-relaxed italic text-foreground/90">
                  {testimonial.quote}
                </blockquote>
                
                <footer className="border-t border-border/50 pt-4">
                  <p className="font-accent font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                </footer>
              </article>
            ))}
          </div>

          {/* External link - Principle 1: Don Norman - Clear external link indicator */}
          <div className="text-center">
            <Button 
              variant="outline" 
              className="group min-h-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
              data-testid="button-google-reviews"
              aria-label="Read more reviews on Google Reviews (opens in new tab)"
            >
              Read more on Google Reviews
              <ExternalLink 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                aria-hidden="true"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
