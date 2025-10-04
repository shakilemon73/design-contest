import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-white focus:text-black focus:rounded-sm"
      >
        Skip to content
      </a>

      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-white/10" />
        
        <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            <Link 
              href="/" 
              className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black rounded-sm transition-all" 
              data-testid="link-home"
              aria-label="Jackson Dwellings Home"
            >
              <span className="text-white text-xl md:text-2xl font-serif font-light tracking-wider">
                JACKSON
                <span className="text-[#D4AF37]">.</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-8" role="menubar">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-xs tracking-widest uppercase transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black rounded-sm px-2 py-1
                    relative
                    ${isActive(item.href) ? 'text-[#D4AF37]' : 'text-white/80 hover:text-white'}
                  `}
                  data-testid={`link-${item.label.toLowerCase().replace(' ', '-')}`}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  <span className="font-light">{item.label}</span>
                  {isActive(item.href) && (
                    <span 
                      className="absolute bottom-0 left-0 w-full h-px bg-[#D4AF37]"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              ))}
            </div>

            <Button 
              className="hidden lg:inline-flex bg-[#D4AF37] text-black hover:bg-[#C19A2E] min-h-[48px] px-6 border-0" 
              data-testid="button-book-consult"
              aria-label="Book a consultation"
            >
              <span className="font-light tracking-wide text-sm uppercase">Book a Consult</span>
            </Button>

            <button 
              className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm transition-all"
              data-testid="button-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-0 top-20 lg:hidden bg-black/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-5 duration-300"
            role="menu"
          >
            <div className="h-full flex flex-col justify-center items-center px-6 py-12 space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    text-2xl md:text-3xl font-serif font-light tracking-wider
                    transition-all duration-300 focus:outline-none 
                    focus:ring-2 focus:ring-[#D4AF37] rounded-sm px-4 py-2
                    ${isActive(item.href) 
                      ? 'text-[#D4AF37]' 
                      : 'text-white/80 hover:text-white'
                    }
                  `}
                  data-testid={`mobile-link-${item.label.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <Button 
                className="mt-8 bg-[#D4AF37] text-black hover:bg-[#C19A2E] min-h-[56px] px-8 text-lg border-0" 
                data-testid="mobile-button-book-consult"
                aria-label="Book a consultation"
              >
                <span className="font-light tracking-wide uppercase">Book a Consult</span>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
