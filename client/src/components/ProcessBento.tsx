import { ArrowRight, Circle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProcessBento() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { 
      id: 1, 
      title: "Discover", 
      description: "We listen deeply to your vision, site, and lifestyle needs.",
      image: "/images/Macedon_Ranges_landscape_1_cb01c550.png",
      details: [
        "Initial consultation and site analysis",
        "Budget alignment and feasibility study",
        "Style preferences and lifestyle mapping",
        "Concept development and presentation"
      ]
    },
    { 
      id: 2, 
      title: "Design", 
      description: "Technical plans refined to perfection with your input throughout.",
      image: "/images/Featured_project_Casa_Lauren_e0dd4b0b.png",
      details: [
        "Detailed architectural drawings",
        "Material and finishes selection",
        "Fixed price contract development",
        "Construction timeline planning"
      ]
    },
    { 
      id: 3, 
      title: "Build", 
      description: "Meticulous execution with constant updates until handover.",
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
    <section 
      className="py-20 md:py-32 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white relative overflow-hidden"
      aria-labelledby="plan-heading"
    >
      {/* Floating geometric background elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-20 left-[15%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl" aria-hidden="true" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] mb-6 font-light">The Plan</p>
          <h2 
            id="plan-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95]"
          >
            <span className="block">Three</span>
            <span className="block italic text-[#D4AF37] ml-8 md:ml-16">Phases</span>
          </h2>
        </motion.div>

        {/* Phase Cards with Images */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.article
                key={step.id}
                className="group"
                data-testid={`step-${step.id}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                  {/* Image Side */}
                  <motion.div 
                    className="w-full md:w-1/2 relative overflow-hidden aspect-[4/3] bg-black/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* Gold overlay gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    
                    {/* Image */}
                    <motion.img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                    />
                    
                    {/* Number Badge */}
                    <div className="absolute -left-4 -top-4 w-20 h-20 md:w-24 md:h-24 bg-[#D4AF37] flex items-center justify-center z-20 shadow-2xl">
                      <span className="text-4xl md:text-5xl font-serif font-light text-black">{step.id}</span>
                    </div>

                    {/* Progress indicator on image */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
                      <motion.div 
                        className="h-full bg-[#D4AF37]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(step.id / 3) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content Side */}
                  <div className="w-full md:w-1/2 space-y-6">
                    {/* Title */}
                    <div>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details List */}
                    <ul className="space-y-3 pl-6 border-l-2 border-[#D4AF37]/30">
                      {step.details.map((detail, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-white/60 text-base md:text-lg font-light"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 + 0.3 }}
                        >
                          <span className="text-[#D4AF37] mr-3">•</span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative line */}
                    <div className="flex items-center gap-3 pt-4">
                      <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-transparent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(step.id / 3) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <Circle className="w-3 h-3 fill-[#D4AF37] text-[#D4AF37]" aria-hidden="true" />
                    </div>
                  </div>
                </div>

                {/* Connecting Arrow between phases */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex justify-center py-12">
                    <motion.div 
                      className="w-px h-20 bg-gradient-to-b from-[#D4AF37] to-transparent relative"
                      initial={{ height: 0 }}
                      whileInView={{ height: 80 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <ArrowRight className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-90 w-6 h-6 text-[#D4AF37]" />
                    </motion.div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-20 md:mt-28 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="group flex items-center gap-4 px-8 py-5 border-2 border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]">
            <span className="text-base md:text-lg font-light tracking-wider">Explore the Full Process</span>
            <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
