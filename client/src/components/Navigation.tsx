import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/Full_logo_gold_and_black_png_1759569939974.png";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/custom-homes", label: "Custom Homes" },
    { href: "/process", label: "Process" },
    { href: "/projects", label: "Projects" },
    { href: "/videos", label: "Videos" },
    { href: "/about", label: "About" },
    { href: "/resources", label: "Resources Hub" },
    { href: "/connect", label: "Connect" },
  ];

  const isActive = (href: string) => {
    return location === href || (href !== "/" && location.startsWith(href));
  };

  return (
    <>
      {/* Skip to main content - Accessibility (Principle 8: Farai Madzima) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>

      <nav 
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Principle 2: Steve Krug - Clear, recognizable */}
            <Link 
              href="/" 
              className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-all" 
              data-testid="link-home"
              aria-label="Jackson Dwellings Home"
            >
              <img 
                src={logoImage} 
                alt="Jackson Dwellings" 
                className="h-12 w-auto" 
              />
            </Link>

            {/* Desktop Navigation - Principle 7: Dieter Rams - Minimal & clear */}
            <div className="hidden lg:flex items-center gap-8" role="menubar">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-sm font-sans transition-all duration-200 
                    hover:text-primary focus:outline-none focus:ring-2 
                    focus:ring-primary focus:ring-offset-2 rounded-md px-2 py-1
                    relative
                    ${isActive(item.href) ? 'text-primary font-semibold' : 'text-foreground'}
                  `}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  {/* Active indicator - Principle 1: Don Norman - Signifiers */}
                  {isActive(item.href) && (
                    <span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button - Principle 3: Luke Wroblewski - Minimum 44px touch target */}
            <Button 
              className="hidden lg:inline-flex min-h-[44px] min-w-[44px]" 
              data-testid="button-book-consult"
              aria-label="Book a consultation"
            >
              Book a Consult
            </Button>

            {/* Mobile Menu Toggle - Principle 8: Accessibility with ARIA */}
            <button 
              className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md transition-all hover:bg-accent"
              data-testid="button-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Principle 4: Aarron Walter - Smooth transitions for delight */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-border bg-background animate-in slide-in-from-top-5 duration-200"
            role="menu"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block px-4 py-3 min-h-[44px] rounded-lg text-base 
                    transition-all duration-200 focus:outline-none 
                    focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${isActive(item.href) 
                      ? 'bg-primary/10 text-primary font-semibold' 
                      : 'hover:bg-accent text-foreground'
                    }
                  `}
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="w-full mt-4 min-h-[44px]" 
                data-testid="mobile-button-book-consult"
                aria-label="Book a consultation"
              >
                Book a Consult
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
