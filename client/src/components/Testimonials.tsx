import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // todo: remove mock functionality - replace with real testimonials
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
    },
    {
      name: 'Lisa Wong',
      position: 'Restaurant Owner',
      restaurant: 'Wong\'s Asian Cuisine',
      location: 'Rockford, IL',
      rating: 5,
      text: "Crossroads understands the restaurant business. They work around our busy hours and always clean up after themselves. True professionals.",
      initials: 'LW'
    },
    {
      name: 'Michael Johnson',
      position: 'Operations Manager',
      restaurant: 'Johnson\'s Pub & Grill',
      location: 'Kenosha, WI',
      rating: 5,
      text: "The best investment we made was signing up for their maintenance contract. Our equipment runs better, lasts longer, and we have peace of mind.",
      initials: 'MJ'
    }
  ];

  const nextTestimonial = () => {
    console.log('Next testimonial clicked');
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    console.log('Previous testimonial clicked');
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    console.log(`Going to testimonial ${index}`);
    setCurrentIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-testimonials-section">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by Restaurant
            <span className="text-primary block">Owners Everywhere</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what restaurant owners and managers say about our service.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Testimonial */}
            <div className="lg:col-span-2">
              <Card className="p-8 h-full">
                <CardContent className="p-0">
                  <Quote className="h-12 w-12 text-primary mb-6" />
                  
                  <div className="flex mb-4" data-testid="stars-rating">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  
                  <blockquote className="text-xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                        {testimonials[currentIndex].initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-sm font-medium text-primary">
                        {testimonials[currentIndex].restaurant} • {testimonials[currentIndex].location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Navigation and Stats */}
            <div className="space-y-6">
              {/* Navigation Controls */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Customer Reviews</h3>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevTestimonial}
                        data-testid="button-prev-testimonial"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextTestimonial}
                        data-testid="button-next-testimonial"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Testimonial Dots */}
                  <div className="flex gap-2 flex-wrap">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                        }`}
                        data-testid={`button-testimonial-${index}`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Stats */}
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">98%</div>
                      <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-sm text-muted-foreground">Restaurants Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">4.9</div>
                      <div className="text-sm text-muted-foreground">Average Rating</div>
                      <div className="flex justify-center mt-1">
                        {renderStars(5)}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Review Summary */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20 p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Join Hundreds of Satisfied Restaurant Owners
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Experience the reliability and professionalism that has made Crossroads the trusted choice for commercial kitchen equipment service.
              </p>
              <Button 
                size="lg" 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-join-customers"
              >
                Become Our Next Success Story
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}