import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin } from "lucide-react";
import project1 from "@assets/generated_images/Project_gallery_image_1_6ad66448.png";
import project2 from "@assets/generated_images/Project_gallery_image_2_79b8fb06.png";
import project3 from "@assets/generated_images/Project_gallery_image_3_236c9d46.png";
import featuredImage from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: project1,
      title: "Mount Macedon Retreat",
      location: "Mount Macedon",
      year: "2024",
      size: "450m²"
    },
    {
      id: 2,
      image: project2,
      title: "Gisborne Estate",
      location: "Gisborne",
      year: "2023",
      size: "520m²"
    },
    {
      id: 3,
      image: project3,
      title: "Woodend Residence",
      location: "Woodend",
      year: "2024",
      size: "380m²"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 lg:py-48 bg-white relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header - Minimal luxury */}
        <div className="mb-20 md:mb-32">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Portfolio</p>
          <h2 
            id="projects-heading"
            className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8"
          >
            Recent
            <span className="block text-[#D4AF37] italic mt-2">Works</span>
          </h2>
        </div>

        {/* Featured Project - Large image with overlapping info */}
        <article className="mb-24 md:mb-40">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Image - Full bleed asymmetric */}
            <div className="lg:col-span-7">
              <div className="relative group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={featuredImage} 
                    alt="Casa Lauren luxury custom home"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -right-4 -bottom-4 md:-right-8 md:-bottom-8 bg-[#D4AF37] text-black px-6 md:px-8 py-4 md:py-6 z-10">
                  <p className="font-serif text-3xl md:text-4xl font-light">$1.8M</p>
                  <p className="text-xs tracking-widest uppercase mt-1">Investment</p>
                </div>
              </div>
            </div>

            {/* Content - Overlapping editorial style */}
            <div className="lg:col-span-5 lg:-ml-12 bg-white p-8 md:p-12 lg:p-16 z-20">
              <div className="inline-block mb-6 px-4 py-2 border border-black/10">
                <span className="text-xs tracking-[0.3em] uppercase text-black/60">Featured</span>
              </div>
              
              <h3 className="font-serif font-light text-4xl md:text-5xl mb-6">
                Casa Lauren
              </h3>
              
              <p className="text-black/70 text-lg leading-relaxed mb-8 font-light">
                Contemporary sanctuary in Trentham. Natural materials, expansive views, meticulous compliance.
              </p>

              {/* Meta info - Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-black/10">
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-2">Location</p>
                  <p className="text-sm">Trentham</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-2">Completed</p>
                  <p className="text-sm">2024</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-2">Size</p>
                  <p className="text-sm">485m²</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-black/40 mb-2">Timeline</p>
                  <p className="text-sm">10 months</p>
                </div>
              </div>

              <Button 
                variant="ghost" 
                className="group px-0 h-auto hover:bg-transparent text-black"
                aria-label="View Casa Lauren case study"
              >
                <span className="font-light tracking-wide mr-2">View Case Study</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </article>

        {/* Gallery - Broken Grid Magazine Style */}
        <div className="mb-20">
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-serif font-light text-3xl md:text-4xl">
              <span className="block text-black/40 text-lg mb-2">2024</span>
              Collection
            </h3>
            <Button 
              variant="ghost" 
              className="group px-0 h-auto hover:bg-transparent"
              aria-label="View all projects"
            >
              <span className="font-light tracking-wide text-sm uppercase">View All</span>
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Asymmetric Grid */}
          <div className="grid grid-cols-12 gap-6">
            {projects.map((project, index) => {
              const colSpan = index === 0 ? 'col-span-12 md:col-span-8' : 'col-span-12 md:col-span-4';
              const aspectRatio = index === 0 ? 'aspect-[16/9]' : 'aspect-[3/4]';
              
              return (
                <article
                  key={project.id}
                  className={`${colSpan} group relative overflow-hidden cursor-pointer`}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  data-testid={`project-${project.id}`}
                >
                  <div className={`${aspectRatio} relative overflow-hidden`}>
                    <img 
                      src={project.image} 
                      alt={`${project.title} custom home`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`} />
                    
                    {/* Info overlay */}
                    <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transition-all duration-500 ${hoveredProject === project.id ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-serif text-2xl md:text-3xl font-light">{project.title}</h4>
                        <ArrowUpRight className="w-5 h-5 flex-shrink-0" />
                      </div>
                      <div className="flex items-center gap-6 text-sm text-white/80">
                        <span className="flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {project.location}
                        </span>
                        <span>{project.year}</span>
                        <span>{project.size}</span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* CTA Card - Editorial block */}
            <div className="col-span-12 md:col-span-8 bg-black text-white p-12 md:p-16 flex flex-col justify-between min-h-[400px]">
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Explore</p>
                <h4 className="font-serif font-light text-4xl md:text-5xl mb-6 max-w-xl">
                  Every residence tells a story of craftsmanship
                </h4>
                <p className="text-white/70 text-lg font-light max-w-md">
                  From initial concept to final detail, discover our complete portfolio of bespoke homes.
                </p>
              </div>
              <Button 
                className="bg-[#D4AF37] text-black hover:bg-[#C19A2E] mt-8 w-fit px-8 min-h-[56px] border-0"
                aria-label="Browse complete portfolio"
              >
                <span className="font-light tracking-wide uppercase">Browse Portfolio</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
