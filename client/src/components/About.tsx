import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Clock, Award, CheckCircle, Star } from 'lucide-react';
import teamImage from '@assets/generated_images/Professional_service_team_photo_8a6de4b2.png';

export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Restaurants Served', icon: Users },
    { number: '24/7', label: 'Emergency Service', icon: Shield },
    { number: '98%', label: 'Customer Satisfaction', icon: Star }
  ];

  const certifications = [
    'EPA Certified Technicians',
    'Commercial Gas Line Certified',
    'NFPA Safety Compliance',
    'Manufacturer Authorized Service',
    'Licensed & Fully Insured',
    'Health Department Approved'
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'When your equipment breaks down, we respond fast. Our technicians are available 24/7 for emergency repairs.'
    },
    {
      title: 'Expertise', 
      description: 'Our certified technicians undergo continuous training on the latest commercial cooking equipment and safety standards.'
    },
    {
      title: 'Trust',
      description: 'We build long-term relationships with our clients through honest communication, fair pricing, and quality workmanship.'
    }
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4" data-testid="badge-about-section">
            About Crossroads
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Trusted Partner in
            <span className="text-primary block">Commercial Kitchen Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Crossroads Restaurant Service has been the go-to choice for restaurant owners who demand reliable, professional equipment maintenance.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Why Restaurant Owners Choose Crossroads
            </h3>
            
            <div className="space-y-6 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Certifications & Licenses</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <img
                src={teamImage}
                alt="Crossroads Restaurant Service team"
                className="w-full h-auto object-cover"
                data-testid="img-team"
              />
            </Card>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 right-6 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <Card key={index} className="p-4 text-center bg-card hover-elevate" data-testid={`card-stat-${index}`}>
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-main-stat-${index}`}>
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-4" />
              <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Service Promise */}
        <Card className="bg-primary/5 border-primary/20 p-8 text-center">
          <CardContent className="p-0">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Service Promise</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              We guarantee fast response times, fair pricing, and quality work that keeps your kitchen running smoothly. 
              If you're not completely satisfied with our service, we'll make it right.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}