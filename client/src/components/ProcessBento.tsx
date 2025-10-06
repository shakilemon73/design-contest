import { ArrowRight, Circle, Play, Sparkles } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState, type MouseEvent } from "react";

export default function ProcessBento() {
  const [activeStep, setActiveStep] = useState(0);
  const [showVideo, setShowVideo] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const steps = [
    { 
      id: 1, 
      title: "Discover", 
      description: "We listen deeply to your vision, site, and lifestyle needs.",
      image: "/images/Macedon_Ranges_landscape_1_cb01c550.png",
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      color: "from-amber-500/20 to-yellow-600/20",
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
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      color: "from-orange-500/20 to-red-600/20",
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
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      color: "from-yellow-500/20 to-amber-600/20",
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
      className="relative py-20 md:py-32 bg-gradient-to-br from-black via-[#1a1a1a] to-black text-white overflow-hidden"
      aria-labelledby="plan-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 right-[10%] w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[15%] w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px]"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div 
          className="mb-20 md:mb-32 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <p className="text-xs tracking-[0.4em] uppercase text-[#D4AF37] font-light">The Plan</p>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </motion.div>
          
          <h2 
            id="plan-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-9xl leading-[0.9] mb-6"
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Three
            </motion.span>
            <motion.span 
              className="block italic bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent ml-8 md:ml-24"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Phases
            </motion.span>
          </h2>
          
          <motion.div
            className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          />
        </motion.div>

        {/* Phase Cards with 3D Effects */}
        <div className="space-y-20 md:space-y-32">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
            const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
            
            const springConfig = { damping: 20, stiffness: 150 };
            const rotateXSpring = useSpring(rotateX, springConfig);
            const rotateYSpring = useSpring(rotateY, springConfig);

            function handleMouseMove(e: MouseEvent<HTMLElement>) {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              mouseX.set(e.clientX - centerX);
              mouseY.set(e.clientY - centerY);
            }

            function handleMouseLeave() {
              mouseX.set(0);
              mouseY.set(0);
              setHoveredCard(null);
            }
            
            return (
              <motion.article
                key={step.id}
                className="group perspective-1000"
                data-testid={`step-${step.id}`}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => setHoveredCard(step.id)}
              >
                <motion.div 
                  className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}
                  style={{
                    rotateX: rotateXSpring,
                    rotateY: rotateYSpring,
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Media Side with 3D Transform */}
                  <motion.div 
                    className="w-full md:w-1/2 relative"
                    whileHover={{ scale: 1.05, z: 50 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] bg-black/50 rounded-2xl shadow-2xl">
                      {showVideo === step.id ? (
                        /* Video Player */
                        <motion.div 
                          className="relative w-full h-full"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover rounded-2xl"
                            aria-label={`${step.title} phase video`}
                          >
                            <source src={step.videoUrl} type="video/mp4" />
                          </video>
                          
                          <motion.button
                            onClick={() => setShowVideo(null)}
                            className="absolute top-4 right-4 z-30 p-3 bg-black/70 backdrop-blur-md hover:bg-[#D4AF37] transition-all rounded-full group/btn"
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Circle className="w-5 h-5 text-white group-hover/btn:text-black transition-colors" />
                          </motion.button>
                        </motion.div>
                      ) : (
                        /* Image with Interactive Overlay */
                        <>
                          {/* Animated gradient overlay */}
                          <motion.div 
                            className={`absolute inset-0 bg-gradient-to-br ${step.color} z-10`}
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                          />
                          
                          {/* Image */}
                          <motion.img 
                            src={step.image} 
                            alt={step.title}
                            className="w-full h-full object-cover rounded-2xl"
                            whileHover={{ scale: 1.15 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                          
                          {/* Magnetic Play Button */}
                          <motion.button
                            onClick={() => setShowVideo(step.id)}
                            className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                          >
                            <motion.div 
                              className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-2xl"
                              whileHover={{ 
                                scale: 1.2,
                                rotate: 90,
                                boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)"
                              }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                              <Play className="w-12 h-12 md:w-14 md:h-14 text-black fill-black translate-x-1" />
                            </motion.div>
                          </motion.button>

                          {/* Shine effect on hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full z-15 rounded-2xl"
                            animate={hoveredCard === step.id ? { x: ["0%", "200%"] } : {}}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                          />
                        </>
                      )}
                      
                      {/* Floating Number Badge with 3D effect */}
                      <motion.div 
                        className="absolute -left-6 -top-6 z-30"
                        whileHover={{ scale: 1.15, rotate: 12 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <div className="relative">
                          <div className="absolute inset-0 bg-[#D4AF37] blur-xl rounded-lg opacity-70" />
                          <div className="relative w-24 h-24 md:w-28 md:h-28 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] flex items-center justify-center shadow-2xl transform rotate-6">
                            <span className="text-5xl md:text-6xl font-serif font-light text-black">{step.id}</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Animated Progress Bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/10 z-20 rounded-b-2xl overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(step.id / 3) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                        >
                          <motion.div
                            className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
                            animate={{ x: ["-100%", "200%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Content Side with Staggered Animations */}
                  <div className="w-full md:w-1/2 space-y-8">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <motion.h3 
                        className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 bg-gradient-to-r from-white via-white to-[#D4AF37] bg-clip-text text-transparent"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {step.title}
                      </motion.h3>
                      <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>

                    {/* Enhanced Details List */}
                    <ul className="space-y-4 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent" />
                      {step.details.map((detail, idx) => (
                        <motion.li 
                          key={idx} 
                          className="text-white/70 text-lg md:text-xl font-light pl-8 relative group/item"
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + 0.4 }}
                          whileHover={{ x: 10 }}
                        >
                          <motion.span 
                            className="absolute left-0 text-[#D4AF37] text-2xl"
                            whileHover={{ scale: 1.5, rotate: 90 }}
                          >
                            •
                          </motion.span>
                          {detail}
                          <motion.div
                            className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[#D4AF37]/0 via-[#D4AF37]/50 to-[#D4AF37]/0 opacity-0 group-hover/item:opacity-100"
                            transition={{ duration: 0.3 }}
                          />
                        </motion.li>
                      ))}
                    </ul>

                    {/* Decorative Animated Line */}
                    <motion.div 
                      className="flex items-center gap-4 pt-6"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div className="flex-1 h-px bg-white/20 relative overflow-hidden">
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-transparent"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(step.id / 3) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.8 }}
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.5, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Circle className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Connecting Animated Arrow */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex justify-center py-16">
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, height: 0 }}
                      whileInView={{ opacity: 1, height: 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                      <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] via-[#D4AF37]/50 to-transparent relative">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-b from-[#FFD700] to-transparent"
                          animate={{ y: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="absolute -bottom-1 left-1/2 -translate-x-1/2 rotate-90 w-8 h-8 text-[#D4AF37]" />
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>

        {/* Enhanced CTA */}
        <motion.div 
          className="mt-24 md:mt-32 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button 
            className="group relative px-12 py-6 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-2 border-[#D4AF37]/50 group-hover:border-transparent transition-colors duration-300" />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative flex items-center gap-4">
              <span className="text-lg md:text-xl font-light tracking-wider text-white group-hover:text-black transition-colors duration-300">
                Explore the Full Process
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors duration-300" />
              </motion.div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
