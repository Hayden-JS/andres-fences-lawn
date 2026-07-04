'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  Sprout,
  Trash2,
  Wind,
  Scissors,
  Flower2,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { FenceSlatPattern, ProjectTile } from '@/components/FenceSlats';
import { business } from '@/lib/business';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const services = [
  {
    icon: Scissors,
    title: 'Routine Lawn Maintenance',
    desc: 'Weekly or bi-weekly mowing, edging, and trimming to keep your lawn consistently sharp all season.',
  },
  {
    icon: Trash2,
    title: 'Yard Cleanup',
    desc: 'Debris removal, brush clearing, and general cleanup to reset an overgrown or neglected yard.',
  },
  {
    icon: Wind,
    title: 'Leaf Removal',
    desc: 'Full-property leaf clearing so your lawn can breathe through fall and winter.',
  },
  {
    icon: Flower2,
    title: 'Mulch Installation',
    desc: 'Fresh mulch beds that lock in moisture, suppress weeds, and sharpen your landscaping.',
  },
  {
    icon: Sprout,
    title: 'Seasonal Cleanup',
    desc: 'Spring and fall cleanups to prep your lawn for the season ahead.',
  },
  {
    icon: Scissors,
    title: 'Bush Trimming & Weed Removal',
    desc: 'Shape overgrown shrubs and clear weeds from beds, walkways, and fence lines.',
  },
];

const faqs = [
  {
    q: 'How often should lawns be mowed?',
    a: "During the peak growing season in Central Texas (spring through early fall), weekly mowing keeps grass healthiest and prevents scalping. In cooler months, bi-weekly service is usually enough. We'll recommend a schedule based on your grass type and how fast it's growing.",
  },
  {
    q: 'Do you offer recurring service?',
    a: 'Yes — most of our lawn customers are on a recurring weekly or bi-weekly schedule so they never have to think about it. We also take one-time cleanup and mulch jobs for homeowners who just need a single reset.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We provide lawn services throughout Austin and the surrounding communities, including Buda, Kyle, Manor, Pflugerville, Round Rock, Cedar Park, Georgetown, Bastrop, Dale, Lockhart, and nearby areas.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-af-border rounded-xl bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-af-display font-semibold uppercase text-af-charcoal">{q}</span>
        <ChevronDown className={`w-5 h-5 text-af-orange shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p className="px-6 pb-6 text-af-text-secondary font-body normal-case leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function LawnServicesContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-af-forest-light text-white overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/90 to-af-forest-light/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeUp} className="af-eyebrow">Lawn Services</motion.span>
            <motion.h1 variants={fadeUp} className="text-white mb-6">
              Reliable Lawn Care Services for Austin Homeowners
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl font-body normal-case">
              Routine mowing, seasonal cleanups, mulching, and yard maintenance that keeps your property looking sharp all year — from the same crew you trust for fencing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services grid */}
      <section className="af-section bg-af-cream">
        <div className="af-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp} className="text-center mb-16">
            <span className="af-eyebrow">What We Offer</span>
            <h2>Full-Service Lawn Care</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="af-card">
                <div className="w-14 h-14 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest mb-5">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg mb-2 uppercase">{s.title}</h3>
                <p className="text-af-text-secondary font-body normal-case text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Landscape refresh */}
      <section className="af-section bg-af-forest text-white relative overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/5" />
        <div className="af-container relative z-10 max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
            <span className="af-eyebrow">Landscape Refresh</span>
            <h2 className="text-white mb-6">More Than Mowing</h2>
            <p className="text-white/70 font-body normal-case text-lg leading-relaxed">
              A well-kept lawn is about more than a clean cut. We handle the details that make a property look genuinely cared for — trimmed edges along walkways and fence lines, fresh mulch beds that hold their color, and cleared debris after storms or heavy pollen seasons. Pair a recurring lawn plan with a new or repaired fence and your whole property gets a consistent, finished look.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="af-section bg-af-cream">
        <div className="af-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
              <span className="af-eyebrow">Before &amp; After</span>
              <h2>Recent Lawn Projects</h2>
            </motion.div>
            <Link href="/gallery" className="text-af-orange font-semibold inline-flex items-center gap-2 group">
              View full gallery <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Sprout, label: 'Weekly Mowing', tone: 'forest' as const },
              { icon: Trash2, label: 'Full Yard Cleanup', tone: 'cedar' as const },
              { icon: Flower2, label: 'Mulch Bed Refresh', tone: 'orange' as const },
              { icon: Wind, label: 'Seasonal Leaf Removal', tone: 'forest' as const },
            ].map((p) => (
              <motion.div key={p.label} variants={fadeUp}>
                <ProjectTile icon={p.icon} label={p.label} tone={p.tone} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="af-section bg-af-cream-warm">
        <div className="af-container max-w-3xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp} className="text-center mb-12">
            Lawn Care FAQs
          </motion.h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-af-orange text-white">
        <div className="af-container text-center">
          <h2 className="text-white mb-4">Request Lawn Service</h2>
          <p className="text-white/90 font-body normal-case text-lg mb-8 max-w-xl mx-auto">
            Get a free quote for recurring lawn care or a one-time cleanup.
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
