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
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Curved Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-muted/20 transform -skew-y-1" />
      
      {/* Organic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Asymmetric */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm" data-testid="badge-about-section">About Crossroads</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Your Trusted Partner in
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Commercial Kitchen Success
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            For over 15 years, Crossroads Restaurant Service has been the go-to choice for restaurant owners who demand reliable, professional equipment maintenance.
          </p>
        </div>

        {/* Content Grid - Flowing Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content with Organic Elements */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Why Restaurant Owners Choose Crossroads
            </h3>
            
            <div className="space-y-6 mb-10">
              {values.map((value, index) => (
                <div key={index} className="group relative">
                  <div className="absolute left-0 top-0 w-12 h-full bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2 text-lg">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications - Flowing Pills */}
            <div>
              <h4 className="font-bold text-foreground mb-5 text-lg">Certifications & Licenses</h4>
              <div className="flex flex-wrap gap-3">
                {certifications.map((cert, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover-elevate"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Image with Organic Frame */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-[3rem] overflow-hidden border-4 border-primary/10">
              <img
                src={teamImage}
                alt="Crossroads Restaurant Service team"
                className="w-full h-auto object-cover"
                data-testid="img-team"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            </div>
            
            {/* Floating Organic Stats */}
            <div className="absolute -bottom-8 -left-8 right-8 flex gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <div 
                  key={index} 
                  className="flex-1 p-5 text-center bg-card border border-border rounded-3xl shadow-lg hover-elevate" 
                  data-testid={`card-stat-${index}`}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Grid - Circular Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group"
              data-testid={`card-main-stat-${index}`}
            >
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform group-hover:scale-105 transition-transform" />
              <div className="relative p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Promise - Organic Banner */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-[3rem] transform rotate-1" />
          <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-[3rem] p-10 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Service Promise</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                We guarantee fast response times, fair pricing, and quality work that keeps your kitchen running smoothly. 
                If you're not completely satisfied with our service, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent transform skew-y-1" />
    </section>
  );
}