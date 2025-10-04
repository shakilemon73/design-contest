import { Link } from "wouter";
import { Instagram } from "lucide-react";
import logoImage from "@assets/Full_logo_gold_and_black_png_1759569939974.png";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-[2fr,3fr,2fr] gap-12 mb-12">
          <div>
            <img src={logoImage} alt="Jackson Dwellings" className="h-12 mb-4" />
            <p className="font-serif text-lg italic text-muted-foreground">Dwell well</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/custom-homes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Custom Homes</Link></li>
                <li><Link href="/process" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Process</Link></li>
                <li><Link href="/knockdown-rebuild" className="text-sm text-muted-foreground hover:text-primary transition-colors">Knockdown Rebuild</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="/videos" className="text-sm text-muted-foreground hover:text-primary transition-colors">Videos</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resources Hub</Link></li>
                <li><Link href="/faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
                <li><Link href="/articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">Articles</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">T&Cs</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-accent text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <p className="text-sm text-muted-foreground mb-2">Macedon Ranges, VIC</p>
            <p className="text-sm text-muted-foreground mb-4">hello@jacksondwellings.com.au</p>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              data-testid="link-instagram"
            >
              <Instagram className="w-5 h-5" />
              Follow us
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
