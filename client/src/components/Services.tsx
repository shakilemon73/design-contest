import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Wrench, Flame, ChefHat } from 'lucide-react';
import friyerImage from '@assets/generated_images/Fryer_maintenance_service_image_8d99d8b8.png';
import ovenImage from '@assets/generated_images/Commercial_oven_repair_service_87a6f7d4.png';
import griddleImage from '@assets/generated_images/Griddle_cleaning_service_image_2a1159fc.png';

export default function Services() {
  const services = [
    {
      title: 'Commercial Fryer Service',
      description: 'Complete maintenance, repair, and cleaning of all commercial fryer models.',
      image: friyerImage,
      icon: Flame,
      badge: 'Most Popular',
      accent: 'from-primary/20 to-primary/5'
    },
    {
      title: 'Commercial Oven Repair',
      description: 'Expert repair and maintenance of convection ovens and baking equipment.',
      image: ovenImage,
      icon: ChefHat,
      badge: 'Emergency',
      accent: 'from-destructive/20 to-destructive/5'
    },
    {
      title: 'Griddle & Grill Service',
      description: 'Professional cleaning, seasoning, and repair of griddles and grills.',
      image: griddleImage,
      icon: Wrench,
      badge: 'Quick Service',
      accent: 'from-primary/15 to-primary/5'
    },
    {
      title: 'Range & Cooktop Maintenance',
      description: 'Comprehensive service for gas and electric ranges.',
      image: friyerImage,
      icon: Flame,
      badge: null,
      accent: 'from-primary/10 to-transparent'
    },
    {
      title: 'Steamer Equipment Service',
      description: 'Specialized maintenance for commercial steamers.',
      image: ovenImage,
      icon: ChefHat,
      badge: null,
      accent: 'from-primary/10 to-transparent'
    },
    {
      title: 'Commercial Warmer Repair',
      description: 'Service for food warmers and holding equipment.',
      image: griddleImage,
      icon: Wrench,
      badge: null,
      accent: 'from-primary/10 to-transparent'
    }
  ];

  const handleServiceRequest = (serviceName: string) => {
    console.log(`Service request for: ${serviceName}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Diagonal Background Accent */}
      <div className="absolute top-0 left-0 right-1/2 bottom-1/2 bg-gradient-to-br from-primary/5 to-transparent transform -skew-y-6" />
      <div className="absolute bottom-0 right-0 left-1/2 top-1/2 bg-gradient-to-tl from-primary/5 to-transparent transform skew-y-6" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Asymmetric with Diagonal Element */}
        <div className="max-w-6xl mb-20 relative">
          <div className="absolute -left-16 top-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-1 bg-primary" />
                <span className="text-primary font-bold uppercase tracking-wider text-sm" data-testid="badge-services-section">
                  Our Services
                </span>
                <div className="w-12 h-1 bg-primary/30" />
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="block text-foreground">Complete Cooking</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
                  Equipment Solutions
                </span>
              </h2>
            </div>
            
            <div className="hidden lg:block w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent" />
            
            <div className="hidden lg:block max-w-xs pt-8">
              <p className="text-muted-foreground leading-relaxed">
                From routine maintenance to emergency repairs, we keep your commercial kitchen equipment running efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Services - Broken Grid with Overlapping Cards */}
        <div className="relative">
          {/* First Row - 2 cards, asymmetric */}
          <div className="grid lg:grid-cols-5 gap-8 mb-8">
            {/* Card 1 - Spans 3 columns */}
            <div className="lg:col-span-3 transform lg:-rotate-1 transition-transform hover:rotate-0">
              {services.slice(0, 1).map((service, index) => (
                <ServiceCard key={index} service={service} index={index} handleServiceRequest={handleServiceRequest} large />
              ))}
            </div>

            {/* Card 2 - Spans 2 columns, elevated */}
            <div className="lg:col-span-2 transform lg:translate-y-8 lg:rotate-1 transition-transform hover:rotate-0 hover:-translate-y-2">
              {services.slice(1, 2).map((service, index) => (
                <ServiceCard key={index + 1} service={service} index={index + 1} handleServiceRequest={handleServiceRequest} />
              ))}
            </div>
          </div>

          {/* Second Row - 3 cards, staggered */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="transform lg:-translate-y-4">
              {services.slice(2, 3).map((service, index) => (
                <ServiceCard key={index + 2} service={service} index={index + 2} handleServiceRequest={handleServiceRequest} />
              ))}
            </div>
            <div className="transform lg:translate-y-4 lg:-rotate-1 transition-transform hover:rotate-0">
              {services.slice(3, 4).map((service, index) => (
                <ServiceCard key={index + 3} service={service} index={index + 3} handleServiceRequest={handleServiceRequest} />
              ))}
            </div>
            <div className="transform lg:-translate-y-8 lg:rotate-1 transition-transform hover:rotate-0">
              {services.slice(4, 5).map((service, index) => (
                <ServiceCard key={index + 4} service={service} index={index + 4} handleServiceRequest={handleServiceRequest} />
              ))}
            </div>
          </div>

          {/* Third Row - 1 card, wide asymmetric */}
          <div className="max-w-3xl ml-auto transform lg:rotate-1 transition-transform hover:rotate-0">
            {services.slice(5, 6).map((service, index) => (
              <ServiceCard key={index + 5} service={service} index={index + 5} handleServiceRequest={handleServiceRequest} wide />
            ))}
          </div>
        </div>

        {/* Emergency CTA - Diagonal Floating Card */}
        <div className="relative mt-32 max-w-6xl mx-auto">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-destructive/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-destructive/5 rounded-full blur-3xl" />
          
          <div className="relative transform lg:-rotate-1 transition-transform hover:rotate-0">
            <div className="relative bg-gradient-to-br from-destructive/10 via-card to-card border-2 border-destructive/20 rounded-[3rem] p-10 md:p-16 overflow-hidden">
              {/* Diagonal Accent */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-destructive to-transparent transform -skew-x-12" />
              </div>
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/20 border border-destructive/30 mb-6">
                    <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                    <span className="text-destructive font-bold text-sm">24/7 Emergency Service</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Equipment Breakdown?
                    <span className="block text-destructive">We're Ready to Help</span>
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Don't let equipment failure shut down your kitchen. Our emergency team is available around the clock.
                  </p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <Button 
                    size="lg" 
                    className="bg-destructive text-destructive-foreground rounded-full px-8 py-6 h-auto text-lg group"
                    onClick={() => window.location.href = 'tel:+1-555-REPAIR-1'}
                    data-testid="button-emergency-call"
                  >
                    <Phone className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
                    Call (555) REPAIR-1
                    <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="rounded-full px-8 py-6 h-auto text-lg"
                    onClick={() => handleServiceRequest('Emergency Service')}
                    data-testid="button-emergency-request"
                  >
                    Request Emergency Service
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Card Component with Unique Design
function ServiceCard({ 
  service, 
  index, 
  handleServiceRequest, 
  large = false,
  wide = false 
}: { 
  service: any; 
  index: number; 
  handleServiceRequest: (name: string) => void;
  large?: boolean;
  wide?: boolean;
}) {
  const Icon = service.icon;

  return (
    <div
      className={`group relative cursor-pointer transition-all duration-500 hover-elevate h-full ${
        large ? 'min-h-[400px]' : wide ? 'min-h-[300px]' : 'min-h-[350px]'
      }`}
      data-testid={`card-service-${index}`}
      role="button"
      tabIndex={0}
      onClick={() => handleServiceRequest(service.title)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleServiceRequest(service.title);
        }
      }}
      aria-label={`Request ${service.title.toLowerCase()} service`}
    >
      {/* Card Background with Diagonal Accent */}
      <div className="absolute inset-0 bg-card border border-border rounded-3xl overflow-hidden">
        <div className={`absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl ${service.accent} transform rotate-12 group-hover:rotate-6 transition-transform duration-700`} />
      </div>

      {/* Content */}
      <div className={`relative h-full flex flex-col ${wide ? 'md:flex-row md:items-center gap-6' : ''} p-6`}>
        {/* Icon & Badge */}
        <div className="flex items-start justify-between mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Icon className="w-8 h-8 text-primary" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground">
              {index + 1}
            </div>
          </div>
          
          {service.badge && (
            <div className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm">
              {service.badge}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className={`flex-1 ${wide ? '' : 'mb-6'}`}>
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
            {service.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {service.description}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all mt-auto">
          <span>Request Service</span>
          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
        </div>
      </div>

      {/* Image Overlay - Appears on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
      </div>
    </div>
  );
}
