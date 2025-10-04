import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProcessBento from "@/components/ProcessBento";
import TheGuide from "@/components/TheGuide";
import ExpertiseShowcase from "@/components/ExpertiseShowcase";
import StakesComparison from "@/components/StakesComparison";
import ResourcesTestimonials from "@/components/ResourcesTestimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectShowcase />
        <ProcessBento />
        <TheGuide />
        <ExpertiseShowcase />
        <StakesComparison />
        <ResourcesTestimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
