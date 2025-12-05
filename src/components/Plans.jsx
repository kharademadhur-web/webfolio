import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    id: 1,
    name: 'Logo & Branding',
    description: 'For businesses that need a strong brand identity that reflects their vision and justifies premium pricing.',
    price: '$399',
    features: [
      'Logo design (3 concepts)',
      'Brand colors & fonts',
      '2 revision rounds',
      'Brand style guide',
      'Marketing collateral templates',
      'Source files',
    ],
  },
  {
    id: 2,
    name: 'High-Converting Landing Page',
    description: 'For businesses launching products, testing offers or validating ideas fast without waiting weeks.',
    price: '$1,199',
    features: [
      'Strategy & discovery session',
      'Conversion copywriting',
      'Mobile-optimized design',
      'Unlimited revisions',
      'Analytics setup',
      '48-hour response time',
    ],
  },
  {
    id: 3,
    name: 'Websites & E-Commerce',
    description: 'For businesses that need a website or online store that actually converts browsers into buyers.',
    price: '$2,999',
    features: [
      'Strategy & discovery session',
      'Up to 5-10 pages',
      'Conversion copywriting',
      'Development (React, Next.js, Shopify)',
      'Mobile-optimized & fast loading',
      '48-hour response time',
    ],
  },
];

function PricingCard({ plan, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-surface-light border border-border-subtle rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
    >
      <div className="bg-surface-lighter p-8 border-b border-border-subtle">
        <h3 className="text-2xl md:text-3xl text-white font-bold mb-3">{plan.name}</h3>
        <p className="text-sm md:text-base text-text-muted leading-relaxed">
          {plan.description}
        </p>
      </div>

      <div className="p-8 space-y-8">
        <div>
          <p className="text-sm text-text-muted mb-2">Starts at :</p>
          <p className="text-5xl font-bold text-white">{plan.price}</p>
        </div>

        <ul className="space-y-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-cta-bg flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-white">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          className="w-full bg-cta-bg text-black py-4 rounded-full font-bold text-lg hover:bg-cta-hover transition-all duration-300"
          onClick={() => document.getElementById('calendar')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}

export default function Plans() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-16"
        >
          Plans
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
