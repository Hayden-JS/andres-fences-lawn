'use client';

import { motion, Variants } from 'framer-motion';
import { Phone, Mail, Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { FenceSlatPattern } from '@/components/FenceSlats';
import { business } from '@/lib/business';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-af-border bg-af-cream focus:ring-2 focus:ring-af-orange focus:bg-white outline-none transition-all font-body normal-case';

export default function ContactContent() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20 bg-af-forest text-white overflow-hidden">
        <FenceSlatPattern className="absolute inset-0 w-full h-full text-white/10 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-af-forest-dark via-af-forest/95 to-af-forest/80" />
        <div className="af-container relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <span className="af-eyebrow">Get in Touch</span>
            <h1 className="text-white mb-6">Get Your Free Estimate</h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl font-body normal-case">
              Tell us about your fence or lawn project and we&apos;ll get back to you with honest, straightforward pricing — usually within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="af-section bg-af-cream">
        <div className="af-container grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-af-border"
          >
            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-af-charcoal mb-2">Name*</label>
                  <input type="text" name="name" className={inputClass} required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-af-charcoal mb-2">Phone*</label>
                  <input type="tel" name="phone" className={inputClass} required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-af-charcoal mb-2">Email*</label>
                <input type="email" name="email" className={inputClass} required />
              </div>
              <div>
                <label className="block text-sm font-semibold text-af-charcoal mb-2">Property Address</label>
                <input type="text" name="address" className={inputClass} placeholder="Street, City" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-af-charcoal mb-2">Service Needed</label>
                <select name="service" className={inputClass} defaultValue="Fence Installation">
                  <option>Fence Installation</option>
                  <option>Fence Repair</option>
                  <option>Gate Installation or Repair</option>
                  <option>Lawn Maintenance</option>
                  <option>Yard Cleanup</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-af-charcoal mb-2">Message*</label>
                <textarea name="message" rows={5} className={inputClass} required></textarea>
              </div>
              <button type="submit" className="af-btn-primary w-full text-lg py-4">
                Send Message <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-15%' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="mb-6">Contact Info</h3>
              <div className="space-y-6">
                <a href={business.phoneHref} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest group-hover:bg-af-orange group-hover:text-white transition-colors shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-af-text-secondary">Call or Text</p>
                    <p className="text-lg font-bold text-af-charcoal font-body normal-case">{business.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest group-hover:bg-af-orange group-hover:text-white transition-colors shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-af-text-secondary">Email</p>
                    <p className="text-lg font-bold text-af-charcoal font-body normal-case">{business.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-af-forest/10 flex items-center justify-center text-af-forest shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-af-text-secondary">Based In</p>
                    <p className="text-lg font-bold text-af-charcoal font-body normal-case">
                      {business.addressLocality}, {business.addressRegion} — serving {business.areaServed}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-af-orange" /> Business Hours
              </h3>
              <div className="bg-white rounded-xl border border-af-border p-6 space-y-2 font-body normal-case">
                {business.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-af-charcoal">
                    <span className="font-medium">{h.days}</span>
                    <span className="text-af-text-secondary">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={business.social.google}
              target="_blank"
              rel="noopener noreferrer"
              className="af-btn-secondary w-full"
            >
              <Star className="w-5 h-5" /> Leave Us a Google Review
            </a>
          </motion.div>
        </div>
      </section>

      {/* Map */}
      <section className="h-[400px] w-full grayscale-[20%]">
        <iframe
          title="Andres Fences & Lawn Services service area map"
          src="https://www.google.com/maps?q=Dale,+TX+78616&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>

      {/* Service Areas */}
      <section className="af-section bg-af-cream-warm">
        <div className="af-container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-15%' }} variants={fadeUp}>
            <span className="af-eyebrow">Where We Work</span>
            <h2 className="mb-10">Service Areas</h2>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-15%' }}
            variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
            className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto"
          >
            {business.serviceAreas.map((city) => (
              <motion.span
                key={city}
                variants={fadeUp}
                className="bg-white border border-af-border rounded-full px-5 py-2 text-sm font-semibold text-af-forest"
              >
                {city}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
