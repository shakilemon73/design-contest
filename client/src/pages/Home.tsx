import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Fixed Theme Toggle */}
      <div className="fixed top-4 right-4 z-50" role="region" aria-label="Theme controls">
        <ThemeToggle />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content - Unique Asymmetric Flow */}
      <main id="main-content" role="main" aria-label="Main content area" tabIndex={-1} className="relative">
        {/* Hero Section with Diagonal Split */}
        <Hero />
        
        {/* Diagonal Divider */}
        <div className="relative h-32 -mt-32 z-10">
          <div className="absolute inset-0 bg-background" style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%)' }} />
        </div>

        {/* Services Section with Broken Grid */}
        <div className="relative z-20">
          <Services />
        </div>

        {/* Diagonal Transition */}
        <div className="relative h-40 -mt-20 z-10">
          <div className="absolute inset-0 bg-background" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 60%)' }} />
        </div>

        {/* About Section with Asymmetric Layout */}
        <div className="relative z-20 -mt-20">
          <About />
        </div>

        {/* Curved Transition */}
        <div className="relative h-32 -mt-16 z-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0 Q 600 120 1200 0 L 1200 120 L 0 120 Z" className="fill-background" />
          </svg>
        </div>

        {/* Testimonials Section with Immersive Design */}
        <div className="relative z-20 -mt-16">
          <Testimonials />
        </div>

        {/* Diagonal Divider */}
        <div className="relative h-32 -mt-20 z-10">
          <div className="absolute inset-0 bg-background" style={{ clipPath: 'polygon(0 40%, 100% 0, 100% 100%, 0 100%)' }} />
        </div>

        {/* Contact Section with Unique Form Layout */}
        <div className="relative z-20 -mt-12">
          <ContactForm />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
