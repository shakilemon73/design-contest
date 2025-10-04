import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, DollarSign, Home, Calendar } from "lucide-react";
import featuredImage from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";
import project1 from "@assets/generated_images/Project_gallery_image_1_6ad66448.png";
import project2 from "@assets/generated_images/Project_gallery_image_2_79b8fb06.png";
import project3 from "@assets/generated_images/Project_gallery_image_3_236c9d46.png";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Location", "Style", "Budget"];

  const recentProjects = [
    {
      id: 1,
      image: project1,
      title: "Mount Macedon Retreat",
      location: "Mount Macedon",
      style: "Contemporary",
      budget: "$1.2M"
    },
    {
      id: 2,
      image: project2,
      title: "Gisborne Estate",
      location: "Gisborne",
      style: "Modern",
      budget: "$1.5M"
    },
    {
      id: 3,
      image: project3,
      title: "Woodend Residence",
      location: "Woodend",
      style: "Classic",
      budget: "$980K"
    }
  ];

  return (
    <>
      {/* Proof 1 — Featured project story */}
      <section 
        className="py-24 md:py-32 bg-black text-white"
        aria-labelledby="featured-project-heading"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <p className="text-xs tracking-[0.3em] uppercase text-white/40 mb-4 text-center">Proof 1</p>
          <h2 
            id="featured-project-heading"
            className="font-serif font-light text-4xl md:text-5xl lg:text-6xl mb-16 text-center"
          >
            Casa Lauren
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Large image */}
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={featuredImage} 
                alt="Casa Lauren custom home"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div>
              {/* 50-70 word outcome paragraph */}
              <p className="text-white/90 text-lg font-light leading-relaxed mb-10">
                Contemporary sanctuary in Trentham completed on schedule and within budget. Natural materials throughout, floor-to-ceiling views, and meticulous compliance with bushfire regulations. The clients moved in on their target date with zero surprises.
              </p>

              {/* Four quick stats */}
              <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/50 mb-1">Location</p>
                    <p className="font-light">Trentham</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/50 mb-1">Timeline</p>
                    <p className="font-light">10 months</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/50 mb-1">Size</p>
                    <p className="font-light">485m²</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="w-5 h-5 text-[#D4AF37]" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/50 mb-1">Investment</p>
                    <p className="font-light">$1.8M</p>
                  </div>
                </div>
              </div>

              {/* One client quote */}
              <blockquote className="border-l-2 border-[#D4AF37] pl-6 mb-8">
                <p className="text-xl font-serif font-light italic text-white/90 mb-4">
                  "We always knew what was next. The finish is superb."
                </p>
                <footer className="text-sm text-white/60">— Lauren & David Chen</footer>
              </blockquote>

              {/* View case study */}
              <Button 
                variant="ghost" 
                className="text-[#D4AF37] hover:bg-white/5 px-0 group"
                aria-label="View full case study"
              >
                <span className="font-light mr-2">View case study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof 2 — Projects grid */}
      <section 
        className="py-24 md:py-32 bg-white"
        aria-labelledby="projects-grid-heading"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Proof 2</p>
              <h2 
                id="projects-grid-heading"
                className="font-serif font-light text-4xl md:text-5xl"
              >
                Recent Projects
              </h2>
            </div>

            {/* Filters */}
            <div className="flex gap-2 flex-wrap">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm font-light tracking-wide transition-all min-h-[44px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm ${
                    activeFilter === filter
                      ? 'bg-black text-white'
                      : 'bg-[#F5F5F0] text-black/70 hover:bg-black/5'
                  }`}
                  aria-label={`Filter by ${filter}`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Three recent projects */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {recentProjects.map((project) => (
              <article
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#F5F5F0] mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-2xl font-light mb-3">{project.title}</h3>
                <div className="space-y-2 text-sm text-black/60">
                  <p><span className="font-medium">Location:</span> {project.location}</p>
                  <p><span className="font-medium">Style:</span> {project.style}</p>
                  <p><span className="font-medium">Budget:</span> {project.budget}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Link to Projects archive */}
          <div className="text-center">
            <Button 
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white min-h-[56px] px-8"
              aria-label="View all projects"
            >
              <span className="font-light tracking-wide uppercase">View Projects Archive</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
