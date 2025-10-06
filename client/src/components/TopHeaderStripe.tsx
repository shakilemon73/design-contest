import { Phone, Mail, User } from "lucide-react";

export default function TopHeaderStripe() {
  return (
    <div className="bg-neutral-900 border-b border-white/10">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-10 text-xs">
          <div className="flex items-center gap-6 text-white/70">
            <a 
              href="/about" 
              className="hover:text-white transition-colors"
            >
              About Us
            </a>
            <a 
              href="/process" 
              className="hover:text-white transition-colors"
            >
              Our Process
            </a>
            <a 
              href="/contact" 
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-6 text-white/70">
            <a 
              href="tel:+61354212345" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+61 (03) 5421 2345</span>
            </a>
            <span className="hidden md:inline">Mon-Fri 9:00-17:00</span>
            <a 
              href="mailto:hello@jacksondwellings.com.au" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">hello@jacksondwellings.com.au</span>
            </a>
            <a 
              href="/login" 
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <User className="w-3.5 h-3.5" />
              <span>Login / Register</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
