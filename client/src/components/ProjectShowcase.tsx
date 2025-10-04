import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import project1 from "@assets/generated_images/Project_gallery_image_1_6ad66448.png";
import project2 from "@assets/generated_images/Project_gallery_image_2_79b8fb06.png";
import project3 from "@assets/generated_images/Project_gallery_image_3_236c9d46.png";
import featuredImage from "@assets/generated_images/Featured_project_Casa_Lauren_e0dd4b0b.png";

export default function ProjectShowcase() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-32 bg-muted/20 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Featured Project - Broken grid with diagonal */}
        <div className="mb-32 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Oversized image - asymmetric placement */}
            <div className="lg:col-span-7 order-2 lg:order-1" data-testid="image-featured-project">
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 transform lg:rotate-1 hover:rotate-0 transition-all duration-500">
                  <img 
                    src={featuredImage} 
                    alt="Casa Lauren" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating label */}
                <div className="absolute -top-8 -right-8 bg-foreground text-background px-8 py-4 rounded-2xl shadow-xl transform -rotate-6">
                  <p className="font-accent text-xs uppercase tracking-wider mb-1">Featured</p>
                  <p className="font-serif text-2xl">Casa Lauren</p>
                </div>
              </div>
            </div>

            {/* Content - offset placement */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-12">
              <h2 className="font-serif font-light text-5xl md:text-6xl leading-tight mb-6" data-testid="text-featured-heading">
                Luxury
                <span className="block text-primary italic">Realized</span>
              </h2>
              
              <p className="text-lg leading-relaxed mb-8 text-foreground/80" data-testid="text-project-description">
                Contemporary family sanctuary in Trentham. Natural materials, expansive views, meticulous bushfire compliance—crafted without compromise.
              </p>

              {/* Bento stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-card rounded-xl p-5 border border-border" data-testid="stat-bedrooms">
                  <div className="font-serif text-4xl text-primary mb-1">4</div>
                  <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Bedrooms</div>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border" data-testid="stat-timeline">
                  <div className="font-serif text-4xl text-primary mb-1">10mo</div>
                  <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Build Time</div>
                </div>
                <div className="col-span-2 bg-card rounded-xl p-5 border border-border" data-testid="stat-budget">
                  <div className="font-serif text-4xl text-primary mb-1">$1.8-2.4M</div>
                  <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Investment Range</div>
                </div>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 mb-8 italic text-foreground/70" data-testid="text-client-quote">
                "Clear decisions, no surprises. The finish is superb."
              </blockquote>

              <Button variant="outline" className="group" data-testid="button-view-case-study">
                View Case Study
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>

        {/* Masonry Gallery - broken grid */}
        <div>
          <div className="flex justify-between items-end mb-12">
            <h3 className="font-serif font-light text-5xl" data-testid="text-projects-heading">
              Recent <span className="text-primary italic">Builds</span>
            </h3>
            <Button variant="ghost" className="group" data-testid="button-explore-projects">
              View All
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Large card - spans more */}
            <div 
              className="col-span-12 md:col-span-7 aspect-[16/10] relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(1)}
              onMouseLeave={() => setHoveredProject(null)}
              data-testid="project-card-1"
            >
              <img src={project1} alt="Mount Macedon Retreat" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject === 1 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-serif text-3xl mb-2">Mount Macedon Retreat</h4>
                  <p className="text-sm text-white/80 mb-2">Modern · 4 bed · $2M+</p>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
              </div>
            </div>

            {/* Tall card */}
            <div 
              className="col-span-12 md:col-span-5 aspect-[4/5] relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(2)}
              onMouseLeave={() => setHoveredProject(null)}
              data-testid="project-card-2"
            >
              <img src={project2} alt="Gisborne Family Home" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject === 2 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-serif text-2xl mb-2">Gisborne Family Home</h4>
                  <p className="text-sm text-white/80 mb-2">Farmhouse · 5 bed</p>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
              </div>
            </div>

            {/* Wide card */}
            <div 
              className="col-span-12 md:col-span-5 aspect-[4/3] relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-[1.02] transition-all duration-300"
              onMouseEnter={() => setHoveredProject(3)}
              onMouseLeave={() => setHoveredProject(null)}
              data-testid="project-card-3"
            >
              <img src={project3} alt="Woodend Contemporary" className="w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject === 3 ? 'opacity-100' : 'opacity-0'}`}>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-serif text-2xl mb-2">Woodend Contemporary</h4>
                  <p className="text-sm text-white/80 mb-2">Contemporary · 4 bed</p>
                  <div className="w-16 h-1 bg-primary rounded-full" />
                </div>
              </div>
            </div>

            {/* Medium card */}
            <div className="col-span-12 md:col-span-7 aspect-[16/9] relative rounded-2xl overflow-hidden bg-foreground text-background p-12 flex flex-col justify-end">
              <p className="font-accent text-sm uppercase tracking-widest text-primary mb-4">Explore More</p>
              <h4 className="font-serif text-4xl mb-4">Every Project Tells a Story</h4>
              <p className="text-background/70 mb-6 max-w-md">From concept to completion, see how we bring luxury custom homes to life in the Macedon Ranges.</p>
              <Button variant="outline" className="border-background/30 text-background hover:bg-background/10 w-fit" data-testid="button-all-projects">
                Browse Portfolio
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
