import { Phone, Mail, User, Clock } from "lucide-react";

export default function TopHeaderStripe() {
  return (
    <div 
      className="bg-white border-b border-neutral-200 shadow-sm"
      role="banner"
      aria-label="Top contact bar"
    >
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between min-h-[44px] py-2 text-xs">
          {/* Left side - Quick Links with clear signifiers */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <a 
              href="/about" 
              className="group relative px-2 py-1 text-neutral-600 hover:text-[#D4AF37] transition-all duration-200 font-light tracking-wide uppercase text-[10px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-sm min-h-[44px] flex items-center"
              aria-label="About us page"
              data-testid="link-about-top"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-200" aria-hidden="true"></span>
            </a>
            <span className="text-neutral-300" aria-hidden="true">|</span>
            <a 
              href="/process" 
              className="group relative px-2 py-1 text-neutral-600 hover:text-[#D4AF37] transition-all duration-200 font-light tracking-wide uppercase text-[10px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-sm min-h-[44px] flex items-center"
              aria-label="Our building process"
              data-testid="link-process-top"
            >
              Our Process
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-200" aria-hidden="true"></span>
            </a>
            <span className="text-neutral-300" aria-hidden="true">|</span>
            <a 
              href="/contact" 
              className="group relative px-2 py-1 text-neutral-600 hover:text-[#D4AF37] transition-all duration-200 font-light tracking-wide uppercase text-[10px] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 rounded-sm min-h-[44px] flex items-center"
              aria-label="Contact page"
              data-testid="link-contact-top"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-200" aria-hidden="true"></span>
            </a>
          </div>
          
          {/* Mobile - Business Hours with clear visual affordance */}
          <div className="lg:hidden flex items-center gap-2 text-neutral-700">
            <div className="p-1 rounded-full bg-[#D4AF37]/10" aria-hidden="true">
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            </div>
            <span className="text-[10px] font-medium">Mon-Fri 9:00-17:00</span>
          </div>
          
          {/* Right side - Contact & Auth with immediate feedback */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
            {/* Phone - Direct manipulation with clear signifier */}
            <a 
              href="tel:+61354212345" 
              className="group flex items-center gap-2 px-2 py-1 text-neutral-700 hover:text-[#D4AF37] transition-all duration-200 rounded-md hover:bg-[#D4AF37]/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 min-h-[44px] min-w-[44px]"
              aria-label="Call us at +61 (03) 5421 2345"
              data-testid="link-phone-top"
            >
              <div className="p-1.5 rounded-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-200 group-hover:scale-110" aria-hidden="true">
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <span className="hidden sm:inline text-[11px] font-medium">+61 (03) 5421 2345</span>
            </a>
            
            {/* Business Hours (desktop) - Recognition over recall */}
            <div 
              className="hidden lg:flex items-center gap-2 text-neutral-600 px-3 py-1.5 bg-neutral-50 border border-neutral-200 rounded-full"
              role="status"
              aria-label="Business hours"
            >
              <Clock className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span className="text-[10px] font-medium">Mon-Fri 9:00-17:00</span>
            </div>
            
            {/* Email - Clear mapping between action and result */}
            <a 
              href="mailto:hello@jacksondwellings.com.au" 
              className="group hidden md:flex items-center gap-2 px-2 py-1 text-neutral-700 hover:text-[#D4AF37] transition-all duration-200 rounded-md hover:bg-[#D4AF37]/5 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 min-h-[44px]"
              aria-label="Email us at hello@jacksondwellings.com.au"
              data-testid="link-email-top"
            >
              <div className="p-1.5 rounded-full bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-all duration-200 group-hover:scale-110" aria-hidden="true">
                <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              </div>
              <span className="hidden lg:inline text-[11px] font-medium">hello@jacksondwellings.com.au</span>
            </a>
            
            {/* Login/Register - Delightful micro-interaction */}
            <a 
              href="/login" 
              className="group flex items-center gap-2 px-3 sm:px-4 py-2 bg-[#D4AF37] hover:bg-[#C19A2E] text-white rounded-full transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 min-h-[44px] hover:scale-105 active:scale-95"
              aria-label="Login or register"
              data-testid="button-login-top"
            >
              <User className="w-3.5 h-3.5" aria-hidden="true" />
              <span className="text-[10px] font-medium tracking-wide uppercase hidden sm:inline">Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
