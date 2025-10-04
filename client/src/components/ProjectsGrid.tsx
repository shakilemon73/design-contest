import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import project1 from "@assets/generated_images/Project_gallery_image_1_6ad66448.png";
import project2 from "@assets/generated_images/Project_gallery_image_2_79b8fb06.png";
import project3 from "@assets/generated_images/Project_gallery_image_3_236c9d46.png";

export default function ProjectsGrid() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const projects = [
    {
      id: 1,
      image: project1,
      altImage: project1,
      title: "Mount Macedon Retreat",
      location: "Mount Macedon",
      style: "Modern",
      budget: "$2M+",
      beds: 4,
      baths: 3
    },
    {
      id: 2,
      image: project2,
      altImage: project2,
      title: "Gisborne Family Home",
      location: "Gisborne",
      style: "Farmhouse",
      budget: "$1.5-2M",
      beds: 5,
      baths: 3
    },
    {
      id: 3,
      image: project3,
      altImage: project3,
      title: "Woodend Contemporary",
      location: "Woodend",
      style: "Contemporary",
      budget: "$1.8-2.2M",
      beds: 4,
      baths: 2
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "location", label: "By Location" },
    { id: "style", label: "By Style" },
    { id: "budget", label: "By Budget" }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-center mb-8" data-testid="text-projects-heading">
          Recent Custom Homes
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Badge
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              className="cursor-pointer hover-elevate px-4 py-2"
              onClick={() => setSelectedFilter(filter.id)}
              data-testid={`filter-${filter.id}`}
            >
              {filter.label}
            </Badge>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              data-testid={`project-card-${project.id}`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-serif text-2xl mb-2">{project.title}</h3>
                  <div className="flex gap-2 mb-3">
                    <Badge variant="outline" className="border-primary/50 text-primary bg-primary/10">
                      {project.location}
                    </Badge>
                    <Badge variant="outline" className="border-white/50 text-white">
                      {project.style}
                    </Badge>
                  </div>
                  <p className="text-sm text-white/80">
                    {project.beds} bed · {project.baths} bath · {project.budget}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group" data-testid="button-explore-projects">
            Explore all Projects
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
