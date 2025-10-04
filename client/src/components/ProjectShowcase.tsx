import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
      style: "Modern",
      bedrooms: "4 bed",
      budget: "$2M+",
      colSpan: "col-span-12 md:col-span-7",
      aspectRatio: "aspect-[16/10]"
    },
    {
      id: 2,
      image: project2,
      title: "Gisborne Family Home",
      style: "Farmhouse",
      bedrooms: "5 bed",
      budget: "",
      colSpan: "col-span-12 md:col-span-5",
      aspectRatio: "aspect-[4/5]"
    },
    {
      id: 3,
      image: project3,
      title: "Woodend Contemporary",
      style: "Contemporary",
      bedrooms: "4 bed",
      budget: "",
      colSpan: "col-span-12 md:col-span-5",
      aspectRatio: "aspect-[4/3]"
    }
  ];

  return (
    <section 
      className="py-32 bg-muted/20 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Featured Project - Principle 2: Steve Krug - Clear visual hierarchy */}
        <article className="mb-32 relative">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Image - Principle 4: Aarron Walter - Emotional design through imagery */}
            <div className="lg:col-span-7 order-2 lg:order-1" data-testid="image-featured-project">
              <figure className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/20 transform lg:rotate-1 hover:rotate-0 transition-all duration-500 focus-within:rotate-0">
                  <img 
                    src={featuredImage} 
                    alt="Casa Lauren luxury custom home in Trentham"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                {/* Floating label - Principle 1: Don Norman - Clear signifiers */}
                <figcaption className="absolute -top-8 -right-8 bg-foreground text-background px-6 md:px-8 py-3 md:py-4 rounded-2xl shadow-xl transform -rotate-6">
                  <p className="font-accent text-xs uppercase tracking-wider mb-1">Featured</p>
                  <p className="font-serif text-xl md:text-2xl">Casa Lauren</p>
                </figcaption>
              </figure>
            </div>

            {/* Content - Principle 2: Steve Krug - Scannable content */}
            <div className="lg:col-span-5 order-1 lg:order-2 lg:pl-12">
              <h2 
                id="projects-heading"
                className="font-serif font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-6" 
                data-testid="text-featured-heading"
              >
                Luxury
                <span className="block text-primary italic">Realized</span>
              </h2>
              
              <p 
                className="text-base md:text-lg leading-relaxed mb-8 text-foreground/80" 
                data-testid="text-project-description"
              >
                Contemporary family sanctuary in Trentham. Natural materials, expansive views, meticulous bushfire compliance—crafted without compromise.
              </p>

              {/* Stats - Principle 10: Susan Weinschenk - Chunked information */}
              <div className="grid grid-cols-2 gap-4 mb-8" role="list" aria-label="Project statistics">
                <div 
                  className="bg-card rounded-xl p-4 md:p-5 border border-border hover:border-primary/30 transition-colors" 
                  data-testid="stat-bedrooms"
                  role="listitem"
                >
                  <div className="font-serif text-3xl md:text-4xl text-primary mb-1">4</div>
                  <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Bedrooms</div>
                </div>
                <div 
                  className="bg-card rounded-xl p-4 md:p-5 border border-border hover:border-primary/30 transition-colors" 
                  data-testid="stat-timeline"
                  role="listitem"
                >
                  <div className="font-serif text-3xl md:text-4xl text-primary mb-1">10mo</div>
                  <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Build Time</div>
                </div>
                <div 
                  className="col-span-2 bg-card rounded-xl p-4 md:p-5 border border-border hover:border-primary/30 transition-colors" 
                  data-testid="stat-budget"
                  role="listitem"
                >
                  <div className="font-serif text-3xl md:text-4xl text-primary mb-1">$1.8-2.4M</div>
                  <div className="text-xs font-accent uppercase tracking-wider text-muted-foreground">Investment Range</div>
                </div>
              </div>

              {/* Testimonial - Principle 10: Susan Weinschenk - Social proof */}
              <blockquote 
                className="border-l-4 border-primary pl-6 mb-8 italic text-foreground/70" 
                data-testid="text-client-quote"
              >
                "Clear decisions, no surprises. The finish is superb."
              </blockquote>

              {/* CTA - Principle 3: Luke Wroblewski - 44px minimum */}
              <Button 
                variant="outline" 
                className="group min-h-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
                data-testid="button-view-case-study"
                aria-label="View detailed case study of Casa Lauren"
              >
                View Case Study
                <ArrowRight 
                  className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>
        </article>

        {/* Gallery - Principle 6: Julie Zhuo - Consistent system */}
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <h3 
              className="font-serif font-light text-4xl md:text-5xl" 
              data-testid="text-projects-heading"
            >
              Recent <span className="text-primary italic">Builds</span>
            </h3>
            <Button 
              variant="ghost" 
              className="group min-h-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
              data-testid="button-explore-projects"
              aria-label="View all completed projects"
            >
              View All
              <ArrowRight 
                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                aria-hidden="true"
              />
            </Button>
          </div>

          <div className="grid grid-cols-12 gap-6">
            {/* Project cards - Principle 1: Don Norman - Immediate feedback on hover */}
            {projects.map((project) => (
              <article 
                key={project.id}
                className={`${project.colSpan} ${project.aspectRatio} relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer transform hover:scale-[1.02] transition-all duration-300`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                data-testid={`project-card-${project.id}`}
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.style} ${project.bedrooms} custom home`}
                  className="w-full h-full object-cover" 
                  loading="lazy"
                />
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white transform translate-y-4 group-hover:translate-y-0 group-focus-within:translate-y-0 transition-transform duration-300">
                    <h4 className="font-serif text-2xl md:text-3xl mb-2">{project.title}</h4>
                    <p className="text-sm text-white/80 mb-2">
                      {project.style} · {project.bedrooms}{project.budget && ` · ${project.budget}`}
                    </p>
                    <div className="w-16 h-1 bg-primary rounded-full" aria-hidden="true" />
                  </div>
                </div>
              </article>
            ))}

            {/* CTA card - Principle 4: Aarron Walter - Delightful interactions */}
            <div className="col-span-12 md:col-span-7 aspect-[16/9] relative rounded-2xl overflow-hidden bg-foreground text-background p-8 md:p-12 flex flex-col justify-end hover:shadow-2xl transition-shadow">
              <p className="font-accent text-xs md:text-sm uppercase tracking-widest text-primary mb-4">
                Explore More
              </p>
              <h4 className="font-serif text-3xl md:text-4xl mb-4">
                Every Project Tells a Story
              </h4>
              <p className="text-background/70 text-sm md:text-base mb-6 max-w-md">
                From concept to completion, see how we bring luxury custom homes to life in the Macedon Ranges.
              </p>
              <Button 
                variant="outline" 
                className="border-background/30 text-background hover:bg-background/10 w-fit min-h-[44px] focus:ring-2 focus:ring-offset-2 focus:ring-background" 
                data-testid="button-all-projects"
                aria-label="Browse our complete project portfolio"
              >
                Browse Portfolio
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
