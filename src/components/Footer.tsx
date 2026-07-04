import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { business } from '@/lib/business';

export default function AndresFooter() {
  return (
    <footer className="bg-af-forest-dark text-white pt-16 pb-28 lg:pb-16">
      <div className="af-container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <span className="font-af-display font-bold uppercase text-2xl block mb-4">
              Andres <span className="text-af-orange">Fences</span> &amp; Lawn
            </span>
            <p className="text-white/70 max-w-sm mb-6">
              Locally owned fence installation, fence repair, and lawn care serving Austin and Central Texas. Honest pricing, reliable scheduling, quality craftsmanship.
            </p>
            <a href={business.phoneHref} className="flex items-center gap-2 text-af-orange font-bold text-lg hover:underline w-fit">
              <Phone className="w-5 h-5" /> {business.phone}
            </a>
          </div>
          <div>
            <h5 className="font-af-display font-bold uppercase mb-5 text-sm tracking-wider">Quick Links</h5>
            <ul className="space-y-3 text-white/70">
              <li><Link href="/" className="hover:text-af-orange transition-colors">Home</Link></li>
              <li><Link href="/fence-services" className="hover:text-af-orange transition-colors">Fence Services</Link></li>
              <li><Link href="/lawn-services" className="hover:text-af-orange transition-colors">Lawn Services</Link></li>
              <li><Link href="/about" className="hover:text-af-orange transition-colors">About Andres</Link></li>
              <li><Link href="/gallery" className="hover:text-af-orange transition-colors">Project Gallery</Link></li>
              <li><Link href="/contact" className="hover:text-af-orange transition-colors">Free Estimate</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-af-display font-bold uppercase mb-5 text-sm tracking-wider">Contact &amp; Hours</h5>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-af-orange" />
                <span>Serving {business.areaServed}</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0 text-af-orange" />
                <span>{business.email}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-af-orange" />
                <span>
                  {business.hours.map((h) => (
                    <span key={h.days} className="block">{h.days}: {h.time}</span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Andres Fences &amp; Lawn Services. All rights reserved.</p>
          <p className="text-white/30">
            Site by{' '}
            <a
              href="https://hayden-js.github.io/swc-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-af-orange transition-colors underline decoration-white/20"
            >
              Schwarz Web Consulting
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
