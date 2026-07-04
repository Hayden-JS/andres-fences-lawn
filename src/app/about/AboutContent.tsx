'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Phone, ArrowRight, Hammer, Users, Clock, DollarSign, Award } from 'lucide-react';
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

const values = [
  { icon: Hammer, title: 'Craftsmanship', desc: 'Every post, panel, and gate is built to hold up — not just to pass a walkthrough.' },
  { icon: DollarSign, title: 'Honest Pricing', desc: 'You get a clear, upfront estimate with no hidden fees or last-minute surprises.' },
  { icon: Clock, title: 'Reliable Scheduling', desc: "When we tell you a date, we show up. Your time matters as much as ours." },
  { icon: Users, title: 'Customer-First', desc: "We treat every property like it's our own and communicate clearly from quote to completion." },
];

export default function AboutContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-af-forest text-white overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/95 to-af-forest/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeUp} className="af-eyebrow">Our Story</motion.span>
            <motion.h1 variants={fadeUp} className="text-white mb-6">Meet Andres</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl font-body normal-case">
              A local, family-run fence and lawn care company built on straightforward pricing, dependable scheduling, and work that&apos;s done right the first time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="af-section bg-af-cream">
        <div className="af-container max-w-3xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp} className="font-body normal-case text-af-text-secondary text-lg space-y-6 leading-relaxed">
            <p>
              Andres Fences &amp; Lawn Services is a locally owned business based in Dale, Texas, serving homeowners and property owners throughout Greater Austin. What started as a hands-on fencing operation has grown into a full outdoor services company — but the approach hasn&apos;t changed: show up when we say we will, quote fair prices, and build something that lasts.
            </p>
            <p>
              Andres and his crew bring a working knowledge of what actually holds up in Central Texas conditions — from cedar that resists the summer heat to post depths that keep a fence line straight through heavy rain. That same attention carries over into lawn care, where consistent, reliable maintenance keeps properties looking sharp year-round.
            </p>
            <p>
              As a small, local business, every job reflects directly on Andres&apos;s name and reputation. That&apos;s reflected in the way the crew works: clean job sites, clear communication, and a straightforward answer any time a customer has a question about their project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="af-section bg-white">
        <div className="af-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp} className="text-center mb-16">
            <span className="af-eyebrow">What Drives Us</span>
            <h2>Our Values</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp} className="af-card text-center">
                <div className="w-14 h-14 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest mb-5 mx-auto">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg mb-2 uppercase">{v.title}</h3>
                <p className="text-af-text-secondary font-body normal-case text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="af-section bg-af-forest text-white relative overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/5" />
        <div className="af-container relative z-10 max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
            <Award className="w-10 h-10 text-af-orange mx-auto mb-6" />
            <span className="af-eyebrow">Our Mission</span>
            <h2 className="text-white mb-6">
              Deliver dependable outdoor services with quality workmanship and honest communication.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-af-orange text-white">
        <div className="af-container text-center">
          <h2 className="text-white mb-4">Let&apos;s Talk About Your Property</h2>
          <p className="text-white/90 font-body normal-case text-lg mb-8 max-w-xl mx-auto">
            Reach out for a free estimate — no pressure, just honest advice.
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
