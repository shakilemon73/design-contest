import { MapPin, Sparkles, Mountain, Sun, Wind } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import landscape1 from "@assets/generated_images/Macedon_Ranges_landscape_1_cb01c550.png";
import landscape2 from "@assets/generated_images/Macedon_Ranges_expertise_2_ffbb8bea.png";
import landscape3 from "@assets/generated_images/Craftsmanship_detail_image_eb1b3805.png";

export default function ExpertiseShowcase() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'grid' | 'mosaic'>('mosaic');

  const locations = [
    "Gisborne", "Macedon", "Mount Macedon", "Woodend",
    "Kyneton", "Riddells Creek", "Romsey", "Lancefield"
  ];

  const expertisePoints = [
    { icon: Mountain, label: "Terrain Mastery", value: "15+ Years" },
    { icon: Sun, label: "Solar Precision", value: "100%" },
    { icon: Wind, label: "Microclimate", value: "Expert" }
  ];

  return (
    <section 
      className="relative py-32 md:py-48 bg-gradient-to-br from-[#F5F5F0] via-white to-[#FAFAFA] overflow-hidden"
      aria-label="Place expertise"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[10%] w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-[15%] w-80 h-80 bg-[#FFD700]/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />

        {/* Topographic lines */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="topo" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0 100 Q50 80, 100 100 T200 100" stroke="#D4AF37" fill="none" strokeWidth="1"/>
              <path d="M0 120 Q50 100, 100 120 T200 120" stroke="#D4AF37" fill="none" strokeWidth="1"/>
              <path d="M0 140 Q50 120, 100 140 T200 140" stroke="#D4AF37" fill="none" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#topo)"/>
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-black/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
          >
            <Mountain className="w-5 h-5 text-[#D4AF37]" />
            <p className="text-sm tracking-[0.3em] uppercase text-black/40">Place Expertise</p>
            <Sparkles className="w-5 h-5 text-[#D4AF37]" />
          </motion.div>

          <motion.h2 
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl mb-10 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="block">Built for the</span>
            <motion.span 
              className="block italic bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              Macedon Ranges
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-black/70 text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Microclimates shift within kilometers. Bushfire overlays demand precision. Siting for light, views, and privacy requires intimate local knowledge. We've built here for over 15 years—we understand what works.
          </motion.p>

          {/* Expertise Stats */}
          <motion.div
            className="flex justify-center gap-8 mt-12 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {expertisePoints.map((point, idx) => (
              <motion.div
                key={point.label}
                className="group flex items-center gap-4 px-6 py-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-black/5 hover:border-[#D4AF37]/30 transition-all"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + idx * 0.1 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <point.icon className="w-8 h-8 text-[#D4AF37]" />
                </motion.div>
                <div className="text-left">
                  <p className="text-sm text-black/50 mb-1">{point.label}</p>
                  <p className="text-lg font-light">{point.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Gallery with Video Toggle */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {/* View Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              { type: 'mosaic' as const, label: 'Mosaic View' },
              { type: 'grid' as const, label: 'Grid View' }
            ].map((view) => (
              <motion.button
                key={view.type}
                onClick={() => setActiveView(view.type)}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeView === view.type
                    ? 'bg-black text-white'
                    : 'bg-white/60 text-black/70 hover:bg-black/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {view.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeView === 'mosaic' ? (
              <motion.div
                key="mosaic"
                className="grid grid-cols-4 gap-4 max-w-6xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {/* Large feature */}
                <motion.div 
                  className="col-span-2 row-span-2 relative aspect-square rounded-3xl overflow-hidden group"
                  whileHover={{ scale: 1.02, zIndex: 20 }}
                >
                  <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                  </motion.video>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <motion.div
                    className="absolute bottom-6 left-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-2xl font-serif font-light">Macedon Vista</p>
                  </motion.div>
                </motion.div>

                {/* Top right */}
                <motion.div 
                  className="col-span-2 relative aspect-[2/1] rounded-3xl overflow-hidden group"
                  whileHover={{ scale: 1.05, zIndex: 20 }}
                >
                  <motion.img 
                    src={landscape2} 
                    alt="Expertise" 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                </motion.div>

                {/* Bottom right small */}
                <motion.div 
                  className="relative aspect-square rounded-3xl overflow-hidden group"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                >
                  <motion.img 
                    src={landscape3} 
                    alt="Detail" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Bottom right video */}
                <motion.div 
                  className="relative aspect-square rounded-3xl overflow-hidden group"
                  whileHover={{ scale: 1.1, zIndex: 20 }}
                >
                  <motion.video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                  </motion.video>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                {[
                  { type: 'video', src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
                  { type: 'image', src: landscape2 },
                  { type: 'image', src: landscape3 },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden"
                    whileHover={{ scale: 1.05, y: -10 }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {item.type === 'video' ? (
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src={item.src} type="video/mp4" />
                      </video>
                    ) : (
                      <motion.img 
                        src={item.src} 
                        alt="Macedon Ranges" 
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Location Pills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.p
            className="text-center text-black/50 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            Locations we know intimately
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            {locations.map((location, idx) => (
              <motion.a
                key={location}
                href={`/projects?location=${location.toLowerCase().replace(' ', '-')}`}
                className="group relative px-6 py-4 bg-white border border-black/10 hover:border-[#D4AF37] rounded-2xl overflow-hidden transition-all min-h-[56px]"
                onMouseEnter={() => setHoveredLocation(location)}
                onMouseLeave={() => setHoveredLocation(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + idx * 0.05 }}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {hoveredLocation === location && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 to-[#FFD700]/10"
                    layoutId="locationHover"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                
                <div className="relative flex items-center gap-3">
                  <motion.div
                    animate={hoveredLocation === location ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  </motion.div>
                  <span className="text-base font-light">{location}</span>
                </div>

                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                  animate={hoveredLocation === location ? { x: ["0%", "200%"] } : {}}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="group relative px-12 py-5 overflow-hidden rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#FFD700] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 border-2 border-[#D4AF37] group-hover:border-transparent transition-colors" />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <span className="relative font-light tracking-wider uppercase text-[#D4AF37] group-hover:text-black transition-colors text-lg">
              Discuss Your Site
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
