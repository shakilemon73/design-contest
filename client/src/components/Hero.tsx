import { Phone, Shield, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    { icon: Clock, text: '24/7 Emergency' },
    { icon: Star, text: '15+ Years' },
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
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Decorative Organic Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Diagonal Accent Line */}
      <div className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/20 to-transparent transform skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="max-w-4xl">
          {/* Trust Badges - Circular Design */}
          <div className="flex flex-wrap gap-3 mb-10">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md hover-elevate"
                data-testid={`badge-trust-${index}`}
                aria-label={`${badge.text} - guarantees our service quality and reliability`}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <badge.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-white text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Main Headline with Flowing Typography */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Professional
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/70">
              Cooking Equipment
            </span>
            <span className="block">Service & Repair</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            Keep your commercial kitchen running at peak performance with our expert maintenance and repair services.
          </p>

          {/* Key Benefits - Organic Flow */}
          <div className="relative mb-12 max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Same-day emergency repairs',
                'Certified technicians', 
                'All major brands serviced',
                'Preventive maintenance plans'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call-to-Action Buttons with Organic Shape */}
          <div className="flex flex-col sm:flex-row gap-4 items-start mb-10">
            <Button
              size="lg"
              onClick={handleServiceRequestClick}
              className="bg-primary text-primary-foreground text-lg px-8 py-6 h-auto rounded-full group"
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
              className="text-white border-white/30 bg-white/10 backdrop-blur-md text-lg px-8 py-6 h-auto rounded-full group"
              data-testid="button-hero-call"
              aria-label="Call emergency repair hotline at 555 REPAIR-1"
            >
              <Phone className="h-5 w-5 mr-2 transform transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" />
              Call (555) REPAIR-1
            </Button>
          </div>

          {/* Emergency Notice - Soft Rounded */}
          <div className="relative p-5 bg-destructive/10 border border-destructive/30 rounded-3xl backdrop-blur-md overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-2xl" />
            <p className="text-white font-medium relative z-10">
              <span className="text-destructive font-semibold">Emergency Service Available:</span> Equipment breakdown affecting your business? Call now for immediate assistance.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Organic */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <div className="text-white/60 text-sm font-medium">Scroll</div>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Curved Bottom Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-5" />
    </section>
  );
}