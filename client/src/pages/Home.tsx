import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ThePlan from "@/components/ThePlan";
import TheGuide from "@/components/TheGuide";
import StakesComparison from "@/components/StakesComparison";
import FeaturedProject from "@/components/FeaturedProject";
import ProjectsGrid from "@/components/ProjectsGrid";
import PlaceExpertise from "@/components/PlaceExpertise";
import VideosStrip from "@/components/VideosStrip";
import ResourcesHub from "@/components/ResourcesHub";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ThePlan />
        <TheGuide />
        <StakesComparison />
        <FeaturedProject />
        <ProjectsGrid />
        <PlaceExpertise />
        <VideosStrip />
        <ResourcesHub />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
