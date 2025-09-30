import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import friyerImage from '@assets/generated_images/Fryer_maintenance_service_image_8d99d8b8.png';
import ovenImage from '@assets/generated_images/Commercial_oven_repair_service_87a6f7d4.png';
import griddleImage from '@assets/generated_images/Griddle_cleaning_service_image_2a1159fc.png';

export default function Services() {
  const services = [
    {
      title: 'Commercial Fryer Service',
      description: 'Complete maintenance, repair, and cleaning of all commercial fryer models. From oil filtration systems to heating elements.',
      image: friyerImage,
      features: ['Deep cleaning service', 'Temperature calibration', 'Oil system maintenance', 'Safety inspections'],
      badge: 'Most Popular'
    },
    {
      title: 'Commercial Oven Repair',
      description: 'Expert repair and maintenance of convection ovens, pizza ovens, and commercial baking equipment.',
      image: ovenImage,
      features: ['Thermostat repair', 'Door seal replacement', 'Ventilation cleaning', 'Electrical diagnostics'],
      badge: 'Emergency Available'
    },
    {
      title: 'Griddle & Grill Service',
      description: 'Professional cleaning, seasoning, and repair of flat-top griddles and commercial grills.',
      image: griddleImage,
      features: ['Surface restoration', 'Gas line inspection', 'Grease management', 'Heat distribution testing'],
      badge: 'Quick Service'
    },
    {
      title: 'Range & Cooktop Maintenance',
      description: 'Comprehensive service for gas and electric ranges, ensuring optimal performance and safety.',
      image: friyerImage,
      features: ['Burner cleaning', 'Gas line safety checks', 'Control calibration', 'Pilot light service'],
      badge: null
    },
    {
      title: 'Steamer Equipment Service',
      description: 'Specialized maintenance for commercial steamers, including descaling and pressure system checks.',
      image: ovenImage,
      features: ['Descaling service', 'Pressure testing', 'Steam trap inspection', 'Water line maintenance'],
      badge: null
    },
    {
      title: 'Commercial Warmer Repair',
      description: 'Service and repair of food warmers, heat lamps, and holding equipment to maintain food safety.',
      image: griddleImage,
      features: ['Temperature control', 'Heating element replacement', 'Thermostat calibration', 'Safety compliance'],
      badge: null
    }
  ];

  const handleServiceRequest = (serviceName: string) => {
    console.log(`Service request for: ${serviceName}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 bg-background overflow-hidden">
      {/* Organic Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Diagonal Accent */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary/10 to-transparent transform -skew-y-2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Asymmetric */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm" data-testid="badge-services-section">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Complete Cooking Equipment
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Maintenance & Repair
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From routine maintenance to emergency repairs, we keep your commercial kitchen equipment running efficiently and safely.
          </p>
        </div>

        {/* Services Grid - Organic Flowing Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transition-all duration-300 cursor-pointer hover-elevate"
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
              aria-label={`Request ${service.title.toLowerCase()} service - ${service.description}`}
            >
              {/* Organic Card Background */}
              <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden">
                {/* Service Image with Rounded Top */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  
                  {service.badge && (
                    <div 
                      className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-semibold backdrop-blur-sm"
                      data-testid={`badge-service-${index}`}
                    >
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                    {service.description}
                  </p>

                  {/* Service Features - Compact */}
                  <div className="space-y-2 mb-5">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Service CTA - Inline */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Request Service</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-primary/5 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Service CTA - Flowing Design */}
        <div className="mt-20 relative">
          {/* Organic Background Shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-transparent rounded-[3rem] transform -rotate-1" />
          
          <div className="relative bg-card/50 backdrop-blur-sm border border-destructive/20 rounded-[3rem] p-8 md:p-12 max-w-5xl mx-auto overflow-hidden">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-destructive/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-destructive/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 mb-6">
                <div className="w-2 h-2 bg-destructive rounded-full animate-pulse" />
                <span className="text-destructive font-semibold text-sm">24/7 Emergency</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Equipment Breakdown?
                <span className="block text-destructive">We're Here to Help</span>
              </h3>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Don't let equipment failure shut down your kitchen. Our emergency repair service is available 24/7 to get you back up and running.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-destructive text-destructive-foreground rounded-full px-8"
                  onClick={() => window.location.href = 'tel:+1-555-REPAIR-1'}
                  data-testid="button-emergency-call"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call (555) REPAIR-1
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="rounded-full px-8"
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
    </section>
  );
}