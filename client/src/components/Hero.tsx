import { Phone, Shield, Clock, Star, ArrowRight, Zap } from 'lucide-react';
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
    { icon: Clock, text: '24/7 Available' },
    { icon: Star, text: '15+ Years' },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Asymmetric Diagonal Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left Side - Content Background with Diagonal Cut */}
        <div className="relative w-full lg:w-[65%]" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0 100%)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
          {/* Organic Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Right Side - Image Background with Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[45%] lg:left-[55%]">
          <img
            src={heroImage}
            alt="Professional commercial kitchen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-black/60 to-black/90" />
          
          {/* Geometric Accent */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-0 w-1 h-32 bg-primary/60" />
            <div className="absolute top-20 left-0 w-32 h-1 bg-primary/60" />
          </div>
        </div>
      </div>

      {/* Content Container - Asymmetric Layout */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7">
            {/* Trust Badges - Staggered Layout */}
            <div className="flex flex-wrap gap-3 mb-8">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className={`group flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border hover-elevate transform transition-all ${
                    index === 1 ? 'translate-y-2' : index === 2 ? '-translate-y-1' : ''
                  }`}
                  data-testid={`badge-trust-${index}`}
                  aria-label={`${badge.text} - guarantees our service quality and reliability`}
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <badge.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  </div>
                  <span className="text-foreground text-sm font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>

            {/* Main Headline - Diagonal Emphasis */}
            <div className="relative mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-4">
                Professional
              </h1>
              <div className="relative inline-block">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
                    Cooking Equipment
                  </span>
                </h1>
                {/* Diagonal Accent Line */}
                <div className="absolute -left-8 top-1/2 w-6 h-1 bg-primary transform -rotate-45" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1]">
                Service & Repair
              </h1>
            </div>

            {/* Subheadline with Diagonal Accent */}
            <div className="relative mb-10 pl-6 border-l-4 border-primary/30">
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
                Keep your commercial kitchen running at peak performance with our expert maintenance and repair services.
              </p>
            </div>

            {/* CTAs - Asymmetric Button Layout */}
            <div className="flex flex-col sm:flex-row gap-4 items-start mb-12">
              <Button
                size="lg"
                onClick={handleServiceRequestClick}
                className="bg-primary text-primary-foreground text-lg px-8 py-6 h-auto rounded-full group relative overflow-hidden"
                data-testid="button-hero-service-request"
                aria-label="Request service - scroll to contact form to describe your equipment repair needs"
              >
                <span className="relative z-10 flex items-center">
                  Request Service Now
                  <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={handleCallClick}
                className="text-foreground border-border bg-card/50 backdrop-blur-sm text-lg px-8 py-6 h-auto rounded-full group"
                data-testid="button-hero-call"
                aria-label="Call emergency repair hotline at 555 REPAIR-1"
              >
                <Phone className="h-5 w-5 mr-2 transform transition-transform duration-200 group-hover:rotate-12" aria-hidden="true" />
                (555) REPAIR-1
              </Button>
            </div>

            {/* Key Benefits - Broken Grid */}
            <div className="grid grid-cols-2 gap-3 max-w-xl">
              {[
                { text: 'Same-day emergency repairs', delay: '0ms' },
                { text: 'Certified technicians', delay: '100ms' },
                { text: 'All major brands', delay: '200ms' },
                { text: 'Preventive maintenance', delay: '300ms' }
              ].map((benefit, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-2 px-4 py-3 rounded-2xl bg-primary/5 border border-primary/10 hover-elevate ${
                    index % 2 === 1 ? 'translate-y-2' : ''
                  }`}
                  style={{ transitionDelay: benefit.delay }}
                >
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span className="text-foreground text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - 5 columns - Floating Stats */}
          <div className="lg:col-span-5 relative lg:pl-12">
            {/* Emergency Call-Out Card - Diagonal */}
            <div className="relative transform lg:rotate-2 lg:translate-x-8">
              <div className="relative bg-destructive/10 border border-destructive/30 rounded-3xl p-8 overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                      <Zap className="h-6 w-6 text-destructive" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-destructive">Emergency Service</div>
                      <div className="text-xs text-destructive/70">Available 24/7</div>
                    </div>
                  </div>
                  <p className="text-foreground font-medium leading-relaxed mb-4">
                    Equipment breakdown affecting your business? Get immediate assistance from our emergency repair team.
                  </p>
                  <Button 
                    size="sm" 
                    className="bg-destructive text-destructive-foreground rounded-full w-full"
                    onClick={handleCallClick}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Call Emergency Line
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating Stats - Staggered */}
            <div className="hidden lg:grid grid-cols-2 gap-4 mt-8 transform -rotate-1">
              {[
                { number: '500+', label: 'Restaurants Served' },
                { number: '98%', label: 'Satisfaction Rate' }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className={`p-6 bg-card border border-border rounded-3xl text-center hover-elevate ${
                    index === 1 ? 'translate-y-4' : ''
                  }`}
                >
                  <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Unique Position */}
      <div className="absolute bottom-8 left-8 z-10">
        <div className="flex items-center gap-3">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse" />
          <div className="flex flex-col gap-2 animate-bounce">
            <div className="text-muted-foreground text-sm font-medium writing-mode-vertical transform rotate-180">
              Scroll
            </div>
            <div className="w-1 h-8 bg-primary/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
