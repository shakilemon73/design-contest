import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, MapPin, Clock, Shield, Star } from 'lucide-react';
import logoImage from '@assets/CROSSROADS (central logo ) (transp backgr)_1758965407237.png';

export default function Footer() {
  const quickLinks = [
    { label: 'Emergency Service', href: 'tel:+1-555-REPAIR-1' },
    { label: 'Request Service', href: '#contact' },
    { label: 'Our Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Customer Reviews', href: '#testimonials' }
  ];

  const serviceAreas = [
    'Chicago, IL',
    'Milwaukee, WI', 
    'Madison, WI',
    'Green Bay, WI',
    'Rockford, IL',
    'Kenosha, WI'
  ];

  const services = [
    'Commercial Fryer Service',
    'Commercial Oven Repair',
    'Griddle & Grill Service',
    'Range & Cooktop Maintenance',
    'Steamer Equipment Service',
    'Emergency Repair Service'
  ];

  const certifications = [
    'EPA Certified',
    'Licensed & Insured', 
    'NFPA Compliant',
    'Manufacturer Authorized'
  ];

  const handleLinkClick = (href: string) => {
    console.log(`Footer link clicked: ${href}`);
    if (href.startsWith('tel:') || href.startsWith('mailto:')) {
      window.location.href = href;
    } else if (href.startsWith('#')) {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Crossroads Restaurant Service" className="h-10 w-10" />
              <div>
                <h3 className="text-lg font-bold text-foreground">Crossroads</h3>
                <p className="text-sm text-muted-foreground">Restaurant Service</p>
              </div>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Professional commercial cooking equipment service and repair. Trusted by restaurants across the Midwest for over 15 years.
            </p>

            {/* Trust Indicators */}
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>

            {/* Rating */}
            <Card className="p-4 bg-primary/5 border-primary/20">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">4.9/5 Rating</div>
                  <div className="text-xs text-muted-foreground">500+ Reviews</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors text-left"
                  data-testid={`link-footer-${index}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h5 className="font-medium text-foreground mb-4">Our Services</h5>
              <div className="space-y-2">
                {services.map((service, index) => (
                  <div key={index} className="text-sm text-muted-foreground">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Service Areas</h4>
            <div className="space-y-3">
              {serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">{area}</span>
                </div>
              ))}
            </div>

            <Badge variant="secondary" className="mt-4">
              Same-day service available in all areas
            </Badge>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">(555) REPAIR-1</div>
                  <div className="text-sm text-muted-foreground">24/7 Emergency Hotline</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">service@crossroadsrs.com</div>
                  <div className="text-sm text-muted-foreground">Response within 2 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Mon-Fri: 7AM-6PM</div>
                  <div className="text-sm text-muted-foreground">Emergency service 24/7</div>
                </div>
              </div>
            </div>

            {/* Emergency CTA */}
            <Card className="mt-6 p-4 bg-destructive/5 border-destructive/20">
              <div className="text-center">
                <div className="text-sm font-medium text-foreground mb-2">Equipment Emergency?</div>
                <Button
                  size="sm"
                  className="w-full bg-destructive"
                  onClick={() => handleLinkClick('tel:+1-555-REPAIR-1')}
                  data-testid="button-footer-emergency"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Crossroads Restaurant Service. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <button 
                onClick={() => console.log('Privacy policy clicked')}
                className="hover:text-primary transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => console.log('Terms clicked')}
                className="hover:text-primary transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => console.log('Accessibility clicked')}
                className="hover:text-primary transition-colors"
                data-testid="link-accessibility"
              >
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}