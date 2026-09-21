import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, ShieldCheck } from "lucide-react";

export default function Footer({ onOpenQuote }) {
  return (
    <footer id="contact" className="bg-[#040C1A] text-white pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative h-12 w-12 shrink-0 bg-white rounded-2xl p-1 shadow-md">
                <Image
                  src="/logo.png"
                  alt="Space Vision Lab"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-base tracking-wider text-white leading-none uppercase group-hover:text-blue-400 transition-colors">
                  SPACE VISION LAB
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-widest text-slate-400 font-bold uppercase mt-1">
                  LABORATORY FURNITURE SOLUTIONS
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Smart, durable and functional laboratory furniture systems, certified chemical fume hoods, cleanroom containment systems, and turnkey lab engineering.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>ISO 9001:2015 & SEFA-8 Compliant Manufacturing</span>
            </div>
          </div>

          {/* Col 2: Solutions & Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/solutions" className="hover:text-white transition-colors">Sector Solutions</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Turnkey Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/process" className="hover:text-white transition-colors">Our Process</Link></li>
              <li><Link href="/workstations" className="hover:text-white transition-colors">Workstation Series</Link></li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><Link href="/products" className="hover:text-white transition-colors">Lab Benches & Workstations</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Fume Extraction Hoods</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Safety Chemical Cabinets</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Cleanroom Pass Boxes</Link></li>
              <li><Link href="/materials" className="hover:text-white transition-colors">TRESPA & Epoxy Tops</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>Calicut, Kerala, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+918193856070" className="hover:text-white transition-colors">
                  +91 8193856070
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:solutions@spacevisionlabs.com" className="hover:text-white transition-colors">
                  solutions@spacevisionlabs.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="https://spacevisionlabs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  spacevisionlabs.com
                </a>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-xl text-xs transition-colors"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Space Vision Lab Private Limited. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>SEFA-8 Verified</span>
            <span>ISO 9001:2015</span>
            <Link href="/contact" className="hover:text-slate-300">Contact Us</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
