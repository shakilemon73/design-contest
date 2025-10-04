import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download, Home } from "lucide-react";

export default function ResourcesHub() {
  const resources = [
    {
      icon: FileText,
      title: "FAQs",
      description: "Common questions answered",
      size: "col-span-1 row-span-1"
    },
    {
      icon: BookOpen,
      title: "Articles",
      description: "Insights and building tips",
      size: "col-span-1 row-span-2"
    },
    {
      icon: Download,
      title: "Build Guide PDF",
      description: "Download our comprehensive guide",
      size: "col-span-1 row-span-1",
      cta: true
    },
    {
      icon: Home,
      title: "Knockdown Rebuild",
      description: "Replace your existing home",
      size: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif font-light text-4xl md:text-5xl text-center mb-4" data-testid="text-resources-heading">
          Resources Hub
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Everything you need to make informed decisions about your custom home
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <div
                key={index}
                className={`${resource.size} bg-background rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/50 hover:border-primary/50`}
                data-testid={`resource-card-${index}`}
              >
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 ${resource.cta ? 'bg-primary text-primary-foreground' : ''}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" data-testid="button-download-guide-resources">
            Download the Build Guide
          </Button>
        </div>
      </div>
    </section>
  );
}
