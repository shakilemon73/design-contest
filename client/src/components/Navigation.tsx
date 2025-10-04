import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/Full_logo_gold_and_black_png_1759569939974.png";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home">
            <img src={logoImage} alt="Jackson Dwellings" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-home-nav">
              Home
            </Link>
            <Link href="/custom-homes" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-custom-homes">
              Custom Homes
            </Link>
            <Link href="/process" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-process">
              Process
            </Link>
            <Link href="/projects" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-projects">
              Projects
            </Link>
            <Link href="/videos" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-videos">
              Videos
            </Link>
            <Link href="/about" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-about">
              About
            </Link>
            <Link href="/resources" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-resources">
              Resources Hub
            </Link>
            <Link href="/connect" className="text-sm font-sans hover:text-primary transition-colors" data-testid="link-connect">
              Connect
            </Link>
          </div>

          <Button className="hidden lg:inline-flex" data-testid="button-book-consult">
            Book a Consult
          </Button>

          <button className="lg:hidden" data-testid="button-mobile-menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
