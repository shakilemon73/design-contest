import { Link } from "wouter";
import { Instagram, Mail, MapPin } from "lucide-react";
import logoImage from "@assets/Full_logo_gold_and_black_png_1759569939974.png";

export default function Footer() {
  const navigationSections = [
    {
      title: "Services",
      links: [
        { href: "/custom-homes", label: "Custom Homes" },
        { href: "/process", label: "Our Process" },
        { href: "/knockdown-rebuild", label: "Knockdown Rebuild" }
      ]
    },
    {
      title: "Company",
      links: [
        { href: "/about", label: "About" },
        { href: "/projects", label: "Projects" },
        { href: "/videos", label: "Videos" }
      ]
    },
    {
      title: "Resources",
      links: [
        { href: "/resources", label: "Resources Hub" },
        { href: "/faqs", label: "FAQs" },
        { href: "/articles", label: "Articles" }
      ]
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "T&Cs" }
      ]
    }
  ];

  return (
    <footer 
      className="bg-background border-t border-border"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[2fr,3fr,2fr] gap-12 mb-12">
          {/* Brand - Principle 7: Dieter Rams - Minimal branding */}
          <div>
            <Link 
              href="/" 
              className="inline-block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md"
              aria-label="Jackson Dwellings home"
            >
              <img 
                src={logoImage} 
                alt="Jackson Dwellings" 
                className="h-12 mb-4" 
              />
            </Link>
            <p className="font-serif text-lg italic text-muted-foreground">Dwell well</p>
          </div>

          {/* Navigation Links - Principle 2: Steve Krug - Clear organization */}
          <nav aria-label="Footer navigation">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-2" role="list">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link 
                          href={link.href} 
                          className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm inline-block py-1"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* Contact - Principle 1: Don Norman - Clear signifiers for contact */}
          <address className="not-italic">
            <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Macedon Ranges, VIC</span>
              </p>
              <a 
                href="mailto:hello@jacksondwellings.com.au"
                className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm py-1"
                aria-label="Email us at hello@jacksondwellings.com.au"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>hello@jacksondwellings.com.au</span>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md py-2"
                data-testid="link-instagram"
                aria-label="Follow us on Instagram (opens in new tab)"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
                <span>Follow us</span>
              </a>
            </div>
          </address>
        </div>

        {/* Bottom bar - Principle 8: Farai Madzima - Clear, accessible information */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Jackson Dwellings. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Service area: Macedon Ranges and surrounds
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
