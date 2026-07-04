import Link from 'next/link';
import { Phone, ClipboardList } from 'lucide-react';
import { business } from '@/lib/business';

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.15)]">
      <a
        href={business.phoneHref}
        className="bg-af-forest text-white flex items-center justify-center gap-2 py-4 font-bold uppercase text-sm tracking-wide"
      >
        <Phone className="w-4 h-4" /> Call Now
      </a>
      <Link
        href="/contact"
        className="bg-af-orange text-white flex items-center justify-center gap-2 py-4 font-bold uppercase text-sm tracking-wide"
      >
        <ClipboardList className="w-4 h-4" /> Free Estimate
      </Link>
    </div>
  );
}
