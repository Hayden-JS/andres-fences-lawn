'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Phone,
  ArrowRight,
  Fence,
  Hammer,
  DoorOpen,
  Wrench,
  ShieldCheck,
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

const quickLinks = [
  { id: 'installation', label: 'Fence Installation' },
  { id: 'wood-cedar', label: 'Wood & Cedar Fencing' },
  { id: 'privacy-decorative', label: 'Privacy & Decorative' },
  { id: 'chain-ranch-commercial', label: 'Chain Link, Ranch & Commercial' },
  { id: 'repair', label: 'Fence Repair' },
  { id: 'replacement', label: 'Fence Replacement' },
  { id: 'gates', label: 'Gates' },
];

const faqs = [
  {
    q: 'How much does a fence cost?',
    a: 'Fence pricing depends on the material, fence height, total linear footage, gate count, and site conditions like slope or existing fence removal. Wood and cedar fences are typically the most cost-effective for residential privacy, while decorative and commercial fencing run higher due to materials and labor. We provide a free, no-obligation on-site estimate so you get an exact number for your property — not a generic ballpark.',
  },
  {
    q: 'How long does installation take?',
    a: "Most residential wood or cedar fence installations are completed in 1–3 days depending on the length of the fence line, terrain, and weather. Larger properties, commercial fencing, or projects requiring permit approval can take longer. We'll give you a realistic timeline before work begins and keep you updated throughout the project.",
  },
  {
    q: 'What type of wood lasts longest?',
    a: "Cedar is the most popular choice in Central Texas because it naturally resists rot, insects, and warping better than pine — and it holds up well in our heat and occasional heavy rain. Pressure-treated pine is a more budget-friendly option that, with proper sealing and maintenance, can also last many years. We'll walk you through the tradeoffs based on your budget and how long you want the fence to last.",
  },
  {
    q: 'Do permits apply?',
    a: "Permit requirements vary by city and county — Austin, Buda, Kyle, and surrounding municipalities each have their own rules around fence height, setbacks, and HOA restrictions. We're familiar with local requirements across the areas we serve and can help you understand what applies to your property before installation begins.",
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

export default function FenceServicesContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-af-forest text-white overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/95 to-af-forest/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={fadeUp} className="af-eyebrow">Fence Services</motion.span>
            <motion.h1 variants={fadeUp} className="text-white mb-6">
              Professional Fence Installation &amp; Repair in Austin, TX
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-white/80 max-w-2xl font-body normal-case">
              From new wood privacy fences to storm-damage repairs and custom gates, Andres Fences &amp; Lawn Services builds fencing that holds up to Central Texas weather — backed by honest pricing and clean, reliable work.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quick nav */}
      <section className="bg-af-cream-warm border-b border-af-border py-6 sticky top-[64px] md:top-[76px] z-30">
        <div className="af-container flex flex-wrap gap-3 overflow-x-auto">
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="whitespace-nowrap text-sm font-semibold uppercase tracking-wide bg-white border border-af-border px-4 py-2 rounded-full text-af-forest hover:bg-af-forest hover:text-white hover:border-af-forest transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Fence Installation */}
      <section id="installation" className="af-section bg-af-cream scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest shrink-0">
              <Fence className="w-7 h-7" />
            </div>
            <h2>Fence Installation</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              A new fence is one of the highest-impact improvements you can make to a property — adding privacy, security, curb appeal, and safety for kids and pets. Andres Fences &amp; Lawn Services installs fencing for homeowners throughout Austin and the surrounding communities, from single-gate backyard projects to full perimeter fencing on larger lots.
            </p>
            <p>
              Every installation starts with a free on-site estimate where we walk the property line, discuss height and material options, flag any obstacles like slopes, trees, or existing structures, and give you a clear, honest price before any work begins. We set posts deep and secure — a fence is only as strong as what&apos;s below the ground — and we clean the job site thoroughly when we&apos;re done.
            </p>
            <p>
              We install wood, cedar, privacy, and decorative fencing, along with chain link, ranch/farm fencing, and commercial applications. Whatever the material, our goal is the same: a fence that looks great on day one and still looks great five years from now.
            </p>
          </div>
        </div>
      </section>

      {/* Wood & Cedar */}
      <section id="wood-cedar" className="af-section bg-white scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-cedar/10 flex items-center justify-center text-af-cedar-dark shrink-0">
              <Hammer className="w-7 h-7" />
            </div>
            <h2>Wood &amp; Cedar Fencing</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              Wood fencing remains the most popular choice for Austin homeowners because it strikes the right balance of cost, privacy, and curb appeal. We work with pressure-treated pine for budget-conscious projects and cedar for homeowners who want a naturally rot- and insect-resistant fence with a warmer, richer grain.
            </p>
            <p>
              Cedar in particular holds up well to Central Texas heat and humidity swings without warping as easily as softer woods, and it takes stain beautifully if you want to customize the color rather than let it weather naturally. We can install board-on-board, spaced picket, shadowbox, or solid privacy styles depending on how much airflow and visibility you want between panels.
            </p>
            <p>
              Post spacing, rail count, and hardware all affect how long a wood fence lasts — we don&apos;t cut corners on any of it, which is part of why our customers call us back for the next project.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy & Decorative */}
      <section id="privacy-decorative" className="af-section bg-af-cream scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2>Privacy &amp; Decorative Fencing</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              A privacy fence is about more than blocking sightlines — it&apos;s about creating a backyard you actually want to spend time in. We build solid board-on-board privacy fences typically 6 to 8 feet tall, with options for lattice tops, post caps, and staggered board patterns that add style without sacrificing coverage.
            </p>
            <p>
              For homeowners who want a fence that&apos;s more design feature than barrier, we also install decorative and horizontal-slat fencing — a modern look that&apos;s become increasingly popular in Austin&apos;s newer neighborhoods. These styles use the same structurally sound framing as our privacy fences, just with a different board orientation and finish.
            </p>
          </div>
        </div>
      </section>

      {/* Chain link, ranch, commercial */}
      <section id="chain-ranch-commercial" className="af-section bg-white scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-cedar/10 flex items-center justify-center text-af-cedar-dark shrink-0">
              <Wrench className="w-7 h-7" />
            </div>
            <h2>Chain Link, Ranch &amp; Commercial Fencing</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              Not every property needs full privacy — chain link remains a durable, affordable option for securing yards, dog runs, and side/rear property lines where visibility isn&apos;t a concern. It&apos;s also common for temporary or utility-focused fencing needs.
            </p>
            <p>
              Outside city lots, we install ranch and farm-style fencing for acreage properties around Dale, Lockhart, and Bastrop, built to contain livestock and mark boundary lines across long, uneven terrain. For business owners, we handle commercial fencing projects that need to meet both security requirements and a professional appearance — from retail lots to storage yards.
            </p>
          </div>
        </div>
      </section>

      {/* Fence Repair */}
      <section id="repair" className="af-section bg-af-cream scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-orange/10 flex items-center justify-center text-af-orange shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h2>Fence Repair &amp; Post Repair</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              Central Texas storms are hard on fences — high winds knock down panels, heavy rain rots posts at the base, and everyday wear loosens hardware over time. Rather than a full replacement, most fence damage can be repaired section by section: broken posts reset in fresh concrete, damaged panels swapped out, and gates rehung so they latch properly again.
            </p>
            <p>
              We inspect the full fence line before quoting repair work, because a leaning section is sometimes a symptom of a failing post further down the line. Catching that early saves you from paying for the same repair twice. Whether it&apos;s storm damage, a single broken board, or a gate that&apos;s stopped closing right, we can usually turn repairs around quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Replacement */}
      <section id="replacement" className="af-section bg-white scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest shrink-0">
              <Hammer className="w-7 h-7" />
            </div>
            <h2>Fence Replacement</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              When a fence has passed the point where repair makes sense — widespread rot, storm-destroyed sections, or a design that no longer fits your property — full replacement is often the more cost-effective long-term choice. We handle removal and haul-away of the old fence along with the new installation, so it&apos;s a single project instead of a hassle you have to coordinate yourself.
            </p>
            <p>
              Replacement is also a good opportunity to upgrade material or style — swapping an aging chain link fence for wood privacy, or moving from pine to cedar for better longevity.
            </p>
          </div>
        </div>
      </section>

      {/* Gates */}
      <section id="gates" className="af-section bg-af-cream scroll-mt-32">
        <div className="af-container max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-lg bg-af-cedar/10 flex items-center justify-center text-af-cedar-dark shrink-0">
              <DoorOpen className="w-7 h-7" />
            </div>
            <h2>Gate Installation &amp; Repair</h2>
          </div>
          <div className="font-body normal-case text-af-text-secondary text-lg space-y-4 leading-relaxed">
            <p>
              A gate takes more daily wear than any other part of a fence, which is why they&apos;re usually the first thing to sag or stop latching. We install single-walk and double drive gates matched to your fence style, framed and braced so they stay square over time instead of pulling on their hinges.
            </p>
            <p>
              For existing gates, we handle hinge and latch hardware repair, frame straightening, and post resets. If you&apos;re looking ahead to convenience upgrades like a gate automation system for a driveway entrance, we can also scope that out as part of a larger project.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="af-section bg-white">
        <div className="af-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
              <span className="af-eyebrow">See the Work</span>
              <h2>Fence Project Gallery</h2>
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
              { icon: Fence, label: 'Cedar Privacy Fence', tone: 'forest' as const },
              { icon: Fence, label: 'Horizontal Slat Fence', tone: 'cedar' as const },
              { icon: DoorOpen, label: 'Double Drive Gate', tone: 'orange' as const },
              { icon: Wrench, label: 'Post & Panel Repair', tone: 'forest' as const },
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
            Fence FAQs
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
          <h2 className="text-white mb-4">Schedule Your Free Estimate</h2>
          <p className="text-white/90 font-body normal-case text-lg mb-8 max-w-xl mx-auto">
            Tell us about your fence project and we&apos;ll get back to you with honest, straightforward pricing.
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
