import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProcessBento from "@/components/ProcessBento";
import TheGuide from "@/components/TheGuide";
import StakesComparison from "@/components/StakesComparison";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExpertiseShowcase from "@/components/ExpertiseShowcase";
import ResourcesTestimonials from "@/components/ResourcesTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProcessBento />
        <TheGuide />
        <StakesComparison />
        <ProjectShowcase />
        <ExpertiseShowcase />
        <ResourcesTestimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
