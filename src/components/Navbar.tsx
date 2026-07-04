'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { business } from '@/lib/business';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export default function AndresNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-af-cream/95 backdrop-blur-md shadow-md py-3' : 'bg-af-cream/95 backdrop-blur-md py-5'
      )}
    >
      <div className="af-container flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-af-display font-bold uppercase tracking-tight text-xl md:text-2xl text-af-forest leading-none">
            Andres <span className="text-af-orange">Fences</span>
            <span className="block text-[0.6rem] md:text-xs tracking-[0.2em] text-af-text-secondary font-body normal-case mt-0.5">
              &amp; Lawn Services
            </span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-semibold text-sm uppercase tracking-wide text-af-charcoal hover:text-af-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 font-bold text-af-forest hover:text-af-orange transition-colors"
          >
            <Phone className="w-4 h-4" />
            {business.phone}
          </a>
          <Link href="/contact" className="af-btn-primary py-2.5 px-5 text-sm">
            Free Estimate
          </Link>
        </div>

        <button
          className="lg:hidden text-af-forest p-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden absolute top-0 left-0 w-full bg-af-forest text-white overflow-hidden flex flex-col items-center justify-center"
          >
            <div className="af-container py-8 flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-af-display font-bold uppercase hover:text-af-orange transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href={business.phoneHref} className="flex items-center gap-2 text-xl font-bold">
                <Phone className="w-5 h-5" /> {business.phone}
              </a>
              <Link
                href="/contact"
                className="af-btn-primary w-full max-w-xs justify-center py-4 text-lg"
                onClick={() => setIsOpen(false)}
              >
                Free Estimate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
