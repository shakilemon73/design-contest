import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: '',
    message: ''
  });

  const serviceTypes = [
    'Commercial Fryer Service',
    'Commercial Oven Repair', 
    'Griddle & Grill Service',
    'Range & Cooktop Maintenance',
    'Steamer Equipment Service',
    'Commercial Warmer Repair',
    'Preventive Maintenance Plan',
    'Emergency Repair Service',
    'Equipment Assessment',
    'Other'
  ];

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency - Equipment Down', color: 'destructive' },
    { value: 'urgent', label: 'Urgent - Within 24 Hours', color: 'orange' },
    { value: 'standard', label: 'Standard - Within 3 Days', color: 'primary' },
    { value: 'maintenance', label: 'Scheduled Maintenance', color: 'secondary' }
  ];

  const handleInputChange = (field: string, value: string) => {
    console.log(`Form field ${field} changed to: ${value}`);
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    console.log('Contact form submitted:', formData);
    
    // todo: remove mock functionality - integrate with real backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Service Request Submitted",
        description: "We'll contact you within 2 hours to schedule your service.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      details: '(555) REPAIR-1',
      subtitle: '24/7 Emergency Service',
      action: () => window.location.href = 'tel:+1-555-REPAIR-1'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'service@crossroadsrs.com',
      subtitle: 'Response within 2 hours',
      action: () => window.location.href = 'mailto:service@crossroadsrs.com'
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Chicago & Milwaukee Metro',
      subtitle: 'Same-day service available',
      action: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 7AM-6PM',
      subtitle: 'Emergency service 24/7',
      action: null
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto text-center p-12">
            <CardContent className="p-0">
              <CheckCircle className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Request Submitted Successfully!</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Thank you for choosing Crossroads Restaurant Service. Our team will contact you within 2 hours to schedule your service appointment.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>What happens next:</strong>
                </p>
                <div className="text-left space-y-2 max-w-md mx-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">We'll call you to confirm details</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Schedule a convenient service time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">Dispatch our certified technician</span>
                  </div>
                </div>
              </div>
              <Button 
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '', business: '', phone: '', email: '', 
                    serviceType: '', urgency: '', message: ''
                  });
                }}
                variant="outline"
                className="mt-6"
                data-testid="button-submit-another"
              >
                Submit Another Request
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-contact-section">
            Contact Us
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Your Equipment
            <span className="text-primary block">Back to Peak Performance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to schedule service? Fill out our quick form or call our emergency hotline for immediate assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
            
            {contactInfo.map((info, index) => {
              if (info.action) {
                const isPhone = info.title.includes('Phone') || info.title.includes('Hotline');
                const isMail = info.title.includes('Email');
                const href = isPhone ? 'tel:+1-555-REPAIR-1' : isMail ? 'mailto:service@crossroadsrs.com' : '#';
                
                return (
                  <a
                    key={index}
                    href={href}
                    className="block p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors duration-200 group"
                    data-testid={`card-contact-${index}`}
                    aria-label={`${info.title}: ${info.details} - ${info.subtitle}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-md">
                        <info.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                        <p className="text-foreground font-medium">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-primary" aria-hidden="true">→</span>
                      </div>
                    </div>
                  </a>
                );
              } else {
                return (
                  <Card key={index} className="p-6" data-testid={`card-contact-${index}`}>
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-md">
                          <info.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              }
            })}

            {/* Emergency Notice */}
            <Card className="bg-destructive/5 border-destructive/20 p-6">
              <CardContent className="p-0">
                <h4 className="font-semibold text-foreground mb-2">Equipment Emergency?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  If your equipment is down and affecting operations, call our emergency hotline for immediate assistance.
                </p>
                <Button 
                  className="w-full bg-destructive group"
                  onClick={() => window.location.href = 'tel:+1-555-REPAIR-1'}
                  data-testid="button-emergency-contact"
                  aria-label="Call emergency line at 555 REPAIR-1 for immediate equipment assistance"
                >
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  Call Emergency Line
                  <AlertTriangle className="h-4 w-4 ml-2 text-destructive-foreground" aria-hidden="true" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Service Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Service Request Form</h3>
                <p className="text-muted-foreground">
                  Provide your details and we'll get back to you within 2 hours to schedule your service.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Contact Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                        data-testid="input-name"
                        aria-label="Contact name - enter the name of the person we should contact about this service request"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Business Name *
                      </label>
                      <Input
                        value={formData.business}
                        onChange={(e) => handleInputChange('business', e.target.value)}
                        placeholder="Restaurant or business name"
                        required
                        data-testid="input-business"
                        aria-label="Business name - enter your restaurant or business name where the equipment service is needed"
                      />
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Service Type *
                      </label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger data-testid="select-service-type">
                          <SelectValue placeholder="Select service needed" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Urgency Level *
                      </label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger data-testid="select-urgency">
                          <SelectValue placeholder="How urgent is this?" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Additional Details
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Describe the issue, equipment model, or any other relevant details..."
                      rows={4}
                      data-testid="textarea-message"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full group"
                    disabled={isSubmitting || !formData.name || !formData.business || !formData.phone || !formData.email || !formData.serviceType || !formData.urgency}
                    data-testid="button-submit-request"
                    aria-label={isSubmitting ? "Processing your service request..." : "Submit service request to get contacted within 2 hours"}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 transform transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
                        Submit Service Request
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to be contacted by Crossroads Restaurant Service regarding your service request.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}