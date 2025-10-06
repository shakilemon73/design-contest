import { Phone, Mail, User, Clock } from "lucide-react";

export default function TopHeaderStripe() {
  return (
    <div className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-[#D4AF37]/20 backdrop-blur-sm">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-12 text-xs">
          {/* Left side - Quick Links (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-6 text-white/60">
            <a 
              href="/about" 
              className="hover:text-[#D4AF37] transition-all duration-300 font-light tracking-wide uppercase text-[10px]"
            >
              About Us
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="/process" 
              className="hover:text-[#D4AF37] transition-all duration-300 font-light tracking-wide uppercase text-[10px]"
            >
              Our Process
            </a>
            <span className="text-white/20">|</span>
            <a 
              href="/contact" 
              className="hover:text-[#D4AF37] transition-all duration-300 font-light tracking-wide uppercase text-[10px]"
            >
              Contact
            </a>
          </div>
          
          {/* Mobile - Business Hours */}
          <div className="lg:hidden flex items-center gap-2 text-white/70">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-light">Mon-Fri 9:00-17:00</span>
          </div>
          
          {/* Right side - Contact & Auth */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Phone */}
            <a 
              href="tel:+61354212345" 
              className="group flex items-center gap-2 hover:text-[#D4AF37] transition-all duration-300 text-white/70"
              aria-label="Call us"
            >
              <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <Phone className="w-3 h-3 text-[#D4AF37]" />
              </div>
              <span className="hidden sm:inline text-[11px] font-light">+61 (03) 5421 2345</span>
            </a>
            
            {/* Business Hours (desktop only) */}
            <div className="hidden lg:flex items-center gap-2 text-white/60 px-3 py-1 bg-white/5 rounded-full">
              <Clock className="w-3 h-3 text-[#D4AF37]" />
              <span className="text-[10px] font-light">Mon-Fri 9:00-17:00</span>
            </div>
            
            {/* Email */}
            <a 
              href="mailto:hello@jacksondwellings.com.au" 
              className="group hidden md:flex items-center gap-2 hover:text-[#D4AF37] transition-all duration-300 text-white/70"
              aria-label="Email us"
            >
              <div className="p-1.5 rounded-full bg-white/5 group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                <Mail className="w-3 h-3 text-[#D4AF37]" />
              </div>
              <span className="hidden lg:inline text-[11px] font-light">hello@jacksondwellings.com.au</span>
            </a>
            
            {/* Login/Register */}
            <a 
              href="/login" 
              className="group flex items-center gap-2 px-3 py-1.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 rounded-full transition-all duration-300"
              aria-label="Login or register"
            >
              <User className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-[#D4AF37] text-[10px] font-light tracking-wide uppercase hidden sm:inline">Login</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
