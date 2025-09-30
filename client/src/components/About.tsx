import { Shield, Users, Clock, Award, CheckCircle, Star, TrendingUp } from 'lucide-react';
import teamImage from '@assets/generated_images/Professional_service_team_photo_8a6de4b2.png';

export default function About() {
  const stats = [
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '500+', label: 'Restaurants Served', icon: Users },
    { number: '24/7', label: 'Emergency Service', icon: Shield },
    { number: '98%', label: 'Customer Satisfaction', icon: Star }
  ];

  const certifications = [
    'EPA Certified',
    'Gas Line Certified',
    'NFPA Compliance',
    'Manufacturer Authorized',
    'Licensed & Insured',
    'Health Dept Approved'
  ];

  const values = [
    {
      title: 'Reliability',
      description: 'When your equipment breaks down, we respond fast. Our technicians are available 24/7 for emergency repairs.',
      icon: Shield
    },
    {
      title: 'Expertise', 
      description: 'Our certified technicians undergo continuous training on the latest commercial cooking equipment and safety standards.',
      icon: Award
    },
    {
      title: 'Trust',
      description: 'We build long-term relationships with our clients through honest communication, fair pricing, and quality workmanship.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Diagonal Background Shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-bl from-primary/10 to-transparent transform skew-x-12" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent transform -skew-x-12" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Diagonal Asymmetric */}
        <div className="max-w-6xl mb-24 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-end">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-1 bg-primary transform -skew-x-12" />
                <span className="text-primary font-bold uppercase tracking-wider text-sm" data-testid="badge-about-section">
                  About Crossroads
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Your Trusted Partner</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  in Kitchen Success
                </span>
              </h2>
            </div>
            
            <div className="transform lg:translate-y-8">
              <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary/30 pl-6">
                For over 15 years, Crossroads Restaurant Service has been the go-to choice for restaurant owners who demand reliable, professional equipment maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid - Asymmetric Broken Grid */}
        <div className="grid lg:grid-cols-12 gap-8 mb-24">
          {/* Team Image - Diagonal Frame */}
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="relative transform lg:-rotate-1 transition-transform hover:rotate-0">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* Diagonal Accent Border */}
                <div className="absolute -top-4 -left-4 w-full h-full border-4 border-primary/20 rounded-[3rem] transform rotate-3" />
                
                <div className="relative rounded-[3rem] overflow-hidden">
                  <img
                    src={teamImage}
                    alt="Crossroads Restaurant Service team"
                    className="w-full h-auto object-cover"
                    data-testid="img-team"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
            
            {/* Floating Stats - Asymmetric */}
            <div className="absolute -bottom-12 -right-12 lg:-right-24 grid grid-cols-2 gap-4 transform rotate-1">
              {stats.slice(0, 2).map((stat, index) => (
                <div 
                  key={index} 
                  className={`p-6 bg-card border-2 border-border rounded-3xl text-center hover-elevate shadow-lg transform ${
                    index === 1 ? 'translate-y-6 -rotate-2' : 'rotate-2'
                  }`}
                  data-testid={`card-stat-${index}`}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Values - Staggered Cards */}
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Why Restaurant Owners Choose Crossroads
            </h3>
            
            {values.map((value, index) => (
              <div 
                key={index} 
                className={`group relative transform transition-all hover:-translate-y-1 ${
                  index === 1 ? 'lg:translate-x-8' : index === 2 ? 'lg:translate-x-4' : ''
                }`}
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                <div className="relative bg-card border border-border rounded-2xl p-6 hover-elevate">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground mb-2 text-lg">{value.title}</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid - Broken Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`relative group transform transition-all hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:-rotate-1' : 'lg:rotate-1'
              } hover:rotate-0`}
              data-testid={`card-main-stat-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform" />
              <div className="relative p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications - Flowing Pills */}
        <div className="max-w-4xl mx-auto mb-24">
          <h4 className="font-bold text-foreground mb-6 text-lg text-center">Certifications & Licenses</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border hover-elevate transform ${
                  index % 3 === 0 ? 'rotate-1' : index % 3 === 1 ? '-rotate-1' : ''
                } hover:rotate-0 transition-transform`}
              >
                <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span className="text-sm text-foreground font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Promise - Diagonal Banner */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-[3rem] transform rotate-1" />
          <div className="relative bg-card/80 backdrop-blur-sm border-2 border-primary/20 rounded-[3rem] p-12 md:p-16 text-center overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Service Promise</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                We guarantee fast response times, fair pricing, and quality work that keeps your kitchen running smoothly. 
                If you're not completely satisfied with our service, we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
