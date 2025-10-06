import { useState, type MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, DollarSign, Home, Calendar, Sparkles, Play, Eye, Award } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import featuredImage from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";
import project1 from "@assets/generated_images/Project_gallery_image_1_6ad66448.png";
import project2 from "@assets/generated_images/Project_gallery_image_2_79b8fb06.png";
import project3 from "@assets/generated_images/Project_gallery_image_3_236c9d46.png";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeMedia, setActiveMedia] = useState<'image' | 'video' | 'split'>('image');
  
  const filters = ["All", "Location", "Style", "Budget"];

  const recentProjects = [
    {
      id: 1,
      image: project1,
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      title: "Mount Macedon Retreat",
      location: "Mount Macedon",
      style: "Contemporary",
      budget: "$1.2M"
    },
    {
      id: 2,
      image: project2,
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      title: "Gisborne Estate",
      location: "Gisborne",
      style: "Modern",
      budget: "$1.5M"
    },
    {
      id: 3,
      image: project3,
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      title: "Woodend Residence",
      location: "Woodend",
      style: "Classic",
      budget: "$980K"
    }
  ];

  return (
    <>
      {/* Proof 1 — Featured project with Split Screen Video/Image */}
      <section 
        className="relative py-32 md:py-48 bg-gradient-to-br from-black via-[#0a0a0a] to-black text-white overflow-hidden"
        aria-labelledby="featured-project-heading"
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[150px]"
            animate={{ 
              scale: [1, 1.4, 1],
              x: [0, 100, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          
          <motion.div
            className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#FFD700]/10 rounded-full blur-[150px]"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -100, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          {/* Enhanced Header */}
          <motion.div
            className="text-center mb-20 md:mb-28"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
            >
              <Award className="w-5 h-5 text-[#D4AF37]" />
              <p className="text-sm tracking-[0.3em] uppercase text-[#D4AF37] font-light">Featured Work</p>
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
            </motion.div>
            
            <motion.h2 
              id="featured-project-heading"
              className="font-serif font-light text-6xl md:text-8xl lg:text-9xl mb-6 leading-[0.9]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="block bg-gradient-to-r from-white via-[#D4AF37] to-white bg-clip-text text-transparent">
                Casa
              </span>
              <span className="block italic ml-12 md:ml-32 bg-gradient-to-l from-[#FFD700] via-[#D4AF37] to-[#FFD700] bg-clip-text text-transparent">
                Lauren
              </span>
            </motion.h2>

            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#FFD700]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 - i * 20 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Split Screen Media Layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Left: Video + Image Combination */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Media Toggle */}
              <div className="flex gap-3 mb-6">
                {[
                  { type: 'image' as const, label: 'Photos', icon: Eye },
                  { type: 'video' as const, label: 'Video', icon: Play },
                  { type: 'split' as const, label: 'Both', icon: Sparkles }
                ].map((option) => (
                  <motion.button
                    key={option.type}
                    onClick={() => setActiveMedia(option.type)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${
                      activeMedia === option.type
                        ? 'bg-gradient-to-r from-[#D4AF37] to-[#FFD700] text-black'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <option.icon className="w-4 h-4" />
                    <span className="text-sm font-light">{option.label}</span>
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {activeMedia === 'image' && (
                  <motion.div
                    key="image"
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/30 to-transparent z-10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    />
                    <motion.img 
                      src={featuredImage} 
                      alt="Casa Lauren"
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                      whileHover={{ x: ["0%", "200%"] }}
                      transition={{ duration: 1 }}
                    />
                  </motion.div>
                )}

                {activeMedia === 'video' && (
                  <motion.div
                    key="video"
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                    <motion.div
                      className="absolute bottom-6 left-6 z-20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-3 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                        <span className="text-sm text-white/90">Live Tour</span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}

                {activeMedia === 'split' && (
                  <motion.div
                    key="split"
                    className="grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <motion.div 
                      className="relative aspect-square rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                    >
                      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                      </video>
                    </motion.div>
                    <motion.div 
                      className="relative aspect-square rounded-xl overflow-hidden"
                      whileHover={{ scale: 1.05, zIndex: 10 }}
                    >
                      <img src={featuredImage} alt="Casa Lauren" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div 
                      className="relative aspect-square rounded-xl overflow-hidden col-span-2"
                      whileHover={{ scale: 1.02, zIndex: 10 }}
                    >
                      <img src={featuredImage} alt="Casa Lauren detail" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right: Enhanced Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.p 
                className="text-white/90 text-2xl md:text-3xl font-light leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Contemporary sanctuary in <span className="text-[#D4AF37] font-medium">Trentham</span> completed on schedule and within budget. Natural materials throughout, floor-to-ceiling views, and meticulous compliance with bushfire regulations.
              </motion.p>

              {/* Glassmorphic Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: MapPin, label: "Location", value: "Trentham", color: "from-blue-500/20 to-cyan-500/20" },
                  { icon: Calendar, label: "Timeline", value: "10 months", color: "from-purple-500/20 to-pink-500/20" },
                  { icon: Home, label: "Size", value: "485m²", color: "from-green-500/20 to-emerald-500/20" },
                  { icon: DollarSign, label: "Investment", value: "$1.8M", color: "from-orange-500/20 to-red-500/20" }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.label}
                    className={`group relative p-6 rounded-2xl backdrop-blur-md bg-gradient-to-br ${stat.color} border border-white/10 overflow-hidden`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/20 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="w-8 h-8 text-[#D4AF37] mb-3" />
                      </motion.div>
                      <p className="text-xs text-white/50 mb-2 uppercase tracking-wider">{stat.label}</p>
                      <p className="font-light text-2xl">{stat.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Cinematic Quote */}
              <motion.div
                className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#D4AF37] via-[#FFD700] to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                <div className="absolute top-6 left-6 text-[#D4AF37]/20 text-8xl font-serif">"</div>
                <p className="relative text-2xl md:text-3xl font-serif font-light italic text-white/90 mb-6 pl-12">
                  We always knew what was next. The finish is superb.
                </p>
                <footer className="text-white/60 pl-12">
                  — Lauren & David Chen
                </footer>
              </motion.div>

              {/* Stunning CTA */}
              <motion.button
                className="group relative w-full px-10 py-6 overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 border-2 border-[#D4AF37]/50 group-hover:border-transparent transition-colors" />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                <div className="relative flex items-center justify-center gap-4">
                  <span className="text-xl font-light tracking-wide text-white group-hover:text-black transition-colors">
                    Explore Full Case Study
                  </span>
                  <motion.div
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                  </motion.div>
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof 2 — Immersive Projects Gallery */}
      <section 
        className="relative py-32 md:py-48 bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F5F0] overflow-hidden"
        aria-labelledby="projects-grid-heading"
      >
        {/* Subtle animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <motion.div
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-black/5"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <p className="text-xs tracking-[0.3em] uppercase text-black/40">Portfolio</p>
              </motion.div>
              <h2 
                id="projects-grid-heading"
                className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-tight"
              >
                <span className="block">Recent</span>
                <span className="block italic bg-gradient-to-r from-black via-black to-[#D4AF37] bg-clip-text text-transparent ml-8 md:ml-20">
                  Masterpieces
                </span>
              </h2>
            </motion.div>

            {/* Morphing Filters */}
            <motion.div 
              className="flex gap-3 flex-wrap"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {filters.map((filter, idx) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-6 py-3 text-sm font-light tracking-wide overflow-hidden rounded-full ${
                    activeFilter === filter
                      ? 'text-white'
                      : 'text-black/70'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeFilter === filter && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black to-[#D4AF37]"
                      layoutId="activeFilter"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {activeFilter !== filter && (
                    <div className="absolute inset-0 bg-black/5" />
                  )}
                  <span className="relative z-10">{filter}</span>
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Video-Enhanced Project Cards */}
          <div className="grid md:grid-cols-3 gap-12 mb-20">
            {recentProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -15 }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-black rounded-3xl shadow-2xl mb-8">
                  <AnimatePresence mode="wait">
                    {hoveredProject === project.id ? (
                      <motion.video
                        key="video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.2 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.2 }}
                      >
                        <source src={project.videoUrl} type="video/mp4" />
                      </motion.video>
                    ) : (
                      <motion.img 
                        key="image"
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Floating info */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.2 + 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFD700] flex items-center justify-center"
                        whileHover={{ scale: 1.2, rotate: 180 }}
                      >
                        <Play className="w-6 h-6 text-black fill-black translate-x-0.5" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent" />
                      </div>
                    </div>
                    
                    <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-3">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-1 text-sm text-white/70">
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#D4AF37]" />
                        {project.location}
                      </p>
                      <p>{project.style} • {project.budget}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Cinematic Archive Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="group relative px-16 py-6 overflow-hidden rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-black group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#FFD700] transition-all duration-500" />
              <div className="absolute inset-0 border-2 border-black group-hover:border-transparent transition-colors" />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              <span className="relative font-light tracking-wider uppercase text-white group-hover:text-black transition-colors text-lg">
                Discover More Projects
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
