import { Button } from "@/components/ui/button";
import { FileText, BookOpen, Download, Home } from "lucide-react";

export default function ResourcesHub() {
  const resources = [
    {
      icon: FileText,
      title: "FAQs",
      description: "Common questions answered"
    },
    {
      icon: BookOpen,
      title: "Articles",
      description: "Insights and building tips"
    },
    {
      icon: Download,
      title: "PDFs (Build Guide)",
      description: "Download our comprehensive guide"
    },
    {
      icon: Home,
      title: "Knockdown Rebuild",
      description: "Replace your existing home"
    }
  ];

  return (
    <section 
      className="py-24 md:py-32 bg-white"
      aria-labelledby="resources-heading"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Resources Hub</p>
          <h2 
            id="resources-heading"
            className="font-serif font-light text-4xl md:text-5xl"
          >
            Everything You Need
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <article
                key={index}
                className="bg-[#F5F5F0] p-8 hover:bg-[#EEEEE8] transition-colors group cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`View ${resource.title}`}
              >
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#D4AF37]" aria-hidden="true" />
                </div>
                <h3 className="font-serif text-xl font-light mb-3">{resource.title}</h3>
                <p className="text-black/60 text-sm font-light">{resource.description}</p>
              </article>
            );
          })}
        </div>

        {/* Secondary CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            className="border-black text-black hover:bg-black hover:text-white min-h-[56px] px-8"
            aria-label="Download the Build Guide"
          >
            <Download className="mr-2 w-5 h-5" aria-hidden="true" />
            <span className="font-light tracking-wide uppercase">Download the Build Guide</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
