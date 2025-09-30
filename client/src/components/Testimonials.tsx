import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Star, Quote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Rodriguez',
      position: 'General Manager',
      restaurant: 'Downtown Bistro',
      location: 'Chicago, IL',
      rating: 5,
      text: "Crossroads saved our busy Friday night when our main fryer went down. They had a technician here within 30 minutes and got us back up and running. Absolutely reliable service.",
      initials: 'MR'
    },
    {
      name: 'James Chen',
      position: 'Owner',
      restaurant: 'Chen\'s Family Kitchen',
      location: 'Milwaukee, WI', 
      rating: 5,
      text: "We've been using Crossroads for 3 years now for all our equipment maintenance. Their preventive maintenance program has saved us thousands in emergency repairs.",
      initials: 'JC'
    },
    {
      name: 'Sarah Thompson',
      position: 'Kitchen Manager',
      restaurant: 'The Steakhouse',
      location: 'Madison, WI',
      rating: 5,
      text: "Professional, knowledgeable, and fair pricing. When our commercial oven needed major repairs, they gave us honest advice and completed the work perfectly.",
      initials: 'ST'
    },
    {
      name: 'David Martinez',
      position: 'Head Chef',
      restaurant: 'Coastal Grill',
      location: 'Green Bay, WI',
      rating: 5,
      text: "Their emergency service is a lifesaver. We had a gas line issue and they responded immediately, ensuring our kitchen was safe and operational the same day.",
      initials: 'DM'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-primary/10 to-transparent transform -skew-y-3" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Asymmetric */}
        <div className="max-w-6xl mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-1 bg-primary transform skew-x-12" />
                <span className="text-primary font-bold uppercase tracking-wider text-sm" data-testid="badge-testimonials-section">
                  Customer Reviews
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Trusted by</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Restaurant Owners
                </span>
              </h2>
            </div>
            
            <div className="transform lg:translate-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Don't just take our word for it. Here's what restaurant owners and managers say about our service.
              </p>
            </div>
          </div>
        </div>

        {/* Main Testimonial Card - Diagonal Layout */}
        <div className="relative max-w-6xl mx-auto mb-20">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Testimonial - Asymmetric */}
            <div className="lg:col-span-8 relative transform lg:-rotate-1 transition-transform hover:rotate-0">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative bg-card border-2 border-border rounded-[3rem] p-10 md:p-12 overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
                
                <div className="relative z-10">
                  <Quote className="h-16 w-16 text-primary mb-6 transform -rotate-12" />
                  
                  <div className="flex mb-6" data-testid="stars-rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <blockquote className="text-2xl text-foreground leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16 border-2 border-primary/20">
                      <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-bold text-foreground text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-sm font-semibold text-primary">
                        {testimonials[currentIndex].restaurant} • {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation & Stats - Staggered */}
            <div className="lg:col-span-4 space-y-6">
              {/* Navigation Card */}
              <div className="transform lg:rotate-1 lg:translate-y-8 transition-transform hover:rotate-0">
                <div className="bg-card border border-border rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">Navigate</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        className="rounded-full"
                        data-testid="button-prev-testimonial"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        className="rounded-full"
                        data-testid="button-next-testimonial"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 w-1.5'
                        }`}
                        data-testid={`button-testimonial-${index}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="transform lg:-rotate-1">
                <div className="bg-gradient-to-br from-primary/10 to-card border border-primary/20 rounded-3xl p-6 space-y-4">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary">98%</div>
                    <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground mt-1">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Diagonal Banner */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-[3rem] transform -rotate-1" />
          <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-[3rem] p-10 md:p-12 text-center transform rotate-1 hover:rotate-0 transition-transform">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join Hundreds of Satisfied Restaurant Owners
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Experience the reliability and professionalism that has made Crossroads the trusted choice for commercial kitchen equipment service.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground rounded-full px-8 py-6 h-auto text-lg group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-join-customers"
            >
              Become Our Next Success Story
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
