import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
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
      image: friyerImage, // todo: remove mock functionality - replace with appropriate image
      features: ['Burner cleaning', 'Gas line safety checks', 'Control calibration', 'Pilot light service'],
      badge: null
    },
    {
      title: 'Steamer Equipment Service',
      description: 'Specialized maintenance for commercial steamers, including descaling and pressure system checks.',
      image: ovenImage, // todo: remove mock functionality - replace with appropriate image  
      features: ['Descaling service', 'Pressure testing', 'Steam trap inspection', 'Water line maintenance'],
      badge: null
    },
    {
      title: 'Commercial Warmer Repair',
      description: 'Service and repair of food warmers, heat lamps, and holding equipment to maintain food safety.',
      image: griddleImage, // todo: remove mock functionality - replace with appropriate image
      features: ['Temperature control', 'Heating element replacement', 'Thermostat calibration', 'Safety compliance'],
      badge: null
    }
  ];

  const handleServiceRequest = (serviceName: string) => {
    console.log(`Service request for: ${serviceName}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-services-section">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Complete Cooking Equipment
            <span className="text-primary block">Maintenance & Repair</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From routine maintenance to emergency repairs, we keep your commercial kitchen equipment running efficiently and safely.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 group border-2 hover:border-primary/20"
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
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {service.badge && (
                  <Badge 
                    className="absolute top-4 right-4 bg-primary text-primary-foreground shadow-lg"
                    data-testid={`badge-service-${index}`}
                  >
                    {service.badge}
                  </Badge>
                )}
                {/* Click indicator overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                    Click to Request Service
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Service Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Service CTA */}
                <Button
                  variant="outline"
                  className="w-full group"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    handleServiceRequest(service.title);
                  }}
                  data-testid={`button-service-${index}`}
                  aria-label={`Request ${service.title.toLowerCase()} service - goes to contact form`}
                >
                  Request Service
                  <ArrowRight className="h-4 w-4 ml-2 transform transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Service CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-destructive/5 border-destructive/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Emergency Equipment Breakdown?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Don't let equipment failure shut down your kitchen. Our emergency repair service is available 24/7 to get you back up and running.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-destructive text-destructive-foreground"
                  onClick={() => window.location.href = 'tel:+1-555-REPAIR-1'}
                  data-testid="button-emergency-call"
                >
                  Call Emergency Line: (555) REPAIR-1
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => handleServiceRequest('Emergency Service')}
                  data-testid="button-emergency-request"
                >
                  Request Emergency Service
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}