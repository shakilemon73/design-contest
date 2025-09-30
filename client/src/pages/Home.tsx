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
    <div className="min-h-screen bg-background">
      {/* Fixed Theme Toggle */}
      <div className="fixed top-4 right-4 z-50" role="region" aria-label="Theme controls">
        <ThemeToggle />
      </div>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" role="main" aria-label="Main content area" tabIndex={-1}>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}