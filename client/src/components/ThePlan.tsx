import { ArrowRight, Search, Palette, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ThePlan() {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description: "Align brief, site, style, budget.",
      output: "Output: costed concept + band.",
      image: "/images/Macedon_Ranges_landscape_1_cb01c550.png",
      details: [
        "Initial consultation and site analysis",
        "Budget alignment and feasibility study",
        "Style preferences and lifestyle mapping",
        "Concept development and presentation"
      ]
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      description: "Lock drawings, selections, pricing.",
      output: "Output: itemised inclusions, finishes, program.",
      image: "/images/Featured_project_Casa_Lauren_e0dd4b0b.png",
      details: [
        "Detailed architectural drawings",
        "Material and finishes selection",
        "Fixed price contract development",
        "Construction timeline planning"
      ]
    },
    {
      number: "03",
      icon: Hammer,
      title: "Build",
      description: "Craftsmanship + weekly updates.",
      output: "Output: quality checks, on time finish.",
      image: "/images/Craftsmanship_detail_image_eb1b3805.png",
      details: [
        "Expert craftsmen and quality materials",
        "Weekly progress updates and walkthroughs",
        "Rigorous quality control checkpoints",
        "On-time handover and post-build care"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl mb-6" data-testid="text-plan-heading">
            The Plan
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Three carefully orchestrated phases that transform your vision into reality
          </p>
        </motion.div>

        {/* Phase Cards */}
        <div className="space-y-12 md:space-y-20">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div 
                key={index} 
                className={`group relative`}
                data-testid={`card-step-${index + 1}`}
                onMouseEnter={() => setActivePhase(index)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                  {/* Image Side */}
                  <motion.div 
                    className="w-full md:w-1/2 relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <motion.img 
                      src={phase.image} 
                      alt={phase.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    
                    {/* Floating Number Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                        <div className="relative backdrop-blur-md bg-background/40 border border-primary/30 rounded-full w-20 h-20 flex items-center justify-center">
                          <span className="font-serif text-3xl font-light text-primary">{phase.number}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 space-y-6">
                    {/* Icon & Title */}
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center transform group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                          <Icon className="w-7 h-7 text-primary" />
                        </div>
                        <h3 className="font-serif text-3xl md:text-5xl font-light group-hover:text-primary transition-colors duration-300">
                          {phase.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg md:text-xl text-muted-foreground">
                        {phase.description}
                      </p>
                    </div>

                    {/* Details List */}
                    <ul className="space-y-3 pl-4 border-l-2 border-primary/30">
                      {phase.details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="text-muted-foreground transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="text-primary mr-2">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Output */}
                    <div className="pt-4">
                      <div className="inline-block backdrop-blur-sm bg-primary/5 border border-primary/20 rounded-lg px-6 py-3">
                        <p className="text-sm font-medium text-primary/90 italic">
                          {phase.output}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow (except last) */}
                {index < phases.length - 1 && (
                  <div className="hidden md:flex justify-center py-8">
                    <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent relative">
                      <ArrowRight className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-90 w-6 h-6 text-primary/50" />
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 md:mt-24">
          <Button 
            size="lg" 
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg" 
            data-testid="button-see-process"
          >
            Explore the Full Process
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
