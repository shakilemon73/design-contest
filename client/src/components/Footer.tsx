import { Link } from "wouter";
import { Mail, MapPin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="bg-black text-white border-t border-white/10"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-16 md:py-24">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <Link 
              href="/" 
              className="inline-block group mb-8 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-black rounded-sm"
              aria-label="Jackson Dwellings home"
            >
              <span className="text-2xl font-serif font-light tracking-wider text-white">
                JACKSON
                <span className="text-[#D4AF37]">.</span>
              </span>
            </Link>
            <p className="text-white/60 font-light italic text-lg">
              Dwell well
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Navigate</h4>
            <ul className="space-y-3" role="list">
              {['Portfolio', 'Process', 'Studio', 'Resources', 'Connect'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`}
                    className="text-white/80 hover:text-white transition-colors font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm inline-block py-1"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <address className="not-italic">
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-white/80 font-light text-sm">
                  Macedon Ranges, VIC
                </span>
              </div>
              <a 
                href="mailto:hello@jacksondwellings.com.au"
                className="flex items-start gap-3 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
                aria-label="Email us"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="font-light text-sm">hello@jacksondwellings.com.au</span>
              </a>
            </div>
          </address>

          {/* Social */}
          <div>
            <h4 className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6">Follow</h4>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm py-2"
              aria-label="Follow us on Instagram (opens in new tab)"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
              <span className="font-light text-sm">Instagram</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p className="font-light">
              © {new Date().getFullYear()} Jackson Dwellings. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link 
                href="/privacy" 
                className="hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-white/80 transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4AF37] rounded-sm"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
