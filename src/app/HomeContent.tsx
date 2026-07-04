'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  Star,
  ShieldCheck,
  Clock,
  DollarSign,
  Hammer,
  Fence,
  Sprout,
  DoorOpen,
  CheckCircle,
  Users,
} from 'lucide-react';
import { FenceSlatPattern, ProjectTile } from '@/components/FenceSlats';
import { business } from '@/lib/business';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const services = [
  {
    icon: Fence,
    title: 'Fence Installation',
    desc: 'Wood, cedar, privacy, and decorative fencing built to last through Texas weather.',
    href: '/services/fence-services',
  },
  {
    icon: Hammer,
    title: 'Fence Repair',
    desc: 'Storm damage, broken posts, gate repair, and replacement panels — fast turnaround.',
    href: '/services/fence-services',
  },
  {
    icon: Sprout,
    title: 'Lawn Services',
    desc: 'Routine mowing, yard cleanup, seasonal maintenance, and mulching.',
    href: '/services/lawn-services',
  },
  {
    icon: DoorOpen,
    title: 'Gates',
    desc: 'Custom gates, gate repair, hardware replacement, and automation.',
    href: '/services/fence-services',
  },
];

const whyChoose = [
  'Honest pricing with no surprises',
  'Prompt communication',
  'High-quality craftsmanship',
  'Clean job sites',
  'Reliable scheduling',
  'Local experience in Central Texas',
];

const featuredProjects = [
  { icon: Fence, label: 'Privacy Fence', tone: 'forest' as const },
  { icon: Fence, label: 'Horizontal Fence', tone: 'cedar' as const },
  { icon: DoorOpen, label: 'Custom Gate', tone: 'forest' as const },
  { icon: Sprout, label: 'Lawn Cleanup', tone: 'cedar' as const },
  { icon: Hammer, label: 'New Fence Build', tone: 'orange' as const },
  { icon: ShieldCheck, label: 'Fence Repair', tone: 'forest' as const },
];

export default function HomeContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-af-forest text-white overflow-hidden min-h-[85vh] flex items-center">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/95 to-af-forest/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeUp} className="af-badge bg-white/10 text-white mb-6">
              <Star className="w-3.5 h-3.5 fill-af-orange text-af-orange" /> 5.0 Rated on Google
            </motion.span>
            <motion.h1 variants={fadeUp} className="mb-6 text-white">
              Austin&apos;s Trusted <span className="text-af-orange">Fence &amp; Lawn</span> Professionals
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 mb-10 max-w-xl font-body normal-case">
              Professional fence installation, fence repair, lawn care, and outdoor improvements throughout Austin and surrounding communities.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link href="/contact" className="af-btn-primary text-base">
                Free Estimate <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={business.phoneHref} className="af-btn-ghost text-base">
                <Phone className="w-5 h-5" /> Call {business.phone}
              </a>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-white/80 font-body normal-case">
              {['Free Estimates', 'Local Family Business', 'Fast Turnaround', 'Quality Materials'].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-af-orange" /> {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 bg-af-cream-warm border-b border-af-border">
        <div className="af-container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Star, label: '5.0 Star Rated' },
            { icon: Users, label: 'Locally Owned' },
            { icon: Clock, label: 'Reliable Scheduling' },
            { icon: DollarSign, label: 'Honest Pricing' },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-af-forest/10 flex items-center justify-center text-af-forest">
                <item.icon className="w-7 h-7" />
              </div>
              <span className="font-af-display font-semibold uppercase text-sm text-af-charcoal tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="af-section bg-af-cream">
        <div className="af-container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp} className="text-center mb-16">
            <span className="af-eyebrow">What We Do</span>
            <h2>Fence &amp; Lawn Services for Every Property</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Link href={s.href} className="af-card block h-full group">
                  <div className="w-14 h-14 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest mb-5 group-hover:bg-af-orange group-hover:text-white transition-colors">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg mb-2 uppercase">{s.title}</h3>
                  <p className="text-af-text-secondary font-body normal-case text-sm mb-4">{s.desc}</p>
                  <span className="text-af-orange font-semibold text-sm inline-flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <Link href="/contact" className="af-btn-primary">
              Request a Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Andres */}
      <section className="af-section bg-af-forest text-white relative overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/5" />
        <div className="af-container relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
            <span className="af-eyebrow">Why Homeowners Choose Andres</span>
            <h2 className="text-white mb-6">Reliable Work. Fair Prices. No Surprises.</h2>
            <p className="text-white/70 font-body normal-case text-lg">
              We treat every property like our own — showing up on time, communicating clearly, and leaving your job site as clean as we found it.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-5"
          >
            {whyChoose.map((item) => (
              <motion.div key={item} variants={fadeUp} className="flex items-start gap-3 bg-white/5 rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-af-orange shrink-0 mt-0.5" />
                <span className="font-body normal-case font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="af-section bg-af-cream">
        <div className="af-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
              <span className="af-eyebrow">Recent Work</span>
              <h2>Featured Projects</h2>
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((p) => (
              <motion.div key={p.label} variants={fadeUp}>
                <ProjectTile icon={p.icon} label={p.label} tone={p.tone} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews / Trust */}
      <section className="af-section bg-af-cream-warm">
        <div className="af-container max-w-3xl text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-af-orange text-af-orange" />
              ))}
            </div>
            <h2 className="mb-4">5.0 Stars on Google</h2>
            <p className="text-af-text-secondary font-body normal-case text-lg mb-8">
              We&apos;re a growing local business proud to earn every review. Read what customers are saying, or leave us your own after your next project.
            </p>
            <a
              href={business.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="af-btn-secondary"
            >
              <Star className="w-5 h-5" /> Leave Us a Google Review
            </a>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-af-orange text-white relative overflow-hidden">
        <div className="af-container text-center relative z-10">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-white mb-4">
            Ready to Improve Your Property?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-white/90 font-body normal-case text-lg mb-8 max-w-xl mx-auto">
            Get a free, no-obligation estimate for your fence or lawn project today.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={business.phoneHref} className="bg-white text-af-orange px-7 py-3.5 rounded-md font-bold inline-flex items-center justify-center gap-2 hover:bg-af-cream transition-colors">
              <Phone className="w-5 h-5" /> Call Today
            </a>
            <Link href="/contact" className="bg-af-forest text-white px-7 py-3.5 rounded-md font-bold inline-flex items-center justify-center gap-2 hover:bg-af-forest-dark transition-colors">
              Free Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
