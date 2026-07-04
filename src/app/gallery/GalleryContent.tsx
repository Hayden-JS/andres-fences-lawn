'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Phone, ArrowRight, Fence, Hammer, DoorOpen, Sprout, Trash2, Building2 } from 'lucide-react';
import { FenceSlatPattern, ProjectTile } from '@/components/FenceSlats';
import { business } from '@/lib/business';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
};

const categories = [
  'All',
  'Fence Installation',
  'Fence Repair',
  'Gates',
  'Lawn Maintenance',
  'Cleanup',
  'Commercial',
  'Residential',
] as const;

type Category = (typeof categories)[number];

const projects: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  tone: 'forest' | 'cedar' | 'orange';
  categories: Category[];
}[] = [
  {
    icon: Fence,
    label: '6-ft Cedar Privacy Fence',
    description: 'Board-on-board cedar privacy fence installed for a residential backyard, Austin, TX area.',
    tone: 'forest',
    categories: ['Fence Installation', 'Residential'],
  },
  {
    icon: Fence,
    label: 'Horizontal Slat Fence',
    description: 'Modern horizontal-slat fence build with steel posts and cedar boards.',
    tone: 'cedar',
    categories: ['Fence Installation', 'Residential'],
  },
  {
    icon: DoorOpen,
    label: 'Double Drive Gate',
    description: 'Custom double drive gate matched to an existing wood privacy fence line.',
    tone: 'orange',
    categories: ['Gates', 'Residential'],
  },
  {
    icon: Hammer,
    label: 'Storm Damage Repair',
    description: 'Post and panel replacement after high-wind storm damage.',
    tone: 'forest',
    categories: ['Fence Repair', 'Residential'],
  },
  {
    icon: Sprout,
    label: 'Weekly Lawn Maintenance',
    description: 'Recurring mow, edge, and trim service for a residential property.',
    tone: 'cedar',
    categories: ['Lawn Maintenance', 'Residential'],
  },
  {
    icon: Trash2,
    label: 'Full Yard Cleanup',
    description: 'Brush clearing and debris removal ahead of a new fence installation.',
    tone: 'orange',
    categories: ['Cleanup', 'Residential'],
  },
  {
    icon: Fence,
    label: 'New Wood Fence Build',
    description: 'Full perimeter fence install, pressure-treated pine with steel gate frame.',
    tone: 'forest',
    categories: ['Fence Installation', 'Residential'],
  },
  {
    icon: DoorOpen,
    label: 'Gate Hardware Repair',
    description: 'Hinge and latch replacement to fix a sagging walk gate.',
    tone: 'cedar',
    categories: ['Fence Repair', 'Gates', 'Residential'],
  },
  {
    icon: Building2,
    label: 'Commercial Security Fencing',
    description: 'Chain link security fencing installed for a commercial storage lot.',
    tone: 'orange',
    categories: ['Fence Installation', 'Commercial'],
  },
  {
    icon: Sprout,
    label: 'Mulch Bed Installation',
    description: 'Fresh mulch beds installed along a front walkway and foundation line.',
    tone: 'forest',
    categories: ['Lawn Maintenance', 'Residential'],
  },
  {
    icon: Fence,
    label: 'Ranch-Style Fencing',
    description: 'Post-and-rail perimeter fencing for an acreage property near Bastrop.',
    tone: 'cedar',
    categories: ['Fence Installation', 'Commercial'],
  },
  {
    icon: Hammer,
    label: 'Fence Line Rebuild',
    description: 'Full replacement of a deteriorated fence line, old material hauled away.',
    tone: 'orange',
    categories: ['Fence Repair', 'Residential'],
  },
];

export default function GalleryContent() {
  const [active, setActive] = useState<Category>('All');

  const filtered = active === 'All' ? projects : projects.filter((p) => p.categories.includes(active));

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-af-forest text-white overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/95 to-af-forest/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeUp} className="af-eyebrow">Project Gallery</motion.span>
            <motion.h1 variants={fadeUp} className="text-white mb-6">See Our Recent Work</motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl font-body normal-case">
              A look at fence installations, repairs, gates, and lawn projects completed for property owners across Central Texas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="af-section bg-af-cream">
        <div className="af-container">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-sm font-semibold uppercase tracking-wide px-4 py-2 rounded-full border transition-colors ${
                  active === cat
                    ? 'bg-af-forest text-white border-af-forest'
                    : 'bg-white text-af-forest border-af-border hover:border-af-forest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filtered.map((p) => (
              <motion.div key={p.label} variants={fadeUp}>
                <ProjectTile icon={p.icon} label={p.label} tone={p.tone} />
                <p className="text-af-text-secondary font-body normal-case text-sm mt-3">{p.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-af-orange text-white">
        <div className="af-container text-center">
          <h2 className="text-white mb-4">Like What You See?</h2>
          <p className="text-white/90 font-body normal-case text-lg mb-8 max-w-xl mx-auto">
            Let&apos;s talk about your fence or lawn project and get you a free estimate.
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
