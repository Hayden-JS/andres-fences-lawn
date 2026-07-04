'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Phone, ArrowRight, Fence, Sprout, CheckCircle } from 'lucide-react';
import { FenceSlatPattern } from '@/components/FenceSlats';
import { business } from '@/lib/business';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const serviceGroups = [
  {
    icon: Fence,
    tone: 'forest' as const,
    title: 'Fence Services',
    desc: 'Fence installation, repair, replacement, and gates — wood, cedar, privacy, decorative, chain link, ranch, and commercial fencing throughout Austin and Central Texas.',
    href: '/services/fence-services/',
    bullets: ['New fence installation', 'Fence & post repair', 'Gate installation & repair', 'Chain link, ranch & commercial'],
  },
  {
    icon: Sprout,
    tone: 'cedar' as const,
    title: 'Lawn Services',
    desc: 'Routine mowing, seasonal cleanups, mulching, and yard maintenance that keeps your property looking sharp all year.',
    href: '/services/lawn-services/',
    bullets: ['Routine lawn maintenance', 'Yard & seasonal cleanup', 'Mulch installation', 'Bush trimming & weed removal'],
  },
];

export default function ServicesContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-af-forest text-white overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/95 to-af-forest/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeUp} className="af-eyebrow">What We Do</motion.span>
            <motion.h1 variants={fadeUp} className="text-white mb-6">
              Fence &amp; Lawn Services in Austin, TX
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl font-body normal-case">
              Andres Fences &amp; Lawn Services handles everything from a new privacy fence to weekly lawn care — one local crew, one point of contact, honest pricing across the board.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service group cards */}
      <section className="af-section bg-af-cream">
        <div className="af-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {serviceGroups.map((group) => (
              <motion.div key={group.title} variants={fadeUp}>
                <Link href={group.href} className="af-card block h-full group">
                  <div
                    className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-colors ${
                      group.tone === 'forest'
                        ? 'bg-af-forest/10 text-af-forest group-hover:bg-af-forest group-hover:text-white'
                        : 'bg-af-cedar/10 text-af-cedar-dark group-hover:bg-af-cedar-dark group-hover:text-white'
                    }`}
                  >
                    <group.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl mb-3 uppercase">{group.title}</h2>
                  <p className="text-af-text-secondary font-body normal-case mb-6">{group.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {group.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm font-medium text-af-charcoal font-body normal-case">
                        <CheckCircle className="w-4 h-4 text-af-orange shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                  <span className="text-af-orange font-semibold text-sm inline-flex items-center gap-1">
                    View {group.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-af-orange text-white">
        <div className="af-container text-center">
          <h2 className="text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-white/90 font-body normal-case text-lg mb-8 max-w-xl mx-auto">
            Tell us what your property needs and we&apos;ll point you to the right service — or just get you a free estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="bg-white text-af-orange px-7 py-3.5 rounded-md font-bold inline-flex items-center justify-center gap-2 hover:bg-af-cream transition-colors">
              <Phone className="w-5 h-5" /> Call {business.phone}
            </a>
            <Link href="/contact" className="bg-af-forest text-white px-7 py-3.5 rounded-md font-bold inline-flex items-center justify-center gap-2 hover:bg-af-forest-dark transition-colors">
              Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
