import { Phone, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import heroImage from '@assets/generated_images/Commercial_kitchen_hero_background_267b969b.png';

export default function Hero() {
  const handleCallClick = () => {
    console.log('Hero call button clicked');
    window.location.href = 'tel:+1-555-REPAIR-1';
  };

  const handleServiceRequestClick = () => {
    console.log('Hero service request button clicked');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const trustBadges = [
    { icon: Shield, text: 'Licensed & Insured' },
    { icon: Clock, text: '24/7 Emergency Service' },
    { icon: Star, text: '15+ Years Experience' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Wash */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional commercial kitchen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl">
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            {trustBadges.map((badge, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-white/10 text-white border-white/20 backdrop-blur-sm cursor-default"
                data-testid={`badge-trust-${index}`}
                aria-label={`${badge.text} - guarantees our service quality and reliability`}
              >
                <badge.icon className="h-4 w-4 mr-2 text-primary" aria-hidden="true" />
                {badge.text}
              </Badge>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Professional
            <span className="text-primary block">Cooking Equipment</span>
            Service & Repair
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Keep your commercial kitchen running at peak performance with our expert maintenance and repair services. Trusted by restaurants across the region.
          </p>

          {/* Key Benefits */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10 max-w-2xl">
            <div className="flex items-center gap-3 text-white">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-lg">Same-day emergency repairs</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-lg">Certified technicians</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-lg">All major brands serviced</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-lg">Preventive maintenance plans</span>
            </div>
          </div>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              onClick={handleServiceRequestClick}
              className="bg-primary text-primary-foreground text-lg px-8 py-6 h-auto group"
              data-testid="button-hero-service-request"
              aria-label="Request service - scroll to contact form to describe your equipment repair needs"
            >
              Request Service Now
              <span className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleCallClick}
              className="text-white border-white/30 bg-white/10 backdrop-blur-sm text-lg px-8 py-6 h-auto group"
              data-testid="button-hero-call"
              aria-label="Call emergency repair hotline at 555 REPAIR-1"
            >
              <Phone className="h-5 w-5 mr-2 transform transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" />
              Call (555) REPAIR-1
            </Button>
          </div>

          {/* Emergency Notice */}
          <div className="mt-8 p-4 bg-destructive/20 border border-destructive/30 rounded-md backdrop-blur-sm">
            <p className="text-white font-medium">
              <span className="text-destructive">Emergency Service Available:</span> Equipment breakdown affecting your business? Call now for immediate assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}