import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProcessBento from "@/components/ProcessBento";
import TheGuide from "@/components/TheGuide";
import StakesComparison from "@/components/StakesComparison";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExpertiseShowcase from "@/components/ExpertiseShowcase";
import VideosStrip from "@/components/VideosStrip";
import ResourcesHub from "@/components/ResourcesHub";
import ResourcesTestimonials from "@/components/ResourcesTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero — The Problem */}
        <HeroSection />
        
        {/* The Plan — 3 steps */}
        <ProcessBento />
        
        {/* The Guide — JD as the guide */}
        <TheGuide />
        
        {/* Stakes — failure vs success */}
        <StakesComparison />
        
        {/* Proof 1 — Featured project story & Proof 2 — Projects grid */}
        <ProjectShowcase />
        
        {/* Place expertise */}
        <ExpertiseShowcase />
        
        {/* Videos strip */}
        <VideosStrip />
        
        {/* Resources Hub preview */}
        <ResourcesHub />
        
        {/* Testimonials */}
        <ResourcesTestimonials />
        
        {/* Final CTA band */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
