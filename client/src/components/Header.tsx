import { useState, useEffect, useRef } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import logoImage from '@assets/CROSSROADS (central logo ) (transp backgr)_1758965407237.png';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const navigationItems = [
    { label: 'Home', href: '/', ariaLabel: 'Navigate to homepage' },
    { label: 'Services', href: '#services', ariaLabel: 'Navigate to services section' },
    { label: 'About', href: '#about', ariaLabel: 'Navigate to about section' },
    { label: 'Testimonials', href: '#testimonials', ariaLabel: 'Navigate to testimonials section' },
    { label: 'Contact', href: '#contact', ariaLabel: 'Navigate to contact section' },
  ];

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    menuToggleRef.current?.focus();
  };

  const handleCallClick = () => {
    console.log('Call button clicked - would dial phone number');
    window.location.href = 'tel:+1-555-REPAIR-1';
  };

  const handleServiceRequestClick = () => {
    console.log('Service request button clicked');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Skip to content link for keyboard navigation */}
      <a 
        href="#main-content" 
        className="skip-link" 
        data-testid="skip-to-content"
        onClick={(e) => {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            mainContent.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
          }
        }}
      >
        Skip to main content
      </a>
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="banner">
      <nav className="container mx-auto px-4 py-3" aria-label="Primary navigation">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover-elevate p-2 rounded-md" data-testid="link-home" aria-label="Crossroads Restaurant Service - Go to homepage">
            <img src={logoImage} alt="Crossroads Restaurant Service logo" className="h-10 w-10" />
            <div className="hidden sm:block">
              <p className="text-xl font-bold text-primary">Crossroads</p>
              <p className="text-xs text-muted-foreground">Restaurant Service</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium"
                    data-testid={`link-${item.label.toLowerCase()}`}
                    aria-label={item.ariaLabel}
                    aria-current={item.href === '/' ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="default"
              onClick={handleCallClick}
              className="flex items-center gap-2"
              data-testid="button-call-desktop"
              aria-label="Call us at 555 REPAIR-1 for immediate assistance"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              (555) REPAIR-1
            </Button>
            <Button
              onClick={handleServiceRequestClick}
              className="bg-primary hover:bg-primary/90"
              data-testid="button-service-request-desktop"
              aria-label="Request service - scroll to contact form"
            >
              Request Service
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              onClick={handleCallClick}
              className="lg:hidden"
              data-testid="button-call-mobile"
              aria-label="Call us at 555 REPAIR-1"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              ref={menuToggleRef}
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav 
            id="mobile-menu"
            className="lg:hidden mt-4 pb-4 border-t border-border pt-4" 
            data-testid="menu-mobile"
            aria-label="Mobile navigation menu"
          >
            <ul className="flex flex-col gap-4 list-none m-0 p-0">
              {navigationItems.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 block"
                    onClick={closeMobileMenu}
                    data-testid={`link-mobile-${item.label.toLowerCase()}`}
                    aria-label={item.ariaLabel}
                    aria-current={item.href === '/' ? 'page' : undefined}
                    ref={index === 0 ? (el) => {
                      if (el && isMobileMenuOpen) {
                        el.focus();
                      }
                    } : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => {
                    handleServiceRequestClick();
                    closeMobileMenu();
                  }}
                  className="bg-primary hover:bg-primary/90 justify-start w-full"
                  data-testid="button-service-request-mobile"
                  aria-label="Request service - scroll to contact form"
                >
                  Request Service
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </nav>
    </header>
    </>
  );
}